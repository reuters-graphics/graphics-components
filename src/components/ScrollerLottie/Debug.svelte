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
      <!--  -->
      <p>Progress:</p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value">{componentState.progress}</p>
        <div id="video-progress-bar">
          <div
            style="width: {componentState.progress * 100}%; height: 100%;"
          ></div>
        </div>
      </div>
      <!--  -->
      <p>Duration:</p>
      <p class="state-value">
        {componentState.duration}s
      </p>
      <!--  -->
      {#if componentState.segment}
        <p>Segment:</p>
        <p class="state-value">
          {componentState.segment[0]} -- {componentState.segment[1]}
        </p>
      {/if}
      <!--  -->
      <p>Current frame:</p>
      <p class="state-value">
        {componentState.currentFrame}/{componentState.totalFrames}
      </p>
      <!--  -->
      <p>Speed:</p>
      <p class="state-value">
        {componentState.speed}
      </p>
      <!--  -->
      <p>Autoplay:</p>
      <p class="state-value">
        <span class="tag">{componentState.autoplay}</span>
      </p>
      <!--  -->
      <p>Loop:</p>
      <p class="state-value">
        <span class="tag">{componentState.loop}</span>
        {componentState.loop ? `(Loop count: ${componentState.loopCount})` : ''}
      </p>
      <!--  -->
      <p>Mode:</p>
      <p class="state-value">
        <span class="tag">{componentState.mode}</span>
      </p>
      <!--  -->
      <p>Layout:</p>
      <p class="state-value">
        {JSON.stringify(componentState.layout)}
      </p>
      <!--  -->
      {#if Object.keys(componentState.allMarkers).length}
        <p>All markers:</p>
        <p class="state-value">
          {componentState.allMarkers}
        </p>
      {/if}
      <!--  -->
      {#if componentState.marker}
        <p>Active marker:</p>
        <p class="state-value">
          {componentState.marker}
        </p>
      {/if}
      <!--  -->
      {#if componentState.allThemes.length}
        <p>All themes:</p>
        <p class="state-value">
          {componentState.allThemes.join(', ')}
        </p>
      {/if}
      {#if componentState.activeThemeId}
        <p>Active theme ID:</p>
        <p class="state-value">
          {componentState.activeThemeId}
        </p>
      {/if}
      <!--  -->
      <p>isPaused:</p>
      <p class="state-value">
        <span class="tag">{componentState.isPaused}</span>
      </p>
      <!--  -->
      <p>isPlaying:</p>
      <p class="state-value">
        <span class="tag">{componentState.isPlaying}</span>
      </p>
      <!--  -->
      <p>isStopped:</p>
      <p class="state-value">
        <span class="tag">{componentState.isStopped}</span>
      </p>
      <!--  -->
      <p>isLoaded:</p>
      <p class="state-value">
        <span class="tag">{componentState.isLoaded}</span>
      </p>
      <!--  -->
      <p>isFrozen:</p>
      <p class="state-value">
        <span class="tag">{componentState.isFrozen}</span>
      </p>
    </div>
  </details>
</div>

<style lang="scss">
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
      font-family: var(--theme-font-family-monospace);
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
    font-family: var(--theme-font-family-monospace);
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
