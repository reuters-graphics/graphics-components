<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<!-- @component `DatawrapperChart` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-datawrapperchart--docs) -->
<script lang="ts">
  import { onMount, onDestroy, type Snippet } from 'svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import type { ContainerWidth } from '../@types/global';

  type ScrollingOption = 'auto' | 'yes' | 'no';

  interface Props {
    /** Title of the graphic */
    title: string | null;
    /** Description of the graphic, passed in as a markdown string. */
    description: string | null;
    /**
     * iframe title
     */
    frameTitle: string;
    /**
     * Notes to the graphic, passed in as a markdown string.
     */
    notes: string | null;
    /**
     * iframe aria label
     */
    ariaLabel: string;
    /*
     * iframe id
     */
    id: string;
    /**
     * Datawrapper embed URL
     */
    src: string;
    /** iframe scrolling option */
    scrolling: ScrollingOption;
    /** Width of the chart within the text well. */
    width: ContainerWidth;
    /**
     * Set a different width for the text within the text well, for example,
     * "normal" to keep the title, description and notes inline with the rest
     * of the text well. Can't ever be wider than `width`.
     */
    textWidth: ContainerWidth;
    /** Custom headline and chatter snippet */
    titleSnippet?: Snippet;
    /** Custom notes and source snippet */
    notesSnippet?: Snippet;
  }

  let {
    title = null,
    description = null,
    frameTitle = '',
    notes = null,
    ariaLabel = '',
    id = '',
    src,
    scrolling = 'no',
    width = 'normal',
    textWidth = 'normal',
    titleSnippet,
    notesSnippet,
  }: Props = $props();

  let frameElement: HTMLElement;

  const frameFiller = (e: any) => {
    if (void 0 !== e.data['datawrapper-height']) {
      const t = [frameElement];
      for (const a in e.data['datawrapper-height']) {
        for (let r = 0; r < t.length; r++) {
          if (t[r].contentWindow === e.source) {
            t[r].style.height = e.data['datawrapper-height'][a] + 'px';
          }
        }
      }
    }
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', frameFiller);
    }
  });
  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('message', frameFiller);
    }
  });
</script>

<GraphicBlock {width} {textWidth} {title} {description} {notes}>
  {#if titleSnippet}
    <!-- Custom headline and chatter slot -->
    {@render titleSnippet()}
  {/if}

  <div class="datawrapper-chart">
    <iframe
      bind:this={frameElement}
      title={frameTitle}
      aria-label={ariaLabel}
      {id}
      {src}
      {scrolling}
      frameborder="0"
      data-chromatic="ignore"
      style="width: 0; min-width: 100% !important; border: none;"
    ></iframe>
  </div>

  {#if notesSnippet}
    {@render notesSnippet()}
  {/if}
</GraphicBlock>
