There are four font families provided via the `Theme`, which feeds into all the text styles. If you need to specifically apply font family styles to your HTML elements, you can use the following methods.

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
