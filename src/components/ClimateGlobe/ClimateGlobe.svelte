<script lang="ts">
  import TileMap from '../TileMap/TileMap.svelte';
  import TileMapCallout from '../TileMapCallout/TileMapCallout.svelte';
  import Block from '../Block/Block.svelte';
  import Legend from '../Legend/Legend.svelte';
  import InfoTooltip from './InfoTooltip.svelte';
  import TemperatureToggle from '../Temperature/TemperatureToggle.svelte';
  import { getUnitContext } from '../Temperature/state.svelte';
  import DataCardRow from './DataCardRow.svelte';
  import type { BaselineDataPoint } from './BaselineCard.svelte';
  import type { Map as MaplibreMap, StyleSpecification } from 'maplibre-gl';
  import {
    ClimateLayerManager,
    UNIT_PAIRED_DATASETS,
    UNITLESS_LAYER_ID,
    findFirstSymbolLayerId,
    addWeightedAnomalyLayer,
    addStreaksLayer,
  } from './layers';
  import {
    type ClimateDataSource,
    type TemperatureUnit,
    DEFAULT_ANOMALY_SOURCE,
    deltaLabel,
  } from './constants';
  import {
    getLegendConfig,
    formatCalloutValue,
    convertCalloutValue,
  } from './legend';
  import styleJson from './style.json';

  /** ponytail: only center the globe supports today — add a `center`/`locationName` prop pair if a caller ever needs another point. */
  const CENTER: [number, number] = [5.501713334016334, 18.390282028394523];
  const CENTER_LOCATION_NAME = 'New York City';

  // style.json's `version` imports as `number`, not the literal `8`
  // StyleSpecification requires — same cast used in style.ts.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const style = styleJson as any as StyleSpecification;

  /** CDN dataset family to load and render. */
  export type ClimateDataset =
    /** Daily temperature-anomaly delta vs. the 1991-2020 baseline (°C/°F). */
    | 'anomaly'
    /** Wet Bulb Globe Temperature max, banded by outdoor heat-stress risk. */
    | 'wbgt'
    /** Universal Thermal Climate Index max, banded by thermal-stress risk. */
    | 'utci'
    /** Weighted anomaly score against the p10/p90 percentile climatology. */
    | 'weighted-anomaly'
    /** Length of ongoing multi-day extreme-anomaly streaks, per cell. */
    | 'anomaly-streaks';

  interface Props {
    /** Date string in YYYY-MM-DD format (defaults to today). */
    date?: string;
    /** Which dataset to load and render (defaults to daily temperature anomalies). */
    dataset?: ClimateDataset;
    /**
     * Data source for datasets that publish both ('era5' reanalysis, ~5-7 day
     * publish latency, or 'hres' same-day forecast; defaults to 'era5').
     * Ignored by `anomaly`, which is always sourced from hres.
     */
    source?: ClimateDataSource;
    /** Show a `<Legend>` describing the active dataset's color scale (defaults to hidden). */
    showLegend?: boolean;
    /** Show a `<TileMapCallout>` with the dataset value at `CENTER` (defaults to shown). */
    showCallout?: boolean;
    /** Show a `<DataCardRow>` with more detail about `CENTER`, half-overlapping the map's bottom edge (defaults to hidden). */
    showDataCardRow?: boolean;
    /** Today's-high forecast temperature at `CENTER`, in Celsius. Omit to hide the forecast row. */
    todayForecast?: number;
    /** Monthly baseline-vs-observed series for the `DataCardRow`'s chart. Omit to hide that chart. */
    baselineData?: BaselineDataPoint[];
    /** Optional aspect ratio for the map (defaults to 1:1). */
    aspectRatio?: number;
  }

  let {
    date,
    dataset = 'anomaly',
    source = DEFAULT_ANOMALY_SOURCE,
    showLegend = false,
    showCallout = true,
    showDataCardRow = false,
    todayForecast,
    baselineData,
    aspectRatio = 1,
  }: Props = $props();

  /** Manages the Celsius/Fahrenheit fill layers for unit-paired datasets. */
  const climateLayers = new ClimateLayerManager();
  /** Shared °C/°F preference (context, falling back to the library's default singleton). */
  const unitState = getUnitContext();

  /** Only anomaly/wbgt/utci publish a Celsius/Fahrenheit layer pair to toggle between. */
  const hasUnitToggle = $derived(
    dataset === 'anomaly' || dataset === 'wbgt' || dataset === 'utci'
  );
  const legendConfig = $derived(getLegendConfig(dataset, unitState.current));
  /** Anomaly is a delta from baseline, so its legend gets an explicit sign
   * (and "±0°" at the crossover); WBGT/UTCI are absolute scales. */
  const legendFormatter = $derived(
    dataset === 'anomaly' ?
      (d: number) => (d === 0 ? '±0°' : `${d > 0 ? '+' : ''}${d}°`)
    : (d: number) => `${d}°`
  );

  let map: MaplibreMap | undefined;
  /** Rendered contour value at `CENTER` on the active layer, or `null` before the first idle render. */
  let pointValue: number | null = $state(null);
  /** Unit `pointValue` was last queried in, so a toggle can convert the stale reading instead of waiting on the requery. */
  let pointValueUnit: TemperatureUnit | undefined;
  /** "Above average"/"Below average"/"No anomaly", from the sign of `pointValue`. */
  const todayAnomalyLabel = $derived(
    pointValue === null ? '—'
    : pointValue === 0 ? 'No anomaly'
    : `${deltaLabel(pointValue)} average`
  );

  /** Read the active layer's rendered `floor` value at `CENTER` — the same value driving its fill color, so no separate data fetch is needed. */
  function queryPointValue(m: MaplibreMap) {
    const layerId =
      hasUnitToggle ? climateLayers.getActiveLayerId() : UNITLESS_LAYER_ID;
    const [feature] = m.queryRenderedFeatures(m.project(CENTER), {
      layers: [layerId],
    });
    const floor = feature?.properties?.floor;
    pointValue = typeof floor === 'number' ? floor : null;
    pointValueUnit = unitState.current;
  }

  function handleMapReady(m: MaplibreMap) {
    map = m;
    const beforeId = findFirstSymbolLayerId(m);

    switch (dataset) {
      case 'anomaly':
      case 'wbgt':
      case 'utci':
        climateLayers.add(
          m,
          date,
          UNIT_PAIRED_DATASETS[dataset],
          beforeId,
          source
        );
        climateLayers.setUnit(m, unitState.current);
        break;
      case 'weighted-anomaly':
        addWeightedAnomalyLayer(m, date, beforeId, source);
        break;
      case 'anomaly-streaks':
        addStreaksLayer(m, date, beforeId, source);
        break;
    }

    climateLayers.revealAll(m);
    m.once('idle', () => queryPointValue(m));
  }

  $effect(() => {
    // Read unconditionally (not inside the `if`) — `map` starts undefined and
    // isn't reactive, so a short-circuit here would skip reading
    // `unitState.current` on the first run and the effect would never track
    // it, leaving later toggles with no subscriber to react to.
    const unit = unitState.current;
    if (map && hasUnitToggle) {
      const m = map;
      // Convert the stale reading immediately so the displayed value tracks
      // the new unit right away, instead of showing the old unit's number
      // until the requery below lands.
      if (pointValue !== null && pointValueUnit && pointValueUnit !== unit) {
        pointValue = convertCalloutValue(
          dataset,
          pointValue,
          pointValueUnit,
          unit
        );
        pointValueUnit = unit;
      }
      climateLayers.setUnit(m, unit);
      // Toggling layer visibility doesn't repaint synchronously, so query
      // only once the newly-visible layer has actually rendered — same as
      // the initial load in `handleMapReady`.
      m.once('idle', () => queryPointValue(m));
    }
  });
</script>

<Block width="fluid" class="climate-globe">
  <div class="climate-globe-inner" style:--aspect-ratio={aspectRatio}>
    <div class="map-frame fmy-6">
      <TileMap
        id="my-map"
        center={CENTER}
        zoom={2}
        interactive={true}
        styleUrl={style}
        projection={{ type: 'globe' }}
        onMapReady={handleMapReady}
      >
        {#if showCallout}
          <TileMapCallout lngLat={CENTER}>
            <div class="callout-location">{CENTER_LOCATION_NAME}</div>
            <div class="callout-value">
              {pointValue !== null ?
                formatCalloutValue(dataset, pointValue, unitState.current)
              : 'Loading…'}
            </div>
          </TileMapCallout>
        {/if}
      </TileMap>
      {#if showDataCardRow && pointValue !== null}
        <div class="data-card-row-overlay">
          <DataCardRow
            todayLabel={todayAnomalyLabel}
            todayValue={formatCalloutValue(
              dataset,
              pointValue,
              unitState.current
            )}
            {todayForecast}
            {baselineData}
            unit={unitState.current}
          />
        </div>
      {/if}
    </div>
    {#if showLegend}
      <Block width="normal">
        <div class="legend-container">
          <Legend
            title={legendConfig.title}
            subtitle={legendConfig.subtitle}
            mode={legendConfig.mode}
            items={legendConfig.items}
            formatter={legendFormatter}
          />
          <div class="legend-info-button">
            <InfoTooltip
              text={legendConfig.info}
              label={`About ${legendConfig.title}`}
            />
          </div>
        </div>
      </Block>
    {/if}
    {#if hasUnitToggle}
      <div class="temperature-toggle-container">
        <TemperatureToggle state={unitState} />
      </div>
    {/if}
  </div>
</Block>

<style lang="scss">
  .temperature-toggle-container {
    display: flex;
    justify-content: center;
  }

  .climate-globe-inner {
    :global(.map-container) {
      height: auto !important;
      aspect-ratio: var(--aspect-ratio, 1);
    }
  }

  .map-frame {
    position: relative;
  }

  .data-card-row-overlay {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    z-index: 1;
    pointer-events: none;

    :global(.data-card) {
      pointer-events: auto;
    }
  }

  .callout-value {
    font-weight: 400;
  }

  .legend-container {
    position: relative;
  }

  .legend-info-button {
    position: absolute;
    top: 0.125rem;
    right: 0;
  }
</style>
