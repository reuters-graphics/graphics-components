You can customise the theme of your page in two ways:

First, you can choose the `base` theme, either `light` or `dark`.

From there, you can pass a custom theme object to the `theme` prop. Any custom styles you pass to `theme` will override themes in the `base` theme.

> Check out the "Control" column for `theme` in the properties table above to see what properties you can customise.

```svelte
<Theme
  base="dark"
  theme="{{
    colour: { accent: 'yellow' },
    font: { 'family-hed': 'freight-book' },
  }}"
>
  <!-- Page content -->
</Theme>
```
