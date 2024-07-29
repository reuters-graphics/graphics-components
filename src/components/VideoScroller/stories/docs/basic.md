This guide explains how to add a video on scrolly along with vertical text captions.

Add the following basic structure to your Google Doc. `Breakpoint` and `AspectRatio` allows you to switch videos and graphic annotations based on the readers' screen size.

![Image showing popular aspect ratios](./src/components/VideoScroller/stories/imgs/aspectRatio.jpg)

```yaml
# Google doc block
Type: video-scroller
Id: my-video-scroller
Width: fluid
Height: 1200

[.Videos]
  # Videos along with their aspect ratio
  Breakpoint: 1400
  Src: videos/basic/16_9.mp4
  AspectRatio: 16/9

  Breakpoint: 800
  Src: videos/basic/1_1.mp4
  AspectRatio: 1

  Breakpoint: 640
  Src: videos/basic/9_16.mp4
  AspectRatio: 9/16
[]

[.Foreground]
Element: The Dominican Republic and Haiti were expecting tropical storm conditions on Tuesday (July 2), according to an advisory from the U.S. National Hurricane Center (NHC), as Hurricane Beryl barrelled towards Jamaica as a Category 4 storm.
Position: 0.2

Element: Reuters was able to confirm the location of the video from road layout, nearby buildings, trees and boardwalk seen in the video that matched file and satellite imagery of the area. Reuters was able to confirm the date of the videos from the original file metadata.
Position: 0.5

Element: Beryl is the 2024 Atlantic season's first hurricane and the earliest storm on record to reach the highest category on the Saffir-Simpson Scale that classifies hurricanes.
Position: 0.7

Element: Climate change likely contributed to Beryl's early formation, while also driving how quickly it intensified, according to scientists surveyed by Reuters, which could provide an unsettling preview of future storms.
Position: 0.9
[]

ForegroundPosition: left
ForegroundClass: frgnd-style-advanced
Caption: Drone video captures waves crashing onto the coast of the capital of the Dominican Republic.<br>Video credit: Instagram/@moises.arias06
CaptionWidth: normal
Embedded: false
Debug: true
PosterSrc: ./src/components/VideoScroller/stories/imgs/placeholder.jpg
```

Or you can directly use the `getVideoScrollerPropFromDocs` utility to easily convert the GoogleDoc format above into the props the `VideoScroller` component expects.

```svelte
<!-- App.svelte -->
<script>
  import { assets } from '$app/paths';
  import { getVideoScrollerPropsFromDoc, VideoScroller } from '@reuters-graphics/graphics-components';
</script>


{#if block.Type === 'video-scroller'}
  <VideoScroller {...getVideoScrollerPropsFromDoc(block, assets)} />
```
