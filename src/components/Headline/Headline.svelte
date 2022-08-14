<script lang="ts">
  /**
   * Headline
   */
  export let hed: string = 'Reuters Graphics Interactive';
  /**
   * Dek
   */
  export let dek: string | null = null;
  /**
   * Section title
   */
  export let section: string | null = null;
  /**
   * Section colour
   */
  export let sectionColour: string = 'red';

  import Block from '../Block/Block.svelte';
</script>

<Block>
  <header class="headline">
    <!-- Crown named slot -->
    <slot name="crown"></slot>
    <div class="title">
      {#if section}
        <p class={`section-title color-${sectionColour}`}>{section}</p>
      {/if}
      {#if $$slots.hed}
        <!-- Headline override named slot -->
        <slot name="hed"></slot>
      {:else}
        <h1>{hed}</h1>
      {/if}
      {#if dek}
        <p>{dek}</p>
      {/if}
    </div>
    {#if ($$slots.byline || $$slots.dateline)}
      <aside class="article-metadata">
        {#if $$slots.byline}
          <div class="byline-container">
            <div class="byline">
              <!-- Byline named slot -->
              <slot name="byline"></slot>
            </div>
          </div>
        {/if}
        {#if $$slots.dateline}
          <div class="dateline-container">
            <div class="published">
              <!-- Dateline named slot -->
              <slot name="dateline"></slot>
            </div>
          </div>
        {/if}
      </aside>
    {/if}
  </header>
</Block>

<style lang="scss">
  @import "@reuters-graphics/style-color/scss/thematic/brand";
  @import "../../scss/mixins";

  header.headline {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 3rem;

    :global {
      h1 {
        font-size: 4rem;
        margin: 5px 0;
        line-height: 1.1;
      }

      p {
        @include font-display;

        margin: 0;
        font-weight: 200;

        &.section-title {
          font-size: 1rem;
          font-weight: 800;
        }
      }
    }
    .article-metadata {
      padding: 40px 0;

      @include font-sans;

      text-align: center;

      .byline-container {
        margin-bottom: 2px;
      }

      .byline {
        :global {
          a {
            color: $brand-text;
            text-decoration: none;
          }
        }
      }

      .dateline-container {
        text-transform: uppercase;

        color: $brand-text-secondary;
        font-size: 0.8rem;
        line-height: 1.2rem;
      }
    }

    section.headline {
      .article-metadata {
        padding: 2rem 0 0;
      }
    }
  }
</style>

