<script lang="ts">
  import type { ScrollerStep } from '../@types/global';

  export let index: number;
  export let steps: ScrollerStep[] = [];
  export let preload: number = 1;
  export let stackBackground: boolean = true;
</script>

{#each steps as step, i}
  <!-- Load the step(s) before and after the active one, only -->
  <!-- Unless stackBackground is true. If so, keep all steps before the current one loaded. -->
  {#if preload === 0 || (i >= (stackBackground ? 0 : index - preload) && i <= index + preload)}
    <div
      class="step-background step-{i + 1} w-full absolute"
      class:visible="{stackBackground ? i <= index : i === index}"
      class:hidden="{stackBackground ? i > index : i !== index}"
    >
      <svelte:component
        this="{step.background}"
        {...step.backgroundProps || {}}
      />
    </div>
  {/if}
{/each}

<style lang="scss">
  .step-background {
    transition: 0.5s opacity ease;

    &.hidden {
      opacity: 0;
    }
  }
</style>
