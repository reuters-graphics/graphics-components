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
<!-- Text using body font style --><div class="font-body">your text here</div>
```

## Styling with with SCSS mixins

> This is useful when you need to compose styles for elements using your own classes.

Include the mixins in your SCSS code block as shown below.

```svelte
<div class="my-class">...your text here</div>

<style lang="scss">
  @import '@reuters-graphics/graphics-components/dist/scss/typography/_main.scss';

  .my-class {
    @include font-body;
  }
</style>
```

## See the styles in action

Select a style from the menu in the `control` column and see it added to the text.
