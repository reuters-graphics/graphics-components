<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `Byline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-byline--docs) -->
<script lang="ts">
  import Block from '../Block/Block.svelte';
  import slugify from 'slugify';
  import { apdate } from 'journalize';
  import type { Snippet } from 'svelte';

  interface Props {
    /**
     * Array of author names, which will be slugified to create links to Reuters author pages
     */
    authors?: string[];
    /**
     * Publish time as a datetime string.
     */
    publishTime: string;
    /**
     * Update time as a datetime string.
     */
    updateTime: string;
    /**
     * Alignment of the byline.
     */
    align?: 'left' | 'center';
    /**
     * Add an id to to target with custom CSS.
     * @type {string}
     */
    id?: string;
    /**
     * Add extra classes to target with custom CSS.
     * @type {string}
     */
    cls?: string;
    /**
     * Custom function that returns an author page URL.
     */
    getAuthorPage?: (author: string) => string;
    /**
     * Optional snippet for a custom byline.
     */
    byline?: Snippet;
    /**
     * Optional snippet for a custom published dateline.
     */
    // Specify that this prop should have the type of a Svelte snippet, i.e. basic html
    published?: Snippet;
    /**
     * Optional snippet for a custom updated dateline.
     */
    updated?: Snippet;
  }

  let {
    authors = [],
    publishTime,
    updateTime,
    align = 'left',
    id = '',
    cls = '',
    getAuthorPage = (author: string): string => {
      const authorSlug = slugify(author.trim(), { lower: true });
      return `https://www.reuters.com/authors/${authorSlug}/`;
    },
    byline,
    published,
    updated,
  }: Props = $props();

  let alignmentClass = $derived(align === 'left' ? 'text-left' : 'text-center');

  /**
  /* Date validation and formatter functions
   */
  const isValidDate = (datetime: string) => {
    if (!datetime) return false;
    if (!Date.parse(datetime)) return false;
    return true;
  };

  const formatTime = (datetime: string) =>
    new Date(datetime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });

  const areSameDay = (first: Date, second: Date) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
</script>

<Block {id} class="byline-container {alignmentClass} {cls}" width="normal">
  <aside class="article-metadata font-subhed">
    <div class="byline body-caption fmb-1">
      {#if byline}
        <!-- Custom byline -->
        {@render byline()}
      {:else}
        By
        {#if authors.length > 0}
          {#each authors as author, i}
            <a
              class="no-underline whitespace-nowrap text-primary font-bold"
              href={getAuthorPage(author)}
              rel="author"
            >
              {author.trim()}</a
            >{#if authors.length > 1 && i < authors.length - 2},{/if}
            {#if authors.length > 1 && i === authors.length - 2}and&nbsp;{/if}
          {/each}
        {:else}
          <a
            href="https://www.reuters.com"
            class="no-underline whitespace-nowrap text-primary font-bold"
            >Reuters</a
          >
        {/if}
      {/if}
    </div>
    <div class="dateline body-caption fmt-0">
      {#if published}
        <div class="whitespace-nowrap inline-block">
          <!-- Custom published dateline snippet -->
          <time datetime={publishTime}>
            {@render published()}
          </time>
        </div>
      {:else if isValidDate(publishTime)}
        <div class="whitespace-nowrap inline-block">
          Published
          <time datetime={publishTime}>
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
      {#if updated}
        <div class="whitespace-nowrap inline-block">
          <!-- Custom updated dateline snippet -->
          <time datetime={updateTime}>
            {@render updated()}
          </time>
        </div>
      {:else if isValidDate(publishTime) && isValidDate(updateTime)}
        <div class="whitespace-nowrap inline-block">
          Last updated
          <time datetime={updateTime}>
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
