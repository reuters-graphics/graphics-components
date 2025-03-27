<!-- @component `Video` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-multimedia-video--docs) -->
<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';

  // Fa icons
  import Fa from 'svelte-fa';
  import { faReply, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

  // types
  import type { ContainerWidth } from '../@types/global';
  import type { Snippet } from 'svelte';
  import type { ControlsPosition } from './types';
  import { getButtonPosition } from './utils';

  interface Props {
    /** Video source */
    src: string;
    /** Image to be shown while the video is downloading */
    poster?: string;
    /** ARIA description, passed in as a markdown string. */
    ariaDescription: string;
    /** Add extra classes to the block tag to target it with custom CSS. */
    class?: string;
    /** Title of the graphic */
    title?: string;
    /** Notes to the graphic, passed in as a markdown string OR a custom snippet. */
    notes?: string | Snippet;
    /** Description of the graphic, passed in as a markdown string. */
    description?: string;
    /** Width of the block within the article well. */
    width?: ContainerWidth;
    /** Set a different width for the text within the text well, for example, "normal" to keep the title, description and notes inline with the rest of the text well. Can't ever be wider than `width`. */
    textWidth?: ContainerWidth;
    /** Preload options. `auto` is ignored if `autoplay` is true. Can also be `none` or `metadata`. */
    preloadVideo?: 'auto' | 'none' | 'metadata';
    /** Whether the video should loop. */
    loopVideo?: boolean;
    /** Whether video should have sound or not. */
    muteVideo?: boolean;
    /** If `true`, this allow videos with sound to autoplay if the user has previously interacted with DOM */
    soundAutoplay?: boolean;
    /** Whether the video should play when it comes into view or just on page load */
    playVideoWhenInView?: boolean;
    /** Controls how much of the video should be visible when it starts playing. This is a number between 0 and 1, where 0 means the video will start playing as soon as its top enters the viewport, and 1 means it will start when the whole video is in the viewport. */
    playVideoThreshold?: number;
    /** Whether to have the option to pause and play video */
    possibleToPlayPause?: boolean;
    /** Whether to show the play / pause buttons */
    showControls?: boolean;
    /** Whether to use a separate replay icon or use the play icon for replay as well */
    separateReplayIcon?: boolean;
    /** Change the colour of the play/pause button */
    controlsColour?: string;
    /** Change the minimum opacity of the play/pause button, which you see on mouseover. Must be between 0 and 1. */
    controlsOpacityMin?: number;
    /** Change the maximum opacity of the play/pause button, which you see on mouseout. Must be between 0 and 1. */
    controlsOpacityMax?: number;
    /** Have four options for controls position - top right, top left, bottom right, bottom left */
    controlsPosition?: ControlsPosition;
    /** Offset for the controls from the border */
    controlsBorderOffset?: number;
  }

  let {
    src,
    poster = '',
    ariaDescription,
    class: cls = '',
    title,
    notes,
    description,
    width = 'normal',
    textWidth = 'normal',
    preloadVideo = 'auto',
    loopVideo = false,
    muteVideo = true,
    soundAutoplay = false,
    playVideoWhenInView = true,
    playVideoThreshold = 0.5,
    possibleToPlayPause = true,
    showControls = true,
    separateReplayIcon = false,
    controlsColour = '#333',
    controlsOpacityMin = 0,
    controlsOpacityMax = 0.7,
    controlsPosition = 'top left',
    controlsBorderOffset = 10,
  }: Props = $props();

  /// //////////////////////////////////
  /// /////// Internal Logic ///////////
  /// //////////////////////////////////
  // If it's not possible to play/pause, then hide the controls
  if (!possibleToPlayPause) showControls = false;

  // Internal props
  let paused = $state(false);
  let time = $state(0);
  let duration = $state(0);
  // let paused = $state(true);
  let clickedOnPauseBtn = $state(false); // special variable to track if user clicked on 'pause' btn to help with audio logic
  let resetCondition = $derived(time >= duration); // - 0.1;

  // Dimensions etc other useful things
  let videoHeight = $state(0);
  let videoWidth = $state(0);
  let videoHeightContainer = $state(0);
  let videoWidthContainer = $state(0);

  // For intersection observer
  let intersecting = $state(false);
  let element: HTMLElement | undefined = $state(undefined); // ; | null
  let videoElement: HTMLVideoElement | undefined = $state(undefined);

  // For video with sound, check if there has been an interaction with the DOM
  let interactedWithDom = false;
  const setInteractedWithDom = () => (interactedWithDom = true);

  let interactiveControlsOpacity = $state(controlsOpacityMax);

  // Get control button positioning
  let controlButtonPosition = $derived(
    getButtonPosition(controlsPosition, controlsBorderOffset)
  );

  /** Control play/pause */
  $effect(() => {
    // Play the video (with no sound) if it's intersecting; pause when it's no longer intersecting
    if (playVideoWhenInView && intersecting && muteVideo) paused = false;

    // Pause the video if it's no longer intersecting
    if (playVideoWhenInView && !intersecting) paused = true;

    // Special case for video with sound
    // Only ff you've clicked on play button or interacted with DOM in any way previously, video with audio will play
    if (
      soundAutoplay &&
      playVideoWhenInView &&
      intersecting &&
      !muteVideo &&
      interactedWithDom &&
      !clickedOnPauseBtn // so video doesn't autoplay when coming into view again if paused previously
    )
      paused = false;

    if (soundAutoplay && !muteVideo && !interactedWithDom) paused = true;
  });
</script>

<!-- Controls button snippet -->
{#snippet controls()}
  clickedOnPauseBtn:{clickedOnPauseBtn}
  <button
    class="controls"
    onclick={() => {
      paused = !paused;
      clickedOnPauseBtn = paused === true; // so video doesn't autoplay when coming into view again if paused previously
    }}
    style="
    opacity: {interactiveControlsOpacity};
    {controlButtonPosition}
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
{/snippet}

<!-- Transparent, invisible button that will pause/play when the video is clicked -->
{#snippet transparentButton()}
  <button
    class="border-0 m-0 p-0 bg-transparent absolute"
    aria-label="Play or pause video"
    onclick={() => {
      paused = !paused;
    }}
    style="top: 0; left: 0; width: {videoWidthContainer}px; height: {videoHeightContainer}px;"
  ></button>
{/snippet}

<svelte:window
  on:click={setInteractedWithDom}
  on:touchstart={setInteractedWithDom}
/>

<GraphicBlock
  {textWidth}
  {title}
  {description}
  notes={typeof notes === 'string' ? notes : null}
  {width}
  class="video {cls}"
>
  <div
    role="figure"
    onmouseover={() => {
      interactiveControlsOpacity = controlsOpacityMax;
    }}
    onfocus={() => {
      interactiveControlsOpacity = controlsOpacityMax;
    }}
    onmouseout={() => {
      interactiveControlsOpacity = controlsOpacityMin;
    }}
    onblur={() => {
      interactiveControlsOpacity = controlsOpacityMin;
    }}
  >
    {#if playVideoWhenInView}
      <!-- Video element with Intersection Observer -->
      <IntersectionObserver
        {element}
        bind:intersecting
        threshold={playVideoThreshold}
        once={false}
      >
        <div
          bind:this={element}
          class="video-wrapper relative block"
          bind:clientWidth={videoWidthContainer}
          bind:clientHeight={videoHeightContainer}
        >
          {#if possibleToPlayPause}
            {#if showControls}
              {@render controls()}
            {:else}
              {@render transparentButton()}
            {/if}
          {/if}
          <video
            bind:this={videoElement}
            {src}
            {poster}
            class="pointer-events-none relative"
            width="100%"
            muted={muteVideo}
            playsinline
            preload={preloadVideo}
            loop={loopVideo}
            aria-label={ariaDescription}
            bind:currentTime={time}
            bind:duration
            bind:paused
            bind:clientWidth={videoWidth}
            bind:clientHeight={videoHeight}
          >
            <track kind="captions" />
          </video>
        </div>
      </IntersectionObserver>
    {:else}
      <!-- Video element without Intersection observer -->
      <div
        class="video-wrapper relative"
        bind:clientWidth={videoWidthContainer}
        bind:clientHeight={videoHeightContainer}
      >
        {#if possibleToPlayPause}
          {#if showControls}
            {@render controls()}
          {:else}
            {@render transparentButton()}
          {/if}
        {/if}
        <video
          bind:this={videoElement}
          {src}
          {poster}
          class="pointer-events-none relative"
          width="100%"
          muted={muteVideo}
          playsinline
          preload={preloadVideo}
          loop={loopVideo}
          bind:currentTime={time}
          bind:duration
          bind:paused
          autoplay
          bind:clientWidth={videoWidth}
          bind:clientHeight={videoHeight}
        >
          <track kind="captions" />
        </video>
      </div>
    {/if}
  </div>
  <!-- Custom notes snippet -->
  {#if notes && typeof notes !== 'string'}
    {@render notes()}
  {/if}
</GraphicBlock>

<style lang="scss">
  button.controls {
    z-index: 2;
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: opacity 0.2s;
  }
</style>
