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

  import Block from '../Block/Block.svelte';
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
    <div class="title">
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
    {#if $$slots.byline || $$slots.dateline}
      <aside
        class="article-metadata pb-0 font-not text-primary text-center leading-none"
        class:pt-2="{!dek}"
        class:pt-8="{dek}"
      >
        {#if $$slots.byline}
          <div class="byline-container">
            <div class="byline">
              <!-- Byline named slot -->
              <slot name="byline" />
            </div>
          </div>
        {/if}
        {#if $$slots.dateline}
          <div
            class="dateline-container text-xxs tracking-wide text-secondary uppercase"
          >
            <div class="published">
              <!-- Dateline named slot -->
              <slot name="dateline" />
            </div>
          </div>
        {/if}
      </aside>
    {/if}
  </header>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as *;

  header.headline {
    :global {
      h1 {
        @extend %fmy-1;
        @extend %fmx-auto;
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
        @extend %fmb-1;
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
