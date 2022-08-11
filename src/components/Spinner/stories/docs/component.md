Simple loading spinner. Use it to help hide long loading times for components that may be loading expensive media files or crunching through lots of data.

```svelte
<script>
  import { Spinner } from '@reuters-graphics/graphics-svelte-components';

  let somethingsLoading = true;
</script>

{#if somethingsLoading}
  <Spinner />
{:else}
  <p>The real deal is here.</p>
{/if}
```
