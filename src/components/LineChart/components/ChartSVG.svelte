<script lang="ts">
  import type { Snippet } from 'svelte';
  import { GridLines, XAxis, YAxis } from '../../ChartElements/index.js';
  import { generateYTicks, generateXTicks } from '../utils/index.js';
  import {
    createYLabelFormatter,
    createXLabelFormatter,
    formatEndValue,
  } from '../utils/formatting.js';
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
    textAnnotations?: TextAnnotation[];
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
    textAnnotations,
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

  const chartHeight = height - margin.top - margin.bottom;

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
    return series[index]?.colour || colors[index % colors.length];
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

<svg {width} {height} class="line-chart">
  {#if showGridX || showGridY}
    <GridLines
      {width}
      {height}
      marginTop={margin.top}
      marginRight={margin.right}
      marginBottom={margin.bottom}
      marginLeft={0}
      {yTicks}
      {xTicks}
      yScale={scales.yScale}
      xScale={scales.xScale}
      showHorizontal={showGridY}
      showVertical={showGridX}
    />
  {/if}

  <!-- Chart group (clipping region) -->
  <g class="chart" transform="translate(0, {margin.top})">
    <!-- Lines for each series -->
    {#each series as s, seriesIndex}
      {@const color = getSeriesColor(seriesIndex)}
      <path
        d={generatePath(s.key)}
        class="data-line"
        style="stroke: {color}; stroke-width: {s.strokeWidth ||
          2}px; fill: none; translate: {margin.left}px 0;"
      />

      <!-- End point marker (shown by default) -->
      {#if (s.showEndPoint ?? showEndPoint) && data.length > 0}
        {@const lastPoint = data[data.length - 1]}
        {@const cx = scales.xScale(lastPoint[xKey] as Date)}
        {@const cy = scales.yScale(lastPoint[s.key] as number)}
        {@const radius = s.endPointRadius ?? endPointRadius ?? 4}
        {@const pointFill = s.endPointFill ?? color}
        {@const pointStroke = s.endPointStroke ?? 'none'}
        {@const pointStrokeWidth = s.endPointStrokeWidth ?? 0}
        <circle
          r={radius}
          {cx}
          {cy}
          class="end-point"
          style="fill: {pointFill}; stroke: {pointStroke}; stroke-width: {pointStrokeWidth}px; translate: {margin.left}px 0;"
        />
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
          style="fill: {color}; translate: {margin.left}px 0;"
          text-anchor={textAnchor}
          dominant-baseline="middle"
        >
          {formatEndLabel(s, lastPoint[s.key] as number, endContext)}
        </text>
      {/if}
    {/each}

    <!-- Annotations: Area highlights -->
    {#if areaHighlights && areaHighlights.length > 0}
      {#each areaHighlights as area, areaIndex (area.id ?? `area-${areaIndex}`)}
        {@const startX = scales.xScale(area.dateStart)}
        {@const endX = scales.xScale(area.dateEnd)}
        {@const width = Math.abs(endX - startX)}
        {@const x = Math.min(startX, endX)}
        {@const rectFill = area.fill ?? '#6c8db6'}
        {@const rectOpacity = area.opacity ?? 0.15}
        <rect
          {x}
          y={margin.top}
          {width}
          height={chartHeight}
          fill={rectFill}
          opacity={rectOpacity}
          class="area-highlight"
          pointer-events="none"
        />
        {#if area.label}
          <text
            x={x + width / 2}
            y={margin.top + 20}
            text-anchor="middle"
            font-size="12"
            fill="#666"
            pointer-events="none"
            opacity="0.5"
          >
            {area.label}
          </text>
        {/if}
      {/each}
    {/if}

    <!-- Annotations: Vertical lines -->
    {#if verticalLines && verticalLines.length > 0}
      {#each verticalLines as line, lineIndex (line.id ?? `line-${lineIndex}`)}
        {@const lineX = scales.xScale(line.date)}
        {@const lineStroke = line.stroke ?? '#999'}
        {@const lineStrokeWidth = line.strokeWidth ?? 2}
        {@const lineOpacity = line.opacity ?? 0.7}
        <line
          x1={lineX}
          y1={margin.top}
          x2={lineX}
          y2={margin.top + chartHeight}
          stroke={lineStroke}
          stroke-width={lineStrokeWidth}
          opacity={lineOpacity}
          stroke-dasharray={line.strokeDasharray}
          class="vertical-line-annotation"
          pointer-events="none"
        />
        {#if line.label}
          <text
            x={lineX + 4}
            y={margin.top + 16}
            font-size="12"
            fill={line.labelColour ?? '#333'}
            pointer-events="none"
          >
            {line.label}
          </text>
        {/if}
      {/each}
    {/if}

    <!-- Annotations: Text annotations -->
    {#if textAnnotations && textAnnotations.length > 0}
      {#each textAnnotations as annotation, annIndex (annotation.id ?? `annotation-${annIndex}`)}
        {@const annX = scales.xScale(annotation.date)}
        {@const annY = scales.yScale(annotation.value)}
        {@const annXOffset = annotation.xOffset ?? 0}
        {@const annYOffset = annotation.yOffset ?? -10}
        {@const annTextAnchor = annotation.textAnchor ?? 'middle'}
        {@const annFill = annotation.fill ?? '#333'}
        {@const annFontSize = annotation.fontSize ?? 14}
        {@const annFontWeight = annotation.fontWeight ?? 'normal'}
        {#if annotation.background}
          <!-- Text background -->
          <rect
            x={annX +
              annXOffset -
              (annTextAnchor === 'start' ? 2
              : annTextAnchor === 'end' ? (annotation.background.padding ?? 4)
              : (annotation.background.padding ?? 4))}
            y={annY + annYOffset - (annotation.background.padding ?? 4)}
            width={annotation.background.padding ?? 4}
            height={annotation.background.padding ?? 4}
            rx={annotation.background.rx ?? 3}
            fill={annotation.background.fill}
            opacity="0.9"
            pointer-events="none"
          />
        {/if}
        <text
          x={annX + annXOffset}
          y={annY + annYOffset}
          text-anchor={annTextAnchor}
          font-size={annFontSize}
          fill={annFill}
          font-weight={annFontWeight}
          dominant-baseline="middle"
          class="text-annotation"
          pointer-events="none"
        >
          {annotation.text}
        </text>
      {/each}
    {/if}

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
      {width}
      {height}
      marginRight={margin.right}
      marginBottom={margin.bottom}
      marginLeft={margin.left}
      axisY={xAxisBaselineY}
      useSecondaryStyle={!isZeroBaseline}
      {xTicks}
      xScale={scales.xScale}
      xLabels={xTickLabels}
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

  .data-line {
    shape-rendering: crispEdges;
  }
</style>
