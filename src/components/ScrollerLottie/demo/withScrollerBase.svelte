<script lang="ts">
  import ScrollerBase from '../../ScrollerBase/ScrollerBase.svelte';
  import ScrollerLottie from '../ScrollerLottie.svelte';
  import LottieSample from '../data/themesLottie.lottie?url';

  // Optional: Bind your own variables to use them in your code.
  let count = $state(1);
  let index = $state(0);
  let offset = $state(0);
  let progress = $state(0);
  let top = $state(0);
  let threshold = $state(0.5);
  let bottom = $state(1);
</script>

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
    <!-- Add custom background HTML or component -->
    <div class="lottie-container">
      <ScrollerLottie src={LottieSample} showDebugInfo {progress} />
    </div>
  {/snippet}
  {#snippet foregroundSnippet()}
    <!-- Add custom foreground HTML or component -->
    <div class="step-foreground-container"><p>Step 1</p></div>
    <div class="step-foreground-container"><p>Step 2</p></div>
    <div class="step-foreground-container"><p>Step 3</p></div>
    <div class="step-foreground-container"><p>Step 4</p></div>
    <div class="step-foreground-container"><p>Step 5</p></div>
  {/snippet}
</ScrollerBase>

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  .lottie-container {
    // border: 2px solid red;
    width: 100%;
    height: 100lvh;
  }

  .step-foreground-container {
    height: 100lvh;
    width: 50%;
    background-color: rgba(0, 0, 0, 0);
    padding: 1em;
    margin: 0 auto;
    position: relative;
    margin-bottom: 2rem;

    p {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: antiquewhite;
      text-align: center;
    }
  }
</style>
