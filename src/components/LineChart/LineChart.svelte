<script lang="ts">
  import ChartSVG from './components/ChartSVG.svelte';
  import { ChartGrid } from '../ChartGrid/index';
  import Legend from './components/Legend.svelte';

  import {
    buildScales,
    computeResponsiveState,
    generateLegendItems,
    normalizeXAxisData,
  } from './utils/index';
  import type {
    LineChartProps,
    LineSeriesInput,
    ResponsiveState,
    SmallMultiplesDisplayMode,
  } from './types/index.js';

  let {
    data,
    class: cls = 'line-chart',
    series = [],
    chartGroups,
    layout = 'single',
    xKey,
    yKey,
    showEndPoint = true,
    showEndLabel = true,
    strokeWidth,
    lineClass,
    lineColour,
    endPointRadius,
    endPointFill,
    endPointStroke,
    endPointStrokeWidth,
    endLabelType,
    endLabelPosition,
    endLabelFormatter,
    endValueDecimalPlaces = 0,
    verticalLines,
    areaHighlights,
    annotations,
    width,
    height = 400,
    numColumns,
    breakpoint = 768,
    margin,
    yAxisConfig,
    xAxisConfig,
    responsive = false,
    responsiveRules,
    showGridX = false,
    showGridY = true,
    showYAxis = true,
    showXAxis = true,
    showLegend = false,
    yTickCount,
    xTickCount,
    smallMultiplesEndLabelsMode = 'first-in-row',
    smallMultiplesXAxisMode = 'first-in-row',
    scaleConfig,
    children: overlayChildren,
    beforeSVG,
    afterChart,
  }: LineChartProps = $props();

  // State
  let windowWidth = $state(Number.POSITIVE_INFINITY);
  let responsiveState = $state<ResponsiveState>({
    width: 0,
    layout: layout as 'single' | 'multiples',
  });

  // Reactive values
  const activeLayout = $derived(responsive ? responsiveState.layout : layout);
  const resolvedMargin = $derived.by(() => ({
    top: margin?.top ?? 20,
    right: margin?.right ?? 20,
    bottom: margin?.bottom ?? 20,
    left: margin?.left ?? 20,
  }));

  const resolvedYAxisConfig = $derived.by(() => ({
    ...yAxisConfig,
    mode: yAxisConfig?.mode ?? 'top-only',
    zeroBase: yAxisConfig?.zeroBase ?? true,
  }));

  const resolvedXAxisConfig = $derived.by(() => ({
    xAxisDateFormat: xAxisConfig?.xAxisDateFormat ?? '%b %-d, %Y',
    xFormatter: xAxisConfig?.xFormatter,
  }));

  const applySeriesDefaults = (
    inputSeries: typeof series,
    defaultShowEndPoint: boolean
  ) => {
    return inputSeries.map((s) => ({
      ...s,
      colour: s.lineColour ?? lineColour,
      strokeWidth: s.strokeWidth ?? strokeWidth,
      lineClass: s.lineClass ?? lineClass,
      showEndPoint: s.showEndPoint ?? defaultShowEndPoint,
      showEndLabel: s.showEndLabel ?? showEndLabel,
      endPointRadius: s.endPointRadius ?? endPointRadius,
      endPointFill: s.endPointFill ?? endPointFill,
      endPointStroke: s.endPointStroke ?? endPointStroke,
      endPointStrokeWidth: s.endPointStrokeWidth ?? endPointStrokeWidth,
      endLabelType: s.endLabelType ?? endLabelType,
      endLabelPosition: s.endLabelPosition ?? endLabelPosition,
      endLabelFormatter: s.endLabelFormatter ?? endLabelFormatter,
    }));
  };

  const activeColumnsPerRow = $derived.by(() => {
    const responsiveColumns = responsiveState.columnsPerRow;

    if (typeof responsiveColumns === 'number') {
      return responsiveColumns;
    }

    if (typeof numColumns === 'number' && Number.isFinite(numColumns)) {
      return Math.max(1, Math.floor(numColumns));
    }

    return activeLayout === 'multiples' ? 2 : 1;
  });

  const renderedColumnsPerRow = $derived.by(() => {
    if (activeLayout !== 'multiples') {
      return 1;
    }

    return windowWidth <= breakpoint ? 1 : activeColumnsPerRow;
  });

  // Prepare series data
  const activeSeries = $derived.by(() => {
    if (activeLayout === 'multiples' && chartGroups) {
      // Flatten all series from chart groups
      return applySeriesDefaults(
        chartGroups.flatMap((group) => group.series),
        showEndPoint
      );
    }

    // For single layout, use series if provided
    if (series.length > 0) {
      return applySeriesDefaults(series, showEndPoint);
    }

    // If no series provided but yKey is, auto-construct a single series
    if (yKey) {
      return applySeriesDefaults([{ key: yKey, label: yKey }], showEndPoint);
    }

    return applySeriesDefaults(series, showEndPoint);
  });

  // Compute responsive state
  $effect(() => {
    if (responsive && windowWidth) {
      responsiveState = computeResponsiveState(
        windowWidth,
        true,
        responsiveRules
      );
    }
  });

  const resolveMaxWidthFromClass = (className?: string) => {
    const token = className || '';

    if (token.includes('narrower')) return 330;
    if (token.includes('narrow')) return 510;
    if (token.includes('wide')) return 930;
    if (token.includes('wider')) return 1200;
    if (token.includes('widest') || token.includes('fluid')) return Infinity;

    return 660;
  };

  const resolvedContainerWidth = $derived.by(() => {
    if (typeof width === 'number' && Number.isFinite(width) && width > 0) {
      return width;
    }

    const maxWidth = resolveMaxWidthFromClass(cls);

    if (!Number.isFinite(maxWidth)) {
      return Math.max(1, windowWidth || 0);
    }

    return Math.max(1, Math.min(windowWidth || maxWidth, maxWidth));
  });

  // Normalize data: auto-detect and convert x-axis values to dates if needed
  const normalizedData = $derived(normalizeXAxisData(data, xKey));

  function shouldShowForTile(
    tileIndex: number,
    mode: SmallMultiplesDisplayMode,
    columnsPerRow: number
  ): boolean {
    if (mode === 'all') return true;
    if (mode === 'first-in-row') return tileIndex % columnsPerRow === 0;
    return tileIndex === 0;
  }

  // Legend items
  const legendItems = $derived(generateLegendItems(activeSeries));

  // Convert chart groups to grid items
  const chartGroupItems = $derived.by(() => {
    if (chartGroups && chartGroups.length > 0) {
      return chartGroups.map((group, index) => ({
        id: group.groupId,
        index,
        title: group.title,
        series: applySeriesDefaults(group.series, showEndPoint),
      }));
    }

    // Fallback: derive one panel per series so layout can be toggled
    // between single and multiples without providing chartGroups.
    if (series.length > 0) {
      return applySeriesDefaults(series, showEndPoint).map((s, index) => ({
        id: s.key,
        index,
        title: s.label || s.key,
        series: [s],
      }));
    }

    if (yKey) {
      const [resolvedSeries] = applySeriesDefaults(
        [{ key: yKey, label: yKey }],
        showEndPoint
      );
      return [
        {
          id: yKey,
          index: 0,
          title: yKey,
          series: [resolvedSeries],
        },
      ];
    }

    return [];
  });

  // Calculate item dimensions based on responsive state
  const chartItemWidth = $derived.by(() => {
    const cols = renderedColumnsPerRow || 1;
    return resolvedContainerWidth / cols;
  });

  const chartItemHeight = $derived.by(() => {
    if (!chartGroupItems || chartGroupItems.length === 0) return height;
    const cols = renderedColumnsPerRow || 1;

    if (cols === 1) {
      return height;
    }

    const rows = Math.ceil(chartGroupItems.length / cols);
    return height / rows;
  });

  // Build scales using per-tile dimensions in multiples mode
  const scales = $derived.by(() => {
    const dimensions =
      activeLayout === 'multiples' ?
        {
          width: Math.max(
            1,
            chartItemWidth - resolvedMargin.left - resolvedMargin.right
          ),
          height: Math.max(
            1,
            chartItemHeight - resolvedMargin.top - resolvedMargin.bottom
          ),
        }
      : {
          width: Math.max(
            1,
            resolvedContainerWidth - resolvedMargin.left - resolvedMargin.right
          ),
          height: Math.max(
            1,
            height - resolvedMargin.top - resolvedMargin.bottom
          ),
        };

    return buildScales(
      normalizedData,
      activeSeries,
      xKey,
      dimensions,
      scaleConfig,
      {
        ...resolvedYAxisConfig,
      }
    );
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if beforeSVG}
  <div class="before-svg">
    {@render beforeSVG()}
  </div>
{/if}

{#if showLegend && legendItems.length > 0}
  <Legend {legendItems} />
{/if}

{#if activeLayout === 'single'}
  <ChartSVG
    data={normalizedData}
    series={activeSeries}
    {scales}
    {xKey}
    {showEndPoint}
    {endPointRadius}
    {endValueDecimalPlaces}
    {verticalLines}
    {areaHighlights}
    {annotations}
    width={resolvedContainerWidth}
    {height}
    margin={resolvedMargin}
    yAxisConfig={resolvedYAxisConfig}
    xAxisConfig={resolvedXAxisConfig}
    {showGridX}
    {showGridY}
    {showYAxis}
    {showXAxis}
    {yTickCount}
    {xTickCount}
    children={overlayChildren}
  />
{:else if activeLayout === 'multiples' && chartGroupItems.length > 0}
  <ChartGrid
    items={chartGroupItems}
    {cls}
    numColumns={activeColumnsPerRow}
    {breakpoint}
  >
    {#snippet children(item)}
      {@const tileShowsEndLabels = shouldShowForTile(
        item.index,
        smallMultiplesEndLabelsMode,
        renderedColumnsPerRow
      )}
      {@const tileShowsXAxis = shouldShowForTile(
        item.index,
        smallMultiplesXAxisMode,
        renderedColumnsPerRow
      )}
      {@const tileSeries = item.series.map((s: LineSeriesInput) => ({
        ...s,
        showEndLabel: tileShowsEndLabels ? (s.showEndLabel ?? true) : false,
      }))}
      <ChartSVG
        data={normalizedData}
        series={tileSeries}
        {scales}
        {xKey}
        {showEndPoint}
        {endPointRadius}
        {endValueDecimalPlaces}
        {verticalLines}
        {areaHighlights}
        {annotations}
        width={chartItemWidth}
        height={chartItemHeight}
        margin={resolvedMargin}
        yAxisConfig={resolvedYAxisConfig}
        xAxisConfig={resolvedXAxisConfig}
        {showGridX}
        {showGridY}
        {showYAxis}
        {showXAxis}
        showXAxisLabels={tileShowsXAxis}
        {yTickCount}
        {xTickCount}
        children={overlayChildren}
      />
    {/snippet}
  </ChartGrid>
{/if}

{#if afterChart}
  <div class="after-chart">
    {@render afterChart()}
  </div>
{/if}

<style lang="scss">
  .before-svg {
    margin-bottom: 16px;
  }

  .after-chart {
    margin-top: 16px;
  }
</style>
