The `SEO` component adds essential metadata to published pages.

```svelte
<script>
  import { SEO } from '@reuters-graphics/graphics-components';
</script>

<SEO
  baseUrl="https://graphics.reuters.com"
  pageUrl="{new URL(
    'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/'
  )}"
  seoTitle="A title for Google"
  seoDescription="A description for Google"
  shareTitle="A title for Twitter/Facebook"
  shareDecription="A description for Twitter/Facebook"
  shareImgPath="https://graphics.reuters.com/world-coronavirus-tracker-and-maps/assets/images/share.jpg"
  shareImgAlt="An image showing global COVID infection rates"
  publishTime="2020-09-15T00:00:00.000Z"
  updateTime="2021-01-10T12:30:00.000Z"
  authors="{[
    { name: 'Jane Doe', url: 'https://twitter.com/JaneDoe' },
    { name: 'John Doe', url: 'https://twitter.com/JohnDoe' },
  ]}"
  includeAnalytics="{true}"
/>
```
