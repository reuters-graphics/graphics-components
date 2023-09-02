<!-- @component `Headline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-Headline--default) -->
<script lang="ts">
  import { HeadlineSize } from '../@types/global';

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
</script>

<Block width="{width}" class="headline text-center fmt-7 fmb-5 {cls}">
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
          class="section-title mb-0 font-subhed text-xxs text-secondary font-bold uppercase whitespace-nowrap tracking-wider"
        >
          {section}
        </p>
      {/if}
      {#if $$slots.hed}
        <!-- Headline named slot -->
        <slot name="hed" />
      {:else}
        <h1 class="{hedClass}">{@html marked.parseInline(hed)}</h1>
      {/if}
      {#if $$slots.dek}
        <!-- Dek named slot-->
        <div class="dek fmx-auto fmb-5">
          <slot name="dek" />
        </div>
      {:else if dek}
        <div class="dek fmx-auto fmb-5">
          {@html marked(dek)}
        </div>
      {/if}
    </div>
    {#if $$slots.byline}
      <!-- Custom byline/dateline -->
      <slot name="byline" />
    {:else if authors.length > 0 || publishTime}
      <Byline
        class="fmy-3"
        authors="{authors}"
        publishTime="{publishTime}"
        updateTime="{updateTime}"
        align="center"
      />
    {/if}
  </header>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as *;

  :global {
    header {
      .dek {
        max-width: $column-width-normal;
        p {
          @include fmt-0;
          @include fmb-3;
          @include font-note;
          @include text-base;
          @include font-regular;
          @include leading-tight;
          @include text-primary;
          @include font-light;
        }
      }
    }
  }
</style>
