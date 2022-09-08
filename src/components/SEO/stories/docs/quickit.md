Add the `SEO` component to any page specified in the `pages/` directory of the Graphics Kit.

Most of the fields are filled in by other sources, like your Google Doc and package.json. (Usually, the fastest way is to copy the `SEO` component from one of the pages already in your project.)

> **IMPORTANT:** For _reasons_, we can't document the value of `VITE_BASE_URL` below. It's `import` + `.meta.env.BASE_URL` (concatenate all that) in the Graphics Kit and other Vite-based rigs.

```svelte
<script>
  import { SEO } from '@reuters-graphics/graphics-components';
  import pkg from '$pkg';
  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
  import { page } from '$app/stores';
</script>

<SEO
  lang="en"
  baseUrl="{VITE_BASE_URL}"
  pageUrl="{$page.url}"
  seoTitle="{content.SEOTitle}"
  seoDescription="{content.SEODescription}"
  shareTitle="{content.ShareTitle}"
  shareDescription="{content.ShareDescription}"
  shareImgPath="{`${assets}/${content.ShareImgPath}`}"
  shareImgAlt="{content.ShareImgAlt}"
  publishTime="{pkg?.reuters?.graphic?.published}"
  updateTime="{pkg?.reuters?.graphic?.updated}"
  authors="{pkg?.reuters?.graphic?.authors}"
  includeAnalytics="{$page.url.hostname === 'graphics.reuters.com'}"
/>
```
