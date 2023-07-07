Setup your Google Doc to work with the `SiteHeadline` component.

```yaml
# Beginning of your Google doc
Section: Global News
SectionUrl:
Hed: A beautiful page
Authors: Samuel Granados, Dea Bankova
Published: 2022-09-12T08:30:00.000Z
Updated:
```

```html
<!-- App.svelte -->
<script>
  import { SiteHeadline } from '@reuters-graphics/graphics-components';

  // These should be already imported for you.
  import content from '$locales/en/content.json';
</script>

<SiteHeadline
  section="{content.Section}"
  sectionUrl="{content.SectionUrl}"
  hed="{content.Hed}"
  authors="{content.Authors.split(',')}"
  publishTime="{content.Published}"
  updateTime="{content.Updated}"
/>
```
