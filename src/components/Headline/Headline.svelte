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
</script>

<section class="headline">
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
      <h2>{hed}</h2>
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
</section>

<style lang="scss">
</style>

