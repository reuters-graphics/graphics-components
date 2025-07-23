<script lang="ts">
  import ScrollyVideo from '../ScrollyVideo.svelte';
  import ScrollerBase from '../../ScrollerBase/ScrollerBase.svelte';
  import Tennis from '../videos/tennis.mp4';
  import { onDestroy } from 'svelte';
  import type { ScrollyVideoInstance } from '../ts/ScrollyVideo';

  let progress = $state(0);
  let scrollyVideo: ScrollyVideoInstance | undefined = $state(undefined);
  let now;
  let then = 0;
  let time = 0;
  let currentProgress = 0; // holds progress value for dynamic looping
  let loopCutoff = 0.35; // value between 0-1 to loop the video by
  let totalTime = 9 * 1000; // milliseconds

  let animationId = $state(0);

  // clamps n value between low and high
  function constrain(n: number, low: number, high: number) {
    return Math.max(Math.min(n, high), low);
  }

  // maps n value between two ranges
  function map(
    n: number,
    start1: number,
    stop1: number,
    start2: number,
    stop2: number,
    withinBounds = true
  ) {
    const newval =
      ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    if (!withinBounds) {
      return newval;
    }
    if (start2 < stop2) {
      return constrain(newval, start2, stop2);
    } else {
      return constrain(newval, stop2, start2);
    }
  }

  // loops the video between 0 and loopCutoff
  function renderVideo() {
    if (progress < loopCutoff) {
      now = Date.now();
      const elapsed = now - then;

      time += elapsed;
      currentProgress = map(time, 0, totalTime, 0, 1);
      scrollyVideo?.setVideoPercentage(currentProgress, {
        jump: true,
      });

      if (currentProgress > loopCutoff) {
        currentProgress = 0;
        time = 0;
        scrollyVideo?.setVideoPercentage(0, { jump: true });
      }

      then = now;
    } else {
      scrollyVideo?.setVideoPercentage(progress, {
        jump: true,
      });
    }

    animationId = requestAnimationFrame(renderVideo);
  }

  // initializes video autoplay
  // when it's ready to play
  function initAutoplay() {
    then = Date.now();
    renderVideo();
  }

  // cancel RAF on destroy
  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });
</script>

<ScrollerBase bind:progress query="div.step-foreground-container" visible>
  {#snippet backgroundSnippet()}
    <ScrollyVideo
      bind:scrollyVideo
      src={Tennis}
      height="100svh"
      trackScroll={false}
      showDebugInfo
      onReady={initAutoplay}
    />
    <div id="progress-bar">
      <p>ScrollerBase progress: {progress.toPrecision(2)}</p>
      <progress class="mb-4" value={progress}></progress>
    </div>
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
      height: 100%;
      color: white;
    }
  }
</style>
