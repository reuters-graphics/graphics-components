Normally, `Section` containers resize fluidly below the original `width`. Sometimes, though, you may want the container to snap to the fixed widths of the article well -- for example, if you have a static graphic that looks fine at the set column breakpoints, but isn't so great at widths inbetween.

You can use the `snap` prop to force the container to snap to each column width successively as the window sizes down.

```svelte
<Section width="wider" snap={true}>
  <!-- Your stuff for this section -->
</Section>
```

If you want to skip certain column widths entirely, you can add one or more class of `skip-{column width}` to the `Section`.

```svelte
<!-- Will skip wide and go straight to normal column width on resize. -->
<Section width="wider" snap={true} cls="skip-wide">
  <!-- Your stuff for this section -->
</Section>
```

This is probably easier to see in action than explain in words, so check out the "Canvas" tab for the demo below and resize the window to get a better picture of how it all works.

> **NOTE:** The snap width breakpoints only work on `Section` components with widths `wider` and below. `widest` and `fluid` are both fluidly responsive widths by default, since they go edge-to-edge.

#### Using with custom column widths

Snap width breakpoints are hard-coded to the default article well column widths, so if you set custom `columnWidths` on the `Article` tag, you can't use this functionality without a little extra work.

Luckily, it's still pretty easy. Just add a `cls` or `id` to your `Section` so you can target it with some custom SCSS. Now, defined a few SCSS variables corresponding to your custom column widths and use the `snap-columns` SCSS mixin to get the same functionality at your custom breakpoints.

```svelte
<Section width="wider" snap={true} cls="custom-sections">
  <!-- Your stuff for this section -->
</Section>

<style lang="scss">
  $column-width-narrower: 310px;
  $column-width-narrow: 450px;
  $column-width-normal: 600px;
  $column-width-wide: 860px;
  $column-width-wider: 1400px;

  @import "@reuters-graphics/graphics-components/scss/mixins";

  :global {
    section.custom-sections {
      @include snap-columns;
    }
  }
</style>
```
