<script lang="ts">
  interface Props {
    marginTop: number;
    marginLeft: number;
    yTicks: number[];
    yLabels: (string | string[])[]; // Support both string and array of strings for multi-line
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
    <line x1={0} y1={axisTop} x2={0} y2={axisBottom} class="axis-line" />
  {/if}

  {#each yTicks as tick, tickIndex}
    {@const y = marginTop + yScale(tick)}
    {#if showTicks}
      <line x1={0} y1={y} x2={tickWidth} y2={y} class="tick-mark" />
    {/if}
    {@const label = yLabels[tickIndex]}
    {@const lines = Array.isArray(label) ? label : [label]}
    <text x={0} {y} dy="-4px" class="tick-label">
      {#each lines as line, lineIndex}
        {#if lineIndex === 0}
          {line}
        {:else}
          <tspan x={0} dy="1.2em">{line}</tspan>
        {/if}
      {/each}
    </text>
  {/each}
</g>

<style lang="scss">
  .axis-line {
    stroke: var(--line-chart-axis-color, #505966);
    stroke-width: 1.2;
  }

  .tick-mark {
    stroke: var(--line-chart-grid-color, #c7ccd2);
    stroke-width: 0.8;
  }

  .tick-label {
    font-size: 11px;
    fill: var(--line-chart-tick-label-color, #67707a);
    text-anchor: start;
  }
</style>
