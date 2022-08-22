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
  export let gap = 10;

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
  export let cls: string = '';

  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'normal';
  /**
   * Set a different width for captions within the text well, for example,
   * "normal" to keep captions inline with the rest of the text well.
   * Can't ever be wider than `width`.
   * @type {string}
   */
  export let captionWidth: ContainerWidth = 'normal';

  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/index.svelte';
  import { marked } from 'marked';

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

<Block width="{width}" id="{id}" cls="photopack {cls}">
  <div class="photopack-container" bind:clientWidth="{containerWidth}">
    {#each rows as row, ri}
      <div
        class="photopack-row"
        style:gap="0 {gap}px"
        style:margin-bottom="{gap + 'px'}"
      >
        {#each row as img, i}
          <figure aria-labelledby="{id}-figure-{ri}-{i}">
            <img
              src="{img.src}"
              alt="{img.altText}"
              style:max-height="{img.maxHeight ? img.maxHeight + 'px' : ''}"
            />
          </figure>
        {/each}
      </div>
    {/each}
  </div>
  <PaddingReset width="{width}">
    <Block width="{captionWidth}">
      <div class="captions-container">
        {#each rows as row, ri}
          {#each row as img, i}
            {#if img.caption}
              <div id="{id}-figure-{ri}-{i}" class="caption">
                {@html marked(img.caption)}
              </div>
            {/if}
          {/each}
        {/each}
      </div>
    </Block>
  </PaddingReset>
</Block>

<style lang="scss">
  @import '../../scss/fonts/variables';
  @import '../../scss/colours/thematic/tr';

  div.photopack-container {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    div.photopack-row {
      display: flex;
      justify-content: space-between;
      figure {
        flex: 1;
        margin: 0;
        padding: 0;
        img {
          margin: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  div.captions-container {
    div.caption {
      margin: 0 0 0.6rem;
      &:last-of-type {
        margin-bottom: 0;
      }
      :global(p) {
        font-size: 0.85rem;
        line-height: 1.1rem;
        font-family: var(--theme-font-family-note, $font-family-display);
        color: var(--theme-colour-text-secondary, $tr-medium-grey);
        margin: 0;
        font-weight: 300;
      }
    }
  }
</style>
