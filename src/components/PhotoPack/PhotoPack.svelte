<script lang="ts">
  interface Image {
    src: string;
    altText: string;
    caption?: string;
    row?: number | string;
    group?: number | string;
    maxHeight?: number | string;
  }
  /**
   * A set of images
   * @required
   */
  export let images: Image[] = [];

  // Coerce string values to numbers, where needed
  $: imgs = images.map((img) => ({
    ...img,
    row: !img.row ? 1 : typeof img.row === 'string' ? parseInt(img.row) || 1 : img.row,
    group: !img.group ? 1 : typeof img.group === 'string' ? parseInt(img.group) || 1 : img.group,
    maxHeight: !img.maxHeight ? null : img.maxHeight === 'string' ? parseFloat(img.maxHeight) || null : img.maxHeight,
  }));

  /**
   * Container width below which to break rows.
   * @type {number}
   */
  export let breakRows: number = 900;
  /**
   * Container width below which to break groups, if groups specified in images.
   * (Should be smaller than `breakRows`.)
   * @type {number}
   */
  export let breakGroups: number = breakRows;

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
  import { groupBy } from 'lodash-es';
  import { marked } from 'marked';

  const group = (groupArray, key = 'row') => {
    const groupObj = groupBy(groupArray, d => d[key]);
    const groupKeys = Object.keys(groupObj).sort();
    return groupKeys.map(k => key === 'row' ? group(groupObj[k], 'group') : groupObj[k]);
  };

  $: rows = group(imgs);

  let containerWidth;
  $: rowsBroken = (containerWidth || Infinity) <= breakRows;
  $: groupsBroken = (containerWidth || Infinity) <= (breakGroups < breakRows ? breakGroups : breakRows);
</script>

<Block {width} {id} cls="photopack {cls}">
  <div class="photopack-container" bind:clientWidth="{containerWidth}">
    {#each rows as row, ri}
      <div
        class="photopack-row" 
        style:gap="0 {gap}px" 
        style:margin-bottom={gap + 'px'} 
        class:break={rowsBroken}
      >
        {#each row as group, gi}
          <div
            class="photopack-group"
            style:gap="0 {gap}px"
            style:margin-bottom={gap + 'px'} 
            class:break={groupsBroken}
          >
            {#each group as img, i}
              <figure
                style="--gap: {gap}px;"
                aria-labelledby="{id}-figure-{ri}-{gi}-{i}"
              >
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
    {/each}
  </div>
  <PaddingReset width={width}>
    <Block width={captionWidth}>
      <div class='captions-container'>
        {#each rows as row, ri}
          {#each row as group, gi}
            {#each group as img, i}
              {#if img.caption}
                <div id="{id}-figure-{ri}-{gi}-{i}" class='caption'>
                  {@html marked(img.caption)}
                </div>
              {/if}
            {/each}
          {/each}
        {/each}
      </div>
    </Block>
  </PaddingReset>
</Block>

<style lang="scss">
  @import "../../scss/fonts/variables";
  @import "../../scss/colours/thematic/tr";

  div.photopack-container {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    div.photopack-row {
      display: flex;
      justify-content: space-between;
      &.break {
        display: block;
        div.photopack-group {
          display: flex;
          justify-content: space-between;
          &.break {
            display: block;
            figure {
              display: block;
              max-height: unset;
              margin-bottom: var(--gap);
            }
          }
        }
      }
      div.photopack-group {
        display: contents;
      }
    }

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

  div.captions-container {
    div.caption {
      margin: 0 0 0.5rem;
      &:last-of-type {
        margin-bottom: 0;
      }
      :global(p) {
        font-size: 0.85rem;
        line-height: 1.15rem;
        font-family: var(--theme-font-family-note, $font-family-display);
        color: var(--theme-colour-text-secondary, $tr-medium-grey);
        margin: 0;
      }
    }
  }
</style>
