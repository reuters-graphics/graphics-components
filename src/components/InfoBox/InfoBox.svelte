<!-- @component `InfoBox` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-infobox--docs) -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ContainerWidth } from '../@types/global';

  type Theme = 'light' | 'dark';

  interface Props {
    /**
     * Title of the box
     */
    title?: string | null;
    /**
     * Contents of the note as a markdown string
     */
    text?: string;
    /**
     * Additional footnotes
     */
    notes?: string | null;
    /**
     * Width of the component within the text well.
     */
    width?: ContainerWidth;
    /**
     * Add extra classes to the block tag to target it with custom CSS.
     */
    class?: string;
    /**
     * Add an id to the block tag to target it with custom CSS.
     */
    id?: string;
    /**
     * Page theme
     */
    theme?: Theme;
    /** Optional custom header snippet */
    header?: Snippet;
    /** Optional custom body snippet */
    body?: Snippet;
    /** Optional custom footer snippet */
    footer?: Snippet;
  }

  let {
    title = null,
    text,
    notes = null,
    width = 'normal',
    class: cls = '',
    id = '',
    theme = 'light',
    header,
    body,
    footer,
  }: Props = $props();

  import Block from '../Block/Block.svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';
</script>

<aside class="infobox {theme}">
  <Block
    {width}
    {id}
    class="{cls} fmy-6 fpx-6 fpy-5 border border-solid rounded"
  >
    {#if header}
      <div class="header fmb-2">
        <!-- Custom header content -->
        {@render header()}
      </div>
    {:else if title}
      <div class="header fmb-2">
        <Markdown source={title} />
      </div>
    {/if}

    {#if body}
      <div class="body">
        <!-- Custom body content -->
        {@render body()}
      </div>
    {:else}
      <div class="body">
        <Markdown source={text || ''} />
      </div>
    {/if}

    {#if footer}
      <div class="footer fmt-2">
        <!-- Custom footer content -->
        {@render footer()}
      </div>
    {:else if notes}
      <div class="footer fmt-2">
        <Markdown source={notes} />
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
