If you're using analytics to measure a multipage newsapp that uses [client-side routing](https://kit.svelte.dev/docs/glossary#routing), then you may need to trigger analytics after virtual page navigation.

This component also exports a function you can call to register pageviews.

For example, here's how you can use SvelteKit's [`afterNavigate`](https://kit.svelte.dev/docs/modules#$app-navigation-afternavigate) lifecycle to capture additional pageviews:

```svelte
<script>
  import {
    Analytics,
    registerPageview,
  } from '@reuters-graphics/graphics-components';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';

  let hasMounted = false;

  onMount(() => {
    hasMounted = true;
  });

  afterNavigate(() => {
    // We shouldn't fire on initial page load because the Analytics component
    // already registers a reader's first pageview. After this component
    // has mounted, we can be sure that further navigation is virtual and
    // register pageviews using this function.
    if (hasMounted) registerPageview();
  });
</script>

<Analytics />
```
