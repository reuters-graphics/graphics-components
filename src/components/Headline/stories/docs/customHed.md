Use the `hed` and/or `dek` named slots to override those elements with completely custom markup.

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
</script>

<Headline>
  <h1 slot="hed" class="custom-hed">
    <span class="small block">The secret to</span>
    “The Nutcracker's”
    <span class="small block">success</span>
  </h1>
  <p slot="dek" class="custom-dek">
    How “The Nutcracker” ballet became an <span class="highlight"
      >American holday staple</span
    >and a financial pillar of ballet companies across the country
  </p>
</Headline>

<style lang="scss">
  h1 {
    span.block {
      display: block;
      &.small {
        font-size: 1.4rem;
      }
    }
  }
  p.custom-dek {
    span {
      background-color: rgb(255, 255, 154);
      padding: 2px 4px;
      margin: 0 4px;
      font-weight: 600;
    }
  }
</style>
```
