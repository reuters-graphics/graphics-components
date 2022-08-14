The `Block` component is the basic building block of stories, a responsive container that wraps each section of your piece.

Blocks are stacked vertically within the well created by the [`Article`](./?path=/docs/layout-article) component. They can have different widths on larger screens depending on the `width` prop.

> 📌 Many of our other components already use the `Block` component, internally. You'll usually only need to use it yourself if you're making something custom.

```svelte
<script>
  import { Block } from '@reuters-graphics/graphics-svelte-components';
</script>


<Block width="normal">
  <!-- Your stuff for this block -->
</Block>
```
