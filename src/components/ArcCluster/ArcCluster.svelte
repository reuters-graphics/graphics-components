<!--
  @component A frame for iframed embeds in Reuters.com's Arc CMS, providing the light theme, Arc font, Pym.js resizing and a header/stage/footer layout.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-embeds-arccluster--docs)
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import ArcFonts from './ArcFonts.svelte';
  import PymChild from '../PymChild/PymChild.svelte';
  import Theme from '../Theme/Theme.svelte';

  interface Props {
    /** Optional title block rendered above the stage. */
    header?: Snippet;
    /** The main visual (a map, chart, image, etc.). */
    stage: Snippet;
    /** Optional content rendered below the stage. */
    footer?: Snippet;
    /**
     * Height of the stage, in pixels, for self-contained visuals (SVGs, maps)
     * that fill a known box. Pass `'auto'` to let the stage grow with its
     * content instead — use this for self-sizing embeds like Datawrapper
     * charts or a responsive multi-column layout.
     */
    stageHeight?: number | 'auto';
    /** Extra class on the root element. */
    class?: string;
  }

  let {
    header,
    stage,
    footer,
    stageHeight = 420,
    class: cls = '',
  }: Props = $props();

  const isFlow = $derived(stageHeight === 'auto');
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<ArcFonts />

<Theme base="light">
  <div class="arc-cluster {cls}">
    {#if header}
      {@render header()}
    {/if}

    <div
      class="arc-cluster-stage-wrapper"
      class:is-flow={isFlow}
      style={isFlow ? '' : (
        `height: ${stageHeight}px; --arc-cluster-stage-height: ${stageHeight}px;`
      )}
    >
      <div class="arc-cluster-stage" class:is-flow={isFlow}>
        {@render stage()}
      </div>
    </div>

    {#if footer}
      <div class="arc-cluster-footer">
        {@render footer()}
      </div>
    {/if}
  </div>
</Theme>

<PymChild polling={500} />

<style lang="scss">
  .arc-cluster {
    width: 100%;
    background: #fff;
    font-family: 'ArcKnowledge', Arial, sans-serif;
    display: flex;
    flex-direction: column;
  }

  .arc-cluster-stage-wrapper {
    position: relative;
    width: 100%;
  }

  .arc-cluster-stage {
    position: relative;
    width: 100%;
    height: 100%;

    // Reserve the intended box for common SVG chart/map output before any
    // project-level CSS hydrates: give a staged SVG without its own dimensions
    // an explicit width/height so it fills the stage instead of collapsing and
    // causing a layout flash, while still allowing consumers to override sizing
    // with their own classes/styles. Only applied to the fixed-height stage; a
    // flow stage sizes itself to its content.
    &:not(.is-flow) {
      > :global(svg:not([width])) {
        width: 100%;
      }

      > :global(svg:not([height])) {
        height: 100%;
      }
    }

    // A flow stage grows with its content, for self-sizing embeds like
    // Datawrapper charts or a responsive multi-column layout.
    &.is-flow {
      height: auto;
    }
  }

  .arc-cluster-footer {
    // Default the footer to the embed's display font (ArcKnowledge) so
    // captions and credits match the header rather than the Theme base font.
    font-family: inherit;

    // Theme applies a global body font to bare text elements like `p`;
    // restore the embed's display font so footer text uses ArcKnowledge.
    :global(p) {
      font-family: inherit;
    }
  }
</style>
