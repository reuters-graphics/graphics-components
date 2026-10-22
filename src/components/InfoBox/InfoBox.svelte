<!--
  @component A callout aside with an optional title, markdown body and footnotes for supplementary context within article text.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-infobox--docs)
-->
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
     * Optional shorter markdown preview. When provided with `text`, the box
     * starts collapsed and offers a control to reveal or hide the full text.
     * Has no effect when a custom `body` snippet is supplied.
     */
    collapsedText?: string;
    /** Accessible label for the control while the box is collapsed. */
    expandLabel?: string;
    /** Accessible label for the control while the full text is shown. */
    collapseLabel?: string;
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
    collapsedText,
    expandLabel = 'Read more',
    collapseLabel = 'Show less',
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
  import ExpandCollapseButton from '../ExpandCollapseButton/ExpandCollapseButton.svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';

  let expanded = $state(false);
  const instanceId = $props.id();
  const bodyId = `infobox-body-${instanceId}`;
  const canCollapse = $derived(
    !body &&
      text !== undefined &&
      collapsedText !== undefined &&
      collapsedText !== text
  );
  const displayedText = $derived(
    canCollapse && !expanded ? (collapsedText ?? '') : (text ?? '')
  );
</script>

<aside class="infobox {theme}">
  <Block
    {width}
    {id}
    class="{cls} fmy-5 fpx-6 fpy-5 border border-solid rounded"
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
    {:else if canCollapse}
      <div class="body-wrap">
        <div id={bodyId} class="body" class:body--collapsed={!expanded}>
          <Markdown source={displayedText} />
        </div>
        <div class="body-control">
          <ExpandCollapseButton
            {expanded}
            controls={bodyId}
            {expandLabel}
            {collapseLabel}
            ontoggle={() => (expanded = !expanded)}
          />
        </div>
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

    // The fluid inline padding (`fpx-6`) keeps a ~2.25rem minimum, which
    // squeezes the text on narrow screens. Tighten it to match the page
    // gutter on mobile.
    @media (max-width: 767px) {
      :global(.article-block) {
        padding-inline: 1rem;
      }
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

    :global(.body h3) {
      @include mixins.font-sans;
      @include mixins.text-xs;
      @include mixins.font-semibold;
      @include mixins.text-secondary;
      margin-block-start: 1.5rem;
      margin-block-end: 0.35rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    :global(.body h3:first-child) {
      margin-block-start: 0;
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

    .body--collapsed {
      -webkit-mask-image: linear-gradient(
        to bottom,
        #000 calc(100% - 2rem),
        transparent
      );
      mask-image: linear-gradient(
        to bottom,
        #000 calc(100% - 2rem),
        transparent
      );
    }

    .body-control {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;
    }

    :global(.footer p) {
      @include mixins.body-caption;
      &:last-child {
        @include mixins.fmb-0;
      }
    }
  }
</style>
