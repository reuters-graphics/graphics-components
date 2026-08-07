/**
 * Layer loaders for every ClimateGlobe dataset.
 *
 * `ClimateLayerManager` handles the three datasets that publish a
 * Celsius/Fahrenheit source-layer pair in one file (anomaly, WBGT, UTCI) and
 * keeps exactly one unit's layer visible. The remaining monitoring-map
 * datasets (weighted anomaly, streaks) have no unit split, so they're loaded
 * by plain functions below.
 *
 * None of this wires up click queries — ClimateGlobe only loads and renders.
 */
import type maplibregl from 'maplibre-gl';
import {
  buildContourPMTilesUrl,
  buildWbgtContourPMTilesUrl,
  buildUtciContourPMTilesUrl,
  buildAnomalyPMTilesUrl,
  buildFieldDirectionPMTilesUrl,
  DEFAULT_ANOMALY_SOURCE,
  DEFAULT_UNIT,
  type ClimateDataSource,
  type TemperatureUnit,
} from './constants';
import {
  CLIMATE_LAYER_PAINT_CELSIUS,
  CLIMATE_LAYER_PAINT_FAHRENHEIT,
  WBGT_LAYER_PAINT_CELSIUS,
  WBGT_LAYER_PAINT_FAHRENHEIT,
  UTCI_LAYER_PAINT_CELSIUS,
  UTCI_LAYER_PAINT_FAHRENHEIT,
  ANOMALY_SCORE_PAINT,
  STREAK_PAINT,
} from './paint';

/** Vector source ID reused by every dataset — only one is ever loaded at a time. */
const SOURCE_ID = 'climate-data';

/** Config for a dataset that publishes matching Celsius/Fahrenheit source-layers in one file. */
export interface UnitPairedDatasetConfig {
  buildUrl: (date?: string, source?: ClimateDataSource) => string;
  sourceLayerCelsius: string;
  sourceLayerFahrenheit: string;
  paintCelsius: maplibregl.FillLayerSpecification['paint'];
  paintFahrenheit: maplibregl.FillLayerSpecification['paint'];
}

/** The unit-paired dataset family, keyed by the value the `dataset` prop accepts. */
export const UNIT_PAIRED_DATASETS: Record<
  'anomaly' | 'wbgt' | 'utci',
  UnitPairedDatasetConfig
> = {
  // anomaly has no era5 variant published — always hres, `source` is ignored.
  anomaly: {
    buildUrl: (date) => buildContourPMTilesUrl(date),
    sourceLayerCelsius: 't2m_max_delta',
    sourceLayerFahrenheit: 't2m_max_delta_fahrenheit',
    paintCelsius: CLIMATE_LAYER_PAINT_CELSIUS,
    paintFahrenheit: CLIMATE_LAYER_PAINT_FAHRENHEIT,
  },
  wbgt: {
    buildUrl: (date, source) => buildWbgtContourPMTilesUrl(date, source),
    sourceLayerCelsius: 'wbgt_max',
    sourceLayerFahrenheit: 'wbgt_max_fahrenheit',
    paintCelsius: WBGT_LAYER_PAINT_CELSIUS,
    paintFahrenheit: WBGT_LAYER_PAINT_FAHRENHEIT,
  },
  utci: {
    buildUrl: (date, source) => buildUtciContourPMTilesUrl(date, source),
    sourceLayerCelsius: 'utci_max',
    sourceLayerFahrenheit: 'utci_max_fahrenheit',
    paintCelsius: UTCI_LAYER_PAINT_CELSIUS,
    paintFahrenheit: UTCI_LAYER_PAINT_FAHRENHEIT,
  },
};

const LAYER_IDS: Record<TemperatureUnit, string> = {
  celsius: 'climate-data-layer-celsius',
  fahrenheit: 'climate-data-layer-fahrenheit',
};

/** Layer ID used by the unitless datasets (weighted anomaly, streaks). */
export const UNITLESS_LAYER_ID = 'climate-data-layer';

const UNITS: TemperatureUnit[] = ['celsius', 'fahrenheit'];

/**
 * Find the first symbol (label) layer in the map style.
 * Used as a `beforeId` when adding layers so that data overlays render
 * beneath place names and boundaries.
 * @see https://docs.mapbox.com/mapbox-gl-js/example/geojson-layer-in-stack/
 */
export function findFirstSymbolLayerId(
  map: maplibregl.Map
): string | undefined {
  const layers = map.getStyle()?.layers;
  if (!layers) return undefined;

  for (const layer of layers) {
    if (layer.type === 'symbol') {
      return layer.id;
    }
  }
  return undefined;
}

/**
 * Manages the pair of fill layers for a unit-paired dataset (anomaly, WBGT,
 * or UTCI). Keeps exactly one unit's layer visible and restores its opacity
 * once the map has finished loading.
 */
export class ClimateLayerManager {
  private currentUnit: TemperatureUnit = DEFAULT_UNIT;
  private config?: UnitPairedDatasetConfig;

  /**
   * Add a unit-paired dataset's source and both fill layers. Only the layer
   * matching the current unit is set to visible.
   *
   * @param map - MapLibre map instance
   * @param date - Date string in YYYY-MM-DD format (defaults to today)
   * @param config - Dataset config (from `UNIT_PAIRED_DATASETS`)
   * @param beforeId - Optional layer ID to insert below (keeps labels on top)
   * @param source - 'era5' (default) or 'hres'; ignored by the `anomaly` config
   */
  add(
    map: maplibregl.Map,
    date: string | undefined,
    config: UnitPairedDatasetConfig,
    beforeId?: string,
    source?: ClimateDataSource
  ): void {
    this.config = config;
    map.addSource(SOURCE_ID, {
      type: 'vector',
      url: `pmtiles://${config.buildUrl(date, source)}`,
    });

    for (const unit of UNITS) {
      const layerId = LAYER_IDS[unit];
      if (map.getLayer(layerId)) continue;
      const sourceLayer =
        unit === 'celsius' ?
          config.sourceLayerCelsius
        : config.sourceLayerFahrenheit;
      const paint =
        unit === 'celsius' ? config.paintCelsius : config.paintFahrenheit;
      map.addLayer(
        {
          id: layerId,
          type: 'fill',
          source: SOURCE_ID,
          'source-layer': sourceLayer,
          paint: {
            ...paint,
            'fill-opacity': 0,
            'fill-opacity-transition': { duration: 800, delay: 0 },
          } as maplibregl.FillLayerSpecification['paint'],
          layout: {
            visibility: this.currentUnit === unit ? 'visible' : 'none',
          },
        },
        beforeId
      );
    }
  }

  /**
   * Switch the active temperature unit and update layer visibility.
   * Hides the previous unit's layer and shows the new one.
   */
  setUnit(map: maplibregl.Map, unit: TemperatureUnit): void {
    this.currentUnit = unit;
    this.updateVisibility(map);
  }

  /** Get the currently selected temperature unit. */
  getUnit(): TemperatureUnit {
    return this.currentUnit;
  }

  /** ID of the fill layer currently visible for the active unit. */
  getActiveLayerId(): string {
    return LAYER_IDS[this.currentUnit];
  }

  /**
   * Show every base-style layer (except background and the inactive unit
   * layer, if any), and restore the active unit layer's full opacity. Safe
   * to call regardless of which dataset was loaded — datasets without a
   * unit pair (weighted-anomaly, streaks) just skip the opacity-restore step.
   */
  revealAll(map: maplibregl.Map): void {
    const inactiveUnit =
      this.currentUnit === 'celsius' ? 'fahrenheit' : 'celsius';
    const inactiveLayerId = LAYER_IDS[inactiveUnit];

    const layers = map.getStyle()?.layers;
    if (!layers) return;
    for (const layer of layers) {
      if (layer.id === 'background' || layer.id === inactiveLayerId) continue;
      map.setLayoutProperty(layer.id, 'visibility', 'visible');
    }

    if (!this.config) return;
    for (const unit of UNITS) {
      const layerId = LAYER_IDS[unit];
      if (map.getLayer(layerId)) {
        const paint =
          unit === 'celsius' ?
            this.config.paintCelsius
          : this.config.paintFahrenheit;
        map.setPaintProperty(layerId, 'fill-opacity', paint?.['fill-opacity']);
      }
    }
  }

  /** Show only the layer matching the current unit; hide the other. */
  private updateVisibility(map: maplibregl.Map): void {
    for (const unit of UNITS) {
      const layerId = LAYER_IDS[unit];
      if (map.getLayer(layerId)) {
        map.setLayoutProperty(
          layerId,
          'visibility',
          this.currentUnit === unit ? 'visible' : 'none'
        );
      }
    }
  }
}

// ── Monitoring-map datasets (no unit split, no click functionality) ───────
// ponytail: field/direction are hardcoded to the only combination the globe's
// single `dataset` prop needs today (t2m_max / positive). Add field/direction
// params if a caller ever needs to pick a different variable.

/** Load the weighted-anomaly percentile-score layer (unitless, single fill). */
export function addWeightedAnomalyLayer(
  map: maplibregl.Map,
  date?: string,
  beforeId?: string,
  source: ClimateDataSource = DEFAULT_ANOMALY_SOURCE
): void {
  const variable = 't2m_max_p90_score';
  map.addSource(SOURCE_ID, {
    type: 'vector',
    url: `pmtiles://${buildAnomalyPMTilesUrl('weighted-anomalies-map', variable, date, source)}`,
  });
  map.addLayer(
    {
      id: UNITLESS_LAYER_ID,
      type: 'fill',
      source: SOURCE_ID,
      'source-layer': variable,
      paint: ANOMALY_SCORE_PAINT,
    },
    beforeId
  );
}

/** Load the heat/cold streak-length layer. */
export function addStreaksLayer(
  map: maplibregl.Map,
  date?: string,
  beforeId?: string,
  source: ClimateDataSource = DEFAULT_ANOMALY_SOURCE
): void {
  const field = 't2m_max';
  map.addSource(SOURCE_ID, {
    type: 'vector',
    url: `pmtiles://${buildFieldDirectionPMTilesUrl('anomaly-streaks-map', field, 'positive', date, source)}`,
  });
  map.addLayer(
    {
      id: UNITLESS_LAYER_ID,
      type: 'fill',
      source: SOURCE_ID,
      'source-layer': field,
      paint: STREAK_PAINT,
    },
    beforeId
  );
}
