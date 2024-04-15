Add a leaderboard ad to your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

```svelte
<!-- +page.svelte -->
<script>
  import {
    AdScripts,
    LeaderboardAd,
    SiteHeader,
  } from '@reuters-graphics/graphics-components';
</script>

<!-- ALWAYS check if in an embed context! -->
{#if !embedded}
  <!-- Include AdScripts only ONCE per page -->
  <AdScripts />
{/if}

<!-- ... -->

{#if !embedded}
  <!-- ALWAYS put the leaderboard ad directly above the SiteHeader -->
  <SponsorshipAd />
  <SiteHeader />
{/if}
```
