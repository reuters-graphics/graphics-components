<script lang="ts">
  import { onDestroy } from 'svelte';
  import ScrollyVideo from './js/ScrollyVideo.js';
  import Debug from './Debug.svelte';
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { dev } from '$app/environment';

  /**
   * Props for the ScrollyVideo Svelte component.
   * @typedef {Object} Props
   * @property {string} [class] - CSS class for scrolly container.
   * @property {string} [id] - ID of the scrolly container.
   * @property {ScrollyVideo} [scrollyVideo] - Bindable instance of ScrollyVideo.
   * @property {string} [src] - Video source URL.
   * @property {number} [videoPercentage] - Bindable percentage value to control video playback. Ranges from 0 to 1.
   * @property {number} [transitionSpeed] - Sets the maximum playbackRate for this video.
   * @property {number} [frameThreshold] - When to stop the video animation, in seconds.
   * @property {string} [objectFit] - How the video should be resized to fit its container.
   * @property {boolean} [sticky] - Whether the video should have position: sticky.
   * @property {boolean} [full] - Whether the video should take up the entire viewport.
   * @property {boolean} [trackScroll] - Whether this object should automatically respond to scroll. Set this to false while manually controlling `videoPercentage` prop.
   * @property {boolean} [lockScroll] - Whether it ignores human scroll while it runs setVideoPercentage with enabled trackScroll.
   * @property {boolean} [useWebCodecs] - Whether the library should use the webcodecs method. For more info, visit https://scrollyvideo.js.org/
   * @property {() => void} [onReady] - The callback when it's ready to scroll.
   * @property {() => void} [onChange] - The callback for video percentage change.
   * @property {boolean} [debug] - Whether to log debug information. Internal library logs.
   * @property {boolean} [showDebugInfo] - Shows debug information on page.
   * @property {string} [height] - Height of the video container. Set it to 100svh when using inside `ScrollerBase`.
   * @property {boolean} [autoplay] - Whether the video should autoplay.
   * @property {boolean} [embedded] - Variable to control component rendering on embed page.
   * @property {string} [embeddedSrc] - Source for the embedded video. If not provided, defaults to `src`.
   * @property {Snippet} [children] - Children render function.
   */
  interface Props {
    /** CSS class for scrolly container */
    class?: string;
    /** ID of the scrolly container */
    id?: string;
    /** Bindable instance of ScrollyVideo */
    scrollyVideo?: ScrollyVideo;
    /** Video source URL */
    src?: string;
    /** Bindable percentage value to control video playback. **Ranges from 0 to 1** */
    videoPercentage?: number;
    /** Sets the maximum playbackRate for this video */
    transitionSpeed?: number;
    /** When to stop the video animation, in seconds	 */
    frameThreshold?: number;
    /** How the video should be resized to fit its container */
    objectFit?: string;
    /** Whether the video should have position: sticky	 */
    sticky?: boolean;
    /** Whether the video should take up the entire viewport	 */
    full?: boolean;
    /** Whether this object should automatically respond to scroll. Set this to **false** while manually controlling `videoPercentage` prop. */
    trackScroll?: boolean;
    /** Whether it ignores human scroll while it runs setVideoPercentage with enabled trackScroll	 */
    lockScroll?: boolean;
    /** Whether the library should use the webcodecs method. For more info, visit https://scrollyvideo.js.org/  */
    useWebCodecs?: boolean;
    /** The callback when it's ready to scroll	 */
    onReady?: () => void;
    /** The callback for video percentage change	 */
    onChange?: () => void;
    /** Whether to log debug information. Internal library logs. */
    debug?: boolean;
    /** Shows debug information on page */
    showDebugInfo?: boolean;
    /** Height of the video container. Set it to 100svh when using inside `ScrollerBase` */
    height?: string;
    /** Whether the video should autoplay */
    autoplay?: boolean;
    /** Variable to control component rendering on embed page */
    embedded?: boolean;
    /** Source for the embedded video. If not provided, defaults to `src` */
    embeddedSrc?: string;
    /** Children render function */
    children?: Snippet;
  }

  /**
   * Main logic for ScrollyVideo Svelte component.
   * Handles instantiation, prop changes, and cleanup.
   */
  let {
    scrollyVideo = $bindable(),
    videoPercentage,
    onReady = $bindable(() => {}),
    onChange = $bindable(() => {}),
    height = '200svh',
    showDebugInfo = false,
    class: cls = '',
    id = '',
    embedded = false,
    embeddedSrc = '',
    children,
    ...restProps
  }: Props = $props();

  // variable to hold the DOM element
  /**
   * Reference to the scrolly video container DOM element.
   * @type {HTMLDivElement | undefined}
   */
  let scrollyVideoContainer = $state<HTMLDivElement | undefined>(undefined);

  // Store the props so we know when things change
  let lastPropsString = '';

  $effect(() => {
    if (scrollyVideoContainer) {
      if (JSON.stringify(restProps) !== lastPropsString) {
        // if scrollyvideo already exists and any parameter is updated, destroy and recreate.
        if (scrollyVideo && scrollyVideo.destroy) scrollyVideo.destroy();
        scrollyVideo = new ScrollyVideo({
          scrollyVideoContainer,
          onReady,
          onChange,
          ...restProps,
        });

        // pass on component state to child components
        // this controls fade in and out of foregrounds
        setContext('scrollyVideoState', scrollyVideo.componentState);

        // Save the new props
        lastPropsString = JSON.stringify(restProps);
      }

      // If we need to update the target time percent
      if (
        scrollyVideo &&
        typeof videoPercentage === 'number' &&
        videoPercentage >= 0 &&
        videoPercentage <= 1
      ) {
        scrollyVideo.setVideoPercentage(videoPercentage);
      }
    }
  });

  /**
   * Cleanup the component on destroy.
   */
  onDestroy(() => {
    if (scrollyVideo && scrollyVideo.destroy) scrollyVideo.destroy();
  });

  /**
   * heightChange drives the height of the component when autoplay is set to true.
   * @type {string}
   */
  let heightChange = $derived.by(() => {
    if (scrollyVideo) {
      return `calc(${height} * ${1 - scrollyVideo?.componentState.autoplayProgress})`;
    } else {
      return height;
    }
  });
</script>

{#if embedded && (embeddedSrc || restProps.src)}
  <div class="scrolly-video-container" style="width: 100%;">
    <video
      class="scrolly-video-embedded"
      src={embeddedSrc || restProps.src}
      autoplay
      loop
      muted
      playsinline
      style="width: 100%;"
    ></video>
  </div>
{:else}
  <div
    {id}
    class="scrolly-video-container {cls}"
    style="height: {heightChange}; width: 100%; min-height: 100svh;"
  >
    <div bind:this={scrollyVideoContainer} data-scrolly-container>
      {#if scrollyVideo}
        {#if showDebugInfo && dev}
          <div class="debug-info">
            <Debug componentState={scrollyVideo.componentState} />
            <!-- <p class="text-xxs font-sans"> -->
            <!-- {@html JSON.stringify(flattenObject(scrollyVideo.componentState))
                .replace(/[{}"]/g, '')
                .split(',')
                .join('<br>')} -->
            <!-- </p> -->
          </div>
        {/if}

        <!-- renders foregrounds -->
        {#if children}
          {@render children()}
        {/if}
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
</style>
