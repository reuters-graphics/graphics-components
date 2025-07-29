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
      height="100svh"
      trackScroll={false}
      videoPercentage={progress}
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

  #progress-bar {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 2;
    right: 0;
    padding: 1rem;

    progress {
      height: 6px;
      background-color: #ff000044; /* Background color of the entire bar */
    }

    progress::-webkit-progress-value {
      background-color: white;
      border-radius: 10px;
    }

    progress::-webkit-progress-bar {
      background-color: #444444;
      border-radius: 10px;
    }

    p {
      font-family: var(--theme-font-family-sans-serif);
      color: white;
      font-size: var(--theme-font-size-xs);
      padding: 0;
      margin: 0;
    }
  }

  .step-foreground-container {
    height: 100vh;
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
