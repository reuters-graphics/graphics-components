<script lang="ts">
  interface Props {
    width: number;
    height: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    axisY?: number;
    useSecondaryStyle?: boolean;
    xTicks: Date[];
    xScale: (value: Date) => number;
    formatTick: (tick: Date) => string;
    showAxisLine?: boolean;
    showTicks?: boolean;
    showLabels?: boolean;
  }

  let {
    width,
    height,
    marginRight,
    marginBottom,
    marginLeft,
    axisY,
    useSecondaryStyle = false,
    xTicks,
    xScale,
    formatTick,
    showAxisLine = true,
    showTicks = true,
    showLabels = true,
  }: Props = $props();

  const baselineY = axisY ?? height - marginBottom;
  const drawBelow = baselineY + 15 <= height;
  const tickEndY = baselineY + 7;
  const labelY = baselineY + 15;
</script>

<g class="x-axis">
  {#if showAxisLine}
    <line
      x1={marginLeft}
      y1={baselineY}
      x2={width - marginRight}
      y2={baselineY}
      class="axis-line {useSecondaryStyle ? 'secondary' : ''}"
    />
  {/if}

  {#each xTicks as tick}
    {@const x = marginLeft + xScale(tick)}
    {#if showTicks && showLabels}
      <line
        x1={x}
        y1={baselineY}
        x2={x}
        y2={tickEndY}
        class="tick x-tick {useSecondaryStyle ? 'secondary' : ''}"
      />
    {/if}
    {#if showLabels}
      <text {x} y={labelY} class="tick-label" text-anchor="middle">
        {formatTick(tick)}
      </text>
    {/if}
  {/each}
</g>

<style lang="scss">
  .axis-line {
    stroke: var(--line-chart-axis-color, #999);
    stroke-width: 2;
  }

  .axis-line.secondary {
    stroke: var(--line-chart-grid-color, #c7ccd2);
    stroke-width: 0.8;
  }

  .x-tick {
    stroke: var(--line-chart-axis-color, #999);
    stroke-width: 0.8;
  }

  .x-tick.secondary {
    stroke: var(--line-chart-grid-color, #c7ccd2);
  }

  .tick-label {
    font-size: 11px;
    fill: var(--line-chart-tick-label-color, #67707a);
  }
</style>
