<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `HeroHeadline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-heroheadline--docs) -->
<script lang="ts">
  import type { HeadlineSize } from '../@types/global';

  /** Set to true for embeddables. */
  export let embedded: boolean = false;

  /**
   * Path to background image
   * @type {string}
   */
  export let img: string | null = null;

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
   * Width of the headline.
   */
  export let hedWidth: 'normal' | 'wide' | 'wider' | 'widest' = 'normal';

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
   * Width of the Hero graphic.
   */
  export let width: 'normal' | 'wide' | 'wider' | 'widest' = 'widest';

  import Headline from '../Headline/Headline.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import Block from '../Block/Block.svelte';
  import Byline from '../Byline/Byline.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';
</script>

<div style="--heroHeight: {embedded ? '850px' : '100svh'}; display:contents;">
  <div class="hero-wrapper fmb-6" class:embedded>
    <!-- Background media hero-->
    {#if $$slots.background || img}
      <Block width="fluid" class="hero-headline background-hero fmt-0">
        {#if $$slots.hed}
          <Headline
            class="{cls} !text-{hedAlign}"
            width="{hedWidth}"
            {section}
            {hedSize}
            {hed}
            {dek}
          >
            <!-- Headline named slot -->
            <div slot="hed">
              <slot name="hed" />
            </div>
          </Headline>
        {:else}
          <Headline
            class="{cls} !text-{hedAlign}"
            width="{hedWidth}"
            {section}
            {hedSize}
            {hed}
            {dek}
          />
        {/if}

        <div class="graphic-container">
          {#if $$slots.background}
            <!-- Hero graphic named slot -->
            <slot name="background" />
          {:else}
            <GraphicBlock
              {width}
              role="img"
              class="my-0"
              textWidth="normal"
              {notes}
              {ariaDescription}
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

    <!-- Inline hero -->
    {#if $$slots.inline}
      <Block width="fluid" class="hero-headline inline-hero">
        <PaddingReset containerIsFluid="{true}">
          {#if $$slots.hed}
            <Headline
              class="{cls} !text-{hedAlign}"
              width="{hedWidth}"
              {section}
              {hedSize}
              {hed}
              {dek}
            >
              <!-- Headline named slot -->
              <div slot="hed">
                <slot name="hed" />
              </div>
            </Headline>
          {:else}
            <Headline
              class="{cls} !text-{hedAlign}"
              width="{hedWidth}"
              {section}
              {hedSize}
              {hed}
              {dek}
            />
          {/if}
        </PaddingReset>
        <div class="graphic-container">
          <!-- Hero named slot -->
          <slot name="inline" />
        </div>
      </Block>
    {/if}
  </div>

  <div class="hero-byline fmb-6">
    {#if $$slots.byline}
      <!-- Custom byline/dateline -->
      <slot name="byline" />
    {:else if authors.length > 0 || publishTime}
      <Byline {authors} {publishTime} {updateTime} align="left" />
    {/if}
  </div>
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .hero-wrapper {
    :global(.background-hero) {
      min-height: var(--heroHeight, 100svh);
      max-height: 1800px;
      position: relative;
    }

    :global(.background-hero .headline) {
      @include mixins.fmt-0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100%;
      top: 0;
      left: 50%;
      height: var(--heroHeight, 100svh);
      max-height: 1800px;
      transform: translateX(-50%);

      @media (max-width: 690px) {
        padding: 0 15px;
      }
    }

    :global(aside p) {
      @include mixins.body-caption;
    }

    :global(.background-hero video) {
      position: relative;
      display: block;
      width: 100%;
      height: var(--heroHeight);
      object-fit: cover;
    }

    :global(.graphic-container .article-block.notes) {
      @media (max-width: 690px) {
        width: 100%;
        padding: 0 15px;
        margin-left: 0;
      }
    }
  }

  .hero-byline {
    :global(.byline-container) {
      z-index: 1;
      position: relative;
    }
  }

  .background-image {
    width: auto;
    height: var(--heroHeight, 100svh);
    max-height: 1800px;
    user-select: none;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
