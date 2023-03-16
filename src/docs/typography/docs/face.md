There are four font families provided via the `Theme`, which feeds into all the text styles. If you need to specifically apply font family styles to your HTML elements, you can use the following methods.

<br />

These are the available **font family types** and their **corresponding tokens**. Check out the CSS variables in the Styling section to see the default values assigned by the Theme.

| typeface        | class                  | mixin                 | CSS vars used from Theme      |
| --------------- | ---------------------- | --------------------- | ----------------------------- |
| Display font    | `.typeface-display`    | `typeface-display`    | `--theme-typeface-display`    |
| Serif font      | `.typeface-serif`      | `typeface-serif`      | `--theme-typeface-serif`      |
| Sans-serif font | `.typeface-sans-serif` | `typeface-sans-serif` | `--theme-typeface-sans-serif` |
| Monospace font  | `.typeface-monospace`  | `typeface-monospace`  | `--theme-typeface-monospace`  |

## With CSS classes

Add the `typeface-` class to any element for the classes to take effect. Check out the available classes and their associated sizes in the example below.

```svelte
<div class="typeface-serif">...your text here</div>
```

## With SCSS mixins

Include the mixins in your stylesheets as shown below.

```svelte
<div class="my-class">...your text here</div>

<style lang="scss">
  @import '@reuters-graphics/graphics-components/dist/scss/typography/_main.scss';

  .my-class {
    @include typeface-serif;
  }
</style>
```

## See the typefaces in action
