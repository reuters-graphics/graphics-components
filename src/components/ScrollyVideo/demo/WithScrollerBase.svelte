<script lang="ts">
  import ScrollyVideo from '../ScrollyVideo.svelte';
  import ScrollerBase from '../../ScrollerBase/ScrollerBase.svelte';
  import Headline from '../../Headline/Headline.svelte';
  import GraphicBlock from '../../GraphicBlock/GraphicBlock.svelte';
  import AiMap from './graphic/ai2svelte/ai-chart.svelte';
  import Goldengate from '../videos/goldengate.mp4';

  // ScrollerBase props
  let count = $state(1);
  let index = $state(0);
  let offset = $state(0);
  let progress = $state(0);
  let top = $state(0);
  let threshold = $state(0);
  let bottom = $state(1);
</script>

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
    visible
  >
    {#snippet backgroundSnippet()}
      <!-- Add custom background HTML or component -->
      <div id="progress-bar">
        <p>
          Current step: <strong>{index + 1}/{count}</strong>
        </p>
        <progress value={(index + 1) / count}></progress>

        <p>Offset in current step</p>
        <progress value={offset}></progress>

        <p>Total progress</p>
        <progress value={progress}></progress>
      </div>

      <ScrollyVideo
        src={Goldengate}
        height="100svh"
        trackScroll={false}
        videoPercentage={progress}
        objectFit="cover"
        showDebugInfo
      />
    {/snippet}
    {#snippet foregroundSnippet()}
      <!-- Add custom foreground HTML or component -->
      <div class="step-foreground-container">
        <div class="fg-child-container">
          <Headline
            class="custom-headline"
            hed="ScrollyVideo inside ScrollerBase"
            dek="This is a demo of ScrollyVideo inside ScrollerBase component."
            section={'Reuters Graphics'}
            authors={['Jane Doe']}
            publishTime={new Date('2020-01-01').toISOString()}
          />
        </div>
      </div>
      <div class="step-foreground-container"><p>Step 2</p></div>
      <div class="step-foreground-container">
        <div class="fg-child-container">
          <GraphicBlock
            title="Earthquake in Haiti"
            description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
            notes="Note: A shakemap represents the ground shaking produced by an earthquake."
          >
            <AiMap />
          </GraphicBlock>
        </div>
      </div>
      <div class="step-foreground-container"><p>Step 4</p></div>
      <div class="step-foreground-container"><p>Step 5</p></div>
    {/snippet}
  </ScrollerBase>
</div>

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

  #debugger {
    width: 100%;
    height: 100vh;
    background-color: hotpink;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 0;
      margin: 0;
    }
  }

  .step-foreground-container {
    height: 100vh;
    width: 100%;
    padding: 1em;
    position: relative;
    border: 1px solid red;

    .fg-child-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 100%;
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      font-size: 2em;
      color: white;
      font-family: var(--theme-font-family-sans-serif);
    }

    :global(.custom-headline *) {
      color: white;
    }

    :global(.fg-child-container:last-child *) {
      color: white !important;
    }
  }
</style>
