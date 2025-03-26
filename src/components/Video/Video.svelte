<!-- @component `Video` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-multimedia-video--docs) -->
<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import Controls from './components/Controls.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import type { ContainerWidth } from '../@types/global';
  import type { Snippet } from 'svelte';

  interface Props {
    /** Video source */
    src: string;
    /** Image to be shown while the video is downloading */
    poster?: string;
    /** Whether to wrap the graphic with an aria hidden tag. */
    hidden?: boolean;
    /** ARIA description, passed in as a markdown string. */
    ariaDescription?: string;
    /** Add extra classes to the block tag to target it with custom CSS. */
    class?: string;
    /** Title of the graphic */
    title?: string;
    /** Notes to the graphic, passed in as a markdown string OR a custom snippet. */
    notes: string | Snippet;
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
    sountAutoplay?: boolean;
    /** Whether the video should play when it comes into view or just on page load */
    playVideoWhenInView?: boolean;
    /** If video plays with intersection observer, how much of it should be into view to start playing */
    playVideoThreshold?: number;
    /** Whether to have the option to pause and play video */
    possibleToPlayPause?: boolean;
    /** Whether to show the play / pause buttons */
    showControls?: boolean;
    /** Whether you need to hover over the video to see the controls */
    hoverToSeeControls?: boolean;
    /** Whether to use a separate replay icon or use the play icon for replay as well */
    separateReplayIcon?: boolean;
    /** Change the colour of the play/pause button */
    controlsColour?: string;
    /** Change the opacity of the play/pause button */
    controlsOpacity?: number;
    /** Have four options for controls position - top right, top left, bottom right, bottom left */
    controlsPosition?:
      | 'top right'
      | 'top left'
      | 'bottom right'
      | 'bottom left';
  }

  let {
    src,
    poster = '',
    hidden = true,
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
    sountAutoplay = false,
    playVideoWhenInView = true,
    playVideoThreshold = 0.5,
    possibleToPlayPause = true,
    showControls = true,
    hoverToSeeControls = false,
    separateReplayIcon = false,
    controlsColour = '#333',
    controlsOpacity = 0.5,
    controlsPosition = 'top left',
  }: Props = $props();

  /// //////////////////////////////////
  /// /////// Internal Logic ///////////
  /// //////////////////////////////////
  // If it's not possible to play/pause, then hide the controls
  if (!possibleToPlayPause) showControls = false;

  // Internal props
  let time = $state(0);
  let duration = $state(0);
  let paused = $state(true);
  let clickedOnPauseBtn = $state(false); // special variable to track if user clicked on 'pause' btn to help with audio logic
  let resetCondition = $derived(time >= duration); // - 0.1;

  // Dimensions etc other useful things
  let heightVideo = $state(0);
  let widthVideo = $state(0);
  let heightVideoContainer = $state(0);
  let widthVideoContainer = $state(0);
  const controlsBorderOffset = 50;

  // For intersection observer
  let intersecting = $state(false);
  let element: HTMLElement = $state(new HTMLElement()); // ; | null
  let videoElement: HTMLVideoElement = $state(new HTMLVideoElement());

  // For video with sound, check if there has been an interaction with the DOM
  let interactedWithDom = false;
  const setInteractedWithDom = () => {
    interactedWithDom = true;
  };

  let interactiveControlsOpacity = $state(controlsOpacity);

  $effect(() => {
    // Play the video (with no sound) if it's intersecting; pause when it's no longer intersecting
    if (playVideoWhenInView && intersecting && muteVideo) paused = false;

    // Pause the video if it's no longer intersecting
    if (playVideoWhenInView && !intersecting) paused = true;

    // Special case for video with sound
    // Only ff you've clicked on play button or interacted with DOM in any way previously, video with audio will play
    if (
      sountAutoplay &&
      playVideoWhenInView &&
      intersecting &&
      !muteVideo &&
      interactedWithDom &&
      !clickedOnPauseBtn // so video doesn't autoplay when coming into view again if paused previously
    )
      paused = false;

    if (sountAutoplay && !muteVideo && !interactedWithDom) paused = true;
  });

  // To get the pause state passed up from the Controls
  const pausePlayEvent = (e) => {
    const fwdPaused = e.detail.paused;
    const fwdClickedOnPauseBtn = e.detail.clickedOnPauseBtn;
    paused = fwdPaused;
    clickedOnPauseBtn = fwdClickedOnPauseBtn;
  };

  // Warning to missing aria attributes
  if (hidden && !ariaDescription) {
    console.warn(
      'Must provide aria description for video components if hidden is true.'
    );
  }
</script>

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
      interactiveControlsOpacity = controlsOpacity;
    }}
    onfocus={() => {
      interactiveControlsOpacity = controlsOpacity;
    }}
    onmouseout={() => {
      interactiveControlsOpacity = 0;
    }}
    onblur={() => {
      interactiveControlsOpacity = 0;
    }}
  >
    {#if (hidden && ariaDescription) || !hidden}
      {#if ariaDescription}
        <p class="visually-hidden">{ariaDescription}</p>
      {/if}

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
            aria-hidden={hidden}
            bind:clientWidth={widthVideoContainer}
            bind:clientHeight={heightVideoContainer}
          >
            {#if possibleToPlayPause}
              {#if showControls}
                <Controls
                  on:pausePlayEvent={pausePlayEvent}
                  {paused}
                  {clickedOnPauseBtn}
                  controlsOpacity={hoverToSeeControls ?
                    interactiveControlsOpacity
                  : controlsOpacity}
                  {controlsPosition}
                  {widthVideoContainer}
                  {heightVideoContainer}
                  {controlsBorderOffset}
                  {resetCondition}
                  {separateReplayIcon}
                  {controlsColour}
                />
              {:else}
                <button
                  class="border-0 m-0 p-0 bg-transparent absolute"
                  aria-label="Play or pause video"
                  onclick={() => {
                    if (paused === true) {
                      paused = false;
                    } else {
                      paused = true;
                    }
                  }}
                  style="top: 0; left: 0; width: {widthVideoContainer}px; height: {heightVideoContainer}px;"
                ></button>
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
              bind:clientWidth={widthVideo}
              bind:clientHeight={heightVideo}
            >
              <track kind="captions" />
            </video>
          </div>
        </IntersectionObserver>
      {:else}
        <!-- Video element without Intersection observer -->
        <div
          class="video-wrapper relative"
          aria-hidden={hidden}
          bind:clientWidth={widthVideoContainer}
          bind:clientHeight={heightVideoContainer}
        >
          {#if possibleToPlayPause}
            {#if showControls}
              <Controls
                on:pausePlayEvent={pausePlayEvent}
                {paused}
                {clickedOnPauseBtn}
                {controlsOpacity}
                {controlsPosition}
                {widthVideoContainer}
                {heightVideoContainer}
                {controlsBorderOffset}
                {resetCondition}
                {separateReplayIcon}
                {controlsColour}
              />
            {:else}
              <button
                class="border-0 m-0 p-0 bg-transparent absolute"
                aria-label="Play or pause video"
                onclick={() => {
                  if (paused === true) {
                    paused = false;
                  } else {
                    paused = true;
                  }
                }}
                style="top: 0; left: 0; width: {widthVideoContainer}px; height: {heightVideoContainer}px;"
              ></button>
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
            bind:clientWidth={widthVideo}
            bind:clientHeight={heightVideo}
          >
            <track kind="captions" />
          </video>
        </div>
      {/if}
    {/if}
  </div>
  {#if notes}
    <!-- Custom notes and source slot -->
    <slot name="notes" />
  {/if}
</GraphicBlock>
