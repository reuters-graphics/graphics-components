Styles that use `Theme`'s CSS variables will always use those set by the nearest parent `Theme`. That lets you change the theme for parts of your page by simply wrapping that bit in a _new_ `Theme` with different styles.

The demo below shows a more complex example of nesting themes, but more likely you'll so something like this:

```svelte
<script>
  import { Theme } from '@reuters-graphics/graphics-components';
</script>

<Theme>
  <!-- Page content styled with the default light theme. -->
  <Theme theme="{{ colour: { background: 'lightgrey' } }}">
    <!-- A darker background for this section. -->
  </Theme>
  <!-- Back to normal here... -->
</Theme>
```
