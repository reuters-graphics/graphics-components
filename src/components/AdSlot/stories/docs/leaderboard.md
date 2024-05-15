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

<!-- Include AdScripts only ONCE per page for any type of ad -->
<AdScripts />

<!-- ALWAYS put the leaderboard ad directly above the SiteHeader -->
<LeaderboardAd />
<SiteHeader />
```
