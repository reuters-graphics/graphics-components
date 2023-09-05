Add a crown image in the `crown` named slot and override the headline in the `hed` named slot.

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';
</script>

<Headline class="!fmt-3" publishTime="{new Date('2020-01-01').toISOString()}">
  <!-- Add a crown -->
  <img
    slot="crown"
    src="{crownImgSrc}"
    width="100"
    class="mx-auto mb-0"
    alt="Illustration of Europe"
  />
  <!-- Override the hed with a named slot -->
  <h1 slot="hed" class="!font-serif !tracking-wide">Europa</h1>
</Headline>
```
