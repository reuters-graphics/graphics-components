The styles are automatically applied to native HTML elements like the `H` and `p` tags, as well as `GraphicsKit` components. For more details, check out the `Type system` section in the `Intro`.

```svelte
<div>
  <h2>Here's a section title</h2>
  <p>and some text to go with it...</p>
</div>
```

**These are the available styles and their corresponding tokens.**

| Style         | class            | mixin           |
| ------------- | ---------------- | --------------- |
| Page title    | `.font-hed `     | `font-hed `     |
| Section title | `.font-subhed-1` | `font-subhed-1` |
| Subhed        | `.font-subhed-2` | `font-subhed-2` |
| Smallhed      | `.font-subhed-3` | `font-subhed-3` |
| Body text     | `.font-body `    | `font-body`     |
| Body note     | `.font-note-1`   | `font-note-1`   |
| Endnotes      | `.font-note-2`   | `font-note-2`   |
| Footnotes     | `.font-note-3`   | `font-note-3`   |

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
