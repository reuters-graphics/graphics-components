Add a full graphic or any other component in the crown.

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
  import Map from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';
</script>

<Headline
  width="wider"
  class="!fmt-1"
  hed="{'Unfriendly skies'}"
  dek="{'How Russia’s invasion of Ukraine is redrawing air routes'}"
  section="{'Ukraine Crisis'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2022-03-04').toISOString()}"
>
  <!-- Add a crown graphic -->
  <div slot="crown">
    <Map assetsPath="{assets}" />
  </div>
</Headline>
```
