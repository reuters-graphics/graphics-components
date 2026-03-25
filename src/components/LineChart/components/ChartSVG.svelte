<script lang="ts">
  import type { Snippet } from 'svelte';
  import { GridLines, XAxis, YAxis } from '../../ChartElements/index.js';
  import { generateYTicks, generateXTicks } from '../utils/index.js';
  import {
    createYLabelFormatter,
    formatXAxisDate,
    formatEndValue,
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
    xKey: string;
    yKey?: string;
    showEndPoint: boolean;
    endPointRadius?: number;
    width: number;
    height: number;
    margin?: { top?: number; right?: number; bottom?: number; left?: number };
    yAxisConfig?: YAxisConfig;
    yAxisFormat?: string;
    xAxisDateFormat?: string;
    showGridX?: boolean;
    showGridY?: boolean;
    showYAxis?: boolean;
    showXAxis?: boolean;
    showXAxisLabels?: boolean;
    yTickCount?: number;
    xTickCount?: number;
    children?: Snippet;
  }

  let {
    data,
    series,
    scales,
    xKey = 'date',
    showEndPoint = true,
    endPointRadius,
    width,
    height,
    margin = { top: 20, right: 20, bottom: 30, left: 50 },
    yAxisConfig,
    yAxisFormat,
    xAxisDateFormat = '%b %-d, %Y',
    showGridX = false,
    showGridY = true,
    showYAxis = true,
    showXAxis = true,
    showXAxisLabels = true,
    yTickCount,
    xTickCount,
    children,
  }: Props = $props();

  const marginTop = margin.top ?? 20;
  const marginRight = margin.right ?? 20;
  const marginBottom = margin.bottom ?? 30;
  const marginLeft = margin.left ?? 50;

  const chartHeight = height - marginTop - marginBottom;

  // Generate tick values
  const autoYTickCount = $derived.by(() => {
    return Math.max(2, Math.min(7, Math.round(chartHeight / 80)));
  });
  const effectiveYTickCount = $derived.by(() => {
    if (typeof yTickCount === 'number') {
      return Math.max(2, Math.min(20, Math.round(yTickCount)));
    }
    return autoYTickCount;
  });
  const yTicks = $derived.by(() => {
    const ticks = generateYTicks(scales.yDomain, effectiveYTickCount);
    const shouldIncludeZero = yAxisConfig?.zeroBase ?? true;

    if (!shouldIncludeZero) return ticks;

    const [domainMin, domainMax] = scales.yDomain;
    if (domainMin > 0 || domainMax < 0) return ticks;

    const hasZeroTick = ticks.some((t) => Math.abs(t) < 1e-9);
    if (hasZeroTick) return ticks;

    const withZero = [...ticks, 0].sort((a, b) => a - b);
    return withZero;
  });
  const effectiveXTickCount = $derived.by(() => {
    if (typeof xTickCount === 'number') {
      return Math.max(2, Math.min(20, Math.round(xTickCount)));
    }
    return 5;
  });
  const xTicks = $derived(generateXTicks(scales.xDomain, effectiveXTickCount));

  // Create formatter
  const formatYLabel = $derived(
    createYLabelFormatter(yAxisConfig, yAxisFormat)
  );

  const yTickLabels = $derived.by(() => {
    return yTicks.map((tick, tickIndex) => {
      const isTopTick = tickIndex === yTicks.length - 1;
      const isBottomTick = tickIndex === 0;
      const context: YAxisLabelContext = {
        value: tick,
        isTopTick,
        isBottomTick,
        isEndValue: false,
        tickIndex,
      };
      return formatYLabel(tick, context);
    });
  });

  const lowestYTick = $derived.by(() => {
    if (yTicks.length === 0) return 0;
    return Math.min(...yTicks);
  });

  const xAxisBaselineY = $derived(marginTop + scales.yScale(lowestYTick));
  const isZeroBaseline = $derived(Math.abs(lowestYTick) < 1e-9);

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

  function formatEndLabel(
    s: LineSeriesInput,
    value: number,
    context: YAxisLabelContext
  ): string {
    if (s.endLabelFormatter) {
      return s.endLabelFormatter(value, context);
    }

    const endLabelType = s.endLabelType ? s.endLabelType : 'value';

    // Format the numeric value with rounding and units
    const decimalPlaces = yAxisConfig?.endValueDecimalPlaces ?? 0;
    const formattedValue = formatEndValue(
      value,
      decimalPlaces,
      yAxisConfig?.prefix,
      yAxisConfig?.suffix
    );

    // Build the label based on content preference
    if (endLabelType === 'label') {
      return s.label ?? s.key;
    } else if (endLabelType === 'value') {
      return formattedValue;
    } else {
      // 'both'
      return `${s.label ?? s.key} ${formattedValue}`;
    }
  }
</script>

<svg {width} {height} class="line-chart">
  {#if showGridX || showGridY}
    <GridLines
      {width}
      {height}
      {marginTop}
      {marginRight}
      {marginBottom}
      {marginLeft}
      {yTicks}
      {xTicks}
      yScale={scales.yScale}
      xScale={scales.xScale}
      showHorizontal={showGridY}
      showVertical={showGridX}
    />
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

      <!-- End point marker (shown by default) -->
      {#if (s.showEndPoint ?? showEndPoint) && data.length > 0}
        {@const lastPoint = data[data.length - 1]}
        {@const cx = scales.xScale(lastPoint[xKey] as Date)}
        {@const cy = scales.yScale(lastPoint[s.key] as number)}
        {@const radius = s.endPointRadius ?? endPointRadius ?? 4}
        <circle r={radius} {cx} {cy} class="end-point" style="fill: {color};" />
      {/if}

      <!-- End labels (shown by default) -->
      {#if (s.showEndLabel ?? true) && data.length > 0}
        {@const lastPoint = data[data.length - 1]}
        {@const xOffset = s.endLabelPosition?.xOffset ?? 5}
        {@const yOffset = s.endLabelPosition?.yOffset ?? 0}
        {@const textAnchor = s.endLabelPosition?.textAnchor ?? 'start'}
        {@const x = scales.xScale(lastPoint[xKey] as Date) + xOffset}
        {@const y = scales.yScale(lastPoint[s.key] as number) + yOffset}
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
          text-anchor={textAnchor}
          dominant-baseline="middle"
        >
          {formatEndLabel(s, lastPoint[s.key] as number, endContext)}
        </text>
      {/if}
    {/each}

    <!-- Child content (overlay) -->
    {#if children}
      <g class="overlay">
        {@render children()}
      </g>
    {/if}
  </g>

  {#if showYAxis}
    <YAxis
      {marginTop}
      {marginLeft}
      {yTicks}
      yLabels={yTickLabels}
      yScale={scales.yScale}
      showTicks={!showGridY}
    />
  {/if}

  {#if showXAxis}
    <XAxis
      {width}
      {height}
      {marginRight}
      {marginBottom}
      {marginLeft}
      axisY={xAxisBaselineY}
      useSecondaryStyle={!isZeroBaseline}
      {xTicks}
      xScale={scales.xScale}
      formatTick={(tick) => formatXAxisDate(tick, xAxisDateFormat)}
      showLabels={showXAxisLabels}
    />
  {/if}
</svg>

<style lang="scss">
  svg {
    display: block;
    font-family: var(
      --line-chart-font-family,
      system-ui,
      -apple-system,
      sans-serif
    );
    font-size: 12px;
  }

  .end-label {
    font-size: 11px;
    font-weight: 500;
  }

  .end-point {
    opacity: 0.95;
  }

  .line {
    shape-rendering: crispEdges;
  }
</style>
