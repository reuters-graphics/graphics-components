<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SEO from './SEO.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page metadata/SEO',
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
    shareImgAlt: 'An image showing global COVID infection rates',
    shareImgWidth: 1200,
    shareImgHeight: 630,
    publishTime: '2020-09-15T00:00:00.000Z',
    updateTime: '2021-01-10T12:30:00.000Z',
    articleSection: 'Graphics',
    keywords: ['Reuters graphics', 'COVID-19', 'coronavirus'],
    authors: [
      { name: 'Jane Doe', link: 'https://www.reuters.com/authors/jane-doe/' },
    ],
    alternates: [
      {
        hreflang: 'x-default',
        href: 'https://www.reuters.com/graphics/world-coronavirus-tracker-and-maps/',
      },
      {
        hreflang: 'en-GB',
        href: 'https://www.reuters.com/graphics/world-coronavirus-tracker-and-maps/',
      },
      {
        hreflang: 'es',
        href: 'https://www.reuters.com/graphics/world-coronavirus-tracker-and-maps/es/',
      },
    ],
  }}
/>
