<script lang="ts">
  import type {
    AreaHighlightAnnotation,
    ComputedScales,
  } from '../../types/index.js';

  interface Props {
    areaHighlights?: AreaHighlightAnnotation[];
    scales: ComputedScales;
    margin: { top: number; right: number; bottom: number; left: number };
    chartHeight: number;
  }

  let { areaHighlights, scales, margin, chartHeight }: Props = $props();

  function getClasses(baseClass: string, className?: string): string {
    return className ? `${baseClass} ${className}` : baseClass;
  }
</script>

{#if areaHighlights && areaHighlights.length > 0}
  {#each areaHighlights as area, areaIndex (area.id ?? `area-${areaIndex}`)}
    {@const startX = scales.xScale(area.dateStart)}
    {@const endX = scales.xScale(area.dateEnd)}
    {@const width = Math.abs(endX - startX)}
    {@const x = Math.min(startX, endX)}
    {@const labelY =
      area.labelYValue != null ?
        scales.yScale(area.labelYValue)
      : margin.top + 20}
    <rect
      {x}
      y={-margin.top}
      {width}
      height={chartHeight + margin.top}
      class={getClasses('area-highlight', area.areaClass)}
      pointer-events="none"
    />
    {#if area.label}
      <text
        x={x + width / 2}
        y={labelY}
        text-anchor="middle"
        class={getClasses('area-highlight-label', area.labelClass)}
        pointer-events="none"
      >
        {area.label}
      </text>
    {/if}
  {/each}
{/if}

<style lang="scss">
  rect {
    fill: #6c8db6;
    opacity: 0.15;
  }

  text {
    fill: var(--theme-colour-text-secondary);
    font-size: var(--theme-font-size-sm);
  }
</style>
