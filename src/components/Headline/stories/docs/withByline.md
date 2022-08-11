Add a byline and dateline with `byline` and `dateline` named slots.

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-svelte-components';
</script>

<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'Global news'}"
  sectionColour="{'orange'}"
>
  <!-- Use named slots to add a byline... -->
  <span slot="byline">By <strong>Peppa Pig</strong></span>
  <!-- ...and a dateline. -->
  <span slot="dateline">Published Jan. 1, 2020</span>
</Headline>
```
