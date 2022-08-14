<script lang="ts">
  import { onMount } from 'svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
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

  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  /** Width of the chart within the text well. */
  export let width: ContainerWidth = 'normal'; // options: wide, wider, widest, fluid

  /**
   * Set a different width for the text within the text well, for example, 
   * "normal" to keep the title, description and notes inline with the rest
   * of the text well. Can't ever be wider than `width`.
   * @type {string}
   */
   export let textWidth: ContainerWidth | null = null;

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', function (e) {
        if (void 0 !== e.data['datawrapper-height']) {
          const t = document.querySelectorAll('iframe');
          for (const a in e.data['datawrapper-height']) {
            for (let r = 0; r < t.length; r++) {
              if (t[r].contentWindow === e.source) {
                t[r].style.height = e.data['datawrapper-height'][a] + 'px';
              }
            }
          }
        }
      });
    }
  });
</script>

<GraphicBlock {width} {textWidth} {title} {description} {notes}>
  {#if $$slots.title}
    <!-- Custom headline and chatter slot -->
    <slot name="title" />
  {/if}

  <div class="datawrapper-chart">
    <iframe
      title="{frameTitle}"
      aria-label="{ariaLabel}"
      id="{id}"
      src="{src}"
      scrolling="{scrolling}"
      frameborder="0"
      style="width: 0; min-width: 100% !important; border: none;"
    ></iframe>
  </div>

  {#if $$slots.notes}
    <!-- Custom notes and source slot -->
    <slot name="notes" />
  {/if}
</GraphicBlock>

<style lang="scss">
  .datawrapper-chart {
    margin: auto;
  }
</style>
