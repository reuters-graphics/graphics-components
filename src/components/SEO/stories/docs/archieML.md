```yaml
slug:  ROOT-SLUG/WILD
seoTitle: Page title for search
seoDescription: Page description for search
shareTitle: Page title for social media
shareDescription: Page description for social media
shareImgPath: images/reuters-graphics.jpg
shareImgAlt: Alt text for share image.
```

```svelte
<script>
  import { SEO } from '@reuters-graphics/graphics-components';
  import pkg from '$pkg';
  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
  import { page } from '$app/stores';
</script>

<SEO
  baseUrl="{VITE_BASE_URL}"
  pageUrl="{$page.url}"
  seoTitle="{content.seoTitle}"
  seoDescription="{content.seoDescription}"
  shareTitle="{content.shareTitle}"
  shareDescription="{content.shareDescription}"
  shareImgPath="{`${assets}/${content.shareImgPath}`}"
  shareImgAlt="{content.shareImgAlt}"
  publishTime="{pkg?.reuters?.graphic?.published}"
  updateTime="{pkg?.reuters?.graphic?.updated}"
  authors="{pkg?.reuters?.graphic?.authors}"
/>
```

> **Note:** For _reasons_, we can't document the value of `VITE_BASE_URL` below. It's `import` + `.meta.env.BASE_URL` (concatenate all that) in the Graphics Kit and other Vite-based rigs.

