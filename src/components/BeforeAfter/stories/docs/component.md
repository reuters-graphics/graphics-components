A before and after image comparison component.

```svelte
<script>
  import { BeforeAfter } from '@reuters-graphics/graphics-svelte-components';
  import { assets } from '$app/paths'; // If using in the Graphics Kit
</script>

<BeforeAfter
  beforeSrc="{`${assets}/images/before-after/myrne-before.jpg`}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{`${assets}/images/before-after/myrne-after.jpg`}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
/>
```
