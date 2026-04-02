<script lang="ts">
  import { onMount } from 'svelte';
  import ChartSVG from './components/ChartSVG.svelte';
  import { ChartGrid } from '../ChartGrid/index';
  import {
    buildScales,
    computeResponsiveState,
    createResizeObserver,
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
    series = [],
    chartGroups,
    layout = 'single',
    xKey,
    yKey,
    showEndPoint = true,
    showEndLabel = true,
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
    width = 660,
    height = 400,
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
  let containerWidth = $state(width);
  let responsiveState = $state<ResponsiveState>({
    width: width,
    layout: layout as 'single' | 'multiples',
  });
  let container: HTMLDivElement | undefined = $state();
  let resizeObserver: ResizeObserver | undefined;

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

    return activeLayout === 'multiples' ? 2 : 1;
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
    if (responsive && containerWidth) {
      responsiveState = computeResponsiveState(
        containerWidth,
        true,
        responsiveRules
      );
    }
  });

  // Setup resize observer
  onMount(() => {
    if (!container || !responsive) return;

    const observer = createResizeObserver((width) => {
      containerWidth = width;
    });

    observer.observe(container);
    resizeObserver = observer;

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
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
    const cols = activeColumnsPerRow || 1;
    return containerWidth / cols;
  });

  const chartItemHeight = $derived.by(() => {
    if (!chartGroupItems || chartGroupItems.length === 0) return height;
    const cols = activeColumnsPerRow || 1;
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
            containerWidth - resolvedMargin.left - resolvedMargin.right
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

<div class="line-chart-container" bind:this={container} style="width: 100%;">
  {#if beforeSVG}
    <div class="before-svg">
      {@render beforeSVG()}
    </div>
  {/if}

  {#if showLegend && legendItems.length > 0}
    <div class="legend">
      {#each legendItems as item}
        <div class="legend-item">
          <span class="legend-color" style="background-color: {item.color};"
          ></span>
          <span class="legend-label">{item.label || item.key}</span>
        </div>
      {/each}
    </div>
  {/if}

  <div class="chart-wrapper" style="width: {containerWidth}px;">
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
        width={containerWidth}
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
        columnsPerRow={activeColumnsPerRow}
        gap={24}
      >
        {#snippet children(item)}
          {@const tileShowsEndLabels = shouldShowForTile(
            item.index,
            smallMultiplesEndLabelsMode,
            activeColumnsPerRow
          )}
          {@const tileShowsXAxis = shouldShowForTile(
            item.index,
            smallMultiplesXAxisMode,
            activeColumnsPerRow
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
  </div>

  {#if afterChart}
    <div class="after-chart">
      {@render afterChart()}
    </div>
  {/if}
</div>

<style lang="scss">
  .line-chart-container {
    display: flex;
    flex-direction: column;
  }

  .chart-wrapper {
    flex: 1;
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
    padding: 0 16px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }

  .legend-color {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }

  .legend-label {
    color: #666;
  }

  .before-svg {
    margin-bottom: 16px;
  }

  .after-chart {
    margin-top: 16px;
  }
</style>
