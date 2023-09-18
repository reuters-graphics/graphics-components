`playVideoWhenInView`, `playVideoThreshold`

- By default, the video will **start playing when 50% of the video element's height is visible on the page**.
  To control the threshold of visibility at which the video starts playing, add the prop `playVideoThreshold` and set it to a value between 0 and 1,
  where 0 means that the video will start playing as soon as its top enters the viewport, while 1 means it will start when the whole video is in the viewport.

- If you don't want the video to play when you scroll to it, but **on page load**, add the prop `playVideoWhenInView={false}`. The default of the prop is `true`,
  which corresponds to the behaviour described above.

`loopVideo`

- By default, the video will **loop**. If you don't want that, add the prop `loopVideo={false}`.

Here is an example of what the same video would look like with a visibility threshold of 0.9 and not looping. Scroll down slowly to observe the behaviour.

```svelte
<script>
  import { Video } from '@reuters-graphics/graphics-components';
</script>

<Video
  ariaDescription="{'Compulsory description of your video for screen readers.'}"
  src="{'path-to-video-or-external-url'}"
  width="{'normal'}"
  loopVideo="{false}"
  playVideoThreshold="{0.9}"
/>
```
