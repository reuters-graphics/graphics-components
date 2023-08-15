<script lang="ts">
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
</script>

<Block id="{id}" class="byline-container {cls} " width="normal">
  <aside class="article-metadata font-subhed">
    <div class="byline-container">
      <div class="byline body-caption">
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

  .byline {
    @include font-regular;
    a {
      @include font-bold;
      text-decoration-line: none;
      &:hover {
        text-decoration-line: underline;
      }
    }
  }

  @media (min-width: $column-width-narrower) {
    .dateline-container {
      div {
        white-space: nowrap;
        display: inline-block;
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
