<script lang="ts">
  import Block from '../Block/Block.svelte';
  import type { ContainerWidth } from '../@types/global';
  import { type Snippet } from 'svelte';
  import { Tween } from 'svelte/motion';
  import type { Action } from 'svelte/action';
  import { clamp, map } from './utils';
  import Debug from './Debug.svelte';

  interface Props {
    /** Optional id for the scroller container */
    id?: string;
    /** Optional additional classes for the scroller container */
    class?: string;
    /** Width of the scroller container*/
    width?: ContainerWidth;
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
  }

  interface ClampedProps extends Props {
    /** Whether the progress value should be clamped */
    clampedProgress: true;
    /** Start value for clamping. Only effective when clampedProgress is true. */
    clampStart?: number;
    /** End value for clamping. Only effective when clampedProgress is true. */
    clampEnd?: number;
  }

  interface UnclampedProps extends Props {
    /** Whether the progress value should be clamped */
    clampedProgress?: false;
    clampStart?: never;
    clampEnd?: never;
  }

  let {
    id = '',
    class: cls = '',
    width = 'fluid',
    height = '200lvh',
    direction = 'right',
    scrollProgress = $bindable(0),
    clampedProgress = true,
    clampStart = 0,
    clampEnd = 1,
    children,
    stops = [],
    handleScroll = true,
    scrubbed = true,
    easing: ease = (t) => t,
    duration = 400,
    showDebugInfo = false,
  }: ClampedProps | UnclampedProps = $props();

  let componentState = $derived.by(() => ({
    scrollProgress,
    progress: progressTween.current,
    direction,
    clampedProgress,
    clampStart,
    clampEnd,
    triggerStops: scrubbed ? stops : unscrubbedStops,
    stops: stops,
    handleScroll,
    scrubbed,
    easing: ease,
    duration,
  }));
  let progressTween: Tween<number> = $state(
    new Tween(0, { duration, easing: ease })
  );
  let container: HTMLDivElement | undefined = $state(undefined);
  let containerHeight: number = $state(0);
  let containerWidth: number = $state(0);
  let content: HTMLDivElement | undefined = $state(undefined);
  let contentWidth: number = $state(0);
  let screenHeight: number = $state(0);
  let unscrubbedStops: number[] = $derived(
    [...stops, 0, 1].sort((a, b) => a - b)
  );
  let divisions: number[] = $derived(
    [...stops, clampStart ?? 0, clampEnd ?? 1].sort((a, b) => a - b)
  );
  let divisionsCount: number = $derived.by(() => divisions.length - 1);

  let translateX: number = $derived.by(() => {
    let processedProgress = progressTween.current;
    if (clampedProgress) {
      processedProgress = Math.min(
        Math.max(progressTween.current, clampStart),
        clampEnd
      );
    }

    const normalisedProgress =
      direction === 'right' ? processedProgress : 1 - processedProgress;

    const translate = -(contentWidth - containerWidth) * normalisedProgress;

    return translate;
  });

  const scrollListener: Action = () => {
    if (handleScroll) {
      window.addEventListener('scroll', handleScrollFunction, {
        passive: true,
      });
    } else {
      window.addEventListener('scroll', () => handleStops(scrollProgress), {
        passive: true,
      });
    }
  };

  function handleScrollFunction() {
    if (!container) return;

    const rawProgress =
      (-container?.offsetTop + window?.scrollY) /
      (containerHeight - screenHeight);

    handleStops(rawProgress);
  }

  function handleStops(rawProgress: number) {
    scrollProgress =
      clampedProgress ? clamp(rawProgress, clampStart, clampEnd) : rawProgress;
    if (!stops || stops.length === 0) {
      progressTween.set(ease(clamp(rawProgress, 0, 1)), {
        duration: 0,
      });
      return;
    }

    if (!scrubbed) {
      for (let i = 0; i < unscrubbedStops.length; i++) {
        if (
          rawProgress > unscrubbedStops[i] &&
          rawProgress <=
            (unscrubbedStops[i + 1] ??
              unscrubbedStops[unscrubbedStops.length - 1])
        ) {
          const midPoint =
            unscrubbedStops[i] +
            ((unscrubbedStops[i + 1] ??
              unscrubbedStops[unscrubbedStops.length - 1]) -
              unscrubbedStops[i]) *
              0.5;
          if (
            rawProgress >= midPoint &&
            progressTween.target !==
              (unscrubbedStops[i + 1] ??
                unscrubbedStops[unscrubbedStops.length - 1])
          ) {
            progressTween.set(
              unscrubbedStops[i + 1] ??
                unscrubbedStops[unscrubbedStops.length - 1]
            );
            return;
          } else if (
            rawProgress < midPoint &&
            progressTween.target !== unscrubbedStops[i]
          ) {
            progressTween.set(unscrubbedStops[i]);
            return;
          }
        } else if (
          rawProgress <
          unscrubbedStops[0] + (unscrubbedStops[1] ?? 0) * 0.5
        ) {
          if (progressTween.target !== unscrubbedStops[0]) {
            progressTween.set(unscrubbedStops[0]);
            return;
          }
        } else {
          continue;
        }
      }
    } else {
      for (let i = 0; i < divisions.length; i++) {
        let oneByDivCount = 1 / divisionsCount;

        let normalStart = i == 0 ? 0 : oneByDivCount * i;
        let normalEnd = i == divisionsCount - 1 ? 1 : oneByDivCount * (i + 1);

        if (rawProgress >= normalStart && rawProgress < normalEnd) {
          let stopStart = divisions[i];
          let stopEnd = divisions[i + 1] ?? 1;
          let newProgressVal =
            stopStart +
            ease(map(rawProgress, normalStart, normalEnd, 0, 1)) *
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

<Block {width}>
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
</Block>

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
