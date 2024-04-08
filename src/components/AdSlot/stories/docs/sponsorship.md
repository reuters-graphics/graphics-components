Add a sponsorship ad to your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

```svelte
<script>
  import {
    SponsorshipAd,
    AdScripts,
  } from '@reuters-graphics/graphics-components';
</script>

<!-- ALWAYS check if in an embed context! -->
{#if !embedded}
  <!-- Include AdScripts only ONCE per page -->
  <AdScripts />
{/if}

<!-- ... -->

{#if !embedded}
  <SponsorshipAd />
{/if}
```
