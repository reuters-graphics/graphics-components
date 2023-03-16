The styles are automatically applied to native HTML elements like the `H` and `p` tag.

```svelte
<div>
  <h2>Here's a section title</h2>
  <p>and some text to go with it...</p>
</div>
```

These are the available **text styles** and their **corresponding tokens**. The `font-size-` inherits the sizes based on the scale as described by the [Type System](/docs/typography-intro--page). Check out the CSS variables in the Styling section to see the default values and roles assigned by the Theme.

| Style         | class            | mixin           | CSS vars used from Theme                                                                     |
| ------------- | ---------------- | --------------- | -------------------------------------------------------------------------------------------- |
| Page title    | `.font-hed`      | `font-hed`      | `--theme-font-size-hed`, `--theme-font-family-hed` , `--theme-colour-text-primary`           |
| Section title | `.font-subhed-1` | `font-subhed-1` | `--theme-font-size-subhed-1`, `--theme-font-family-subhed` , `--theme-colour-text-primary`   |
| Subhed        | `.font-subhed-2` | `font-subhed-2` | `--theme-font-size-subhed-2`, `--theme-font-family-subhed` , `--theme-colour-text-primary`   |
| Smallhed      | `.font-subhed-3` | `font-subhed-3` | `--theme-font-size-subhed-3`, `--theme-font-family-subhed` , `--theme-colour-text-secondary` |
| Body text     | `.font-body`     | `font-body`     | `--theme-font-size-body`, `--theme-font-family-body` , `--theme-colour-text-primary`         |
| Body note     | `.font-note-1`   | `font-note-1`   | `--theme-font-size-note-1`, `--theme-font-family-note` , `--theme-colour-text-primary`       |
| Endnotes      | `.font-note-2`   | `font-note-2`   | `--theme-font-size-note-2`, `--theme-font-family-note` , `--theme-colour-text-secondary`     |
| Footnotes     | `.font-note-3`   | `font-note-3`   | `--theme-font-size-note-3`, `--theme-font-family-note` , `--theme-colour-text-secondary`     |

## Styling with with CSS classes

> This is the most common way you probably will add styles inside your svelte components in the HTML code.

Add the `font-` class to any element for the classes to take effect.

```svelte
<!-- div using body font style -->
<div class="font-body">
  Two hardy boxing kangaroos jet from Sydney to Zanzibar on quicksilver pinions.
</div>

<!-- Text using body font style -->
<p class="font-body">
  Back in my quaint garden jaunty zinnias vie with flaunting phlox.
</p>
```

It is a good practice to not use `<h>` tags unless it is a heading level due to _a11y_ concerns. You should use the CSS styles instead for your elements to style it like a heading.

```svelte
<!-- Text which is not a heading, but using a heading style -->
<p class="font-subhed-3">
  The vegetarian menu included gazpacho, piquant julienne beets, rusk rounds
  with yogurt, and excellent flan.
</p>
```

You can also use the clases for styling text elemnets in SVG charts.

```svelte
<!-- Text which is not a heading, but using a heading style -->
<text class="font-note-3">Gazpacho</text>
<text class="font-note-3">Baguette</text>
<text class="font-note-3">Lamb Biryani</text>
```

## Styling with with SCSS mixins

[Mixins](https://sass-lang.com/documentation/at-rules/mixin) allow you to define styles that can be re-used throughout your stylesheet. This is useful when you need to compose styles for elements using your own classes, while using some predefined styles.

Include the mixins in your SCSS code block as shown below.

```svelte
<div class="my-class">
  The July sun caused a fragment of black pine wax to ooze on the velvet quilt.
</div>

<style lang="scss">
  @import '@reuters-graphics/graphics-components/dist/scss/typography/_main.scss';

  .my-class {
    @include font-note-3;
  }
</style>
```

The mixins also allow you to add the styles as `!important` to overrule any other styles. You can specify it using `($i: true)` arg while including the mixin.

```scss
.my-class {
  @include font-note-3($i: true);
  // more style declarations...
}
```

The above code will effectively compile to the following CSS:

```scss
.my-class {
  font-size: var(--theme-font-size-note-3) !important;
  font-family: var(--theme-font-family-note) !important;
  font-weight: 400 !important;
  line-height: 1.4 !important;
  color: var(--theme-colour-text-secondary) !important;
  // more style declarations...
}
```

## Customising text styles

Since the styles are inherited from the `--theme-font-*` and `--theme-colour-*`CSS variables, any modifcation must happen in the `<Theme>` component in `page.svelte`. Read how to [customise CSS variables](../?path=/docs/theming-theme--custom-theme).

### Example: Changing the font family for the page title

Page title uses `--theme-font-family-hed` to define the font family, which inherits `--theme-typeface-display` (refer the [CSS variables](../?path=/docs/theming-css-variables--page)). Hence, in this case, you should redefine the `--theme-typeface-display` and the changes should reflect on your page.

If you want to redefine `--theme-font-family-hed` independently, you should add a new CSS typeface variable (e.g. `--theme-typeface-hed`) and assign it to the text style variable.

```svelte
<Theme
  base="light"
  theme="{{
    typeface: {
      // New CSS variable
      hed: 'Playfair Display',
    },
    font: {
      // Assign the new typeface variable
      'family-hed': 'var(--theme-typeface-hed)',
    },
  }}"
>
  <!-- page stuff -->
</Theme>
```

## See the styles in action

Select a style from the menu in the `control` column and see it added to the text.
