<script lang="ts">
  // You can declare custom types to help users implement your component.
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  
  /** 
   * Width of the component within the text well.
   * @type {string}
   */
  export let width: ContainerWidth = 'normal';

  /** 
   * Add an id to the block tag to target it with custom CSS.
   * @type {string}
   */
  export let id: string = '';
  /** 
   * Add extra classes to the block tag to target it with custom CSS.
   * @type {string}
   */
  export let cls: string = '';

  /** Snap block to column widths, rather than fluidly resizing them. */
  export let snap: boolean = false;

  /** By default, all blocks have a margin bottom, except the last child. Set to `false` to remove this margin or set a `cls`/`id` and target with custom CSS. */
  export let noMargin: boolean = false;

  /** 
   * ARIA [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) for the block
   * @type {string}
   */
  export let role: string | null = null;

  /**
   * Notes to the graphic, passed in as a markdown string.
   * @type {string}
   */
  export let notes: string | null = null;

  /**
   * Set a different width for the text within the text well, for example, 
   * "normal" to keep the title, description and notes inline with the rest
   * of the text well. Can't ever be wider than `width`.
   * @type {string}
   */
  export let textWidth: ContainerWidth | null = null;

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
   * ARIA [label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) for the block
   * @type {string}
   */
  export let ariaLabel: string = 'chart';

  import GraphicBlockTextWrapper from "./GraphicBlockTextWrapper.svelte";
  import Block from "../Block/Block.svelte";
  import { marked } from 'marked';
</script>

<Block {id} {snap} {noMargin} {role} {width} {ariaLabel} cls="graphic {cls}">
  <div>
    {#if $$slots.title}
      <GraphicBlockTextWrapper width={textWidth}>
        <!-- Custom title content -->
        <slot name="title" />
      </GraphicBlockTextWrapper>
    {:else if (title)}
      <GraphicBlockTextWrapper width={textWidth}>
        <h3>{title}</h3>
        {#if (description)}
          {@html marked(description)}
        {/if}
      </GraphicBlockTextWrapper>
    {/if}
    <!-- Graphic content -->
    <slot></slot>
    {#if $$slots.notes}
      <GraphicBlockTextWrapper width={textWidth}>
        <!-- Custom notes content -->
        <slot name="notes" />
      </GraphicBlockTextWrapper>
    {:else if (notes)}
      <GraphicBlockTextWrapper width={textWidth}>
        <aside>
          {@html marked(notes)}
        </aside>
      </GraphicBlockTextWrapper>
    {/if}
  </div>
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import "../../scss/mixins";
  div {
    :global {
      @include graphic-text;
    }
  }
</style>
