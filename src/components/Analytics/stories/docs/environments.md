Generally, you only want to send page analytics in production environments.

In a SvelteKit context, you can use `$app` stores to restrict when you send analytics.

For example, the following excludes analytics from pages in development or hosted on our preview server:

```svelte
<script>
  import { Analytics } from '@reuters-graphics/graphics-components';
  import { dev } from '$app/environment';
  import { page } from '$app/stores';
</script>

{#if !dev && $page.url?.hostname !== 'graphics.thomsonreuters.com'}
  <Analytics />
{/if}
```
