Add a crown image in the `crown` named slot and override the headline in the `hed` named slot.

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';
</script>

<Headline>
  <!-- Add a crown -->
  <img slot="crown" src="{`${assets}/images/crown.png`}" />
  <!-- Override the hed with a named slot -->
  <h1 slot="hed" class="font-serif tracking-wide">Europa</h1>
  <span slot="dateline">Published Jan. 1, 2020</span>
</Headline>
```
