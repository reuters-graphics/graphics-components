Wrap components or other HTML elements to determine if they are visible on the page using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

This is especially useful for lazy loading elements, especially expensive ones that load in big media files or components that have to fetch lots of data. You can also use it trigger animations or play media once a reader scrolls a component into view.

> **Pro tip:** Don't use this for content that's "above the fold" at the top of the page. That'll just slow down the first load of important visible content.

```svelte
<script>
  import { Visible } from '@reuters-graphics/graphics-svelte-components';
</script>

<Visible let:visible>
  {#if visible}
    <p>Visible!</p>
  {:else}
    <p>Not yet visible.</p>
  {/if}
</Visible>
```
