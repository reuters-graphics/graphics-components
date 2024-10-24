Add a dianomi ad to your page.

Dianomi sponsor module appears above the footer on Graphics pages in the same placement using the same tag as Topic pages.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

```svelte
<!-- App.svelte -->
<script>
  import { DianomiAd } from '@reuters-graphics/graphics-components';

  export let embedded = false;
</script>

<!-- Check if in an embed context! -->
{#if !embedded}
  <DianomiAd />
{/if}
```