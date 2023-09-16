Reuters Graphics headline followed by a graphic or any media block.

```svelte
<script>
  import {
    HeroHeadline,
    GraphicBlock,
  } from '@reuters-graphics/graphics-components';
  import Map from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';

  export let embedded = false;
</script>

<HeroHeadline
  embedded="{embedded}"
  hed="{'The plunge from 29,000 feet'}"
  hedWidth="wide"
  class="mb-0"
  dek="{'How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes.'}"
  section="{'Global news'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
>
  <div slot="inline">
    <GraphicBlock
      width="widest"
      role="img"
      class="my-0"
      textWidth="normal"
      notes="Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus"
      ariaDescription="Aerial map showing trajectory of crash"
    >
      <svelte:component this="{Map}" assetsPath="{assets || '/'}" />
    </GraphicBlock>
  </div>
</HeroHeadline>
```
