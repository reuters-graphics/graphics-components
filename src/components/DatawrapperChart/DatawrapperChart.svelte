<!-- @component `DatawrapperChart` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-datawrapperchart--docs) -->
<script lang="ts">
  import { onMount, onDestroy, type Snippet } from 'svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import type { ContainerWidth } from '../@types/global';

  type ScrollingOption = 'auto' | 'yes' | 'no';

  interface Props {
    /** Title of the graphic */
    title?: string;
    /** Description of the graphic, passed in as a markdown string. */
    description?: string;
    /**
     * iframe title
     */
    frameTitle: string;
    /**
     * Notes to the graphic, passed in as a markdown string.
     */
    notes?: string;
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
    /**
     * Pin the chart iframe to a fixed pixel height instead of letting it
     * auto-resize to the height Datawrapper reports. Useful for lining several
     * charts up at a uniform height in a grid. Pair it with `?fitchart=true` on
     * the chart `src` so Datawrapper stretches the plot to fill the fixed
     * height; without that flag the chart keeps its natural height and pads or
     * clips the difference.
     */
    height?: number;
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
    title,
    description,
    frameTitle = '',
    notes,
    ariaLabel = '',
    id = '',
    src,
    scrolling = 'no',
    height,
    width = 'normal',
    textWidth = 'normal',
    titleSnippet,
    notesSnippet,
  }: Props = $props();

  let frameElement: HTMLElement;

  // eslint-disable-next-line
  const frameFiller = (e: any) => {
    // When a fixed `height` is set, leave the frame pinned to it.
    if (height !== undefined) return;
    if (void 0 !== e.data['datawrapper-height']) {
      const t = [frameElement];
      for (const a in e.data['datawrapper-height']) {
        for (let r = 0; r < t.length; r++) {
          // @ts-ignore OK here
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
      {height}
      style="width: 0; min-width: 100% !important; border: none;{(
        height !== undefined
      ) ?
        ` height: ${height}px;`
      : ''}"
    ></iframe>
  </div>

  {#if notesSnippet}
    {@render notesSnippet()}
  {/if}
</GraphicBlock>
