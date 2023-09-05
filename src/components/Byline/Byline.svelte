<script lang="ts">
  import Block from '../Block/Block.svelte';
  import slugify from 'slugify';
  import { apdate } from 'journalize';

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
   * Alignment of the byline.
   * @type {string}
   */
  export let align: 'left' | 'center' = 'left';
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

  /**
   * Custom function that returns an author page URL.
   * @param author
   */
  export let getAuthorPage = (author: string): string => {
    const authorSlug = slugify(author.trim(), { lower: true });
    return `https://www.reuters.com/authors/${authorSlug}/`;
  };

  $: alignmentClass = align === 'left' ? 'text-left' : 'text-center';

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
</script>

<Block id="{id}" class="byline-container {alignmentClass} {cls}" width="normal">
  <aside class="article-metadata font-subhed">
    <div class="byline">
      {#if $$slots.byline}
        <!-- Custom byline -->
        <slot name="byline" />
      {:else}
        By
        {#if authors.length > 0}
          {#each authors as author, i}
            <a
              class="no-underline whitespace-nowrap text-primary font-medium"
              href="{getAuthorPage(author)}"
              rel="author"
            >
              {author.trim()}</a
            >{#if authors.length > 1 && i < authors.length - 2},{/if}
            {#if authors.length > 1 && i === authors.length - 2}and&nbsp;{/if}
          {/each}
        {:else}
          <a
            href="https://www.reuters.com"
            class="no-underline whitespace-nowrap text-primary font-medium"
            >Reuters</a
          >
        {/if}
      {/if}
    </div>
    <div class="dateline fmt-0">
      {#if $$slots.published}
        <div class="whitespace-nowrap inline-block">
          <!-- Custom published dateline -->
          <slot name="published" />
        </div>
      {:else if isValidDate(publishTime)}
        <div class="whitespace-nowrap inline-block">
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
      {#if $$slots.updated}
        <div class="whitespace-nowrap inline-block">
          <!-- Custom updated dateline -->
          <slot name="updated" />
        </div>
      {:else if isValidDate(publishTime) && isValidDate(updateTime)}
        <div class="whitespace-nowrap inline-block">
          Last updated
          <time datetime="{updateTime}">
            {#if areSameDay(new Date(publishTime), new Date(updateTime))}
              {formatTime(updateTime)}
            {:else}
              {apdate(new Date(updateTime))}&nbsp;&nbsp;{formatTime(updateTime)}
            {/if}
          </time>
        </div>
      {/if}
    </div>
  </aside>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as *;

  .byline-container {
    a {
      &:hover {
        text-decoration-line: underline;
      }
    }
  }

  .byline,
  .dateline {
    @include body-caption;
    @include fmb-1;
  }

  @media (min-width: $column-width-narrower) {
    .dateline {
      div {
        &:not(:last-child) {
          &:after {
            content: '·';
            margin: 0 2px 0 5px;
          }
        }
      }
    }
  }
</style>
