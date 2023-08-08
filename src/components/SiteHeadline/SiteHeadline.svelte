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
  import slugify from 'slugify';
  import { apdate } from 'journalize';

  const isValidDate = (datetime) => {
    if (!datetime) return false;
    if (!Date.parse(datetime)) return false;
    return true;
  };

  const formatTime = (datetime) =>
    new Date(datetime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });

  const areSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

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

<Block id="{id}" class="headline-container !my-16 {cls}" width="normal">
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
        <h1
          class="font-hed text-primary leading-none font-medium fmt-1 fmb-3 {hedClass}"
        >
          {hed}
        </h1>
      {/if}
    </div>
    <aside class="article-metadata mt-2 font-subhed">
      <div class="byline-container">
        <div class="byline body-caption !font-bold">
          By
          {#if authors.length > 0}
            {#each authors as author, i}
              <a
                class="no-underline"
                href="https://www.reuters.com/authors/{slugify(author.trim(), {
                  lower: true,
                })}/"
                rel="author"
              >
                {author.trim()}</a
              >{#if authors.length > 1 && i < authors.length - 2},{/if}
              {#if authors.length > 1 && i === authors.length - 2}and&nbsp;{/if}
            {/each}
          {:else}
            Reuters
          {/if}
        </div>
      </div>
      <div class="dateline-container fmt-0 body-caption">
        {#if isValidDate(publishTime)}
          <div>
            Published
            <time datetime="{publishTime}">
              {#if isValidDate(updateTime)}
                {apdate(new Date(publishTime))}
              {:else}
                {apdate(new Date(publishTime))}&nbsp;&nbsp;{formatTime(
                  publishTime
                )}
              {/if}
            </time>
          </div>
        {/if}
        {#if isValidDate(publishTime) && isValidDate(updateTime)}
          <div>
            Last updated
            <time datetime="{updateTime}">
              {#if areSameDay(new Date(publishTime), new Date(updateTime))}
                {formatTime(updateTime)}
              {:else}
                {apdate(new Date(updateTime))}&nbsp;&nbsp;{formatTime(
                  updateTime
                )}
              {/if}
            </time>
          </div>
        {/if}
      </div>
    </aside>
  </header>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as *;
  .byline a {
    text-decoration-line: none;
    &:hover {
      text-decoration-line: underline;
    }
  }

  @media (max-width: $column-width-narrow) {
    h1 {
      @include font-semibold;
    }
  }

  @media (min-width: $column-width-narrower) {
    .dateline-container {
      display: flex;
      flex-flow: wrap;
      div {
        &:not(:last-child) {
          &:after {
            content: '·';
            @include fmx-1;
          }
        }
      }
    }
  }
</style>
