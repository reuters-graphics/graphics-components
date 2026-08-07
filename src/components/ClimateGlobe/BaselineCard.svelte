<!--
  @component `BaselineCard` — a 12-month line chart comparing this year's
  observed monthly max temperature against the historic baseline. Private to
  `ClimateGlobe`, rendered inside `DataCardRow`.
-->
<script lang="ts" module>
  export interface BaselineDataPoint {
    /** Month index, 0 (January) through 11 (December). */
    month: number;
    /** Historic-norm max temperature for this month, in Celsius. */
    baseline: number;
    /** This year's observed max temperature for this month, in Celsius, or `null` if not yet observed. */
    observed: number | null;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { TemperatureUnit } from './constants';
  import {
    celsiusToFahrenheit,
    deltaToFahrenheit,
    deltaSign,
    deltaLabel,
    temperatureUnitSuffix,
  } from './constants';
  import DataCardBase from './DataCardBase.svelte';

  interface Props {
    data: BaselineDataPoint[];
    unit: TemperatureUnit;
  }

  let { data, unit }: Props = $props();

  let hoveredIndex = $state<number | null>(null);
  let canHover = $state(false);

  onMount(() => {
    canHover = window.matchMedia('(hover: hover)').matches;
  });

  const suffix = $derived(temperatureUnitSuffix(unit));

  function convert(celsius: number): number {
    return unit === 'fahrenheit' ? celsiusToFahrenheit(celsius) : celsius;
  }

  function convertDelta(celsiusDelta: number): number {
    return unit === 'fahrenheit' ?
        deltaToFahrenheit(celsiusDelta)
      : celsiusDelta;
  }

  const MONTH_LETTERS = [
    'J',
    'F',
    'M',
    'A',
    'M',
    'J',
    'J',
    'A',
    'S',
    'O',
    'N',
    'D',
  ];
  const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const chartWidth = 180;
  const chartHeight = 86;
  const padTop = 8;
  const padBottom = 24;
  const padLeft = 16;
  const padRight = 6;

  function x(month: number): number {
    return padLeft + (month / 11) * (chartWidth - padRight - padLeft);
  }

  const yDomain = $derived.by(() => {
    const temps = data.flatMap((d) =>
      d.observed !== null ?
        [convert(d.baseline), convert(d.observed)]
      : [convert(d.baseline)]
    );
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    return [Math.floor(min / 5) * 5, Math.ceil(max / 5) * 5];
  });

  function y(value: number): number {
    const [min, max] = yDomain;
    const span = max - min || 1;
    return (
      chartHeight -
      padBottom -
      ((value - min) / span) * (chartHeight - padBottom - padTop)
    );
  }

  const yTicks = $derived.by(() => {
    const [min, max] = yDomain;
    const step = (max - min) / 3;
    return [min, min + step, min + step * 2, max].map((v) => Math.round(v));
  });

  const baselinePath = $derived(
    data
      .map((d, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(convert(d.baseline))}`)
      .join(' ')
  );

  const observedIndices = $derived(
    data.map((d, i) => (d.observed !== null ? i : -1)).filter((i) => i >= 0)
  );

  const observedPath = $derived(
    observedIndices
      .map(
        (i, j) =>
          `${j === 0 ? 'M' : 'L'}${x(i)},${y(convert(data[i].observed as number))}`
      )
      .join(' ')
  );

  const colWidth = (chartWidth - padLeft - padRight) / 12;

  const tooltip = $derived.by(() => {
    if (hoveredIndex === null) return null;
    const d = data[hoveredIndex];
    if (!d) return null;
    const observedVal =
      d.observed !== null ? Math.round(convert(d.observed)) : null;
    const delta =
      d.observed !== null ? convertDelta(d.observed - d.baseline) : null;
    return {
      month: MONTH_NAMES[hoveredIndex],
      baseline: Math.round(convert(d.baseline)),
      observed: observedVal,
      delta,
      x: x(hoveredIndex),
    };
  });
</script>

<DataCardBase>
  <p class="topline text-xxs">How this year compares</p>
  {#if data.length > 0}
    <div class="legend">
      <span class="legend-item">
        <span class="legend-line legend-line--observed"></span>
        This year
      </span>
      <span class="legend-item">
        <span class="legend-line legend-line--baseline"></span>
        Historic norm
      </span>
    </div>
    <div class="chart-wrap">
      <svg
        viewBox="0 0 {chartWidth} {chartHeight}"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {#each yTicks as tick}
          <line
            x1={padLeft}
            y1={y(tick)}
            x2={chartWidth - padRight}
            y2={y(tick)}
            stroke="#e8e8e8"
            stroke-width="0.5"
          />
          <text
            x={padLeft - 4}
            y={y(tick)}
            text-anchor="end"
            dominant-baseline="middle"
            class="axis-label"
          >
            {tick}
          </text>
        {/each}

        {#each MONTH_LETTERS as letter, i}
          <text
            x={x(i)}
            y={chartHeight - padBottom + 11}
            text-anchor="middle"
            class="axis-label"
          >
            {letter}
          </text>
        {/each}

        <path
          d={baselinePath}
          fill="none"
          stroke="var(--theme-colour-text-primary, #404040)"
          stroke-width="1.5"
        />

        {#if observedIndices.length >= 2}
          <path
            d={observedPath}
            fill="none"
            stroke="var(--theme-colour-accent, #d64000)"
            stroke-width="1.5"
          />
        {/if}

        {#each observedIndices as i}
          <circle
            cx={x(i)}
            cy={y(convert(data[i].observed as number))}
            r="3"
            fill="var(--theme-colour-accent, #d64000)"
          />
        {/each}

        {#if canHover}
          {#each data as _, i}
            <rect
              x={x(i) - colWidth / 2}
              y={padTop}
              width={colWidth}
              height={chartHeight - padTop - padBottom}
              fill="transparent"
              aria-hidden="true"
              onmouseenter={() => (hoveredIndex = i)}
              onmouseleave={() => (hoveredIndex = null)}
            />
          {/each}
        {/if}

        {#if hoveredIndex !== null}
          <line
            x1={x(hoveredIndex)}
            y1={padTop}
            x2={x(hoveredIndex)}
            y2={chartHeight - padBottom}
            stroke="var(--theme-colour-text-secondary, #666)"
            stroke-width="0.5"
            stroke-dasharray="2,2"
          />
        {/if}
      </svg>

      {#if tooltip}
        {@const pct = (tooltip.x / chartWidth) * 100}
        <div
          class="tooltip"
          style:left="{pct}%"
          style:transform="translateX({pct < 25 ? '0'
          : pct > 75 ? '-100'
          : '-50'}%)"
        >
          <div class="tooltip-month">{tooltip.month} avg. temp.</div>
          {#if tooltip.observed !== null && tooltip.delta !== null}
            <div class="tooltip-row">
              <strong>{tooltip.observed}{suffix}</strong> this year
            </div>
            <div class="tooltip-row">
              <strong
                >{deltaSign(tooltip.delta)}{Math.abs(tooltip.delta).toFixed(
                  1
                )}°</strong
              >
              {deltaLabel(tooltip.delta).toLowerCase()} the historic norm
            </div>
          {:else}
            <div class="tooltip-row">
              Historic norm <strong>{tooltip.baseline}{suffix}</strong>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  {:else}
    <p class="no-data">No baseline data</p>
  {/if}
</DataCardBase>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .topline {
    @include mixins.font-bold;
    margin: 0;
    color: var(--theme-colour-text-primary, #404040);
    font-family: var(--theme-font-family-sans-serif);
    text-transform: uppercase;
  }

  .no-data {
    @include mixins.text-xs;
    margin: 0;
    color: var(--theme-colour-text-secondary, #666);
  }

  .legend {
    display: flex;
    gap: 10px;
    margin: 0;
  }

  .legend-item {
    @include mixins.text-xxs;
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--theme-colour-text-secondary, #666);
  }

  .legend-line {
    display: inline-block;
    width: 12px;
    height: 2px;
  }

  .legend-line--observed {
    background: var(--theme-colour-accent, #d64000);
  }

  .legend-line--baseline {
    background: var(--theme-colour-text-primary, #404040);
  }

  .chart-wrap {
    position: relative;
  }

  svg {
    display: block;
  }

  .axis-label {
    font-size: 10px;
    fill: var(--theme-colour-text-secondary, #666);
  }

  .tooltip {
    position: absolute;
    top: 100%;
    margin-top: 4px;
    background: var(--theme-colour-background, #fff);
    border: 1px solid var(--theme-colour-text-primary, #404040);
    padding: 0.25rem 0.5rem;
    font-size: 11px;
    white-space: nowrap;
    box-shadow: 0 0.125rem 0.5rem
      var(--theme-colour-brand-shadow, rgb(64 64 64 / 8%));
    line-height: 1.4;
    z-index: 10;
    pointer-events: none;
  }

  .tooltip-month {
    font-weight: 700;
    color: var(--theme-colour-text-primary, #404040);
  }

  .tooltip-row {
    color: var(--theme-colour-text-secondary, #666);
  }
</style>
