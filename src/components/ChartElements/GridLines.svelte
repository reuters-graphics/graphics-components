<script lang="ts">
  interface Props {
    width: number;
    height: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    yTicks: number[];
    xTicks: Date[];
    yScale: (value: number) => number;
    xScale: (value: Date) => number;
    showHorizontal?: boolean;
    showVertical?: boolean;
  }

  let {
    width,
    height,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    yTicks,
    xTicks,
    yScale,
    xScale,
    showHorizontal = true,
    showVertical = false,
  }: Props = $props();
</script>

<g class="grid">
  {#if showHorizontal}
    {#each yTicks as tick}
      {@const y = marginTop + yScale(tick)}
      <line
        x1={marginLeft}
        y1={y}
        x2={width - marginRight}
        y2={y}
        class="grid-line horizontal {Math.abs(tick) < 1e-9 ?
          'zero-baseline'
        : ''}"
      />
    {/each}
  {/if}

  {#if showVertical}
    {#each xTicks as tick}
      {@const x = marginLeft + xScale(tick)}
      <line
        x1={x}
        y1={marginTop}
        x2={x}
        y2={height - marginBottom}
        class="grid-line vertical"
      />
    {/each}
  {/if}
</g>

<style lang="scss">
  .grid-line {
    stroke: var(--line-chart-grid-color, #c7ccd2);
    stroke-width: 0.8;
    opacity: 1;
  }

  .grid-line.horizontal.zero-baseline {
    stroke: var(--line-chart-axis-color, #999);
    stroke-width: 2;
    opacity: 1;
    stroke-dasharray: none;
  }

  .grid-line.vertical {
    stroke: var(--line-chart-grid-vertical-color, #cdd2d8);
  }
</style>
