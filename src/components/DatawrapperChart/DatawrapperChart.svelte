<!-- @component `DatawrapperChart` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-DatawrapperChart--default) -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import type { ContainerWidth } from '../@types/global';
  /**
   * Title of the graphic
   * @type {string}
   */
  export let title: string | null = null;

  /**
   * Description of the graphic, passed in as a markdown string.
   * @type {string}
   */
  export let description: string | null = null;
  /**
   * iframe title
   * @required
   */
  export let frameTitle: string = '';
  /**
   * Notes to the graphic, passed in as a markdown string.
   * @type {string}
   */
  export let notes: string | null = null;
  /**
   * iframe aria label
   * @required
   */
  export let ariaLabel: string = '';
  /** iframe id */
  export let id: string = '';
  /**
   * Datawrapper embed URL
   * @required
   */
  export let src: string;

  type ScrollingOption = 'auto' | 'yes' | 'no';

  /** iframe scrolling option */
  export let scrolling: ScrollingOption = 'no';

  /** Width of the chart within the text well. */
  export let width: ContainerWidth = 'normal'; // options: wide, wider, widest, fluid

  /**
   * Set a different width for the text within the text well, for example,
   * "normal" to keep the title, description and notes inline with the rest
   * of the text well. Can't ever be wider than `width`.
   * @type {string}
   */
  export let textWidth: ContainerWidth | null = 'normal';

  let frameElement;

  $: frameFiller = (e) => {
    /* eslint-disable */
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
    /* eslint-enable */
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

<GraphicBlock
  width="{width}"
  textWidth="{textWidth}"
  title="{title}"
  description="{description}"
  notes="{notes}"
>
  {#if $$slots.title}
    <!-- Custom headline and chatter slot -->
    <slot name="title" />
  {/if}

  <div class="datawrapper-chart">
    <iframe
      bind:this="{frameElement}"
      title="{frameTitle}"
      aria-label="{ariaLabel}"
      id="{id}"
      src="{src}"
      scrolling="{scrolling}"
      frameborder="0"
      style="width: 0; min-width: 100% !important; border: none;"></iframe>
  </div>

  {#if $$slots.notes}
    <!-- Custom notes and source slot -->
    <slot name="notes" />
  {/if}
</GraphicBlock>
