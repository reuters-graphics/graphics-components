<!-- @component `EndNotes` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-InfoBox--default) -->
<script lang="ts">
  import type { ContainerWidth } from '../@types/global';
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

  import Block from '../Block/Block.svelte';
  import { marked } from 'marked';
</script>

<aside class="infobox">
  <Block
    width="{width}"
    id="{id}"
    class="{cls} fmy-6 fpx-6 fpy-5 border border-solid rounded"
  >
    {#if $$slots.header}
      <div class="header fmb-2">
        <!-- Custom title content -->
        <slot name="header" />
      </div>
    {:else if title}
      <div class="header fmb-2">{@html marked(title)}</div>
    {/if}

    {#if $$slots.body}
      <div class="body">
        <!-- Custom content -->
        <slot name="body" />
      </div>
    {:else}
      <div class="body">{@html marked(text)}</div>
    {/if}

    {#if $$slots.footer}
      <div class="footer fmt-2">
        <!-- Custom footer content -->
        <slot name="footer" />
      </div>
    {:else if notes}
      <div class="footer fmt-2">{@html marked(notes)}</div>
    {/if}
  </Block>
</aside>

<style lang="scss">
  @import '../../scss/mixins';

  .infobox {
    :global(.article-block) {
      border-color: var(--theme-colour-brand-rules);
      background-color: #fafafa;
    }

    :global(.header p) {
      @include h4;
      @include fmy-0;
    }

    :global(.body p) {
      @include body-note;
      @include text-sm;
      @include font-light;
      &:last-child {
        @include fmb-0;
      }
    }

    :global(.body ul),
    :global(.body ol) {
      @include body-note;
      @include text-sm;
      @include font-light;
      @include fmb-0;
    }

    :global(.body ul li),
    :global(.body ol li) {
      @include fmt-0;
      @include fmy-2;
      &:last-child {
        @include fmb-0;
      }
    }

    :global(.footer p) {
      @include body-caption;
      &:last-child {
        @include fmb-0;
      }
    }
  }
</style>
