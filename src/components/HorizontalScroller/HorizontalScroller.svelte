<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { Tween } from 'svelte/motion';
  import { clamp, map } from './utils/index';
  import type { Action } from 'svelte/action';
  import Debug from './Debug.svelte';

  interface Props {
    /** Optional id for the scroller container */
    id?: string;
    /** Optional additional classes for the scroller container */
    class?: string;
    /** Height of the scroller container in CSS `vh` units. Set it to `100lvh` when using inside ScrollerBase. */
    height?: string;
    /** Bindable progress value. Ideal range: `[0-1]`. Bind ScrollerBase's progress to this prop. */
    progress?: number;
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
    mappedStart?: number;
    /** Modified ending scale. Default is 1 */
    mappedEnd?: number;
  }

  let {
    id = '',
    class: cls = '',
    height = '200lvh',
    direction = 'right',
    progress = $bindable(0),
    mappedStart = 0,
    mappedEnd = 1,
    children,
    stops = [],
    handleScroll = true,
    scrubbed = true,
    easing: ease = (t) => t,
    duration = 400,
    showDebugInfo = false,
  }: Props = $props();

  let componentState = $derived.by(() => ({
    progress,
    mappedProgress,
    easedProgress: easedProgress.current,
    direction,
    mappedStart,
    mappedEnd,
    triggerStops: scrubbed ? stops : divisions,
    stops: stops,
    handleScroll,
    scrubbed,
    easing: ease,
    duration,
  }));

  let easedProgress: Tween<number> = $state(
    new Tween(mappedStart, { duration, easing: ease })
  );
  let container: HTMLDivElement | undefined = $state(undefined);
  let containerHeight: number = $state(0);
  let containerWidth: number = $state(0);
  let content: HTMLDivElement | undefined = $state(undefined);
  let contentWidth: number = $state(0);
  let screenHeight: number = $state(0);
  let divisions: number[] = $derived(
    [...stops, mappedStart, mappedEnd].sort((a, b) => a - b)
  );
  let divisionsCount: number = $derived.by(() => divisions.length - 1);

  let mappedProgress: number = $state(0);

  // handles horizontal translation of the content
  let translateX: number = $derived.by(() => {
    let processedProgress = clamp(
      easedProgress.current,
      mappedStart,
      mappedEnd
    );
    let normalisedProgress = processedProgress;

    normalisedProgress =
      direction === 'right' ? processedProgress : mappedEnd - processedProgress;

    const translate = -(contentWidth - containerWidth) * normalisedProgress;

    return translate;
  });

  onMount(() => {
    // Initialize mappedProgress to mappedStart on mount
    mappedProgress = mappedStart;
  });

  const scrollListener: Action = () => {
    if (handleScroll) {
      window.addEventListener('scroll', handleScrollFunction, {
        passive: true,
      });
    } else {
      window.addEventListener('scroll', () => handleStops(progress), {
        passive: true,
      });
    }
  };

  // calculates distance scrolled inside the container
  function handleScrollFunction() {
    if (!container) return;

    progress =
      (-container?.offsetTop + window?.scrollY) /
      (containerHeight - screenHeight);

    handleStops(progress);
  }

  // updates easedProgress based on stops and scrubbed settings
  function handleStops(rawProgress: number) {
    mappedProgress = map(rawProgress, 0, 1, mappedStart, mappedEnd);

    if (!stops || stops.length === 0) {
      easedProgress.set(ease(map(rawProgress, 0, 1, mappedStart, mappedEnd)), {
        duration: 0,
      });
      return;
    }

    if (!scrubbed) {
      for (let i = 0; i < divisions.length; i++) {
        if (
          mappedProgress > divisions[i] &&
          mappedProgress <=
            (divisions[i + 1] ?? divisions[divisions.length - 1])
        ) {
          const midPoint =
            divisions[i] +
            ((divisions[i + 1] ?? divisions[divisions.length - 1]) -
              divisions[i]) *
              0.5;
          if (
            mappedProgress >= midPoint &&
            easedProgress.target !==
              (divisions[i + 1] ?? divisions[divisions.length - 1])
          ) {
            easedProgress.set(
              divisions[i + 1] ?? divisions[divisions.length - 1]
            );
            return;
          } else if (
            mappedProgress < midPoint &&
            easedProgress.target !== divisions[i]
          ) {
            easedProgress.set(divisions[i]);
            return;
          }
        } else if (
          mappedProgress <
          divisions[0] + (divisions[1] ?? mappedStart) * 0.5
        ) {
          if (easedProgress.target !== divisions[0]) {
            easedProgress.set(divisions[0]);
            return;
          }
        } else {
          continue;
        }
      }
    } else {
      for (let i = 0; i < divisions.length; i++) {
        let oneByDivCount = 1 / divisionsCount;

        let normalStart = i == 0 ? mappedStart : oneByDivCount * i;
        let normalEnd =
          i == divisionsCount - 1 ? mappedEnd : oneByDivCount * (i + 1);

        if (mappedProgress >= normalStart && mappedProgress < normalEnd) {
          let stopStart = divisions[i];
          let stopEnd = divisions[i + 1] ?? mappedEnd;
          let newProgressVal =
            stopStart +
            ease(map(mappedProgress, normalStart, normalEnd, 0, 1)) *
              (stopEnd - stopStart);

          easedProgress.set(newProgressVal, { duration: 0 });
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
