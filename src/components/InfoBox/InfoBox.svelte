<!-- @component `InfoBox` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-infobox--docs) -->
<script lang="ts">
  import type { ContainerWidth } from '../@types/global';

  type Theme = 'light' | 'dark';

  /**
   * Title of the box
   */
  export let title: string | null = null;

  /**
   * Contents of the note as a markdown string
   */
  export let text: string = '';

  /**
   * Additional footnotes
   */ export let notes: string | null = null;

  /**
   * Width of the component within the text well.
   * @type {string}
   */
  export let width: ContainerWidth = 'normal';

  /**
   * Add extra classes to the block tag to target it with custom CSS.
   * @type {string}
   */
  let cls: string = '';
  export { cls as class };

  /**
   * Add an id to the block tag to target it with custom CSS.
   * @type {string}
   */
  export let id: string = '';

  /**
   * Page theme
   */
  export let theme: Theme = 'light';

  import Block from '../Block/Block.svelte';
  import Markdown from '../Markdown/Markdown.svelte';
</script>

<aside class="infobox {theme}">
  <Block
    {width}
    {id}
    class="{cls} fmy-6 fpx-6 fpy-5 border border-solid rounded"
  >
    {#if $$slots.header}
      <div class="header fmb-2">
        <!-- Custom title content -->
        <slot name="header" />
      </div>
    {:else if title}
      <div class="header fmb-2">
        <Markdown source="{title}" />
      </div>
    {/if}

    {#if $$slots.body}
      <div class="body">
        <!-- Custom content -->
        <slot name="body" />
      </div>
    {:else}
      <div class="body">
        <Markdown source="{text}" />
      </div>
    {/if}

    {#if $$slots.footer}
      <div class="footer fmt-2">
        <!-- Custom footer content -->
        <slot name="footer" />
      </div>
    {:else if notes}
      <div class="footer fmt-2">
        <Markdown source="{notes}" />
      </div>
    {/if}
  </Block>
</aside>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .infobox {
    :global(.article-block) {
      border-color: var(--theme-colour-brand-rules);
    }

    &.light {
      :global(.article-block) {
        background-color: rgb(250 250 250 / 100%);
      }
    }
    &.dark {
      :global(.article-block) {
        background-color: rgb(250 250 250 / 10%);
      }
    }

    :global(.header p) {
      @include mixins.h4;
      @include mixins.fmy-0;
    }

    :global(.body p) {
      @include mixins.body-note;
      @include mixins.text-sm;
      @include mixins.font-light;
      &:last-child {
        @include mixins.fmb-0;
      }
    }

    :global(.body ul),
    :global(.body ol) {
      @include mixins.body-note;
      @include mixins.text-sm;
      @include mixins.font-light;
      @include mixins.fmb-0;
    }

    :global(.body ul li),
    :global(.body ol li) {
      @include mixins.fmt-0;
      @include mixins.fmy-2;
      &:last-child {
        @include mixins.fmb-0;
      }
    }

    :global(.footer p) {
      @include mixins.body-caption;
      &:last-child {
        @include mixins.fmb-0;
      }
    }
  }
</style>
