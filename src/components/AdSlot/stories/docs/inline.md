Add programmatic ads inline on your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

```svelte
<script>
  import { AdSlot, AdScripts } from '@reuters-graphics/graphics-components';
</script>

<!-- ALWAYS check if in an embed context! -->
{#if !embedded}
  <!-- Include AdScripts only ONCE per page -->
  <AdScripts />
{/if}

<!-- ... -->

{#if !embedded}
  <AdSlot />
{/if}

<!-- ... -->

{#if !embedded}
  <!-- Can add multiple ads to your page -->
  <AdSlot />
{/if}
```
