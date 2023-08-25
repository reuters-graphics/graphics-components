<!-- @component `HeroHeadline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-HeroHeadline--default) -->
<script lang="ts">
  import { HeadlineSize } from '../@types/global';
  import cssVariables from '../../actions/cssVariables/index.js';

  /** Set to true for embeddables. */
  export let embedded: boolean = false;

  /**
   * Path to background image
   * @type {string}
   */
  export let img: string;

  /**
   * Size value for CSS property background-size
   * @type {string}
   */
  export let backgroundSize: 'auto' | 'cover' | 'contain' = 'cover';

  /**
   * Position value for  CSS property background-position
   * @type {string}
   */
  export let backgroundPos = 'center';

  /**
   * ARIA description, passed in as a markdown string.
   * @type {string}
   */
  export let ariaDescription: string | null = null;

  /**
   * Notes to the graphic, passed in as a markdown string.
   * @type {string}
   */
  export let notes: string | null = null;

  /**
   * Height as a percetange of viewport height
   * @type {number}
   */
  export let heroHeight: number = 100;

  /**
   * Headline, parsed as an _inline_ markdown string in an `h1` element.
   * @type {string}
   */
  export let hed: string = 'Reuters Graphics Interactive';

  /** Add extra classes to the block tag to target it with custom CSS. */
  let cls: string = '';
  export { cls as class };

  /**
   * Headline size
   * @type {string}
   */
  export let hedSize: HeadlineSize = 'normal';

  /**
   * Headline horizontal alignment
   * @type {string}
   */
  export let hedAlign: 'left' | 'center' | 'right' = 'center';

  /**
   * Dek, parsed as a markdown string.
   * @type {string}
   */
  export let dek: string | null = null;
  /**
   * Section title
   * @type {string}
   */
  export let section: string | null = null;
  /**
   * Array of author names, which will be slugified to create links to Reuters author pages
   */
  export let authors: string[] = [];
  /**
   * Publish time as a datetime string.
   * @type {string}
   */
  export let publishTime: string = '';
  /**
   * Update time as a datetime string.
   * @type {string}
   */
  export let updateTime: string = '';

  /**
   * Width of the headline.
   */
  export let width: 'normal' | 'wide' | 'wider' | 'widest' = 'normal';

  import Headline from '../Headline/Headline.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import TextBlock from '../GraphicBlock/TextBlock.svelte';
  import Block from '../Block/Block.svelte';
  import Byline from '../Byline/Byline.svelte';
  import { marked } from 'marked';

  let hedClass;
  $: {
    switch (hedSize) {
      case 'biggest':
        hedClass = 'text-6xl';
        break;
      case 'bigger':
        hedClass = 'text-5xl';
        break;
      case 'big':
        hedClass = 'text-4xl';
        break;
      case 'small':
        hedClass = 'text-2xl';
        break;
      default:
        hedClass = 'text-3xl';
    }
  }

  $: variables = {
    heroHeight: embedded ? '850px' : heroHeight + 'svh',
    backgroundSize,
    backgroundPos,
  };
</script>

<div class="hero-wrapper" use:cssVariables="{variables}">
  <!-- Background media -->
  {#if $$slots.background || img}
    <Block width="fluid" class="hero-headline fmt-0">
      <Headline
        class="{cls} mt-0 !text-{hedAlign}"
        width="{width}"
        section="{section}"
        hedSize="{hedSize}"
        hed="{hed}"
        dek="{dek}"
      />
      <div class="background-container">
        {#if $$slots.background}
          <!-- Hero named slot -->
          <slot name="background" />
        {:else}
          <GraphicBlock
            width="fluid"
            role="img"
            class="my-0"
            textWidth="normal"
            ariaDescription="{ariaDescription}"
          >
            <div
              class="background-image"
              style="background-image: url({img})"
            ></div>
          </GraphicBlock>
        {/if}
      </div>
    </Block>
  {/if}
  {#if notes}
    <TextBlock width="normal">
      <aside class="fmt-2">
        {@html marked(notes)}
      </aside>
    </TextBlock>
  {/if}
</div>

{#if $$slots.inline}
  <div class="crown-container">
    <!-- Hero named slot -->
    <slot name="inline" />
  </div>
{/if}

{#if $$slots.byline}
  <!-- Custom byline/dateline -->
  <slot name="byline" />
{:else if authors.length > 0 || publishTime}
  <Byline
    class="fmt-7 fmb-5"
    authors="{authors}"
    publishTime="{publishTime}"
    updateTime="{updateTime}"
    align="left"
  />
{/if}

<style lang="scss">
  @import '../../scss/mixins';

  :global {
    .hero-headline {
      height: var(--heroHeight);
      max-height: 1800px;
      width: 100%;
      position: relative;

      .headline {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 50%;
        height: var(--heroHeight);
        max-height: 1800px;
        transform: translateX(-50%);
      }
    }

    .hero-wrapper {
      // Caption and Sources
      aside {
        p {
          @include body-caption;
        }
      }
    }
  }
  .background-image {
    position: absolute;
    width: 100%;
    height: var(--heroHeight);
    max-height: 1800px;
    top: 0;
    z-index: 0;
    left: 0;
    user-select: none;

    background-repeat: no-repeat;
    background-position: var(--backgroundPos);
    background-size: var(--backgroundSize);
  }
</style>
