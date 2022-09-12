Setup your Google Doc to work with the `HeadlineBreakingNews` component.

```yaml
# Beginning of your Google doc
Kicker: Global News
KickerUrl:
Hed: A beautiful page
Byline: Sherlock Holmes
Published: 2022-09-12T08:30:00.000Z
Updated:
MarginBottom: 2rem
```

Note that this works in exactly the same way as the `Headline` component, but for the extra prop of `KickerUrl` which you need to add if
you don't want your kicker to be a link to Reuters Graphics. You can also additionally have a `MarginBottom` prop.

```svelte
<!-- App.svelte -->
<script>
  import { HeadlineBreakingNews } from '@reuters-graphics/graphics-components';

  // These should be already imported for you.
  import content from '$locales/en/content.json';
  import { apdate } from 'journalize';
  import { marked } from 'marked';
</script>

<HeadlineBreakingNews
  section="{content.Kicker}"
  sectionUrl="{content.KickerUrl}"
  hed="{content.Hed}"
  marginBottom="{content.MarginBottom}"
>
  <span slot="byline">By {@html marked.parseInline(content.Byline)} </span>
  <div slot="dateline">
    Published <time datetime="{content.Published}">
      {apdate(new Date(content.Published))}</time
    >
    {#if content.Updated}
      <br /> Updated
      <time datetime="{content.Updated}">
        {apdate(new Date(content.Updated))}
      </time>
    {/if}
  </div>
</HeadlineBreakingNews>
```
