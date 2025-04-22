<!-- @component `Scroller` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-scroller--docs) -->
<script lang="ts">
  import ScrollerBase from './ScrollerBase/index.svelte';
  import Background from './Background.svelte';
  import Foreground from './Foreground.svelte';
  import Embedded from './Embedded/index.svelte';
  import Block from '../Block/Block.svelte';

  // Types
  import type {
    ContainerWidth,
    ForegroundPosition,
    ScrollerStep,
  } from '../@types/global';

  interface Props {
    /**
     * An array of step objects that define the steps in your scroller.
     *
     * Each step object in the array can have:
     *
     * - `background` A background component. **REQUIRED**
     * - `backgroundProps` Optional props for background component.
     * - `foreground` A component or markdown-formatted string. **REQUIRED**
     * - `foregroundProps` Optional props for foreground component.
     * - `altText` Optional alt text for the background, read aloud after the foreground text. You can add it to each step or just to the first step to describe the entire scroller graphic. **RECOMMENDED**
     *
     */
    steps: ScrollerStep[];
    /** Width of the background */
    backgroundWidth?: ContainerWidth;
    /** Position of the foreground */
    foregroundPosition?: ForegroundPosition;
    /**
     * Whether previous background steps should stack below the current one.
     *
     * - `true` _default_ Background graphics from previous steps will remain visible below the active one, allowing you to stack graphics with transparent backgrounds.
     * - `false` Only the background graphic from the current step will show and backgrounds from previous steps are hidden.
     */
    stackBackground?: boolean;
    /**
     * How many background steps to load before and after the currently active one, effectively lazy-loading them.
     *
     * Setting to `0` disables lazy-loading and loads all backgrounds at once.
     */
    preload?: number;
    /** Setting to `true` will unroll the scroll experience into a flat layout */
    embedded?: boolean;
    /**
     * Layout order when `embedded` is `true`.
     *
     * - `fb` _default_ Foreground then background
     * - `bf` Background then foreground
     *
     */
    embeddedLayout?: 'fb' | 'bf';
    /**
     * Threshold prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)
     */
    threshold?: number;
    /**
     * Top prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)
     */
    top?: number;
    /**
     * Bottom prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)
     */
    bottom?: number;
    /**
     * Parallax prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)
     */
    parallax?: boolean;
    /** ID of the scroller container */
    id?: string;
    /** Set a class to target with SCSS */
    class?: string;
    /** The currently active section */
    index?: number;
    /**  How far the section has scrolled past the threshold, as a value between 0 and 1 */
    offset?: number;
    /** How far the foreground has travelled, where 0 is the top of the foreground crossing top, and 1 is the bottom crossing bottom */
    progress?: number;
  }

  let {
    id = '',
    steps,
    backgroundWidth = 'fluid',
    foregroundPosition = 'middle',
    stackBackground = true,
    preload = 1,
    embedded = false,
    embeddedLayout = 'fb',
    threshold = 0.5,
    top = 0,
    bottom = 1,
    parallax = false,
    class: cls = '',
    index = $bindable(0),
    offset = $bindable(0),
    progress = $bindable(0),
  }: Props = $props();
</script>

{#if !embedded}
  <Block width="fluid" class="scroller-container fmy-6 {cls}" {id}>
    <ScrollerBase
      bind:index
      bind:offset
      bind:progress
      {threshold}
      {top}
      {bottom}
      {parallax}
      query="div.step-foreground-container"
    >
      {#snippet backgroundSnippet()}
        <div
          class="background min-h-screen relative p-0 flex justify-center"
          class:right={foregroundPosition === 'left opposite'}
          class:left={foregroundPosition === 'right opposite'}
          aria-hidden="true"
        >
          <div class="scroller-graphic-well w-full">
            <Block
              width={backgroundWidth}
              class="background-container step-{index +
                1} my-0 min-h-screen flex justify-center items-center relative"
            >
              <Background {index} {steps} {preload} {stackBackground} />
            </Block>
          </div>
        </div>
      {/snippet}
      {#snippet foregroundSnippet()}
        <div class="foreground {foregroundPosition} w-full">
          <Foreground {steps} />
        </div>
      {/snippet}
    </ScrollerBase>
  </Block>
{:else}
  <Block width="widest" class="scroller-container embedded" {id}>
    <Embedded {steps} {embeddedLayout} {backgroundWidth} />
  </Block>
{/if}

<style lang="scss">
  div.background {
    &.left {
      width: 50%;
      float: left;
      @media (max-width: 1200px) {
        justify-content: center;
        width: 100%;
        float: initial;
      }
    }
    &.right {
      width: 50%;
      float: right;
      @media (max-width: 1200px) {
        justify-content: center;
        width: 100%;
        float: initial;
      }
    }

    div.scroller-graphic-well {
      padding: 0 15px;
    }
  }

  div.foreground {
    &.right {
      width: 50%;
      float: right;
      @media (max-width: 1200px) {
        width: 100%;
        float: initial;
      }
    }

    &.left {
      width: 50%;
      float: left;
      @media (max-width: 1200px) {
        width: 100%;
        float: initial;
      }
    }
  }
</style>
