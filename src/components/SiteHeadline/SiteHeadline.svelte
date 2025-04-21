<!-- @component `SiteHeadline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-siteheadline--docs) -->
<script lang="ts">
  import Block from '../Block/Block.svelte';
  import Byline from '../Byline/Byline.svelte';

  /**
   * Used to set headline class fluid size from text-2xl to text-4xl
   */
  type HeadlineSize = 'small' | 'normal' | 'big';

  interface Props {
    /** Headline */
    hed?: string;
    /** Headline size */
    hedSize?: HeadlineSize;
    /** Section title */
    section?: string;
    /** Section URL, parsed as a string. Set to blank to remove link */
    sectionUrl?: string;
    /** Array of author names, which will be slugified to create links to Reuters author pages */
    authors: string[];
    /** Publish time as a datetime string */
    publishTime: string;
    /** Update time as a datetime string */
    updateTime?: string;
    /** Add an id to to target with custom CSS */
    id?: string;
    /** Add extra classes to target with custom CSS */
    class?: string;
    /**
     * Custom function that returns an author page URL.
     */
    getAuthorPage?: (author: string) => string;
  }

  let {
    hed,
    hedSize = 'normal',
    section = 'Graphics',
    sectionUrl = 'https://graphics.reuters.com',
    authors,
    publishTime,
    updateTime = '',
    id = '',
    class: cls = '',
    getAuthorPage,
  }: Props = $props();

  // Set the headline text size class based on the `hedSize` prop
  let hedClass = $derived.by(() => {
    switch (hedSize) {
      case 'big':
        return 'text-4xl';
      case 'small':
        return 'text-2xl';
      default:
        return 'text-3xl';
    }
  });
</script>

<Block {id} class="headline-container fmt-7 fmb-6 {cls}" width="normal">
  <header class="headline">
    <div class="title">
      {#if section}
        <p
          class="section-title mb-0 font-subhed text-xs text-secondary font-bold uppercase whitespace-nowrap tracking-wider"
        >
          {#if sectionUrl}
            <a class="no-underline !text-secondary" href={sectionUrl}
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
    <Byline {authors} {publishTime} {updateTime} {getAuthorPage} />
  </header>
</Block>
