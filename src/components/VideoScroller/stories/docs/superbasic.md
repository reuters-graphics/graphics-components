This guide explains the most simple usage of the component - run a video on scroll.

Add the following basic structure to your Google Doc:

```yaml
# Google doc block
Type: video-scroller
Id: my-video-scroller
Width: fluid
Height: 1200

[.Videos]
  Breakpoint: 1400
  Src: videos/basic/16_9.mp4
  AspectRatio: 16/9
[]

CaptionWidth: normal
PosterSrc: imgs/placeholder.jpg
```

Add the following code in your app.svelte:

```svelte
<script>
  import { assets } from '$app/paths';
  import { VideoScroller } from '@reuters-graphics/graphics-components';
</script>

{#if block.Type === 'video-scroller'}
  <VideoScroller
      width="{block.Width}",
      height="{block.Height}",
      videos="{block.Videos}"
      captionWidth="{block.CaptionWidth}",
      caption="{block.Caption}",
      embedded="{embedded}",
      posterSrc= "{`${assets}/${block.PosterSrc}`}"
      assetsPath="{assets}"
  />
```

Or you can directly use the `getVideoScrollerPropFromDocs` utility to easily convert the GoogleDoc format above into the props the `VideoScroller` component expects.

> The **getVideoScrollerPropFromDocs** utility is designed to take in component props in PascalCase, in which the first letter of each word is uppercase and the remaining letters are lowercase, with no spaces or other separators between words (annoFadeDelay becomes AnnoFadeDelay, foregroundPosition becomes ForegroundPosition).

```svelte
<!-- App.svelte -->
<script>
  import { assets } from '$app/paths';
  import { getVideoScrollerPropsFromDoc, VideoScroller } from '@reuters-graphics/graphics-components';
</script>


{#if block.Type === 'video-scroller'}
  <VideoScroller {...getVideoScrollerPropsFromDoc(block, assets)} />
```
