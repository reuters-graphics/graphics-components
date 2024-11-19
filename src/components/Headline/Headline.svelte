<!-- @component `Headline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-headline--docs) -->
<script lang="ts">
  import type { HeadlineSize } from './../@types/global';

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

  import Block from '../Block/Block.svelte';
  import Byline from '../Byline/Byline.svelte';
  import Markdown from '../Markdown/Markdown.svelte';

  let hedClass: string;
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
</script>

<div class="headline-wrapper" style="display:contents;">
  <Block {width} class="headline text-center fmt-7 fmb-6 {cls}">
    <header class="relative">
      {#if $$slots.crown}
        <div class="crown-container">
          <!-- Crown named slot -->
          <slot name="crown" />
        </div>
      {/if}
      <div class="title">
        {#if section}
          <p
            class="section-title mb-0 font-subhed text-xs text-secondary font-bold uppercase whitespace-nowrap tracking-wider"
          >
            {section}
          </p>
        {/if}
        {#if $$slots.hed}
          <!-- Headline named slot -->
          <slot name="hed" />
        {:else}
          <h1 class="{hedClass}">
            <Markdown source="{hed}" parseInline />
          </h1>
        {/if}
        {#if $$slots.dek}
          <!-- Dek named slot-->
          <div class="dek fmx-auto fmb-6">
            <slot name="dek" />
          </div>
        {:else if dek}
          <div class="dek fmx-auto fmb-6">
            <Markdown source="{dek}" />
          </div>
        {/if}
      </div>
      {#if $$slots.byline}
        <!-- Custom byline/dateline -->
        <slot name="byline" />
      {:else if authors.length > 0 || publishTime}
        <Byline
          class="fmy-4"
          {authors}
          {publishTime}
          {updateTime}
          align="center"
        />
      {/if}
    </header>
  </Block>
</div>

<style lang="scss">
  @use '../../scss/mixins' as *;
  .headline-wrapper {
    :global(.dek) {
      max-width: $column-width-normal;
    }
    :global(.dek p) {
      @include fmt-0;
      @include font-note;
      @include leading-tight;
      @include font-light;
      @include fmb-3;
    }
  }
</style>
