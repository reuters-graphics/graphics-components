<script lang="ts">
  import type { ContainerWidth } from '../@types/global';

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
  /**
   * ARIA description, passed in as a markdown string.
   * @type {string}
   */
  export let ariaDescription: string | null = null;

  import AriaHidden from './AriaHidden.svelte';
  import TextBlock from './TextBlock.svelte';
  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';
  import { marked } from 'marked';
</script>

<Block
  id="{id}"
  snap="{snap}"
  role="{role}"
  width="{width}"
  ariaLabel="{ariaLabel}"
  cls="graphic {cls}"
>
  <div>
    {#if $$slots.title}
      <PaddingReset containerIsFluid="{width === 'fluid'}">
        <TextBlock width="{textWidth}">
          <!-- Custom title content -->
          <slot name="title" />
        </TextBlock>
      </PaddingReset>
    {:else if title}
      <PaddingReset containerIsFluid="{width === 'fluid'}">
        <TextBlock width="{textWidth}">
          <h3>{title}</h3>
          {#if description}
            {@html marked(description)}
          {/if}
        </TextBlock>
      </PaddingReset>
    {/if}
    <AriaHidden hidden="{!!$$slots.aria || !!ariaDescription}">
      <!-- Graphic content -->
      <slot />
    </AriaHidden>
    {#if $$slots.aria || ariaDescription}
      <div class="visually-hidden">
        {#if $$slots.aria}
          <!-- Custom ARIA markup -->
          <slot name="aria" />
        {:else}
          {@html marked(ariaDescription)}
        {/if}
      </div>
    {/if}
    {#if $$slots.notes}
      <PaddingReset containerIsFluid="{width === 'fluid'}">
        <TextBlock width="{textWidth}">
          <!-- Custom notes content -->
          <slot name="notes" />
        </TextBlock>
      </PaddingReset>
    {:else if notes}
      <PaddingReset containerIsFluid="{width === 'fluid'}">
        <TextBlock width="{textWidth}">
          <aside>
            {@html marked(notes)}
          </aside>
        </TextBlock>
      </PaddingReset>
    {/if}
  </div>
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import '../../scss/mixins';
  div {
    :global {
      @include graphic-text;
    }
  }

  .visually-hidden {
    @include visually-hidden;
  }
</style>
