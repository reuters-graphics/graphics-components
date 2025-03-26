<script lang="ts">
  import Fa from 'svelte-fa';
  import { faReply, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

  interface Props {
    /** Function that controls pause/play event */
    pausePlayEvent: (e: CustomEvent) => void;
    /** Boolean, paused or playing */
    paused: boolean;
    /** Boolean, clicked on pause button */
    clickedOnPauseBtn: boolean;
    /** Change the opacity of the play/pause button */
    controlsOpacity?: number;
    /** Have four options for controls position - top right, top left, bottom right, bottom left */
    controlsPosition?:
      | 'top right'
      | 'top left'
      | 'bottom right'
      | 'bottom left';
    /** Width of the video container */
    widthVideoContainer: number;
    /** Height of the video container */
    heightVideoContainer: number;
    /** Colour of the controls */
    controlsBorderOffset: number;
    /** Whether to use a separate replay icon or use the play icon for replay as well */
    separateReplayIcon?: boolean;
    /** Change the colour of the play/pause button */
    controlsColour?: string;
    /** Whether to reset condition */
    resetCondition: boolean;
  }

  let {
    pausePlayEvent,
    paused,
    clickedOnPauseBtn = $bindable(),
    controlsOpacity,
    controlsPosition,
    widthVideoContainer,
    heightVideoContainer,
    controlsBorderOffset,
    resetCondition,
    separateReplayIcon,
    controlsColour,
  }: Props = $props();

  function forwardBtnClick() {
    paused = !paused;
    clickedOnPauseBtn = paused === true; // so video doesn't autoplay when coming into view again if paused previously

    console.log('forwardBtnClick paused in controls', paused);
  }
</script>

<button
  class="controls"
  onclick={() => {
    forwardBtnClick();
  }}
  style="
    opacity: {controlsOpacity};
    top: {controlsPosition === 'top left' || controlsPosition === 'top right' ?
    `${10}px`
  : controlsPosition === 'center' ?
    `${(heightVideoContainer - controlsBorderOffset) / 2}px`
  : `${heightVideoContainer - controlsBorderOffset}px`};

    left: {(
    controlsPosition === 'top left' || controlsPosition === 'bottom left'
  ) ?
    `${10}px`
  : controlsPosition === 'center' ?
    `${(widthVideoContainer - controlsBorderOffset) / 2}px`
  : `${widthVideoContainer - controlsBorderOffset}px`};
    "
>
  {#if resetCondition}
    <i class="play-pause-icon replay">
      {#if separateReplayIcon}
        <Fa icon={faReply} size="2x" color={controlsColour} />
      {:else}
        <Fa icon={faPlay} size="2x" color={controlsColour} />
      {/if}
    </i>
  {:else if paused === false}
    <i class="play-pause-icon pause">
      <Fa icon={faPause} size="2x" color={controlsColour} />
    </i>
  {:else if paused === true}
    <i class="play-pause-icon play">
      <Fa icon={faPlay} size="2x" color={controlsColour} />
    </i>
  {:else}
    error
  {/if}
</button>

<style lang="scss">
  button.controls {
    z-index: 2;
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
</style>
