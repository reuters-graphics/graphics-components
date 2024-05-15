Add programmatic ads inline on your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

```svelte
<!-- +page.svelte -->
<script>
  import { AdScripts } from '@reuters-graphics/graphics-components';
</script>

<!-- Include AdScripts only ONCE per page for any type of ad -->
<AdScripts />
```

```svelte
<!-- App.svelte -->
<script>
  import { InlineAd } from '@reuters-graphics/graphics-components';

  export let embedded = false;
</script>

{#each content.blocks as block}
  <!-- ... -->

  {#if block.Type === 'inline-ad'}
    <!-- Check if in an embed context! -->
    {#if !embedded}
      <InlineAd />
    {/if}
  {/if}

  <!-- ... -->
{/each}
```
