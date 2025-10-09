<script lang="ts">
  import ScrollerVideo from '../ScrollerVideo.svelte';
  import ScrollerBase from '../../ScrollerBase/ScrollerBase.svelte';
  import Goldengate from '../videos/goldengate.mp4';

  // ScrollerBase props
  let progress = $state(0);
</script>

<ScrollerBase bind:progress query="div.step-foreground-container" visible>
  {#snippet backgroundSnippet()}
    <ScrollerVideo
      src={Goldengate}
      height="100lvh"
      trackScroll={false}
      videoPercentage={progress}
      transitionSpeed={40}
      showDebugInfo
    />
  {/snippet}
  {#snippet foregroundSnippet()}
    <!-- Add custom foreground HTML or component -->
    <div class="step-foreground-container">
      <h3 class="text-center">Step 1</h3>
    </div>
    <div class="step-foreground-container">
      <h3 class="text-center">Step 2</h3>
    </div>
    <div class="step-foreground-container">
      <h3 class="text-center">Step 3</h3>
    </div>
  {/snippet}
</ScrollerBase>

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  .step-foreground-container {
    height: 100lvh;
    width: 50%;
    padding: 1em;
    margin: auto;

    h3 {
      // align center
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: white;
    }
  }
</style>
