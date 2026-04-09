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
    formatTick?: (tick: Date) => string;
    xLabels?: (string | string[])[]; // Array of formatted labels (string or array of strings for multi-line)
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
    xLabels,
    showAxisLine = true,
    showTicks = true,
    showLabels = true,
  }: Props = $props();

  const baselineY = axisY ?? height - marginBottom;
  const tickEndY = baselineY + 7;
  const labelY = baselineY + 15;
</script>

<g class="x-axis">
  {#if showAxisLine}
    <line
      x1={0}
      y1={baselineY}
      x2={width - marginRight}
      y2={baselineY}
      class="axis-line {useSecondaryStyle ? 'secondary' : ''}"
    />
  {/if}

  {#each xTicks as tick, tickIndex}
    {#if showTicks && showLabels}
      <line
        x1={xScale(tick)}
        x2={xScale(tick)}
        y1={baselineY}
        y2={tickEndY}
        class="tick x-tick {useSecondaryStyle ? 'secondary' : ''}"
        style="translate: {marginLeft}px;"
      />
    {/if}
    {#if showLabels}
      {@const label =
        xLabels ? xLabels[tickIndex]
        : formatTick ? formatTick(tick)
        : ''}
      {@const lines = Array.isArray(label) ? label : [label]}
      <text
        x={xScale(tick)}
        y={labelY}
        class="tick-label"
        style="translate: {marginLeft}px;"
      >
        {#each lines as line, lineIndex}
          {#if lineIndex === 0}
            {line}
          {:else}
            <tspan x={xScale(tick)} dy="1.2em">{line}</tspan>
          {/if}
        {/each}
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
    text-anchor: middle;
  }
</style>
