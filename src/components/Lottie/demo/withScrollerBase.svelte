<script lang="ts">
  import ScrollerBase from '../../ScrollerBase/ScrollerBase.svelte';
  import Lottie from '../Lottie.svelte';
  import LottieSample from '../lottie/themesLottie.zip?url';

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
    <Lottie src={LottieSample} {progress} showDebugInfo />
  {/snippet}
  {#snippet foregroundSnippet()}
    <div class="step-foreground-container"><h3>Step 1</h3></div>
    <div class="step-foreground-container"><h3>Step 2</h3></div>
    <div class="step-foreground-container"><h3>Step 3</h3></div>
    <div class="step-foreground-container"><h3>Step 4</h3></div>
    <div class="step-foreground-container"><h3>Step 5</h3></div>
  {/snippet}
</ScrollerBase>

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  .step-foreground-container {
    height: 100lvh;
    width: 50%;
    margin: 0 auto;

    h3 {
      background-color: antiquewhite;
      text-align: center;
    }
  }
</style>
