<!--
  @component `ArcEmbed` is the generic frame for an iframed embed served into the
  Arc content management system that runs Reuters.com. It provides the shared
  chrome — a light theme, the Reuters Knowledge font, Pym.js iframe resizing and
  a stacked layout — without any project-specific styling, so any graphic can
  drop its own header, stage (the main visual) and footer into the named
  snippets and match the look of the homepage. The stage is a positioned area,
  so adapters can absolutely position their own controls and overlays within it,
  and the footer holds anything below the stage (captions, summaries, credits).
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
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
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
  />
</svelte:head>

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
      {@render footer()}
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
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
  }
</style>
