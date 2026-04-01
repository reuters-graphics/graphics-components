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
    <rect
      {x}
      y={-margin.top}
      {width}
      height={chartHeight + margin.top}
      class={getClasses('area-highlight', area.className)}
      pointer-events="none"
    />
    {#if area.label}
      <text
        x={x + width / 2}
        y={margin.top + 20}
        text-anchor="middle"
        class="area-highlight-label"
        pointer-events="none"
      >
        {area.label}
      </text>
    {/if}
  {/each}
{/if}

<style lang="scss">
  .area-highlight {
    fill: #6c8db6;
    opacity: 0.15;
  }

  .area-highlight-label {
    font-size: 12px;
    fill: #666;
    opacity: 0.5;
  }
</style>
