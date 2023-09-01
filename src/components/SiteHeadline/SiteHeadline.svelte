<script lang="ts">
  /**
   * Used to set headline class fluid size from text-2xl to text-4xl
   */
  type HeadlineSize = 'small' | 'normal' | 'big';

  /**
   * Headline
   * @type {string}
   * @required
   */
  export let hed: string = 'Reuters Graphics Interactive';
  /**
   * Headline size
   * @type {string}
   * @
   */
  export let hedSize: HeadlineSize = 'normal';
  /**
   * Section title.
   * @type {string}
   */
  export let section: string = 'Graphics';
  /**
   * Section url, parsed as a string. Set to blank to remove link.
   * @type {string}
   */
  export let sectionUrl: string = 'https://graphics.reuters.com';
  /**
   * Array of author names, which will be slugified to create links to Reuters author pages
   */
  export let authors: string[] = [];
  /**
   * Publish time as a datetime string.
   * @type {string}
   */
  export let publishTime: string = '';
  /**
   * Update time as a datetime string.
   * @type {string}
   */
  export let updateTime: string = '';
  /**
   * Add an id to to target with custom CSS.
   * @type {string}
   */
  export let id: string = '';
  /**
   * Add extra classes to target with custom CSS.
   * @type {string}
   */
  let cls: string = '';
  export { cls as class };

  import Block from '../Block/Block.svelte';
  import Byline from '../Byline/Byline.svelte';

  let hedClass;
  $: {
    switch (hedSize) {
      case 'big':
        hedClass = 'text-4xl';
        break;
      case 'small':
        hedClass = 'text-2xl';
        break;
      default:
        hedClass = 'text-3xl';
    }
  }
</script>

<Block id="{id}" class="headline-container fmt-9 fmb-5 {cls}" width="normal">
  <header class="headline">
    <div class="title">
      {#if section}
        <p
          class="section-title mb-0 font-subhed text-xxs text-secondary font-bold uppercase whitespace-nowrap tracking-wider"
        >
          {#if sectionUrl}
            <a class="no-underline !text-secondary" href="{sectionUrl}"
              >{section}</a
            >
          {:else}
            {section}
          {/if}
        </p>
      {/if}
      {#if hed}
        <h1 class="fmt-1 fmb-3 {hedClass}">
          {hed}
        </h1>
      {/if}
    </div>
    <Byline
      authors="{authors}"
      publishTime="{publishTime}"
      updateTime="{updateTime}"
    />
  </header>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as *;

  @media (max-width: $column-width-narrow) {
    h1 {
      @include font-semibold;
    }
  }
</style>
