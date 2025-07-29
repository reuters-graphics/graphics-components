<script lang="ts">
  import { onDestroy } from 'svelte';
  import ScrollerVideo from './ts/ScrollerVideo.js';
  import Debug from './Debug.svelte';
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { dev } from '$app/environment';
  import { Tween } from 'svelte/motion';

  interface Props {
    /** CSS class for scroller container */
    class?: string;
    /** ID of the scroller container */
    id?: string;
    /** Bindable instance of ScrollerVideo */
    scrollerVideo?: ScrollerVideo;
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
    /** Additional properties for embedded videos */
    embeddedProps?: {
      /** When to start the playback in terms of the component's position */
      threshold?: number;
      /** Height of embedded component */
      height?: string;
      /** Duration of ScrollerVideo experience as a video */
      duration?: number;
      /** Delay before the playback */
      delay?: number;
    };
    /** Children render function */
    children?: Snippet;
  }

  /** Default properties for embedded videos */
  const defaultEmbedProps = {
    threshold: 0.5,
    height: '80svh',
    delay: 200,
  };

  /**
   * Main logic for ScrollerVideo Svelte component.
   * Handles instantiation, prop changes, and cleanup.
   */
  let {
    scrollerVideo = $bindable(),
    videoPercentage,
    onReady = $bindable(() => {}),
    onChange = $bindable(() => {}),
    height = '200svh',
    showDebugInfo = false,
    class: cls = '',
    id = '',
    embedded = false,
    embeddedProps,
    children,
    ...restProps
  }: Props = $props();

  // variable to hold the DOM element
  /**
   * Reference to the scroller video container DOM element.
   * @type {HTMLDivElement | undefined}
   */
  let scrollerVideoContainer = $state<HTMLDivElement | undefined>(undefined);

  // Store the props so we know when things change
  let lastPropsString = '';

  // Concatenate default and passed embedded props
  let allEmbedProps = {
    ...defaultEmbedProps,
    ...embeddedProps,
  };

  // Holds regular scroller video component
  // and scrolls automatically for embedded version
  let embeddedContainer = $state<HTMLDivElement | undefined>(undefined);
  let embeddedContainerHeight = $state<number | undefined>(undefined);
  let embeddedContainerScrollHeight: number = $derived.by(() => {
    let scrollHeight = 1;
    if (embeddedContainer && embeddedContainerHeight) {
      scrollHeight = embeddedContainer.scrollHeight - embeddedContainerHeight;
    }
    return scrollHeight;
  });

  const embeddedContainerScrollY = new Tween(0, {
    duration: 1000,
    delay: allEmbedProps.delay,
    easing: (t) => +t,
  });

  $effect(() => {
    if (embeddedContainer) {
      embeddedContainer.scrollTop = embeddedContainerScrollY.current;
    }
  });

  $effect(() => {
    if (scrollerVideoContainer) {
      if (JSON.stringify(restProps) !== lastPropsString) {
        // if scrollervideo already exists and any parameter is updated, destroy and recreate.
        if (scrollerVideo && scrollerVideo.destroy) scrollerVideo.destroy();

        scrollerVideo = new ScrollerVideo({
          scrollerVideoContainer,
          onReady,
          onChange,
          ...restProps,
          trackScroll: embedded ? false : restProps.trackScroll, // trackScroll disabled for embedded version
          autoplay: embedded ? false : restProps.autoplay, // autoplay disabled for embedded version
        });

        // if embedded prop is set,
        // play the video when it crosses the threshold
        // and reset it to zero when it crosses the threshold in opposite direction
        if (embedded) {
          const updatedOnReady = () => {
            // add user defined onReady
            onReady();

            window?.addEventListener('scroll', (e: Event) => {
              if (
                embeddedContainer &&
                embeddedContainer.getBoundingClientRect().top <
                  window.innerHeight * allEmbedProps.threshold
              ) {
                if (
                  embeddedContainerScrollY.current == 0 &&
                  embeddedContainerHeight &&
                  scrollerVideo?.componentState
                ) {
                  const scrollDuration =
                    allEmbedProps.duration ||
                    scrollerVideo.componentState.generalData.totalTime * 1000;
                  embeddedContainerScrollY.set(embeddedContainerScrollHeight, {
                    duration: scrollDuration,
                    delay: allEmbedProps.delay,
                  });
                }
              } else if (
                embeddedContainer &&
                embeddedContainer.getBoundingClientRect().top >
                  window.innerHeight * allEmbedProps.threshold
              ) {
                if (embeddedContainerScrollY.current > 0) {
                  embeddedContainerScrollY.set(0, { duration: 0 });
                }
              }
            });
          };

          scrollerVideo.onReady = updatedOnReady;
        }

        // pass on component state to child components
        // this controls fade in and out of foregrounds
        setContext('scrollerVideoState', scrollerVideo.componentState);

        // Save the new props
        lastPropsString = JSON.stringify(restProps);
      }

      // If we need to update the target time percent
      if (
        scrollerVideo &&
        videoPercentage &&
        videoPercentage >= 0 &&
        videoPercentage <= 1
      ) {
        scrollerVideo.setVideoPercentage(videoPercentage);
      }
    }
  });

  /**
   * Cleanup the component on destroy.
   */
  onDestroy(() => {
    if (scrollerVideo && scrollerVideo.destroy) scrollerVideo.destroy();
  });

  /**
   * heightChange drives the height of the component when autoplay is set to true.
   * @type {string}
   */
  let heightChange = $derived.by(() => {
    if (scrollerVideo) {
      return `calc(${height} * ${1 - scrollerVideo?.componentState.autoplayProgress})`;
    } else {
      return height;
    }
  });
</script>

<!-- snippet to avoid redundancy between regular and embedded versions -->
<!-- renders Debug component and children foregrounds -->
{#snippet supportingElements()}
  {#if scrollerVideo}
    {#if showDebugInfo && dev}
      <div class="debug-info">
        <Debug componentState={scrollerVideo.componentState} />
      </div>
    {/if}

    <!-- renders foregrounds -->
    {#if children}
      {@render children()}
    {/if}
  {/if}
{/snippet}

{#if embedded}
  <div
    class="embedded-scroller-video-container"
    style="height: {allEmbedProps.height};"
    bind:this={embeddedContainer}
    bind:clientHeight={embeddedContainerHeight}
    onscroll={() => {
      if (scrollerVideo && embeddedContainer) {
        let scrollProgress =
          embeddedContainer.scrollTop / embeddedContainerScrollHeight;
        scrollerVideo.setVideoPercentage(scrollProgress, {
          jump: scrollProgress == 0,
          easing: (t) => t,
        });
      }
    }}
  >
    <div
      {id}
      class="scroller-video-container embedded {cls}"
      style="height: 200svh;"
    >
      <div
        bind:this={scrollerVideoContainer}
        data-scroller-container
        style="max-height: {allEmbedProps.height};"
      >
        {@render supportingElements()}
      </div>
    </div>
  </div>
{:else}
  <div
    {id}
    class="scroller-video-container {cls}"
    style="height: {heightChange}"
  >
    <div bind:this={scrollerVideoContainer} data-scroller-container>
      {@render supportingElements()}
    </div>
  </div>
{/if}

<style lang="scss">
  .scroller-video-container {
    width: 100%;

    &:not(.embedded) {
      min-height: 100svh;
    }
  }

  .embedded-scroller-video-container {
    max-height: 100lvh;
    overflow: hidden;
  }
</style>
