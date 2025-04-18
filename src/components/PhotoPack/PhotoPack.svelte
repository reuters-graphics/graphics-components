<!-- @component `PhotoPack` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-multimedia-photopack--docs) -->
<script lang="ts">
  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';

  // Utils
  import { random4 } from '../../utils';
  import { groupRows } from './utils';

  // Types
  export interface Image {
    src: string;
    altText: string;
    caption?: string;
    maxHeight?: number;
  }

  export interface Layout {
    breakpoint: number;
    rows: number[];
  }

  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  interface Props {
    /** Array of image objects */
    images: Image[];
    /** Array of layout objects */
    layouts?: Layout[];
    /** Gap between images. */
    gap?: number;
    /** Add an ID to target with SCSS. Should be unique from all other elements. */
    id?: string;
    /** Add a class to target with SCSS. */
    class: string;
    /** Width of the component within the text well: 'normal' | 'wide' | 'wider' | 'widest' | 'fluid' */
    width: ContainerWidth;
    /** Set a different width for captions within the text well. For example, "normal" to keep captions inline with the rest of the text well.
     *
     *  Can't ever be wider than `width`: 'normal' | 'wide' | 'wider' | 'widest' | 'fluid' */
    textWidth: ContainerWidth;
  }

  let {
    images,
    layouts,
    gap = 15,
    id = 'photopack-' + random4() + random4(),
    class: cls = '',
    width = 'normal',
    textWidth = 'normal',
  }: Props = $props();

  let containerWidth = $state(0); // or undefined?

  /**
   *
   * Sort layouts by descending breakpoints.
   *
   * @NOTE - We can't use `sort` directly on the array because it mutates the original array; we can't update a state inside a derived expression: https://svelte.dev/docs/svelte/runtime-errors#Client-errors-state_unsafe_mutation
   *
   * So, we need to use `toSorted` instead.
   */
  let sortedLayouts = $derived(
    layouts?.toSorted((a, b) => (a.breakpoint < b.breakpoint ? 1 : -1))
  );

  let layout = $derived(
    sortedLayouts?.find(
      (l) =>
        // Must have valid rows schema, i.e., adds to the total number of images
        l.rows.reduce((a, b) => a + b, 0) === images.length &&
        // Breakpoint is higher than container width
        (containerWidth || 0) >= l.breakpoint
    )
  );

  let rows = $derived(groupRows(images, layout));
</script>

<Block {width} {id} class="photopack fmy-6 {cls}">
  <div class="photopack-container w-full" bind:clientWidth={containerWidth}>
    {#each rows as row, ri}
      <div
        class="photopack-row flex justify-between"
        style:gap="0 {gap}px"
        style:margin-bottom={ri < rows.length - 1 ? gap + 'px' : ''}
      >
        {#each row as img, i}
          <figure
            class="relative m-0 p-0 flex-1"
            aria-labelledby="{id}-figure-{ri}-{i}"
          >
            <img
              class="m-0 w-full h-full object-cover"
              src={img.src}
              alt={img.altText}
              style:max-height={img.maxHeight ? img.maxHeight + 'px' : ''}
            />
            {#if !img.altText}
              <div class="alt-warning absolute text-xxs py-1 px-2">altText</div>
            {/if}
          </figure>
        {/each}
      </div>
    {/each}
  </div>
  <PaddingReset containerIsFluid={width === 'fluid'}>
    <div class="notes contents">
      <Block width={textWidth} class="photopack-captions-container">
        {#each rows as row, ri}
          {#each row as img, i}
            {#if img.caption}
              <div id="{id}-figure-{ri}-{i}" class="caption">
                <Markdown source={img.caption} />
              </div>
            {/if}
          {/each}
        {/each}
      </Block>
    </div>
  </PaddingReset>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  div.photopack-container {
    div.photopack-row {
      figure {
        div.alt-warning {
          background-color: red;
          color: white;
          top: 0;
          right: 0;
        }
      }
    }
  }

  .notes {
    :global(.photopack-captions-container .caption p) {
      @include mixins.body-caption;
    }
  }
</style>
