<!--
  @component `ArcEmbed` is the generic frame for an iframed embed served into the
  Arc content management system that runs Reuters.com. It provides the shared
  chrome — a light theme, the Reuters Knowledge font (loaded automatically, so
  you don't have to add `ArcFonts` yourself), Pym.js iframe resizing and a
  stacked layout — without any project-specific styling, so any graphic can
  drop its own header, stage (the main visual) and footer into the named
  snippets and match the look of the homepage. The stage is a positioned area,
  so adapters can absolutely position their own controls and overlays within it,
  and the footer holds anything below the stage (captions, summaries, credits).
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import ArcFonts from './ArcFonts.svelte';
  import PymChild from '../PymChild/PymChild.svelte';
  import Theme from '../Theme/Theme.svelte';

  interface Props {
    /** Title block rendered above the stage. */
    header: Snippet;
    /** The main visual (a map, chart, image, etc.). */
    stage: Snippet;
    /** Optional content rendered below the stage. */
    footer?: Snippet;
    /** Height of the stage, in pixels. */
    stageHeight?: number;
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
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<ArcFonts />

<Theme base="light">
  <div class="arc-embed {cls}">
    {@render header()}

    <div
      class="arc-embed-stage-wrapper"
      style="height: {stageHeight}px; --arc-embed-stage-height: {stageHeight}px;"
    >
      <div class="arc-embed-stage">
        {@render stage()}
      </div>
    </div>

    {#if footer}
      <div class="arc-embed-footer">
        {@render footer()}
      </div>
    {/if}
  </div>
</Theme>

<PymChild polling={500} />

<style lang="scss">
  .arc-embed {
    width: 100%;
    background: #fff;
    font-family: 'ArcKnowledge', Arial, sans-serif;
    display: flex;
    flex-direction: column;
  }

  .arc-embed-stage-wrapper {
    position: relative;
    width: 100%;
  }

  .arc-embed-stage {
    position: relative;
    width: 100%;
    height: 100%;

    // Reserve the intended box for common SVG chart/map output before any
    // project-level CSS hydrates. The climate-monitor prototype fixed its
    // layout flash by giving SVGs explicit dimensions; ArcEmbed extends that
    // public frame guarantee to staged SVGs while still allowing consumers to
    // override sizing with their own classes/styles.
    > :global(svg:not([width])) {
      width: 100%;
    }

    > :global(svg:not([height])) {
      height: 100%;
    }
  }

  .arc-embed-footer {
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
