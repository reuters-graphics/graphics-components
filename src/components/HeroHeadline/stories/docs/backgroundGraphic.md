Reuters Graphics headline with ai2svelte graphic as background.

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
  import Map from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';
</script>

<HeroHeadline
  hed="{'Earthquake devastates Afghanistan'}"
  hedSize="{'big'}"
  hedWidth="wide"
  class="mb-0"
  dek=""
  authors="{[
    'Anand Katakam',
    'Vijdan Mohammad Kawoosa',
    'Adolfo Arranz',
    'Wen Foo',
    'Simon Scarr',
    'Aman Bhargava',
    'Jitesh Chowdhury',
    'Manas Sharma',
    'Aditi Bhandari',
  ]}"
  publishTime="{new Date('2022-06-24').toISOString()}"
>
  <div slot="background">
    <GraphicBlock
      width="fluid"
      role="figure"
      class="my-0"
      textWidth="normal"
      notes=""
      ariaDescription="Earthquake impact map"
    >
      <svelte:component this="{QuakeMap}" />
    </GraphicBlock>
  </div>
</HeroHeadline>

<style lang="scss">
  .hero-headline .headline {
    align-items: flex-end;

    @media (max-width: 1100px) {
      max-width: var(--normal-column-width) !important;
    }
  }

  .hero-wrapper {
    // Make hero smaller than 100vh
    --heroHeight: 85svh;

    @media (max-width: 960px) {
      --heroHeight: 65svh;
    }

    // Custom hero sizing for landscape mobile
    @media (max-width: 960px) and (orientation: landscape) {
      --heroHeight: 200svh;
    }
  }
</style>
```
