<!-- @component `GraphicBlock` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-graphicblock--docs) -->
<script lang="ts">
  // Types
  import type { ContainerWidth } from '../@types/global';
  import type { Snippet } from 'svelte';

  // Components
  import AriaHidden from './components/AriaHidden.svelte';
  import TextBlock from './components/TextBlock.svelte';
  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';
  import Markdown from '../Markdown/Markdown.svelte';

  interface Props {
    /** Content to place inside `GraphicBlock` */
    children: Snippet;
    /**
     * Add an id to the block tag to target it with custom CSS.
     */
    id?: string;
    /**
     * Add classes to the block tag to target it with custom CSS.
     */
    class?: string;
    /** Snap block to column widths, rather than fluidly resizing them. */
    snap?: boolean;
    /**
     * ARIA [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) for the block
     */
    role?: string;
    /**
     * Notes to the graphic, passed in as a markdown string OR as a custom snippet.
     */
    notes?: string | Snippet;
    /**
     * Width of the component within the text well.
     */
    width?: ContainerWidth;
    /**
     * Set a different width for the text within the text well, for example, "normal" to keep the title, description and notes inline with the rest of the text well. Can't ever be wider than `width`.
     */
    textWidth?: ContainerWidth;
    /**
     * Title of the graphic as a string or a custom snippet.
     */
    title?: string | Snippet;
    /**
     * Description of the graphic, passed in as a markdown string.
     */
    description?: string;
    /**
     * ARIA [label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) for the block
     */
    ariaLabel?: string;
    /**
     * ARIA description, passed in as a markdown string OR as a custom snippet.
     */
    ariaDescription?: string | Snippet;
  }

  let {
    children,
    id = '',
    class: cls = '',
    snap = false,
    role,
    notes,
    width = 'normal',
    textWidth = 'normal',
    title,
    description,
    ariaLabel = 'chart',
    ariaDescription,
  }: Props = $props();
</script>

<div class="container">
  <Block {id} {snap} {role} {width} {ariaLabel} class="graphic fmy-6 {cls}">
    <!-- Check if `title` is a snippet -->
    {#if typeof title === 'string'}
      <PaddingReset containerIsFluid={width === 'fluid'}>
        <TextBlock width={textWidth}>
          <h3>{title}</h3>
          {#if description}
            <Markdown source={description} />
          {/if}
        </TextBlock>
      </PaddingReset>
    {:else if title}
      <PaddingReset containerIsFluid={width === 'fluid'}>
        <TextBlock width={textWidth}>
          <!-- Custom title snippet -->
          {@render title()}
        </TextBlock>
      </PaddingReset>
    {/if}
    <AriaHidden hidden={!!ariaDescription}>
      <!-- Graphic content -->
      {@render children()}
    </AriaHidden>
    {#if ariaDescription}
      <div class="visually-hidden">
        {#if typeof ariaDescription === 'string'}
          <Markdown source={ariaDescription} />
        {:else}
          <!-- Custom ARIA snippet -->
          {@render ariaDescription()}
        {/if}
      </div>
    {/if}
    {#if typeof notes === 'string'}
      <PaddingReset containerIsFluid={width === 'fluid'}>
        <TextBlock width={textWidth}>
          <aside>
            <Markdown source={notes} />
          </aside>
        </TextBlock>
      </PaddingReset>
    {:else if notes}
      <PaddingReset containerIsFluid={width === 'fluid'}>
        <TextBlock width={textWidth}>
          <!-- Custom notes content -->
          {@render notes()}
        </TextBlock>
      </PaddingReset>
    {/if}
  </Block>
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  div.container {
    display: contents;

    // Dek
    :global(.article-block.graphic p) {
      @include mixins.body-note;
      @include mixins.font-light;
    }

    // Caption and Sources
    :global(.article-block.graphic aside p) {
      @include mixins.body-caption;
      @include mixins.fmy-1;
    }
  }
</style>
