Reuters Graphics headline with ai2svelte graphic as background.

```svelte
<script>
  import {
    HeroHeadline,
    GraphicBlock,
  } from '@reuters-graphics/graphics-components';
  import QuakeMap from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';

  export let embedded = false;
</script>

<HeroHeadline
  embedded="{embedded}"
  hed="{'Earthquake devastates Afghanistan'}"
  hedSize="{'big'}"
  hedWidth="wide"
  class="custom-hero mb-0"
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
      width="widest"
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
  .hero-wrapper {
    .custom-hero.headline {
      // Adjust vertical positioning
      align-items: flex-end !important;

      @media (max-width: 1100px) {
        // Adjust line length of title
        max-width: var(--normal-column-width) !important;
      }
    }

    // Make hero smaller than 100vh
    --heroHeight: 85svh;

    @media (max-width: 960px) {
      --heroHeight: 65svh;
    }

    // For small height
    @media (max-height: 850px) {
      --heroHeight: 100svh;
    }

    // Custom hero sizing for landscape mobile
    @media (max-width: 960px) and (orientation: landscape) {
      --heroHeight: 200svh;
    }
  }

  // Override default fixed height for hero layout in embeds
  .hero-wrapper.embedded {
    --heroHeight: 1000px;
  }
</style>
```
