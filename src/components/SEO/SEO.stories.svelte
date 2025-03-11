<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SEO from './SEO.svelte';

  const { Story } = defineMeta({
    title: 'Components/Ads & analytics/SEO',
    component: SEO,
  });
</script>

<Story
  name="Demo"
  args={{
    seoTitle: 'blah',
    baseUrl: 'https://graphics.reuters.com',
    pageUrl: new URL('https://graphics.reuters.com/hello-world/'),
    publishTime: new Date('2020-09-15').toISOString(),
  }}
>
  View page source to see the SEO metadata.
</Story>
