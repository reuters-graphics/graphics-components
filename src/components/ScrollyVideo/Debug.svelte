<script lang="ts">
  const { componentState } = $props();

  let isMoving = $state(false);
  let preventDetails = $state(false);
  let position = $state({ x: 8, y: 8 });

  function onMouseDown(e: MouseEvent) {
    isMoving = true;
    e.preventDefault();
  }

  function onMouseMove(e: MouseEvent) {
    if (isMoving) {
      position = {
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      };
      preventDetails = true;
    }
    e.preventDefault();
  }

  function onMouseUp(e: MouseEvent) {
    if (isMoving) {
      isMoving = false;
      setTimeout(() => {
        preventDetails = false;
      }, 5);
      e.stopImmediatePropagation();
    }
    e.preventDefault();
  }

  function onClick(e: MouseEvent) {
    if (preventDetails) {
      e.preventDefault();
    }
    isMoving = false;
  }
</script>

<svelte:window onmousemove={onMouseMove} />

<div
  style="position: absolute; top: {position.y}px; left: {position.x}px; z-index: 5; user-select: none;"
  role="region"
>
  <details class="debug-info" open>
    <summary
      class="text-xxs font-sans font-bold title"
      style="grid-column: span 2;"
      onmousedown={onMouseDown}
      onmouseup={onMouseUp}
      onclick={onClick}
    >
      CONSOLE
    </summary>
    <div class="state-debug">
      <p>Source:</p>
      <p class="state-value">{componentState.generalData.src}</p>
      <!--  -->
      <p>Progress:</p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value">{componentState.generalData.videoPercentage}</p>
        <div id="video-progress-bar">
          <div
            style="width: {componentState.generalData.videoPercentage *
              100}%; height: 100%;"
          ></div>
        </div>
      </div>
      <!--  -->
      <p>Framerate:</p>
      <p class="state-value">{componentState.generalData.frameRate}</p>
      <!--  -->
      <p>Current time:</p>
      <p class="state-value">
        {componentState.generalData.currentTime}/{componentState.generalData
          .totalTime}
      </p>
      <!--  -->
      {#if componentState.usingWebCodecs}
        <p>Codec:</p>
        <p class="state-value">
          <span class="tag">{componentState.framesData.codec}</span>
        </p>

        <!--  -->
        <p>Current frame:</p>
        <p class="state-value">
          {componentState.framesData.currentFrame}/{componentState.framesData
            .totalFrames}
        </p>
      {/if}
      <!--  -->
      <p>Will Autoplay?:</p>
      <p class="state-value">
        <span class="tag">{componentState.willAutoPlay}</span>
      </p>
      <!--  -->
      {#if componentState.willAutoPlay}
        <p>Autoplaying:</p>
        <p class="state-value">
          <span class="tag">{componentState.isAutoPlaying}</span>
        </p>
        <p>Autoplay progress:</p>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <p class="state-value">{componentState.autoplayProgress}</p>
          <div id="video-progress-bar">
            <div
              style="width: {componentState.autoplayProgress *
                100}%; height: 100%;"
            ></div>
          </div>
        </div>
      {/if}
    </div>
  </details>
</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');

  .debug-info {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 1);
    z-index: 3;
    margin: 0;
    width: 50vmin;
    min-width: 50vmin;
    padding: 8px;
    border-radius: 8px;
    overflow: auto;
    resize: horizontal;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.5));

    @media (prefers-reduced-motion: no-preference) {
      interpolate-size: allow-keywords;
    }

    &::details-content {
      opacity: 0;
      block-size: 0;
      overflow-y: clip;
      transition:
        content-visibility 0.4s allow-discrete,
        opacity 0.4s,
        block-size 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }

    &[open]::details-content {
      opacity: 1;
      block-size: auto;
    }

    .title {
      width: 100%;
      font-family: 'Geist Mono', monospace;
      color: white;
      margin: 0;
    }

    * {
      user-select: none;
    }
  }

  .debug-info[open] {
    opacity: 1;
  }

  div.state-debug {
    display: grid;
    width: 100%;
    padding: 8px 8px 16px 8px;
    grid-template-columns: 20vmin 1fr;
    align-items: center;
    gap: 0.75rem 0.25rem;
    background-color: #1e1e1e;
    border-radius: 4px;
    margin-top: 8px;
  }

  p {
    font-size: var(--theme-font-size-xxs);
    font-family: 'Geist Mono', monospace;
    padding: 0;
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    overflow-wrap: anywhere;
    line-height: 100%;
    font-variant: tabular-nums;
  }

  .state-value {
    color: white;
  }

  #video-progress-bar {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    height: 2px;
    border-radius: 50px;
    // margin: auto;

    div {
      background-color: white;
      border-radius: 50px;
    }
  }

  .tag {
    padding: 0.1rem 0.2rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.2);
    text-transform: uppercase;
    font-weight: 500;
  }
</style>
