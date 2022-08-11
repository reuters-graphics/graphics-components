The `Article` component also creates several column dimensions inside our article well. The standard widths of columns follow a basic class scheme:

- `narrower` A bit narrower than narrow...
- `narrow` A bit narrower than the text column
- `normal` **The main width of the body text column**
- `wide` A bit wider than the text column
- `wider` A bit wider than wide...
- `widest` Edge-to-edge, but _excluding_ the left and right padding on `Article`
- `fluid` Fully edge-to-edge

(Check out the below demo in the "Canvas" tab to better see the wider differences.)

When combined with the `Section` component, you can set custom column widths by passing an object to the `columnWidths` prop with pixel values for the `narrower`, `narrow`, `normal`, `wide` and `wider` column widths.

```svelte
<Article
  columnWidths={{ narrower: 310, narrow: 450, normal: 550, wide: 675, wider: 1400 }}
>
  <Section width='narrower' />
  <Section width='narrow' />
  <Section width='normal' />
  <Section width='wide' />
  <Section width='wider' />
  <Section width='widest' />
  <Section width='fluid' />
</Article>
```

> Keep in mind, other tools, like our AI templates, use our default column widths, so customising those widths here may have downstream consequences for graphics made outside your code.

If you're not using our `Section` component, you can still inherit the column widths from `Article` to create your own custom container using the article well dimensions by using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) like this:

```svelte
<div class="my-special-container">
  <!-- Stuffs... -->
</div>

<style lang="scss">
  div.my-special-container {
    max-width: var(--wide-column-width);
  }
</style>
```

... or you can make your component entirely configurable within the article well doing something like this:

```svelte
<script>
  export let width = 'normal';
</script>

<div class="my-special-container {width}">
  <!-- Stuffs... -->
</div>

<style lang="scss">
  div.my-special-container {
    max-width: var(--normal-column-width);
    &.narrower {
      max-width: var(--narrower-column-width);
    }
    &.narrow {
      max-width: var(--narrow-column-width);
    }
    &.wide {
      max-width: var(--wide-column-width);
    }
    &.wider {
      max-width: var(--wider-column-width);
    }
    &.widest {
      max-width: 100%;
    }
    &.fluid {
      width: calc(100% + 30px);
      margin-left: -15px;
      max-width: none;
    }
  }
</style>
```

Here's an example of how custom* `columnWidths` can be used to change the article well columns:
