<script lang="ts">
  const { componentState } = $props();

  let isMoving = $state(false);
  let preventDetails = $state(false);
  let position = $state({ x: 8, y: 8 });

  const fmt = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

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

{#snippet triggerPoints()}
  {#if componentState.triggerStops.length > 0}
    {#if componentState.scrubbed}
      {@const totalStops = componentState.triggerStops.length}
      {#each Array(totalStops) as _, index}
        <span
          class="stops"
          style={`left: ${((index + 1) / (totalStops + 1)) * 100}%;`}>|</span
        >
      {/each}
    {:else}
      {#each componentState.triggerStops as stop, index}
        {#if index < componentState.triggerStops.length - 1}
          <span
            class="stops"
            style={`left: ${(stop + (componentState.triggerStops[index + 1] ?? componentState.triggerStops[componentState.triggerStops.length - 1])) * 0.5 * 100}%;`}
            >|</span
          >
        {/if}
      {/each}
    {/if}
  {/if}
{/snippet}

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
      <p>Scroll progress:</p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value progress-value">
          {@render triggerPoints()}
          <span
            class="progress-stop"
            style={`left: ${componentState.scrollProgress * 100}%; transform: translateX(-50%);`}
            >{fmt.format(componentState.scrollProgress)}</span
          >
          &nbsp;
        </p>
        <div id="video-progress-bar">
          <div
            style="width: {componentState.scrollProgress * 100}%; height: 100%;"
          ></div>
        </div>
      </div>
      <!--  -->
      <p>Progress:</p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value progress-value">
          {#if componentState.stops.length > 0}
            {#each componentState.stops as stop}
              <span class="stops" style={`left: ${stop * 100}%;`}>{stop}</span>
            {/each}
          {/if}
          <span
            class="progress-stop"
            style={`left: ${componentState.progress * 100}%; transform: translateX(-50%);`}
            >{fmt.format(componentState.progress)}</span
          >
          &nbsp;
        </p>
        <div id="video-progress-bar">
          <div
            style="width: {componentState.progress * 100}%; height: 100%;"
          ></div>
        </div>
      </div>
      <!--  -->
      <p>Direction:</p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value">
          <span class="tag">{componentState.direction}</span>
        </p>
      </div>
      <!--  -->
      {#if componentState.stops.length > 0}
        <p>Stops:</p>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <p
            class="state-value"
            style="display: flex; gap: 4px; flex-wrap: wrap;"
          >
            {#each componentState.stops as stop}
              <span class="tag">{stop}</span>
            {/each}
          </p>
        </div>
      {/if}
      <!--  -->
      <p>Handle scroll:</p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value">
          <span class="tag">{componentState.handleScroll}</span>
        </p>
      </div>
      <!--  -->
      <p>Scrubbed:</p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value">
          <span class="tag">{componentState.scrubbed}</span>
        </p>
      </div>
      <!--  -->
      <p>Easing:</p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value">
          {componentState.easing}
        </p>
      </div>
      <!--  -->
      <p>
        Duration:
        {#if componentState.scrubbed}
          <span class="tag not-applicable">NA</span>
        {/if}
      </p>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <p class="state-value">
          <span class="tag">{componentState.duration}</span>
        </p>
      </div>
      <!--  -->
    </div>
  </details>
</div>

<style lang="scss">
  * {
    font-family: monospace;
    font-weight: 500;
  }

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

  .progress-value {
    position: relative;
    height: 100%;
  }

  .stops {
    position: absolute;
    opacity: 0.5;
    transform: translateX(-50%);
  }

  .progress-stop {
    position: absolute;
    opacity: 1;
    text-wrap: nowrap;
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

  .not-applicable {
    background-color: rgba(255, 0, 0, 0.2);
    color: rgba(255, 0, 0, 0.8);
  }
</style>
