<script lang="ts">
  import type { Snippet } from 'svelte';
  import { GridLines, XAxis, YAxis } from '../../ChartElements/index.js';
  import { generateYTicks, generateXTicks } from '../utils/index.js';
  import {
    createYLabelFormatter,
    createXLabelFormatter,
    formatEndValue,
  } from '../utils/formatting.js';
  import AreaHighlightAnnotations from './annotations/AreaHighlightAnnotations.svelte';
  import VerticalLineAnnotations from './annotations/VerticalLineAnnotations.svelte';
  import TextAnnotations from './annotations/TextAnnotations.svelte';
  import type {
    ComputedScales,
    Datum,
    LineSeriesInput,
    XAxisConfig,
    YAxisConfig,
    YAxisLabelContext,
    VerticalLineAnnotation,
    AreaHighlightAnnotation,
    TextAnnotation,
  } from '../types/index.js';

  interface Props {
    data: Datum[];
    series: LineSeriesInput[];
    scales: ComputedScales;
    xKey: string;
    yKey?: string;
    showEndPoint: boolean;
    endPointRadius?: number;
    endValueDecimalPlaces?: number;
    verticalLines?: VerticalLineAnnotation[];
    areaHighlights?: AreaHighlightAnnotation[];
    annotations?: TextAnnotation[];
    width: number;
    height: number;
    margin: { top: number; right: number; bottom: number; left: number };
    yAxisConfig?: YAxisConfig;
    xAxisConfig?: XAxisConfig;
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
    endValueDecimalPlaces = 0,
    verticalLines,
    areaHighlights,
    annotations,
    width,
    height,
    margin,
    yAxisConfig,
    xAxisConfig,
    showGridX = false,
    showGridY = true,
    showYAxis = true,
    showXAxis = true,
    showXAxisLabels = true,
    yTickCount,
    xTickCount,
    children,
  }: Props = $props();

  let containerWidth = $state(0);

  const chartHeight = height - margin.top - margin.bottom;

  const resolvedChartHeight = $derived.by(() => {
    return height + margin.top + margin.bottom;
  });

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
  const formatYLabel = $derived(createYLabelFormatter(yAxisConfig));

  // Create x-axis formatter
  const formatXLabel = $derived(createXLabelFormatter(xAxisConfig));

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

  const xTickLabels = $derived.by(() => {
    return xTicks.map((tick, tickIndex) => {
      const formatted = formatXLabel(tick, tickIndex);
      // Ensure it's always an array for consistent handling in XAxis component
      return Array.isArray(formatted) ? formatted : [formatted];
    });
  });

  const lowestYTick = $derived.by(() => {
    if (yTicks.length === 0) return 0;
    return Math.min(...yTicks);
  });

  const xAxisBaselineY = $derived(margin.top + scales.yScale(lowestYTick));
  const isZeroBaseline = $derived(Math.abs(lowestYTick) < 1e-9);

  const svgWidth = $derived.by(() => {
    if (containerWidth > 0) {
      return containerWidth;
    }
    return width;
  });

  const xScaleFactor = $derived.by(() => {
    const basePlotWidth = Math.max(1, width - margin.left - margin.right);
    const renderedPlotWidth = Math.max(
      1,
      svgWidth - margin.left - margin.right
    );

    return renderedPlotWidth / basePlotWidth;
  });

  const fittedXScale = $derived.by(() => {
    return (value: Date) => scales.xScale(value) * xScaleFactor;
  });

  const fittedScales = $derived.by(() => {
    return {
      ...scales,
      xScale: fittedXScale,
    };
  });

  const lineTranslateX = $derived.by(() => {
    return margin.left;
  });

  // Path generator for individual series
  function generatePath(seriesKey: string): string {
    const points = data.map((d) => {
      const x = fittedXScale(d[xKey] as Date);
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
    return series[index]?.lineColour || colors[index % colors.length];
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
    const formattedValue = formatEndValue(
      value,
      endValueDecimalPlaces,
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

<div
  class="chart-container"
  style={`height: ${resolvedChartHeight}px;`}
  bind:clientWidth={containerWidth}
>
  <svg width={svgWidth} {height} class="line-chart layer">
    {#if showGridX || showGridY}
      <GridLines
        width={svgWidth}
        {height}
        marginTop={margin.top}
        marginRight={margin.right}
        marginBottom={margin.bottom}
        marginLeft={lineTranslateX}
        {yTicks}
        {xTicks}
        yScale={scales.yScale}
        xScale={fittedXScale}
        showHorizontal={showGridY}
        showVertical={showGridX}
      />
    {/if}

    <!-- Chart group (clipping region) -->
    <g class="chart" transform="translate(0, {margin.top})">
      <!-- Lines for each series -->
      {#each series as s, seriesIndex}
        {@const color = getSeriesColor(seriesIndex)}
        <g class={s.seriesClass ? `series ${s.seriesClass}` : 'series'}>
          <path
            d={generatePath(s.key)}
            class={s.lineClass ? `data-line ${s.lineClass}` : 'data-line'}
            style="stroke: {color}; stroke-width: {s.strokeWidth ||
              2}px; fill: none; translate: {lineTranslateX}px 0;"
          />

          <!-- End point marker (shown by default) -->
          {#if (s.showEndPoint ?? showEndPoint) && data.length > 0}
            {@const lastPoint = data[data.length - 1]}
            {@const cx = fittedXScale(lastPoint[xKey] as Date)}
            {@const cy = scales.yScale(lastPoint[s.key] as number)}
            {@const radius = s.endPointRadius ?? endPointRadius ?? 4}
            {@const pointFill = s.endPointFill ?? color}
            <circle
              r={radius}
              {cx}
              {cy}
              class="end-point"
              style="fill: {pointFill}; translate: {lineTranslateX}px 0;"
            />
          {/if}

          <!-- End labels (shown by default) -->
          {#if (s.showEndLabel ?? true) && data.length > 0}
            {@const lastPoint = data[data.length - 1]}
            {@const xOffset = s.endLabelPosition?.xOffset ?? 5}
            {@const yOffset = s.endLabelPosition?.yOffset ?? 0}
            {@const textAnchor = s.endLabelPosition?.textAnchor ?? 'start'}
            {@const x = fittedXScale(lastPoint[xKey] as Date) + xOffset}
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
              style="fill: {color}; translate: {lineTranslateX}px 0;"
              text-anchor={textAnchor}
              dominant-baseline="middle"
            >
              {formatEndLabel(s, lastPoint[s.key] as number, endContext)}
            </text>
          {/if}
        </g>
      {/each}

      <AreaHighlightAnnotations
        {areaHighlights}
        scales={fittedScales}
        {margin}
        {chartHeight}
      />

      <VerticalLineAnnotations
        {verticalLines}
        scales={fittedScales}
        {margin}
        {chartHeight}
      />

      <TextAnnotations {annotations} scales={fittedScales} />

      <!-- Child content (overlay) -->
      {#if children}
        <g class="overlay" transform="translate({margin.left}, 0)">
          {@render children()}
        </g>
      {/if}
    </g>

    {#if showYAxis}
      <YAxis
        marginTop={margin.top}
        marginLeft={0}
        {yTicks}
        yLabels={yTickLabels}
        yScale={scales.yScale}
        showTicks={!showGridY}
      />
    {/if}

    {#if showXAxis}
      <XAxis
        width={svgWidth}
        {height}
        marginRight={margin.right}
        marginBottom={margin.bottom}
        marginLeft={margin.left}
        axisY={xAxisBaselineY}
        useSecondaryStyle={!isZeroBaseline}
        {xTicks}
        xScale={fittedXScale}
        xLabels={xTickLabels}
        showLabels={showXAxisLabels}
      />
    {/if}
  </svg>
</div>

<style lang="scss">
  .chart-container {
    position: relative;
    width: 100%;
    overflow: hidden;

    .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  text {
    font-size: var(--theme-font-size-xs);
    font-weight: 500;
  }

  path {
    shape-rendering: crispEdges;
  }

  circle {
    stroke: white;
    stroke-width: 1px;
  }
</style>
