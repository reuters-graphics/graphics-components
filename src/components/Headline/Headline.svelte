<!-- @component `Headline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-Headline--default) -->
<script lang="ts">
  import { HeadlineSize } from '../@types/global';

  /**
   * Headline, parsed as an _inline_ markdown string in an `h1` element.
   * @type {string}
   */
  export let hed: string = 'Reuters Graphics Interactive';

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

<Block class="mb-1">
  <header class="headline text-center mb-0 my-16 text-primary">
    {#if $$slots.crown}
      <div class="crown-container flex justify-center items-center">
        <!-- Crown named slot -->
        <slot name="crown" />
      </div>
    {/if}
    <div class="title mb-3">
      {#if section}
        <p class="section-title">{section}</p>
      {/if}
      {#if $$slots.hed}
        <!-- Headline named slot -->
        <slot name="hed" />
      {:else}
        <h1 class="{hedClass}">{@html marked.parseInline(hed)}</h1>
      {/if}
      {#if $$slots.dek}
        <!-- Dek named slot-->
        <slot name="dek" />
      {:else if dek}
        {@html marked(dek)}
      {/if}
    </div>
    {#if $$slots.byline}
      <!-- Custom byline/dateline -->
      <slot name="byline" />
    {:else if authors.length > 0 || publishTime}
      <Byline
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

  header.headline {
    :global {
      h1 {
        @include fmy-1;
        @include fmx-auto;
      }

      p {
        @include font-sans;
        @include text-primary;
        @include leading-tighter;
        margin: 0;
        font-weight: 300;

        &.section-title {
          font-size: 1rem;
          font-weight: 800;
          @include text-accent;
        }
      }
    }
    .article-metadata {
      .byline-container {
        @include fmb-1;
      }

      .byline {
        :global {
          a {
            @include text-primary;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
