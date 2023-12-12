Add a cover video and position the title with ease.

```svelte
<script>
  import { HeroHeadline, Video } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';

  export let embedded = false;
</script>

<HeroHeadline
  embedded="{embedded}"
  hed="{'Devastation in Derna'}"
  hedWidth="wide"
  class="mb-0"
  dek="{'How raging floods burst dams, destroyed neighbourhoods and killed thousands in Libya'}"
  section="{'Global news'}"
  authors="{['Simon Scarr']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
>
  <div slot="inline">
    <Video
      width="widest"
      class="my-0"
      showControls="{false}"
      preloadVideo="auto"
      playVideoWhenInView="{false}"
      src="{assets}/videos/intro.mp4"
      notes="Drone shots of Derna, Libya. September 14, 2023. REUTERS"
      ariaDescription="alttext fot video"
    />
  </div>
</HeroHeadline>
```
