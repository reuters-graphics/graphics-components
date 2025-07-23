<script lang="ts">
  import ScrollyVideo from '../ScrollyVideo.svelte';
  import ScrollerBase from '../../ScrollerBase/ScrollerBase.svelte';
  import Tennis from '../videos/tennis.mp4';
  import { onDestroy } from 'svelte';

  // Types
  import type { ScrollyVideoInstance } from '../ts/ScrollyVideo';

  let progress = $state(0);
  let scrollyVideo: ScrollyVideoInstance | undefined = $state(undefined);
  let animationFrame = $state(0);
  let index = $state(0); // index for the current step in ScrollerBase

  function jumpVideo() {
    // If ScrollerBase is on index 0, jump to the start of the video.
    // Otherwise, jump to 100% (the end) of the video.
    if (index === 0) {
      scrollyVideo?.setVideoPercentage(0, {
        jump: false, // Eases the jump
      });
    } else {
      scrollyVideo?.setVideoPercentage(1, {
        jump: false,
      });
    }

    animationFrame = requestAnimationFrame(jumpVideo);
  }

  // cancel requestAnimationFrame on destroy
  onDestroy(() => {
    cancelAnimationFrame(animationFrame);
  });
</script>

<ScrollerBase
  bind:progress
  bind:index
  query="div.step-foreground-container"
  visible
>
  <!-- ScrollyVideo as background -->
  {#snippet backgroundSnippet()}
    <ScrollyVideo
      bind:scrollyVideo
      src={Tennis}
      height="100svh"
      trackScroll={false}
      showDebugInfo
      onReady={jumpVideo}
    />
  {/snippet}

  <!-- Simple text foregrounds -->
  {#snippet foregroundSnippet()}
    <div class="step-foreground-container">
      <h3 class="text-center">Index {index}</h3>
    </div>
    <div class="step-foreground-container">
      <h3 class="text-center">Index {index}</h3>
    </div>
  {/snippet}
</ScrollerBase>

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  // svelte-scroller-background
  #progress-bar {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 4;
    right: 0;
    padding: 1rem;
    top: 0;

    progress {
      height: 6px;
      background-color: #ff000044; /* Background color of the entire bar */
      margin: 0;
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
      margin: 70% auto 0 auto;
      height: 60px;
      max-width: 400px;
      color: white;
      background: steelblue;
    }
  }
</style>
