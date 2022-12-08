A full-width photo inside the text well.

```svelte
<script>
  import { FeaturePhoto } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // 👈 If using in the Graphics Kit...
</script>

<FeaturePhoto
  src="{`${assets}/images/myImage.jpg`}"
  altText="Some alt text"
  caption="A caption"
  lazy="{false}"
  width="normal"
/>
```
