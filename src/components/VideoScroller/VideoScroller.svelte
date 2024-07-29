<!-- progress as read-only prop, might be useful for controlling an external attribute based on it  -->

<!-- @component `VideoScroller` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-VideoScroller--default) -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import { marked } from 'marked';

  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';
  import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.svelte';

  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  /** Height of the scrolly in lvh units. */
  export let height: number = 1200;

  // You can declare custom types to help users implement your component.
  type ContainerWidth =
    | 'narrower'
    | 'narrow'
    | 'normal'
    | 'wide'
    | 'wider'
    | 'widest'
    | 'fluid';

  type Position = 'left' | 'middle' | 'right';

  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'fluid';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';

  /** Assets path to fetch media */
  export let assetsPath: string = '';

  /** To view a timeline of the scrolly. Helps set values when adding annotations to the scrolly. */
  export let debug: boolean = false;

  interface Video {
    breakpoint: number;
    aspectRatio: number | string;
    src: string;
  }
  /**
   * Array of Video objects
   * @required
   */
  export let videos: Video[] = [
    {
      breakpoint: 800,
      aspectRatio: 1,
      src: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_5mb.mp4',
    },
  ];

  interface Annotation {
    anno: string;
    start: number;
    end: number;
    width?: ContainerWidth;
    props?: object;
  }

  /** Array of Annotation objects */
  export let annotations: Annotation[] = [];

  /** Object containing the annotations */
  export let annotationObject: object = {};

  /** Class to style annotations */
  export let annotationClass: string = '';

  /** Time to delay fade in/out in ms */
  export let annoFadeDelay: number = 0;

  /** Time duration for fade in/out in ms */
  export let annoFadeDuration: number = 300;

  interface Foreground {
    element: string;
    position: number;
    props?: object;
  }

  /** Array of captions */
  export let foreground: Foreground[] = [];

  /** Class to style captions */
  export let foregroundClass: string = '';

  /** Class to style captions */
  export let foregroundPosition: Position = 'middle';

  /** Caption below the video */
  export let caption: string = 'Credits. REUTERS';

  /** Specify width for the credit text */
  export let captionWidth: ContainerWidth = 'normal';

  /** Specify URL for the poster image */
  export let posterSrc: string;

  /** To display embed version */
  export let embedded: boolean = false;

  /** The height of embed scrolly in px units */
  export let embedHeight: number = 800;

  /** The height of embed scrolly in px units */
  export let embedLength: number = 400;

  /** Sets the maximum playbackRate for the video */
  export let transitionSpeed: number = 8;

  // internal use variables
  let innerWidth: number;
  let innerHeight: number;
  let containerWidth: number;
  let containerHeight: number;

  // containerHeight - window height
  // to compensate for threshold of 50% vertical
  let heightToConsider: number;

  let readyToPlay: boolean = true;

  // internal variables for embed version
  let readyState: number = 0;
  let embeddedVideo: any;
  let currentTime: number;
  let duration: number;
  let paused: boolean = true;

  /** Read-only progress prop */
  export let progress: number = 0;

  // local store to track progress
  const progressStore = writable(0);

  // The container binding
  let scrolly: any;

  // URL in use, depending upon current breakpoint
  // internal use
  let url: string;

  // Current breakpoint
  // internal use
  let currentAspectRatio: string | number;

  // Binds placeholder element
  let posterElement;

  // Sort so breakpoints always descend
  $: {
    videos.sort((a, b) => (a.breakpoint < b.breakpoint ? 1 : -1));
  }

  onMount(() => {
    containerWidth = scrolly.getBoundingClientRect().width;

    heightToConsider = containerHeight - height;

    // Calculate the progress based on the scrolly height
    // Keeps vertical center as threshold for the calculation
    function handleVideoScroll() {
      if (scrolly) {
        const ScrollyContainerTop = scrolly.getBoundingClientRect().top;
        const ScrollyContainerBottom = scrolly.getBoundingClientRect().bottom;

        if (ScrollyContainerTop < 0 && ScrollyContainerBottom > innerHeight) {
          // progress = -ScrollyContainerTop / containerHeight;
          progressStore.set(-ScrollyContainerTop / heightToConsider);
        } else if (ScrollyContainerTop > 0 && $progressStore !== 0) {
          // scrolly container's top has not crossed the screen top yet
          // video is yet to start
          // progress = 0;
          progressStore.set(0);
        } else if (
          ScrollyContainerBottom < innerHeight &&
          $progressStore !== 1
        ) {
          // scrolly container's bottom has left the screen bottom
          // video has reached the end
          // progress = 1;
          progressStore.set(1);
        }

        if (!readyToPlay) {
          posterElement.style.top = $progressStore * heightToConsider + 'px';
        }
      }
    }

    if (!embedded) {
      window.addEventListener('scroll', handleVideoScroll);
    }
  });

  // handle video URL based on breakpoints
  function handleURL() {
    if (containerWidth) {
      let flag = false;

      // check which breakpoint the container width corresponds to
      // and set flag if matches
      videos.forEach((vid) => {
        if (vid.breakpoint > 0 && containerWidth <= vid.breakpoint) {
          url = vid.src;
          currentAspectRatio = vid.aspectRatio;
          flag = true;
        }
      });

      // if the flag is not set
      // set the url, aspectRatio to the largest
      if (!flag) {
        url = videos[0].src;
        currentAspectRatio = videos[0].aspectRatio;
      }
    }
  }

  // scrolly loaded
  function videoIsReadyToPlay() {
    readyToPlay = true;
  }

  // handle play/pause for embed version
  function handleClick() {
    paused = !paused;
  }

  // listen to screen width and container width changes
  $: if (innerWidth && width && containerWidth) {
    handleURL();
  }

  // calculate progress based on currentTime for the embed version
  $: if (embedded) {
    progressStore.set(currentTime / duration);
  }

  // once the media is ready, allow it to be played
  $: if (readyState === 4) {
    paused = false;
  }

  // height responsible for the scrolling region
  $: heightToConsider = containerHeight - innerHeight;

  // write back progress value from store to prop
  $: progress = $progressStore;
</script>

<svelte:window
  bind:innerWidth="{innerWidth}"
  bind:innerHeight="{innerHeight}"
/>

{#if embedded}
  <Block width="{width}" id="{id}" class="scrolly-video {cls}">
    <figure class="mx-0 fmy-6 embedded" style="opacity: {readyToPlay ? 1 : 0};">
      <div
        class="scrolly-container"
        style:height="{embedHeight}px"
        bind:this="{scrolly}"
        bind:clientWidth="{containerWidth}"
      >
        {#if url}
          <video
            bind:this="{embeddedVideo}"
            src="{assetsPath ? `${assetsPath}/${url}` : url}"
            style="height: {embedHeight}px;"
            bind:readyState="{readyState}"
            bind:duration="{duration}"
            bind:currentTime="{currentTime}"
            bind:paused="{paused}"
            autoplay
            playsinline
            loop
            muted
            on:click="{handleClick}"
          >
            <track kind="captions" />
          </video>
        {/if}

        <!-- display annos based on start and end -->
        <div
          class="absolute w-full pointer-events-none"
          style="top: 0px; height: {embedLength}vw;"
        >
          {#if annotations}
            {#each annotations as anno}
              <div class="container">
                {#if $progressStore > anno.start && $progressStore < anno.end}
                  <div
                    class="anno-slide"
                    transition:fade="{{
                      delay: annoFadeDelay,
                      duration: annoFadeDuration,
                    }}"
                  >
                    <div
                      class="anno {annotationClass}"
                      style="aspect-ratio: calc({currentAspectRatio});"
                    >
                      {#if anno.width}
                        <Block width="{anno.width}">
                          <svelte:component
                            this="{annotationObject[anno.anno]}"
                            {...anno.props}
                          />
                        </Block>
                      {:else}
                        <svelte:component
                          this="{annotationObject[anno.anno]}"
                          {...anno.props}
                        />
                      {/if}
                    </div>
                  </div>
                {/if}
              </div>
            {/each}
          {/if}

          {#if foreground}
            <div
              class="container pointer-events-none"
              style="top: calc({-$progressStore * 100}% + 50lvh);"
            >
              <Block
                class="caption-container h-full relative {foregroundPosition ===
                'middle'
                  ? ''
                  : foregroundPosition === 'left'
                  ? 'ml-6'
                  : 'mr-6'}"
              >
                {#each foreground as element}
                  {#if !element.props}
                    <div
                      class="scrolly-caption rounded absolute w-full m-0 text-left fp-4 {foregroundClass}"
                      style="top: {element.position * 100}%;"
                    >
                      {@html marked.parse(element.element)}
                    </div>
                  {:else if element.props}
                    <div
                      class="scrolly-component absolute w-full m-0 fp-4"
                      style="top: {element.position * 100}%;"
                    >
                      <svelte:component
                        this="{annotationObject[element.element]}"
                        {...element.props}
                      />
                    </div>
                  {/if}
                {/each}
              </Block>
            </div>
          {/if}
        </div>

        {#if debug && url}
          <div class="container pointer-events-none">
            <div class="debug-container">
              <p class="debug-text">
                {$progressStore.toFixed(4)} - {url.split('/').at(-1)}
              </p>
            </div>
          </div>
        {/if}
      </div>

      {#if caption}
        <PaddingReset containerIsFluid="{width === 'fluid'}">
          <Block width="{captionWidth}" class="notes w-full fmy-0">
            <figcaption>
              {caption}
            </figcaption>
          </Block>
        </PaddingReset>
      {/if}
    </figure>

    {#if !readyToPlay && posterSrc}
      <img
        bind:this="{posterElement}"
        class="scrolly-poster"
        src="{posterSrc}"
        alt="poster"
      />
    {/if}
  </Block>
{:else}
  <Block width="{width}" id="{id}" class="scrolly-video {cls}">
    <figure class="mx-0 fmy-6" style="opacity: {readyToPlay ? 1 : 0};">
      <div
        class="scrolly-container"
        style:height="{height}lvh"
        bind:this="{scrolly}"
        bind:clientWidth="{containerWidth}"
        bind:clientHeight="{containerHeight}"
      >
        {#if url}
          <ScrollyVideo
            src="{url}"
            trackScroll="{false}"
            videoPercentage="{$progressStore}"
            onReady="{videoIsReadyToPlay()}"
            transitionSpeed="{transitionSpeed}"
          />
        {/if}

        <!-- display annos based on start and end -->
        {#if annotations}
          {#each annotations as anno}
            <div class="container">
              {#if $progressStore > anno.start && $progressStore < anno.end}
                <div
                  class="anno-slide"
                  transition:fade="{{
                    delay: annoFadeDelay,
                    duration: annoFadeDuration,
                  }}"
                >
                  <div
                    class="anno {annotationClass}"
                    style="aspect-ratio: calc({currentAspectRatio});"
                  >
                    {#if anno.width}
                      <Block width="{anno.width}">
                        <svelte:component
                          this="{annotationObject[anno.anno]}"
                          {...anno.props}
                        />
                      </Block>
                    {:else}
                      <svelte:component
                        this="{annotationObject[anno.anno]}"
                        {...anno.props}
                      />
                    {/if}
                  </div>
                </div>
              {/if}
            </div>
          {/each}
        {/if}

        {#if foreground}
          <div class="container">
            <Block
              class="caption-container h-full relative {foregroundPosition ===
              'middle'
                ? ''
                : foregroundPosition === 'left'
                ? 'ml-6'
                : 'mr-6'}"
            >
              {#each foreground as element}
                {#if !element.props}
                  <div
                    class="scrolly-caption rounded absolute w-full m-0 text-left fp-4 {foregroundClass}"
                    style="top: {element.position * 100}%;"
                  >
                    {@html marked.parse(element.element)}
                  </div>
                {:else if element.props}
                  <div
                    class="scrolly-component absolute w-full m-0 fp-4"
                    style="top: {element.position * 100}%;"
                  >
                    <svelte:component
                      this="{annotationObject[element.element]}"
                      {...element.props}
                    />
                  </div>
                {/if}
              {/each}
            </Block>
          </div>
        {/if}

        {#if debug && url}
          <div class="container pointer-events-none">
            <div class="debug-container">
              <p class="debug-text">
                {$progressStore.toFixed(4)} - {url.split('/').at(-1)}
              </p>
            </div>
          </div>
        {/if}
      </div>

      {#if caption}
        <PaddingReset containerIsFluid="{width === 'fluid'}">
          <Block width="{captionWidth}" class="notes w-full fmy-0">
            <figcaption>
              {@html caption}
            </figcaption>
          </Block>
        </PaddingReset>
      {/if}
    </figure>

    {#if !readyToPlay && posterSrc}
      <img
        bind:this="{posterElement}"
        class="scrolly-poster"
        src="{posterSrc}"
        alt="poster"
      />
    {/if}
  </Block>
{/if}

<style lang="scss">
  @import './../../scss/mixins';

  .container {
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: 2;
    container-type: size;
  }

  :global {
    .caption-container {
      width: 100%;
      max-width: calc($column-width-normal * 0.9) !important;

      @container (max-width: 1200px) {
        width: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
      }
    }
  }

  .anno-slide {
    position: sticky;
    top: 0px;
    height: 100lvh;
    width: 100%;
    overflow: hidden;
  }

  .anno {
    height: 100%;
    width: auto;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .scrolly-caption {
    background-color: rgba(255, 255, 255, 0.8);
    transform: translate(0, -50%);

    :global(p:last-child) {
      margin-bottom: 0;
    }
  }

  .scrolly-component {
    transform: translate(0, -50%);
  }

  .debug-container {
    position: sticky;
    top: 0px;
    height: 100lvh;
    background: radial-gradient(
      ellipse 400px 100px at 0px 0px,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .debug-text {
    font-family: var(--theme-font-family-sans-serif);
    position: absolute;
    top: 0px;
    color: var(--theme-colour-background);
    font-variant-numeric: tabular-nums;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5));
  }

  .scrolly-poster {
    height: 100lvh;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0px;
    margin: 0;
    padding: 0;
  }

  .embedded {
    .scrolly-container {
      overflow: hidden;

      video {
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>
