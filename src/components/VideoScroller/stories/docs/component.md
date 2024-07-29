`VideoScroller` helps you create scrollytelling experience combining a video playing in the background along with annotations, texts and potentially any component in the foreground that can come into play as per the keyframes set.

> This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should probably use [ScrollyVideo.js](https://scrollyvideo.js.org/), which is a lower level component you can more easily customize.

```html
<script>
  import { assets } from '$app/paths';
  import { VideoScroller } from '@reuters-graphics/graphics-components';

  // Import ai2svelte components...
  import Annotation1 from '$lib/ai2svelte/ai-chart.svelte';

  const videos = [
    {
      breakpoint: 640,
      aspectRatio: 9 / 16,
      src: `${assets}/videos/v_9_16.mp4`,
    },
    { breakpoint: 800, aspectRatio: 1, src: `${assets}/videos/v_1_1.mp4` },
    {
      breakpoint: 1200,
      aspectRatio: 16 / 9,
      src: `${assets}/videos/v_16_9.mp4`,
    },
  ];

  const annotations = [{ anno: 'Annotation1', start: 0.1, end: 0.2 }];

  const foreground = [
    {
      text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
      position: 0.1,
    },
    { text: 'Some text at 50%...', position: 0.5 },
    { text: 'Some text at 90%...', position: 0.9 },
  ];

  // annotationObject to hold annotation key and value (ai2svelte graphic)
  const aiAnnos = {
    Annotation1,
  };
</script>

<VideoScroller
  width="{'fluid'}"
  height="{1200}"
  videos="{videos}"
  annotations="{annotations}"
  annotationObject="{aiAnnos}"
  foreground="{foreground}"
  captionWidth="{'normal'}"
  caption="{'Credits. REUTERS'}"
  embedded="{embedded}"
  posterSrc="{`${assets}/${block.PosterSrc}`}"
  assetsPath="{assets}"
/>
```
