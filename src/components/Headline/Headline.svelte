<!-- @component `Headline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-headline--docs) -->
<script lang="ts">
  // Types
  import type { HeadlineSize } from './../@types/global';
  import type { Snippet } from 'svelte';

  // Components
  import Block from '../Block/Block.svelte';
  import Byline from '../Byline/Byline.svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';

  interface Props {
    /** Headline, parsed as an _inline_ markdown string in an `h1` element OR as a custom snippet. */
    hed: string | Snippet;
    /** Add extra classes to the block tag to target it with custom CSS. */
    class?: string;
    /** Headline size: small, normal, big, bigger, biggest */
    hedSize?: HeadlineSize;
    /** Dek, parsed as a markdown string OR as a custom snippet. */
    dek?: string | Snippet;

    /** Section title */
    section?: string;
    /** Array of author names, which will be slugified to create links to Reuters author pages */
    authors?: string[];

    /** Publish time as a datetime string. */
    publishTime?: string;
    /** Update time as a datetime string. */
    updateTime?: string;
    /** Width of the headline: normal, wide, wider, widest */
    width?: 'normal' | 'wide' | 'wider' | 'widest';
    /**
     * Custom function that returns an author page URL.
     */
    getAuthorPage?: (author: string) => string;
    /** Custom crown snippet */
    crown?: Snippet;
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
    hed = 'Reuters Graphics Interactive',
    class: cls = '',
    hedSize = 'normal',
    dek,
    section,
    authors = [],
    publishTime = '',
    updateTime = '',
    width = 'normal',
    getAuthorPage,
    crown,
    byline,
    published,
    updated,
  }: Props = $props();

  // Set the headline text size class based on the `hedSize` prop
  let hedClass = $state('text-3xl');
  $effect(() => {
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
  });
</script>

<div class="headline-wrapper" style="display:contents;">
  <Block {width} class="headline text-center fmt-7 fmb-6 {cls}">
    <header class="relative">
      {#if crown}
        <div class="crown-container">
          <!-- Crown snippet -->
          {@render crown()}
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
        {#if typeof hed === 'string'}
          <h1 class={hedClass}>
            <Markdown source={hed} inline />
          </h1>
        {:else if hed}
          <!-- Headline snippet -->
          {@render hed()}
        {/if}
        {#if typeof dek === 'string'}
          <div class="dek fmx-auto fmb-6">
            <Markdown source={dek} />
          </div>
        {:else if dek}
          <!-- Dek snippet-->
          <div class="dek fmx-auto fmb-6">
            {@render dek()}
          </div>
        {/if}
      </div>
      {#if authors.length > 0 || publishTime}
        <Byline
          cls="fmy-4"
          {authors}
          {publishTime}
          {updateTime}
          {getAuthorPage}
          {published}
          {updated}
          align="center"
        />
      {:else if byline}
        <!-- Custom byline/dateline -->
        {@render byline()}
      {/if}
    </header>
  </Block>
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;
  .headline-wrapper {
    :global(.dek) {
      max-width: mixins.$column-width-normal;
    }
    :global(.dek p) {
      @include mixins.fmt-0;
      @include mixins.font-note;
      @include mixins.leading-tight;
      @include mixins.font-light;
      @include mixins.fmb-3;
    }
  }
</style>
