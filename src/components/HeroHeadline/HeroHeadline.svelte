<!-- @component `HeroHeadline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-heroheadline--docs) -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HeadlineSize } from '../@types/global';

  // Components
  import Block from '../Block/Block.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';
  import Headline from '../Headline/Headline.svelte';
  import Byline from '../Byline/Byline.svelte';
  import FeaturePhoto from '../FeaturePhoto/FeaturePhoto.svelte';

  export interface Props {
    /** Headline, parsed as an _inline_ markdown string in an `h1` element OR as a custom snippet. */
    hed: string | Snippet;
    /**
     * Optional snippet for a custom hero graphic, photo, etc.
     */
    children?: Snippet;
    /** Set to `false` for inline hero media */
    stacked?: boolean;
    /**
     * Path to the background hero image
     */
    img?: string;
    /**
     * ARIA description, passed in as a markdown string.
     */
    ariaDescription?: string;
    /**
     * Notes to the graphic, passed in as a markdown string.
     */
    notes?: string;
    /** Add classes to the block tag to target it with custom CSS. */
    class?: string;
    /**
     * Headline size: small, normal, big, bigger, biggest
     */
    hedSize?: HeadlineSize;
    /**
     * Headline horizontal alignment: left, center, right
     */
    hedAlign?: 'left' | 'center' | 'right';
    /**
     * Width of the headline: normal, wide, wider, widest
     */
    hedWidth?: 'normal' | 'wide' | 'wider' | 'widest';
    /**
     * Dek, parsed as a markdown string OR as a custom snippet.
     */
    dek?: string | Snippet;
    /**
     * Section title
     */
    section?: string;
    /**
     * Array of author names, which will be slugified to create links to Reuters author pages
     */
    authors?: string[];
    /**
     * Publish time as a datetime string.
     */
    publishTime: string;
    /**
     * Update time as a datetime string.
     */
    updateTime?: string;
    /**
     * Width of the hero graphic: normal, wide, wider, widest
     */
    width?: 'normal' | 'wide' | 'wider' | 'widest';
    /** Set to true for embeds. */
    embedded?: boolean;
    /**
     * Custom function that returns an author page URL.
     */
    getAuthorPage?: (author: string) => string;
    /**
     * Optional snippet for a custom byline.
     */
    byline?: Snippet;
    /**
     * Optional snippet for a custom published dateline.
     */
    published?: Snippet;
    /**
     * Optional snippet for a custom updated dateline.
     */
    updated?: Snippet;
  }

  let {
    hed,
    stacked = true,
    img,
    ariaDescription,
    notes,
    class: cls = '',
    hedSize = 'normal',
    hedAlign = 'center',
    hedWidth = 'normal',
    dek,
    section,
    authors = [],
    publishTime,
    updateTime,
    width = 'widest',
    embedded = false,
    children,
    getAuthorPage,
    byline,
    published,
    updated,
  }: Props = $props();
</script>

<div style="--heroHeight: {embedded ? '850px' : '100svh'}; display:contents;">
  <div class="hero-wrapper fmb-6" class:embedded>
    <!-- stacked media hero-->
    {#if stacked}
      <Block width="fluid" class="hero-headline background-hero fmt-0">
        <!-- Handles string or snippet `hed` -->
        <Headline
          class="{cls} !text-{hedAlign}"
          width={hedWidth}
          {section}
          {hedSize}
          {hed}
          {dek}
        />

        <div class="graphic-container">
          <!-- Custom hero snippet -->
          {#if children}
            {@render children()}

            <!-- Otherwise render the image if it exists -->
          {:else if img}
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

    <!-- Non-stacked hero -->
    {#if stacked === false}
      <Block width="fluid" class="hero-headline inline-hero">
        <PaddingReset containerIsFluid={true}>
          <Headline
            class="{cls} !text-{hedAlign}"
            width={hedWidth}
            {section}
            {hedSize}
            {hed}
            {dek}
          />
        </PaddingReset>
        <div class="graphic-container">
          <!-- Custom hero snippet -->
          {#if children}
            {@render children()}

            <!-- Otherwise render the image if it exists -->
          {:else if img}
            <FeaturePhoto
              {width}
              class="my-0"
              src={img}
              caption={notes}
              altText={ariaDescription || ''}
            />
          {/if}
        </div>
      </Block>
    {/if}
  </div>

  <div class="hero-byline fmb-6">
    {#if byline}
      <!-- Custom byline/dateline -->
      {@render byline()}
    {:else if authors.length > 0 || publishTime}
      <Byline
        {authors}
        {publishTime}
        {updateTime}
        {getAuthorPage}
        {published}
        {updated}
        align="left"
      />
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
