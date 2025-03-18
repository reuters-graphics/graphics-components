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
     * Notes to the graphic, passed in as a markdown string.
     */
    notes?: string;
    /** Custom notes snippet */
    customNotes?: Snippet;
    /**
     * Width of the component within the text well.
     */
    width?: ContainerWidth;
    /**
     * Set a different width for the text within the text well, for example, "normal" to keep the title, description and notes inline with the rest of the text well. Can't ever be wider than `width`.
     */
    textWidth?: ContainerWidth;
    /**
     * Title of the graphic
     */
    title?: string;
    /** Custom title snippet */
    customTitle?: Snippet;
    /**
     * Description of the graphic, passed in as a markdown string.
     */
    description?: string;
    /**
     * ARIA [label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) for the block
     */
    ariaLabel?: string;
    /**
     * ARIA description, passed in as a markdown string.
     */
    ariaDescription?: string;
    /** Custom ARIA snippet */
    customAria?: Snippet;
  }

  let {
    children,
    id = '',
    class: cls = '',
    snap = false,
    role,
    notes,
    customNotes,
    width = 'normal',
    textWidth = 'normal',
    title,
    customTitle,
    description,
    ariaLabel = 'chart',
    ariaDescription,
    customAria,
  }: Props = $props();
</script>

<Block {id} {snap} {role} {width} {ariaLabel} class="graphic fmy-6 {cls}">
  {#if customTitle}
    <PaddingReset containerIsFluid={width === 'fluid'}>
      <TextBlock width={textWidth}>
        <!-- Custom title snippet -->
        {@render customTitle()}
      </TextBlock>
    </PaddingReset>
  {:else if title}
    <PaddingReset containerIsFluid={width === 'fluid'}>
      <TextBlock width={textWidth}>
        <h3>{title}</h3>
        {#if description}
          <Markdown source={description} />
        {/if}
      </TextBlock>
    </PaddingReset>
  {/if}
  <AriaHidden hidden={!!customAria || !!ariaDescription}>
    <!-- Graphic content -->
    {@render children()}
  </AriaHidden>
  {#if customAria || ariaDescription}
    <div class="visually-hidden">
      {#if customAria}
        <!-- Custom ARIA snippet -->
        {@render customAria()}
      {:else if ariaDescription}
        <Markdown source={ariaDescription} />
      {/if}
    </div>
  {/if}
  {#if customNotes}
    <PaddingReset containerIsFluid={width === 'fluid'}>
      <TextBlock width={textWidth}>
        <!-- Custom notes content -->
        {@render customNotes()}
      </TextBlock>
    </PaddingReset>
  {:else if notes}
    <PaddingReset containerIsFluid={width === 'fluid'}>
      <TextBlock width={textWidth}>
        <aside>
          <Markdown source={notes} />
        </aside>
      </TextBlock>
    </PaddingReset>
  {/if}
</Block>

<style lang="scss" global>
  @use '../../scss/mixins' as mixins;

  .article-block.graphic {
    // Dek
    p {
      @include mixins.body-note;
      @include mixins.font-light;
    }
    // Caption and Sources
    aside {
      p {
        @include mixins.body-caption;
        @include mixins.fmy-1;
      }
    }
  }
</style>
