<script>
  import Fa from 'svelte-fa';
  import { faReply, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let paused;
  export let clickedOnPauseBtn;
  export let controlsOpacity;
  export let controlsPosition;
  export let widthVideoContainer;
  export let heightVideoContainer;
  export let controlsBorderOffset;
  export let resetCondition;
  export let separateReplayIcon;
  export let controlsColour;

  function forwardBtnClick() {
    paused = !paused;
    clickedOnPauseBtn = paused === true; // so video doesn't autoplay when coming into view again if paused previously
    dispatch('pausePlayEvent', {
      paused: paused,
      clickedOnPauseBtn: clickedOnPauseBtn,
    });
  }
</script>

<button
  on:click="{forwardBtnClick}"
  style="
    opacity: {controlsOpacity}; 
    top: {controlsPosition === 'top left' || controlsPosition === 'top right'
    ? `${10}px`
    : `${heightVideoContainer - controlsBorderOffset}px`};
    left: {controlsPosition === 'top left' || controlsPosition === 'bottom left'
    ? `${10}px`
    : `${widthVideoContainer - controlsBorderOffset}px`};
    "
>
  {#if resetCondition}
    <i class="play-pause-icon replay">
      {#if separateReplayIcon}
        <Fa icon="{faReply}" size="2x" color="{controlsColour}" />
      {:else}
        <Fa icon="{faPlay}" size="2x" color="{controlsColour}" />
      {/if}
    </i>
  {:else if paused === false}
    <i class="play-pause-icon pause">
      <Fa icon="{faPause}" size="2x" color="{controlsColour}" />
    </i>
  {:else if paused === true}
    <i class="play-pause-icon play">
      <Fa icon="{faPlay}" size="2x" color="{controlsColour}" />
    </i>
  {:else}
    error
  {/if}
</button>

<style lang="scss">
  button {
    z-index: 2;
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
</style>
