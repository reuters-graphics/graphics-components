<script lang="ts">
  import type { ScrollerStep } from '../@types/global';

  interface Props {
    index: number;
    steps: ScrollerStep[];
    preload?: number;
    stackBackground?: boolean;
  }

  let { index, steps, preload = 1, stackBackground = true }: Props = $props();

    function shouldShowStep(i:number) {
    if (preload === 0) return true;
    if (stackBackground) return i <= index;
    return i >= index - preload && i <= index + preload;
  }

  function isStepVisible(i:number) {
    if (stackBackground) return i <= index;
    return i === index;
  }
</script>


{#each steps as step, i}
  {#if shouldShowStep(i)}
    <div
      class={`step step-${i + 1} w-full absolute`}
      class:visible={isStepVisible(i)}
      class:invisible={!isStepVisible(i)}
    >
      <step.background {...step.backgroundProps || {}}></step.background>
    </div>
  {/if}
{/each}

<style lang="scss">
  .step-background {
    opacity: 0;
    will-change: opacity;
    transition: 0.35s opacity ease;

    &.visible {
      opacity: 1;
    }

    &.invisible {
      opacity: 0;
    }
  }
</style>
