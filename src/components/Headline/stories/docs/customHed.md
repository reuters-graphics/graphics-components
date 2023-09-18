Use the `hed` and/or `dek` named slots to override those elements with completely custom markup.

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
</script>

<Headline width="wide">
  <h1 class="custom-hed" slot="hed">
    <span class="small block text-base">The secret to</span>
    “The Nutcracker's”
    <span class="small block text-base fpt-1">success</span>
  </h1>
  <p class="custom-dek !fmt-3" slot="dek">
    How “The Nutcracker” ballet became an<span
      class="font-medium mx-1 px-1.5 py-1">American holday staple</span
    >and a financial pillar of ballet companies across the country
  </p>
</Headline>

<style lang="scss">
  .custom-hed {
    line-height: 0.9;
  }
  .custom-dek {
    span {
      background-color: #fde68a;
    }
  }
</style>
```
