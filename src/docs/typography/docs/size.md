The font sizes are used to style the various elements on the page, including margins and padding utilities. This is to ensure the harmonic rhythm of the page set by the system.

You may need to use the sizes from this scale in situations like -

- Adding sizes in your custom svelte component
- Sizing chart elemnents in D3
- Defining bespoke style beyond what is provided by the `text-styles`

<br />

**These are the available text size levels and their corresponding tokens.**

| level | class          | mixin         |
| ----- | -------------- | ------------- |
| 1     | `.font-size-1` | `font-size-1` |
| 2     | `.font-size-2` | `font-size-2` |
| 3     | `.font-size-3` | `font-size-3` |
| 4     | `.font-size-4` | `font-size-4` |
| 5     | `.font-size-5` | `font-size-5` |
| 6     | `.font-size-6` | `font-size-6` |

> The text sizes are always a multiple of `size-base = 1.375`. On mobile
> {max-width:510px}, levels 1, 2, 3, 4 scale down to `size-base-mobile = 1.125`

## With CSS classes

Add the `font-size-*` class to any element for the classes to take effect, where `*` = 1 to 6. Check out the available classes and their associated sizes in the example below.

```svelte
<div class="font-body">...your text here</div>
```

## With SCSS mixins

Include the mixins in your stylesheets as shown below.

```svelte
<div class="my-class">...your text here</div>

<style lang="scss">
  @import '@reuters-graphics/graphics-components/dist/scss/typography/_main.scss';

  .my-class {
    @include font-size-3;
  }
</style>
```

## See the text size levels in action
