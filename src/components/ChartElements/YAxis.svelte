<script lang="ts">
  interface Props {
    marginTop: number;
    marginLeft: number;
    yTicks: number[];
    yLabels: string[];
    yScale: (value: number) => number;
    showAxisLine?: boolean;
    axisTop?: number;
    axisBottom?: number;
    showTicks?: boolean;
    tickWidth?: number;
  }

  let {
    marginTop,
    marginLeft,
    yTicks,
    yLabels,
    yScale,
    showAxisLine = false,
    axisTop,
    axisBottom,
    showTicks = false,
    tickWidth = 6,
  }: Props = $props();
</script>

<g class="y-axis">
  {#if showAxisLine && axisTop !== undefined && axisBottom !== undefined}
    <line
      x1={marginLeft}
      y1={axisTop}
      x2={marginLeft}
      y2={axisBottom}
      class="axis-line"
    />
  {/if}

  {#each yTicks as tick, tickIndex}
    {@const y = marginTop + yScale(tick)}
    {#if showTicks}
      <line
        x1={marginLeft - tickWidth}
        y1={y}
        x2={marginLeft}
        y2={y}
        class="tick-mark"
      />
    {/if}
    <text
      x={marginLeft - 10}
      {y}
      class="tick-label"
      text-anchor="end"
      dy="0.32em"
    >
      {yLabels[tickIndex]}
    </text>
  {/each}
</g>

<style lang="scss">
  .axis-line {
    stroke: var(--line-chart-axis-color, #505966);
    stroke-width: 1.2;
  }

  .tick-mark {
    stroke: var(--line-chart-axis-color, #505966);
    stroke-width: 1.2;
  }

  .tick-label {
    font-size: 11px;
    fill: var(--line-chart-tick-label-color, #67707a);
  }
</style>
