<!-- @component `PhotoPack` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-PhotoPack--default) -->
<script lang="ts">
  interface Image {
    src: string;
    altText: string;
    caption?: string;
    maxHeight?: number;
  }
  /**
   * Array of image objects
   * @required
   */
  export let images: Image[] = [];

  interface Layout {
    breakpoint: number;
    rows: number[];
  }
  /**
   * Array of layout objects
   * @required
   */
  export let layouts: Layout[] = [];
  /**
   * Gap between images.
   * @type {number}
   */
  export let gap = 15;

  const random4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  /**
   * Add an ID to target with SCSS. Should be unique from all other elements.
   * @type {string}
   */
  export let id: string = 'photopack-' + random4() + random4();
  /**
   * Add a class to target with SCSS.
   * @type {string}
   */
  let cls: string = '';
  export { cls as class };

  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'normal';
  /**
   * Set a different width for captions within the text well, for example,
   * "normal" to keep captions inline with the rest of the text well.
   * Can't ever be wider than `width`.
   * @type {string}
   */
  export let textWidth: ContainerWidth = 'normal';

  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';
  import Markdown from '../Markdown/Markdown.svelte';

  let containerWidth;

  const groupRows = (images, layout) => {
    // Default layout, one img per row
    if (!layout) return images.map((img) => [img]);
    // Otherwise, chunk into rows according to layout scheme
    let i = 0;
    const rows = [];
    for (const rowLength of layout.rows) {
      const row = [];
      for (const imgI of [...Array(rowLength).keys()]) {
        row.push(images[imgI + i]);
      }
      rows.push(row);
      i += rowLength;
    }
    return rows;
  };
  // Sort so breakpoints always descend
  $: layouts.sort((a, b) => (a.breakpoint < b.breakpoint ? 1 : -1));
  $: layout = layouts.find(
    (l) =>
      // Must have valid rows schema, i.e., adds to the total number of images
      l.rows.reduce((a, b) => a + b, 0) === images.length &&
      // Breakpoint is higher than container width
      (containerWidth || 0) >= l.breakpoint
  );
  $: rows = groupRows(images, layout);
</script>

<Block width="{width}" id="{id}" class="photopack fmy-6 {cls}">
  <div class="photopack-container w-full" bind:clientWidth="{containerWidth}">
    {#each rows as row, ri}
      <div
        class="photopack-row flex justify-between"
        style:gap="0 {gap}px"
        style:margin-bottom="{ri < rows.length - 1 ? gap + 'px' : ''}"
      >
        {#each row as img, i}
          <figure
            class="relative m-0 p-0 flex-1"
            aria-labelledby="{id}-figure-{ri}-{i}"
          >
            <img
              class="m-0 w-full h-full object-cover"
              src="{img.src}"
              alt="{img.altText}"
              style:max-height="{img.maxHeight ? img.maxHeight + 'px' : ''}"
            />
            {#if !img.altText}
              <div class="alt-warning absolute text-xxs py-1 px-2">altText</div>
            {/if}
          </figure>
        {/each}
      </div>
    {/each}
  </div>
  <PaddingReset containerIsFluid="{width === 'fluid'}">
    <div class="notes contents">
      <Block width="{textWidth}" class="photopack-captions-container">
        {#each rows as row, ri}
          {#each row as img, i}
            {#if img.caption}
              <div id="{id}-figure-{ri}-{i}" class="caption">
                <Markdown source="{img.caption}" />
              </div>
            {/if}
          {/each}
        {/each}
      </Block>
    </div>
  </PaddingReset>
</Block>

<style lang="scss">
  @import '../../scss/mixins';

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
      @include body-caption;
    }
  }
</style>
