<!--
  @component `ArcHeader` renders the kicker, headline and dek at the top of an
  `ArcEmbed`, styled to match the section headers on Reuters.com so an embed
  reads as part of the homepage. All fields are optional except `headline`, and
  the kicker and headline can each link out.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import ArcKicker from './ArcKicker.svelte';

  interface Props {
    /** Small label above the headline, e.g. a section name. */
    kicker?: string;
    /** Optional link for the kicker. */
    kickerUrl?: string;
    /** The headline text. */
    headline: string;
    /** Optional link for the headline. */
    headlineUrl?: string;
    /** Supporting line below the headline. */
    dek?: string;
    /** Extra content rendered after the headline block. */
    children?: Snippet;
  }

  let { kicker, kickerUrl, headline, headlineUrl, dek, children }: Props =
    $props();
</script>

<div class="arc-header">
  {#if kicker}
    <ArcKicker {kicker} href={kickerUrl} />
  {/if}
  <div>
    {#if headlineUrl}
      <h2 class="arc-headline">
        <a href={headlineUrl} target="_blank" rel="noopener noreferrer">
          {headline}
        </a>
      </h2>
    {:else}
      <h2 class="arc-headline">{headline}</h2>
    {/if}
    {#if dek}
      <p class="arc-dek">{dek}</p>
    {/if}
  </div>
  {#if children}{@render children()}{/if}
</div>

<style lang="scss">
  .arc-header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 1rem;

    .arc-headline {
      margin: 0;
      // Opt out of the graphics-components Theme's global `h2` font so the
      // headline uses the embed's display font (ArcKnowledge), matching the
      // kicker and dek above and below it.
      font-family: inherit;
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      color: rgb(64, 64, 64);
      margin-bottom: 8px;
      @media (max-width: 767px) {
        font-size: 36px;
        line-height: 42px;
      }

      @media (max-width: 400px) {
        font-size: 30px;
        line-height: 38px;
      }

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .arc-dek {
      margin: 0;
      font-family: inherit;
      color: #555;
      font-size: 14px;
      line-height: 20px;
    }
  }
</style>
