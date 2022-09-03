<!-- @component `Headline` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-Headline--default) -->
<script lang="ts">
  /**
   * Headline, parsed as an _inline_ markdown string in an `h1` element.
   * @type {string}
   */
  export let hed: string = 'Reuters Graphics Interactive';
  /**
   * Dek, parsed as a markdown string.
   * @type {string}
   */
  export let dek: string | null = null;
  /**
   * Section title
   * @type {string}
   */
  export let section: string | null = null;

  import Block from '../Block/Block.svelte';
  import { marked } from 'marked';
</script>

<Block cls="mb-1">
  <header class="headline">
    {#if $$slots.crown}
      <div class="crown-container">
        <!-- Crown named slot -->
        <slot name="crown" />
      </div>
    {/if}
    <div class="title">
      {#if section}
        <p class="{'section-title'}">{section}</p>
      {/if}
      {#if $$slots.hed}
        <!-- Headline named slot -->
        <slot name="hed" />
      {:else}
        <h1>{@html marked.parseInline(hed)}</h1>
      {/if}
      {#if $$slots.dek}
        <!-- Dek named slot-->
        <slot name="dek" />
      {:else if dek}
        {@html marked(dek)}
      {/if}
    </div>
    {#if $$slots.byline || $$slots.dateline}
      <aside class="article-metadata" class:pt-1="{!dek}">
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

  header.headline {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 0;
    color: var(--theme-colour-text-primary, $tr-dark-grey);

    :global {
      h1 {
        font-size: 4rem;
        margin: 5px 0;
        line-height: 1.1;
        font-family: var(--theme-font-family-hed, $font-family-display);
        color: var(--theme-colour-text-primary, $tr-dark-grey);
      }

      p {
        font-family: var(--theme-font-family-subhed, $font-family-display);
        color: var(--theme-colour-text-primary, $tr-dark-grey);
        margin: 0;
        font-weight: 200;

        &.section-title {
          font-size: 1rem;
          font-weight: 800;
          color: var(--theme-colour-accent, $tr-dark-red);
        }
      }
    }
    .article-metadata {
      padding: 40px 0;
      font-family: var(--theme-font-family-note, $font-family-display);
      color: var(--theme-colour-text-primary, $tr-dark-grey);

      text-align: center;

      .byline-container {
        margin-bottom: 2px;
      }

      .byline {
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
      }
    }

    div.crown-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
