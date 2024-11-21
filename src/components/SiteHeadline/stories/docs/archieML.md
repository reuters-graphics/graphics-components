```yaml
section: Graphics
sectionUrl: https://www.reuters.com/graphics/
hed: A beautiful page
authors: Samuel Granados,Dea Bankova
published: 2022-09-12T08:30:00.000Z
updated:
```

```svelte
<!-- App.svelte -->
<script>
  import { SiteHeadline } from '@reuters-graphics/graphics-components';

  import content from '$locales/en/content.json';
</script>

<SiteHeadline
  section="{content.section}"
  sectionUrl="{content.sectionUrl}"
  hed="{content.hed}"
  authors="{content.authors.split(',')}"
  publishTime="{content.published}"
  updateTime="{content.updated}"
/>
```
