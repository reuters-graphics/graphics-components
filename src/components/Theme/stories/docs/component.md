The `Theme` component wraps your page content and uses [CSS variables](../?path=/docs/scss-css-variables--page) to set major colour and typography styles for your page. All of the components in this library will use those CSS variables for styling by default.

```svelte
<script>
  import { Theme } from '@reuters-graphics/graphics-components';
</script>

<Theme base="light">
  <!-- ...page stuff, now styled according to your theme! -->
</Theme>
```

> For Kit users, the `Theme` is set for you in your graphics homepage (`pages/+page.svelte`). You can customise it there for the whole page.
