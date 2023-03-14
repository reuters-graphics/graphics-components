The styles are automatically applied to native HTML elements like the `H` and `p` tags, as well as `GraphicsKit` components. For more details, check out the `Type system` section in the `Intro`.

```svelte
<div>
  <h2>Here's a section title</h2>
  <p>and some text to go with it...</p>
</div>
```

## With CSS classes

Add the `font-` class to any element for the classes to take effect. Check out the available classes and their associated styles in the example below.

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
    @include font-body;
  }
</style>
```
