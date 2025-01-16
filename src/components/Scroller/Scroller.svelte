<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `Scroller` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-scroller--docs) -->
<script lang="ts">
  import type { ContainerWidth, ScrollerStep } from '../@types/global';

  /**
   * ID of the scroller container
   * @type {string}
   */
  export let id: string = '';
  /**
   * An array of step objects that define the steps in your scroller.
   *
   * Each step object in the array can have:
   *
   * - `background` A background component. **REQUIRED**
   * - `backgroundProps` An object of props given to the background component
   * - `foreground` Either a markdown-formatted string or a foreground component **REQUIRED**
   * - `altText` A string describing the background graphic, which is read aloud after the foreground blurb. You can add it to each step or, if you want to add just one alt text to describe all graphics in the scroll section, add it to just the first step. **RECOMMENDED**
   * - `foregroundProps` An object of props given to the foreground component
   *
   * @required
   */
  export let steps: ScrollerStep[] = [];
  /**
   * Width of the background
   */
  export let backgroundWidth: ContainerWidth = 'fluid';

  type ForegroundPosition =
    | 'middle'
    | 'left'
    | 'right'
    | 'left opposite'
    | 'right opposite';

  /**
   * Position of the foreground. One of: middle, left, right, left opposite or right opposite.
   *
   * "opposite" options push the background to the other side on larger viewports.
   *
   * @type {string}
   */
  export let foregroundPosition: ForegroundPosition = 'middle';
  /**
   * Whether previous background steps should stack below the current one.
   *
   * - `true` _default_ Background graphics from previous steps will remain visible below the active one, allowing you to stack graphics with transparent backgrounds.
   * - `false` Only the background graphic from the current step will show and backgrounds from previous steps are hidden.
   */
  export let stackBackground: boolean = true;
  /**
   * How many background steps to load before and after the currently active one, effectively lazy-loading them.
   *
   * Setting to `0` disables lazy-loading and loads all backgrounds at once.
   */
  export let preload: number = 1;
  /**
   * Setting to `true` will unroll the scroll experience into a flat layout.
   */
  export let embedded: boolean = false;

  type EmbeddedLayout = 'fb' | 'bf';

  /**
   * Layout order when `embedded` is `true`.
   *
   * - `fb` _default_ Foreground then background
   * - `bf` Background then foreground
   *
   * @type {string}
   */
  export let embeddedLayout: EmbeddedLayout = 'fb';
  /**
   * Threshold prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)
   */
  export let threshold: number = 0.5;
  /**
   * Top prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)
   */
  export let top: number = 0;
  /**
   * Bottom prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)
   */
  export let bottom: number = 1;
  /**
   * Parallax prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)
   */
  export let parallax: boolean = false;

  /**
   * Set a class to target with SCSS.
   * @type {string}
   */
  let cls: string = '';
  export { cls as class };

  // @ts-ignore no types
  import SvelteScroller from '@sveltejs/svelte-scroller';
  import Background from './Background.svelte';
  import Foreground from './Foreground.svelte';
  import Embedded from './Embedded/index.svelte';

  import Block from '../Block/Block.svelte';

  let index = 0;
  let offset;
  let progress;
</script>

{#if !embedded}
  <Block width="fluid" class="scroller-container fmy-6 {cls}" {id}>
    <SvelteScroller
      bind:index
      bind:offset
      bind:progress
      {threshold}
      {top}
      {bottom}
      {parallax}
      query="div.step-foreground-container"
    >
      <div
        slot="background"
        class="background min-h-screen relative p-0 flex justify-center"
        class:right="{foregroundPosition === 'left opposite'}"
        class:left="{foregroundPosition === 'right opposite'}"
        aria-hidden="true"
      >
        <div class="scroller-graphic-well w-full">
          <Block
            width="{backgroundWidth}"
            class="background-container step-{index +
              1} my-0 min-h-screen flex justify-center items-center relative"
          >
            <Background {index} {steps} {preload} {stackBackground} />
          </Block>
        </div>
      </div>

      <div slot="foreground" class="foreground {foregroundPosition} w-full">
        <Foreground {steps} />
      </div>
    </SvelteScroller>
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
