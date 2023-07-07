You can customise the theme of your page in two ways:

First, you can choose the `base` theme, either `light` or `dark`.

From there, you can pass a custom theme object to the `theme` prop. Any custom styles you pass to `theme` will override styles in the `base` theme.

Check out the "Control" column for `theme` in the properties table above to see what properties you can customise.

> **Pro tip:** The `Theme` component only styles child components or elements, so if you're changing the background colour of your page, it's still a good idea to set a `background-color` on your `body` element in global SCSS.
>
> ```css
> // global.scss
> body {
>   background-color: #333;
> }
> ```

```html
<Theme
  base="dark"
  theme="{{
    colour: { accent: 'yellow' },
    font: { family: { hed: 'freight-book' } },
  }}"
>
  <!-- Page content -->
</Theme>
```
