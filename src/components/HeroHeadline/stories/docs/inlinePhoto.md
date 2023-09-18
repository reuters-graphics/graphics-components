Reuters Graphics headline followed by a graphic or any media block.

```svelte
<script>
  import {
    HeroHeadline,
    FeaturePhoto,
  } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';

  export let embedded = false;
</script>

<HeroHeadline
  embedded="{embedded}"
  hed="{'Buried under the bricks'}"
  hedWidth="wide"
  class="mb-0"
  dek="{'How mud-brick housing made the Morocco earthquake so deadly'}"
  section="{'Global news'}"
  authors="{['Mariano Zafra']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
>
  <div slot="inline">
    <FeaturePhoto
      width="widest"
      class="my-0"
      src="{`${assets}/images/myImage.jpg`}"
      caption="Photo by REUTERS/Nacho Doce."
      altText="A photo of the town of Adassil, Morocco, showing severe damage to many houses, which have collapsed after the earthquake. The houses are all made of mud brick."
    />
  </div>
</HeroHeadline>
```
