<script lang="ts">
  import { generateYTicks, generateXTicks } from '../utils/index.js';
  import {
    createYLabelFormatter,
    formatXAxisDate,
  } from '../utils/formatting.js';
  import type {
    ComputedScales,
    Datum,
    LineSeriesInput,
    YAxisConfig,
    YAxisLabelContext,
  } from '../types/index.js';

  interface Props {
    data: Datum[];
    series: LineSeriesInput[];
    scales: ComputedScales;
    xKey?: string;
    yKey?: string;
    width: number;
    height: number;
    margin?: { top?: number; right?: number; bottom?: number; left?: number };
    yAxisConfig?: YAxisConfig;
    yAxisFormat?: string;
    showGrid?: boolean;
    showYAxis?: boolean;
    showXAxis?: boolean;
    children?: any;
  }

  let {
    data,
    series,
    scales,
    xKey = 'date',
    width,
    height,
    margin = { top: 20, right: 20, bottom: 30, left: 50 },
    yAxisConfig,
    yAxisFormat,
    showGrid = true,
    showYAxis = true,
    showXAxis = true,
    children,
  }: Props = $props();

  const marginTop = margin.top ?? 20;
  const marginRight = margin.right ?? 20;
  const marginBottom = margin.bottom ?? 30;
  const marginLeft = margin.left ?? 50;

  const chartWidth = width - marginLeft - marginRight;
  const chartHeight = height - marginTop - marginBottom;

  // Generate tick values
  const yTicks = $derived(generateYTicks(scales.yDomain, 5));
  const xTicks = $derived(generateXTicks(scales.xDomain, 5));

  // Create formatter
  const formatYLabel = $derived(
    createYLabelFormatter(yAxisConfig, yAxisFormat)
  );

  // Path generator for individual series
  function generatePath(seriesKey: string): string {
    const points = data.map((d) => {
      const x = scales.xScale(d[xKey] as Date);
      const y = scales.yScale(d[seriesKey] as number);
      return `${x},${y}`;
    });

    return `M${points.join('L')}`;
  }

  // Get series color
  function getSeriesColor(index: number): string {
    const colors = [
      '#1f77b4',
      '#ff7f0e',
      '#2ca02c',
      '#d62728',
      '#9467bd',
      '#8c564b',
      '#e377c2',
      '#7f7f7f',
    ];
    return series[index]?.color || colors[index % colors.length];
  }
</script>

<svg {width} {height} class="line-chart">
  <!-- Background grid -->
  {#if showGrid}
    <g class="grid">
      <!-- Horizontal grid lines -->
      {#each yTicks as tick}
        {@const y = scales.yScale(tick)}
        <line
          x1={marginLeft}
          y1={y}
          x2={width - marginRight}
          y2={y}
          class="grid-line horizontal"
        />
      {/each}

      <!-- Vertical grid lines -->
      {#each xTicks as tick}
        {@const x = scales.xScale(tick)}
        <line
          x1={x}
          y1={marginTop}
          x2={x}
          y2={height - marginBottom}
          class="grid-line vertical"
        />
      {/each}
    </g>
  {/if}

  <!-- Chart group (clipping region) -->
  <g class="chart" style="transform: translate({marginLeft}px, {marginTop}px)">
    <!-- Lines for each series -->
    {#each series as s, seriesIndex}
      {@const color = getSeriesColor(seriesIndex)}
      <path
        d={generatePath(s.key)}
        class="line"
        style="stroke: {color}; stroke-width: {s.strokeWidth ||
          2}px; fill: none;"
      />

      <!-- End labels (if enabled) -->
      {#if s.showEndLabel && data.length > 0}
        {@const lastPoint = data[data.length - 1]}
        {@const x = scales.xScale(lastPoint[xKey] as Date) + 5}
        {@const y = scales.yScale(lastPoint[s.key] as number)}
        {@const endContext = {
          value: lastPoint[s.key] as number,
          isTopTick: false,
          isBottomTick: false,
          isEndValue: true,
          tickIndex: -1,
        } as YAxisLabelContext}
        <text
          {x}
          {y}
          class="end-label"
          style="fill: {color};"
          text-anchor="start"
        >
          {formatYLabel(lastPoint[s.key] as number, endContext)}
        </text>
      {/if}
    {/each}

    <!-- Child content (overlay) -->
    {#if children}
      <g class="overlay">
        <svelte:component this={children} />
      </g>
    {/if}
  </g>

  <!-- Y-Axis -->
  {#if showYAxis}
    <g class="y-axis">
      <!-- Axis line -->
      <line
        x1={marginLeft}
        y1={marginTop}
        x2={marginLeft}
        y2={height - marginBottom}
        class="axis-line"
      />

      <!-- Ticks and labels -->
      {#each yTicks as tick, tickIndex}
        {@const y = scales.yScale(tick)}
        {@const isTopTick = tickIndex === yTicks.length - 1}
        {@const isBottomTick = tickIndex === 0}
        {@const context = {
          value: tick,
          isTopTick,
          isBottomTick,
          isEndValue: false,
          tickIndex,
        } as YAxisLabelContext}
        {@const label = formatYLabel(tick, context)}

        <line x1={marginLeft - 5} y1={y} x2={marginLeft} y2={y} class="tick" />
        <text
          x={marginLeft - 10}
          {y}
          class="tick-label"
          text-anchor="end"
          dy="0.32em"
        >
          {label}
        </text>
      {/each}
    </g>
  {/if}

  <!-- X-Axis -->
  {#if showXAxis}
    <g class="x-axis">
      <!-- Axis line -->
      <line
        x1={marginLeft}
        y1={height - marginBottom}
        x2={width - marginRight}
        y2={height - marginBottom}
        class="axis-line"
      />

      <!-- Ticks and labels -->
      {#each xTicks as tick}
        {@const x = scales.xScale(tick)}
        <line
          x1={x}
          y1={height - marginBottom}
          x2={x}
          y2={height - marginBottom + 5}
          class="tick"
        />
        <text
          {x}
          y={height - marginBottom + 15}
          class="tick-label"
          text-anchor="middle"
        >
          {formatXAxisDate(tick)}
        </text>
      {/each}
    </g>
  {/if}
</svg>

<style>
  svg {
    display: block;
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
    font-size: 12px;
  }

  :global(.grid-line) {
    stroke: #e0e0e0;
    stroke-dasharray: 4, 4;
    opacity: 0.5;
  }

  :global(.axis-line) {
    stroke: #000;
    stroke-width: 1px;
  }

  :global(.tick) {
    stroke: #000;
    stroke-width: 1px;
  }

  :global(.tick-label) {
    font-size: 12px;
    fill: #666;
  }

  :global(.end-label) {
    font-size: 11px;
    font-weight: 500;
  }

  :global(.line) {
    shape-rendering: crispEdges;
  }
</style>
