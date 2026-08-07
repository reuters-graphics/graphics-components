<!--
  @component `DataCardRow` — additional detail about the globe's `CENTER`
  point: today's reading plus a `BaselineCard` chart. Sits half-overlapping
  the bottom edge of the map (positioned by `ClimateGlobe`). Private to
  `ClimateGlobe`, not exported from the package root.
-->
<script lang="ts">
  import {
    type TemperatureUnit,
    formatDisplayTemperature,
    temperatureUnitSuffix,
  } from './constants';
  import DataCardBase from './DataCardBase.svelte';
  import BaselineCard, { type BaselineDataPoint } from './BaselineCard.svelte';

  interface Props {
    /** Label for the current dataset, e.g. the active `Legend`'s title. */
    todayLabel: string;
    /** Formatted value for the current dataset at `CENTER` (already unit-formatted). */
    todayValue: string;
    /** Today's-high forecast temperature, in Celsius. Omit to hide the forecast row. */
    todayForecast?: number;
    /** Monthly baseline-vs-observed series, or omitted to hide the baseline chart. */
    baselineData?: BaselineDataPoint[];
    unit: TemperatureUnit;
  }

  let { todayLabel, todayValue, todayForecast, baselineData, unit }: Props =
    $props();

  const forecastDisplay = $derived(
    todayForecast !== undefined ?
      `${formatDisplayTemperature(todayForecast, unit)}${temperatureUnitSuffix(unit)}`
    : undefined
  );
</script>

<div class="data-card-row">
  <DataCardBase>
    <p class="topline text-xxs">Today</p>
    <div class="card-flex">
      <div>
        <p class="big-number">{todayValue}</p>
        <p class="label">{todayLabel}</p>
      </div>
      {#if forecastDisplay}
        <div>
          <p class="forecast-value">{forecastDisplay}</p>
          <p class="label">Forecast</p>
        </div>
      {/if}
    </div>
  </DataCardBase>
  {#if baselineData?.length}
    <BaselineCard data={baselineData} {unit} />
  {/if}
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .data-card-row {
    display: flex;
    gap: 0.625rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }

  .card-flex {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;

    > div {
      width: 50%;
    }
  }

  .topline {
    @include mixins.font-bold;
    margin: 0;
    color: var(--theme-colour-text-primary, #404040);
    font-family: var(--theme-font-family-sans-serif);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .big-number {
    @include mixins.font-bold;
    line-height: 1.1;
    margin: 0;
    color: var(--theme-colour-text-primary, #404040);
    font-family: var(--theme-font-family-sans-serif);
  }

  .forecast-value {
    @include mixins.font-bold;
    @include mixins.text-base;
    line-height: 1.1;
    margin: 0;
    color: var(--theme-colour-text-primary, #404040);
    font-family: var(--theme-font-family-sans-serif);
  }

  .label {
    @include mixins.text-xxs;
    margin: 0;
    color: var(--theme-colour-text-secondary, #666);
    font-family: var(--theme-font-family-sans-serif);
  }
</style>
