<script lang="ts">
  /**
   * Headline, parsed as an _inline_ markdown string in an `h1` element.
   * @type {string}
   */
  export let hed: string = 'Reuters Graphics Interactive';
  /**
   * Section title, defaulting to 'Reuters Graphics'. Change to custom title if desired.
   * @type {string}
   */
  export let section: string = 'Reuters Graphics';
  /**
   * Section url, parsed as a string, defaulting to graphics.reuters.com. Set to blank to remove link.
   * @type {string}
   */
  export let sectionUrl: string = 'https://graphics.reuters.com/';

  /**
   * Margin bottom, passed as CSS string, defining distance between Headline and body; can be negative.
   * @type {string}
   */
  export let marginBottom = '4rem';

  import Block from '../Block/Block.svelte';
  import { marked } from 'marked';
</script>

<Block cls="mb-1" width="normal">
  <header class="headline" style="--marginBottom: {marginBottom};">
    <div class="title">
      {#if section}
        <p class="{'section-title'}">
          {#if sectionUrl}
            <a href="{sectionUrl}">{section}</a>
          {:else}
            {section}
          {/if}
        </p>
      {/if}
      {#if hed}
        <h1>{@html marked.parseInline(hed)}</h1>
      {/if}
    </div>
    {#if $$slots.byline || $$slots.dateline}
      <aside class="article-metadata" class:pt-1="{false}">
        {#if $$slots.byline}
          <div class="byline-container">
            <div class="byline">
              <!-- Byline named slot -->
              <slot name="byline" />
            </div>
          </div>
        {/if}
        {#if $$slots.dateline}
          <div class="dateline-container">
            <div class="published">
              <!-- Dateline named slot -->
              <slot name="dateline" />
            </div>
          </div>
        {/if}
      </aside>
    {/if}
  </header>
</Block>

<style lang="scss">
  @import '../../scss/colours/thematic/tr';
  @import '../../scss/fonts/variables';

  // Official styles
  header.headline {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: var(--marginBottom);
    color: var(--theme-colour-text-primary, $tr-dark-grey);
    @media (max-width: 900px) {
      margin-bottom: 2rem;
    }

    :global {
      h1 {
        text-align: left;
        font-size: 3rem;
        line-height: 1.14;
        margin: 0.6rem 0;
        font-family: var(--theme-font-family-hed, $font-family-display);
        color: var(--theme-colour-text-primary, $tr-dark-grey);
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
        color: var(--theme-colour-text-primary, $tr-dark-grey);
        margin: 0;
        font-weight: 200;

        &.section-title {
          font-weight: 800;
          color: var(--theme-colour-accent, $tr-dark-red);
          text-align: left;
          color: #999;
          font-size: 16px;
          a {
            color: #999;
            text-decoration: none;
          }
        }
      }
    }
    .article-metadata {
      padding: 40px 0;
      padding-top: 0;
      font-family: var(--theme-font-family-note, $font-family-display);
      color: var(--theme-colour-text-primary, $tr-dark-grey);
      text-align: left;

      .byline-container {
        margin-bottom: 2px;
      }

      .byline {
        font-weight: bold;
        //color: #404040;
        font-weight: 600;
        strong {
          font-weight: 600;
        }
        :global {
          a {
            color: var(--theme-colour-text-primary, $tr-dark-grey);
            text-decoration: none;
          }
        }
      }

      .dateline-container {
        text-transform: uppercase;
        color: var(--theme-colour-text-secondary, $tr-medium-grey);
        font-size: 0.8rem;
        line-height: 1.2rem;
        letter-spacing: 0.2px;
        margin-top: 0px;
      }
    }
  }
</style>
