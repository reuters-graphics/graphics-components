<script lang="ts">
  import type { ContainerWidth, ScrollerStep } from  '../@types/global';

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
   * - `background` A background component **REQUIRED**
   * - `backgroundProps` An object of props given to the background component
   * - `foreground` Either a markdown-formatted string or a foreground component **REQUIRED**
   * - `foregroundProps` An object of props given to the foreground component
   *
   * @required
   */
  export let steps: ScrollerStep[] = [];
  /**
   * Width of the background
   */
  export let backgroundWidth: ContainerWidth = 'fluid';
  
  type ForegroundPosition = 'middle' | 'left' | 'right' | 'left opposite' | 'right opposite';
 
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

  // @ts-ignore
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
  <Block width="fluid" cls="scroller-container" id="{id}">
    <SvelteScroller
      bind:index
      bind:offset
      bind:progress
      threshold="{threshold}"
      top="{top}"
      bottom="{bottom}"
      parallax="{parallax}"
      query="div.step-foreground-container"
    >
      <div
        slot="background"
        class="background"
        class:right="{foregroundPosition === 'left opposite'}"
        class:left="{foregroundPosition === 'right opposite'}"
      >
        <div class="scroller-graphic-well">
          <Block
            width={backgroundWidth}
            cls="background-container step-{index + 1}"
          >
            <Background
              index="{index}"
              steps="{steps}"
              preload="{preload}"
              stackBackground="{stackBackground}"
            />
        </Block>
        </div>
      </div>

      <div slot="foreground" class="foreground {foregroundPosition}">
        <Foreground steps="{steps}" />
      </div>
    </SvelteScroller>
  </Block>
{:else}
  <Block width="widest" cls="scroller-container embedded" id="{id}">
    <Embedded
      steps="{steps}"
      embeddedLayout="{embeddedLayout}"
      backgroundWidth="{backgroundWidth}"
    />
  </Block>
{/if}

<style lang="scss">
  .scroller-container {
    width: calc(100% + 30px);
    margin-left: -15px;
    max-width: initial;
    &.embedded {
      width: 100%;
      padding: 0 15px;
    }
  }

  div.background {
    min-height: 100vh;
    position: relative;
    padding: 0;
    display: flex;
    justify-content: center;

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
      width: 100%;
      :global {
        div.background-container {
          margin-top: 0;
          margin-bottom: 0;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          &.fluid {
            margin: 0 0 0 -15px;
          }
        }
      }
    }
  }

  div.foreground {
    width: 100%;

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
