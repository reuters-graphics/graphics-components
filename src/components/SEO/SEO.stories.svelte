<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SEO from './SEO.svelte';

  const { Story } = defineMeta({
    title: 'Components/Ads & analytics/SEO',
    component: SEO,
  });
</script>

<div>View page source to see the SEO metadata.</div>
<Story
  name="Demo"
  args={{
    baseUrl: 'https://www.reuters.com',
    seoTitle: 'A title for Google',
    seoDescription: 'A description for Google',
    shareTitle: 'A title for Twitter/Facebook',
    shareDescription: 'A description for Twitter/Facebook',
    shareImgPath:
      'https://www.reuters.com/graphics/world-coronavirus-tracker-and-maps/assets/images/share.jpg',
  }}
/>
