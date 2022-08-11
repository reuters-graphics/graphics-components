<script>
  export let index;
  export let steps = [];
  export let preload = 1;
  export let stackBackground = true;
</script>

{#each steps as step, i}
  <!-- Load the step(s) before and after the active one, only -->
  {#if preload === 0 || (i >= index - preload && i <= index + preload)}
    <div
      class="step-background step-{i + 1}"
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
    width: 100%;
    position: absolute;
    transition: 0.5s opacity ease;

    &.hidden {
      opacity: 0;
    }
  }
</style>
