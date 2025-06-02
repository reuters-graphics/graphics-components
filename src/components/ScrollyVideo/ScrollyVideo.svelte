<script lang="ts">
  import { onDestroy } from 'svelte';
  import { flattenObject } from './js/utils.js';
  import ScrollyVideo from './js/ScrollyVideo.js';
  import { scrollyVideoState } from './js/state.svelte.js';

  // Define the props interface
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
  }

  let {
    scrollyVideo = $bindable(),
    videoPercentage,
    onReady = $bindable(() => {}),
    onChange = $bindable(() => {}),
    height = '200svh',
    showDebugInfo = false,
    class: cls = '',
    id = '',
    ...restProps
  }: Props = $props();

  // variable to hold the DOM element
  let scrollyVideoContainer = $state();

  // Store the props so we know when things change
  let lastPropsString = '';

  $effect(() => {
    if (scrollyVideoContainer) {
      if (JSON.stringify(restProps) !== lastPropsString) {
        // if scrollyvideo already exists and any parameter is updated, destroy and recreate.
        if (scrollyVideo && scrollyVideo.destroy) scrollyVideo.destroy();
        scrollyVideo = new ScrollyVideo({
          scrollyVideoContainer,
          ...restProps,
        });

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

  // Cleanup the component on destroy
  onDestroy(() => {
    if (scrollyVideo && scrollyVideo.destroy) scrollyVideo.destroy();
  });

  let heightChange = $derived.by(() => {
    return scrollyVideoState.isAutoPlaying ?
        `calc(${height} * ${1 - scrollyVideoState.framesData.currentFrame / scrollyVideoState.framesData.totalFrames})`
      : `calc(${height} * ${1 - scrollyVideoState.autoplayProgress})`;
  });
</script>

<div
  {id}
  class="scrolly-video-container {cls}"
  style="height: {heightChange}; width: 100%; min-height: 100svh;"
>
  <div bind:this={scrollyVideoContainer} data-scrolly-container>
    {#if showDebugInfo}
      <p class="debug-info text-xxs font-sans">
        {@html JSON.stringify(flattenObject([scrollyVideoState]))
          .replace(/[{}"]/g, '')
          .split(',')
          .join('<br>')}
      </p>
    {/if}
  </div>
</div>

<style lang="scss">
  .debug-info {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 3;
    padding: 8px;
    margin: 0;
    min-width: 25vmin;
  }
</style>
