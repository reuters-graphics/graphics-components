<script lang="ts">
  import type {
    ComputedScales,
    VerticalLineAnnotation,
  } from '../../types/index.js';

  interface Props {
    verticalLines?: VerticalLineAnnotation[];
    scales: ComputedScales;
    margin: { top: number; right: number; bottom: number; left: number };
    chartHeight: number;
  }

  let { verticalLines, scales, margin, chartHeight }: Props = $props();

  function getClasses(baseClass: string, className?: string): string {
    return className ? `${baseClass} ${className}` : baseClass;
  }
</script>

{#if verticalLines && verticalLines.length > 0}
  {#each verticalLines as line, lineIndex (line.id ?? `line-${lineIndex}`)}
    {@const lineX = scales.xScale(line.date)}
    {@const labelY =
      line.labelYValue != null ?
        scales.yScale(line.labelYValue)
      : chartHeight - 4}
    <line
      x1={lineX}
      y1={-margin.top}
      x2={lineX}
      y2={chartHeight}
      class={getClasses('vertical-line-annotation', line.lineClass)}
      pointer-events="none"
    />
    {#if line.label}
      <text
        x={lineX + 4}
        y={labelY}
        class={getClasses('vertical-line-annotation-label', line.labelClass)}
        pointer-events="none"
      >
        {line.label}
      </text>
    {/if}
  {/each}
{/if}

<style lang="scss">
  line {
    stroke: var(--theme-colour-accent);
    stroke-width: 2;
    opacity: 0.7;
  }

  text {
    font-size: var(--theme-font-size-sm);
    fill: var(--theme-colour-text-primary);
  }
</style>
