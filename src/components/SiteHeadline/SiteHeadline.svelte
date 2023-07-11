<script lang="ts">
  /**
   * Headline
   * @type {string}
   * @required
   */
  export let hed: string = 'Reuters Graphics Interactive';
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
  export let cls: string = '';

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

<Block id="{id}" cls="headline-container {cls}" width="normal">
  <header class="headline">
    <div class="title">
      {#if section}
        <p class="section-title">
          {#if sectionUrl}
            <a href="{sectionUrl}">{section}</a>
          {:else}
            {section}
          {/if}
        </p>
      {/if}
      {#if hed}
        <h1>{hed}</h1>
      {/if}
    </div>
    <aside class="article-metadata">
      <div class="byline-container">
        <div class="byline">
          By
          {#if authors.length > 0}
            {#each authors as author, i}
              <a
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
      <div class="dateline-container">
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
  @import '../../scss/fonts/variables';

  :global(div.article-block.headline-container) {
    margin: 4rem auto;
  }

  // Official styles
  header.headline {
    text-align: center;
    color: var(--theme-colour-text-primary, var(--tr-dark-grey));

    h1 {
      text-align: left;
      font-size: 3rem;
      line-height: 1.14;
      margin: 0.6rem 0;
      font-family: var(--theme-font-family-hed, $font-family-display);
      color: var(--theme-colour-text-primary, var(--tr-dark-grey));
      @media (max-width: 900px) {
        font-size: 2.6rem;
      }
      @media (max-width: 600px) {
        font-size: 2.1rem;
        font-weight: 500;
      }
    }

    p {
      font-family: var(--theme-font-family-subhed, $font-family-display);
      color: var(--theme-colour-text-primary, var(--tr-dark-grey));
      margin: 0;
      font-weight: 200;

      &.section-title {
        font-weight: 800;
        color: var(--theme-colour-text-secondary, var(--tr-light-grey));
        text-align: left;
        font-size: 1.2rem;
        opacity: 0.8;
        @media (max-width: 600px) {
          font-size: 1rem;
        }
        a {
          color: var(--theme-colour-text-secondary, var(--tr-light-grey));
          text-decoration: none;
        }
      }
    }
    .article-metadata {
      padding: 40px 0 0;
      padding-top: 0;
      font-family: var(--theme-font-family-note, $font-family-display);
      color: var(--theme-colour-text-primary, var(--tr-dark-grey));
      text-align: left;

      .byline-container {
        margin-bottom: 0px;
      }

      .byline {
        font-weight: bold;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.4rem;
        @media (max-width: 600px) {
          font-size: 0.9rem;
          line-height: 1.2rem;
        }
        a {
          color: var(--theme-colour-text-primary, var(--tr-dark-grey));
          text-decoration: none;
          white-space: nowrap;
          &:hover {
            text-decoration: underline;
          }
        }
      }

      .dateline-container {
        text-transform: uppercase;
        color: var(--theme-colour-text-secondary, var(--tr-medium-grey));
        font-size: 0.8rem;
        line-height: 1.1rem;
        letter-spacing: 0.3px;
        margin-top: 0.5rem;
        @media (max-width: 600px) {
          font-size: 0.75rem;
          line-height: 1.05rem;
        }
      }
    }
  }
</style>
