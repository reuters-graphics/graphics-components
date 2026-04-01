<script lang="ts">
  import type { ComputedScales, TextAnnotation } from '../../types/index.js';

  interface Props {
    textAnnotations?: TextAnnotation[];
    scales: ComputedScales;
  }

  let { textAnnotations, scales }: Props = $props();

  function getClasses(baseClass: string, className?: string): string {
    return className ? `${baseClass} ${className}` : baseClass;
  }
</script>

{#if textAnnotations && textAnnotations.length > 0}
  {#each textAnnotations as annotation, annIndex (annotation.id ?? `annotation-${annIndex}`)}
    {@const annX = scales.xScale(annotation.date)}
    {@const annY = scales.yScale(annotation.value)}
    {@const annXOffset = annotation.xOffset ?? 0}
    {@const annYOffset = annotation.yOffset ?? -10}
    {@const annTextAnchor = annotation.textAnchor ?? 'middle'}
    {#if annotation.background}
      <rect
        x={annX +
          annXOffset -
          (annTextAnchor === 'start' ? 2
          : annTextAnchor === 'end' ? (annotation.background.padding ?? 4)
          : (annotation.background.padding ?? 4))}
        y={annY + annYOffset - (annotation.background.padding ?? 4)}
        width={annotation.background.padding ?? 4}
        height={annotation.background.padding ?? 4}
        rx={annotation.background.rx ?? 3}
        class={getClasses(
          'text-annotation-background',
          annotation.background.className
        )}
        pointer-events="none"
      />
    {/if}
    <text
      x={annX + annXOffset}
      y={annY + annYOffset}
      text-anchor={annTextAnchor}
      dominant-baseline="middle"
      class={getClasses('text-annotation', annotation.className)}
      pointer-events="none"
    >
      {annotation.text}
    </text>
  {/each}
{/if}

<style lang="scss">
  .text-annotation {
    fill: #333;
    font-size: 14px;
    font-weight: normal;
    dominant-baseline: middle;
  }

  .text-annotation-background {
    fill: #fff;
    opacity: 0.9;
  }
</style>
