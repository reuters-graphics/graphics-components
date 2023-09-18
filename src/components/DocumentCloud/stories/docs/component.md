Embed a document hosted by [DocumentCloud](https://documentcloud.org)

---

The document must have its access level set to public before it can be embedded. The `slug` argument can be found after the final slash in the document's URL. For instance, the document included in the example is found at [documentcloud.org/documents/3259984-Trump-Intelligence-Allegations](https://www.documentcloud.org/documents/3259984-Trump-Intelligence-Allegations). The slug is "3259984-Trump-Intelligence-Allegations".

```svelte
<script>
  import { DocumentCloud } from '@reuters-graphics/graphics-components';
</script>

<DocumentCloud
  slug="3259984-Trump-Intelligence-Allegations"
  altText="These Reports Allege Trump Has Deep Ties To Russia"
  width="normal"
/>
```
