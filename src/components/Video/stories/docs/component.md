General-purpose video component. Can play on load or when the video comes into view and has play/pause controls. Supports videos with or without audio.

```svelte
<script>
  import { Video } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // If using local video in the Graphics Kit
</script>

<video
  ariaDescription="{'Compulsory description of your video for screen readers.'}"
  src="{`${assets}/videos/myVideo.mp4`}"
  width="{'wide'}"
  caption="{'Optional caption for your video.'}"></video>
```
