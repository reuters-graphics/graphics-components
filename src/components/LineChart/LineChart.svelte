<script lang="ts">
  import { onMount } from 'svelte';
  import ChartSVG from './components/ChartSVG.svelte';
  import { ChartGrid } from '../ChartGrid/index.js';
  import {
    buildScales,
    computeResponsiveState,
    createResizeObserver,
    generateLegendItems,
  } from './utils/index.js';
  import type {
    LineChartProps,
    LineSeriesInput,
    ResponsiveRule,
    ChartGrouping,
  } from './types/index.js';

  interface IProps extends LineChartProps {}

  let {
    data = [],
    series = [],
    chartGroups,
    layout = 'single',
    xKey = 'date',
    yKey = 'value',
    width = 800,
    height = 400,
    margin = { top: 20, right: 20, bottom: 30, left: 50 },
    yAxisConfig,
    yValueFormatter,
    yAxisFormat,
    responsive = false,
    responsiveRules,
    showGrid = true,
    showYAxis = true,
    showXAxis = true,
    showLegend = true,
    scaleConfig,
    children,
    beforeSVG,
    svgOverlay,
    afterChart,
  }: IProps = $props();

  // State
  let containerWidth = $state(width);
  let responsiveState = $state({
    width: containerWidth,
    layout: layout as 'single' | 'multiples',
  });
  let container: HTMLDivElement | undefined = $state();
  let resizeObserver: ResizeObserver | undefined;

  // Reactive values
  const activeLayout = $derived(responsive ? responsiveState.layout : layout);
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
      return chartGroups.flatMap((group) => group.series);
    }
    return series;
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

  // Legend items
  const legendItems = $derived(generateLegendItems(activeSeries));

  // Convert chart groups to grid items
  const chartGroupItems = $derived(
    chartGroups?.map((group) => ({
      id: group.groupId,
      title: group.title,
      series: group.series,
    })) || []
  );

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
        { width: chartItemWidth, height: chartItemHeight }
      : { width: containerWidth, height };

    return buildScales(data, activeSeries, xKey, dimensions, scaleConfig);
  });
</script>

<div class="line-chart-container" bind:this={container} style="width: 100%;">
  {#if beforeSVG}
    <div class="before-svg">
      <svelte:component this={beforeSVG} />
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
        {data}
        series={activeSeries}
        {scales}
        {xKey}
        width={containerWidth}
        {height}
        {margin}
        yAxisConfig={{
          mode: yAxisConfig?.mode,
          prefix: yAxisConfig?.prefix,
          suffix: yAxisConfig?.suffix,
          yValueFormatter: yValueFormatter || yAxisConfig?.yValueFormatter,
        }}
        {yAxisFormat}
        {showGrid}
        {showYAxis}
        {showXAxis}
        {children}
      />
    {:else if activeLayout === 'multiples' && chartGroups}
      <ChartGrid
        items={chartGroupItems}
        columnsPerRow={activeColumnsPerRow}
        gap={24}
      >
        {#snippet children(item)}
          <ChartSVG
            {data}
            series={item.series}
            {scales}
            {xKey}
            width={chartItemWidth}
            height={chartItemHeight}
            {margin}
            yAxisConfig={{
              mode: yAxisConfig?.mode,
              prefix: yAxisConfig?.prefix,
              suffix: yAxisConfig?.suffix,
              yValueFormatter: yValueFormatter || yAxisConfig?.yValueFormatter,
            }}
            {yAxisFormat}
            {showGrid}
            {showYAxis}
            {showXAxis}
            {children}
          />
        {/snippet}
      </ChartGrid>
    {/if}
  </div>

  {#if afterChart}
    <div class="after-chart">
      <svelte:component this={afterChart} />
    </div>
  {/if}
</div>

<style>
  :global(.line-chart-container) {
    display: flex;
    flex-direction: column;
  }

  :global(.chart-wrapper) {
    flex: 1;
  }

  :global(.legend) {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
    padding: 0 16px;
  }

  :global(.legend-item) {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }

  :global(.legend-color) {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }

  :global(.legend-label) {
    color: #666;
  }

  :global(.before-svg) {
    margin-bottom: 16px;
  }

  :global(.after-chart) {
    margin-top: 16px;
  }
</style>
