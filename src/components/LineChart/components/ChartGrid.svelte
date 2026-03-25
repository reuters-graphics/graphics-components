<script lang="ts">
  import ChartSVG from './ChartSVG.svelte';
  import type {
    Datum,
    ComputedScales,
    YAxisConfig,
    ChartGrouping,
  } from '../types/index.js';
  import type { Snippet } from 'svelte';

  interface Props {
    data: Datum[];
    chartGroups: ChartGrouping[];
    scales: ComputedScales;
    xKey?: string;
    yKey?: string;
    width: number;
    height: number;
    columnsPerRow?: number;
    margin?: { top?: number; right?: number; bottom?: number; left?: number };
    yAxisConfig?: YAxisConfig;
    yAxisFormat?: string;
    showGrid?: boolean;
    showYAxis?: boolean;
    showXAxis?: boolean;
    children?: Snippet;
  }

  let {
    data,
    chartGroups,
    scales,
    xKey = 'date',
    width,
    height,
    columnsPerRow = 2,
    margin,
    yAxisConfig,
    yAxisFormat,
    showGrid = true,
    showYAxis = true,
    showXAxis = true,
    children,
  }: Props = $props();

  const gridColumns = `repeat(${columnsPerRow}, 1fr)`;
  const chartHeight = height / Math.ceil(chartGroups.length / columnsPerRow);
  const chartWidth = width / columnsPerRow;
</script>

<div
  class="chart-grid"
  style="display: grid; grid-template-columns: {gridColumns}; gap: 24px;"
>
  {#each chartGroups as group}
    <div class="chart-group">
      {#if group.title}
        <h3 class="group-title">{group.title}</h3>
      {/if}
      <ChartSVG
        {data}
        series={group.series}
        {scales}
        {xKey}
        width={chartWidth}
        height={chartHeight}
        {margin}
        {yAxisConfig}
        {yAxisFormat}
        {showGrid}
        {showYAxis}
        {showXAxis}
        {children}
      />
    </div>
  {/each}
</div>

<style>
  .chart-grid {
    width: 100%;
  }

  .chart-group {
    display: flex;
    flex-direction: column;
  }

  .group-title {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 12px 0;
    color: #333;
  }
</style>
