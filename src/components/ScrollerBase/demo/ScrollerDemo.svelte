<script lang="ts">
  import ScrollerBase from '../ScrollerBase.svelte';
  import DraggableLabel from './DraggableLabel.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';

  let count = $state(1);
  let index = $state(0);
  let offset = $state(0);
  let progress = $state(0);
  let top = $state(0.1);
  let threshold = $state(0.5);
  let bottom = $state(0.9);
</script>

<BodyText
  text="Read the documentation on the props `progress`, `top`, `threshold`, `bottom` under **Controls** to understand how they work."
/>

<div class="scroller-demo-container">
  <ScrollerBase
    {top}
    {threshold}
    {bottom}
    bind:count
    bind:index
    bind:offset
    bind:progress
    query="div.step-foreground-container"
  >
    {#snippet backgroundSnippet()}
      <p class="mb-0">
        Current step: <strong>{index + 1}/{count}</strong>
      </p>
      <progress class="mb-4" value={(index + 1) / count}></progress>

      <p class="mb-0">Offset in current step</p>
      <progress class="mb-4" value={offset}></progress>

      <p class="mb-0">Total progress</p>
      <progress class="mb-4" value={progress}></progress>
    {/snippet}
    {#snippet foregroundSnippet()}
      <div class="step-foreground-container font-medium">Step 1</div>
      <div class="step-foreground-container font-medium">Step 2</div>
      <div class="step-foreground-container font-medium">Step 3</div>
      <div class="step-foreground-container font-medium">Step 4</div>
      <div class="step-foreground-container font-medium">Step 5</div>
    {/snippet}
  </ScrollerBase>
</div>

<BodyText
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
/>

<DraggableLabel bind:value={top} label="top" />
<DraggableLabel bind:value={threshold} label="threshold" />
<DraggableLabel bind:value={bottom} label="bottom" />

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  .scroller-demo-container {
    width: mixins.$column-width-normal;
    margin: auto;
  }

  .step-foreground-container {
    height: 100vh;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1em;
    margin: 0 0 2em 0;

    // Make it align to the right
    position: relative;
    left: 50%;
  }
</style>
