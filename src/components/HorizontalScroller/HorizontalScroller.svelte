<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { Tween } from 'svelte/motion';
  import type { Action } from 'svelte/action';
  import { clamp, map } from './utils/index';
  import Debug from './Debug.svelte';

  interface Props {
    /** Optional id for the scroller container */
    id?: string;
    /** Optional additional classes for the scroller container */
    class?: string;
    /** Height of the scroller container in CSS `vh` units. Set it to `100lvh` when using inside ScrollerBase. */
    height?: string;
    /** Bindable progress value. Ideal range: `[0-1]`. Bind ScrollerBase's progress to this prop. */
    scrollProgress?: number;
    /** Direction of movement*/
    direction?: 'left' | 'right';
    /** Content to scroll*/
    children?: Snippet;
    /** Array of numbers desired as stops for the scroller */
    stops?: number[];
    /** Should the component handle scroll events? Set it to `false` when using inside ScrollerBase. */
    handleScroll?: boolean;
    /** Whether the stops should be scrubbed */
    scrubbed?: boolean;
    /** Easing function for the progress/stops */
    easing?: (t: number) => number;
    /** Duration of the easing animation in milliseconds. Effective only when scrubbed is false. */
    duration?: number;
    /** Whether to show debug info */
    showDebugInfo?: boolean;
    /** Modified starting scale. Default is 0 */
    clampStart?: number;
    /** Modified ending scale. Default is 1 */
    clampEnd?: number;
  }

  let {
    id = '',
    class: cls = '',
    height = '200lvh',
    direction = 'right',
    scrollProgress = $bindable(0),
    clampStart = 0,
    clampEnd = 1,
    children,
    stops = [],
    handleScroll = true,
    scrubbed = true,
    easing: ease = (t) => t,
    duration = 400,
    showDebugInfo = false,
  }: Props = $props();

  let componentState = $derived.by(() => ({
    scrollProgress,
    progress: progressTween.current,
    direction,
    clampStart,
    clampEnd,
    triggerStops: scrubbed ? stops : divisions,
    stops: stops,
    handleScroll,
    scrubbed,
    easing: ease,
    duration,
    rawProgress,
  }));

  let progressTween: Tween<number> = $state(
    new Tween(clampStart, { duration, easing: ease })
  );
  let container: HTMLDivElement | undefined = $state(undefined);
  let containerHeight: number = $state(0);
  let containerWidth: number = $state(0);
  let content: HTMLDivElement | undefined = $state(undefined);
  let contentWidth: number = $state(0);
  let screenHeight: number = $state(0);
  let divisions: number[] = $derived(
    [...stops, clampStart, clampEnd].sort((a, b) => a - b)
  );
  let divisionsCount: number = $derived.by(() => divisions.length - 1);

  let rawProgress: number | 'user defined' = $state(0);

  // handles horizontal translation of the content
  let translateX: number = $derived.by(() => {
    let processedProgress = clamp(progressTween.current, clampStart, clampEnd);
    let normalisedProgress = processedProgress;

    normalisedProgress =
      direction === 'right' ? processedProgress : clampEnd - processedProgress;

    const translate = -(contentWidth - containerWidth) * normalisedProgress;

    return translate;
  });

  onMount(() => {
    // Initialize scrollProgress to clampStart on mount
    scrollProgress = clampStart;
  });

  const scrollListener: Action = () => {
    if (handleScroll) {
      window.addEventListener('scroll', handleScrollFunction, {
        passive: true,
      });
    } else {
      // set rawProgress to user defined when handleScroll is false
      rawProgress = 'user defined';
      window.addEventListener('scroll', () => handleStops(scrollProgress), {
        passive: true,
      });
    }
  };

  // calculates distance scrolled inside the container
  function handleScrollFunction() {
    if (!container) return;

    rawProgress =
      (-container?.offsetTop + window?.scrollY) /
      (containerHeight - screenHeight);

    handleStops(rawProgress);
  }

  // updates progressTween based on stops and scrubbed settings
  function handleStops(rawProgress: number) {
    scrollProgress = map(rawProgress, 0, 1, clampStart, clampEnd);

    if (!stops || stops.length === 0) {
      progressTween.set(ease(map(rawProgress, 0, 1, clampStart, clampEnd)), {
        duration: 0,
      });
      return;
    }

    if (!scrubbed) {
      for (let i = 0; i < divisions.length; i++) {
        if (
          scrollProgress > divisions[i] &&
          scrollProgress <=
            (divisions[i + 1] ?? divisions[divisions.length - 1])
        ) {
          const midPoint =
            divisions[i] +
            ((divisions[i + 1] ?? divisions[divisions.length - 1]) -
              divisions[i]) *
              0.5;
          if (
            scrollProgress >= midPoint &&
            progressTween.target !==
              (divisions[i + 1] ?? divisions[divisions.length - 1])
          ) {
            progressTween.set(
              divisions[i + 1] ?? divisions[divisions.length - 1]
            );
            return;
          } else if (
            scrollProgress < midPoint &&
            progressTween.target !== divisions[i]
          ) {
            progressTween.set(divisions[i]);
            return;
          }
        } else if (
          scrollProgress <
          divisions[0] + (divisions[1] ?? clampStart) * 0.5
        ) {
          if (progressTween.target !== divisions[0]) {
            progressTween.set(divisions[0]);
            return;
          }
        } else {
          continue;
        }
      }
    } else {
      for (let i = 0; i < divisions.length; i++) {
        let oneByDivCount = 1 / divisionsCount;

        let normalStart = i == 0 ? clampStart : oneByDivCount * i;
        let normalEnd =
          i == divisionsCount - 1 ? clampEnd : oneByDivCount * (i + 1);

        if (scrollProgress >= normalStart && scrollProgress < normalEnd) {
          let stopStart = divisions[i];
          let stopEnd = divisions[i + 1] ?? clampEnd;
          let newProgressVal =
            stopStart +
            ease(map(scrollProgress, normalStart, normalEnd, 0, 1)) *
              (stopEnd - stopStart);

          progressTween.set(newProgressVal, { duration: 0 });
          return;
        } else {
          continue;
        }
      }
    }
  }
</script>

<svelte:window bind:innerHeight={screenHeight} />

<div
  {id}
  class={`horizontal-scroller-container ${cls}`}
  style="height: {height};"
  bind:this={container}
  bind:clientHeight={containerHeight}
  bind:clientWidth={containerWidth}
>
  <div
    class="horizontal-scroller-content"
    bind:this={content}
    bind:clientWidth={contentWidth}
    style="transform: translateX({translateX}px);"
    use:scrollListener
  >
    {#if children}
      {@render children()}
    {/if}
    {#if showDebugInfo}
      <div
        class="debug-info"
        style={`position: absolute; left: ${-translateX}px; top: 0px;`}
      >
        <Debug {componentState} />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .horizontal-scroller-container {
    width: 100%;
    contain: paint;
  }

  .horizontal-scroller-content {
    display: inline-block;
    height: 100%;
    max-height: 100lvh;
    position: sticky;
    top: 0;
  }
</style>
