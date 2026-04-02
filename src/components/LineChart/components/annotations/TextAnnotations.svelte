<script lang="ts">
  import type { ComputedScales, TextAnnotation } from '../../types/index.js';

  interface Props {
    annotations?: TextAnnotation[];
    scales: ComputedScales;
  }

  let { annotations, scales }: Props = $props();
</script>

{#if annotations && annotations.length > 0}
  {#each annotations as annotation, annIndex (annotation.id ?? `annotation-${annIndex}`)}
    {@const annX = scales.xScale(annotation.date)}
    {@const annY = scales.yScale(annotation.value)}

    <text
      x={annX}
      y={annY}
      text-anchor="middle"
      dominant-baseline="middle"
      class="text-annotation {annotation.annotationClass || ''}"
      pointer-events="none"
    >
      {annotation.text}
    </text>
  {/each}
{/if}

<style lang="scss">
  text {
    color: var(--theme-colour-text-primary);
    font-size: var(--theme-font-size-sm);
  }
</style>
