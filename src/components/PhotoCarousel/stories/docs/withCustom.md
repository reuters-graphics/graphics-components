Use named slots to style your own custom credits and/or captions.

```svelte
<PhotoCarousel photos="{photos}">
  <p slot="credit" class="custom-credit" let:credit>{credit}</p>
  <p slot="caption" class="custom-caption" let:caption>{caption}</p>
</PhotoCarousel>

<style lang="scss">
  p {
    position: absolute;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    font-family: sans-serif;
    font-size: 0.8rem;
    padding: 0 5px;
    &.custom-credit {
      top: 0;
      right: 0;
    }
    &.custom-caption {
      bottom: 5px;
      left: 0;
    }
  }
</style>
```
