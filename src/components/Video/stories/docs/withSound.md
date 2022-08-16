If you've ever had to put sound on a page in recent years,
you'll know that auto-playing sound is not allowed by browsers. The user will need to interact with the page first, and it will depend on your
particular use case how and when you'd like this to happen. This component provides two options to deal with this.
If you have a video with sound, make sure to add the prop `muteVideo={false}`.

Then you can either:

- `allowSoundToAutoplay={false}` (default) : Don't allow the video to autoplay under any circumstances other than when the user clicks the 'play' on the video. Note that this
  works whether or not you have the controls visible, i.e. with `showControls` being `true` or `false`, as long as you allow
  play/pause behaviour with `possibleToPlayPause={true}` (default).

- `allowSoundToAutoplay={true}` : Allow the video to autoplay when it comes into view as long as the user has interacted with the page preivously, i.e. they have clicked/tapped
  anywhere on the page.

You should keep `playVideoWhenInView={true}` (default). There is no option to autoplay video with sound when the user clicks on the page
elsewhere if the video is not in view. In other words, you can't start playing sound for a video which is not in view with this component.
This is probably not a behaviour you'd want anyway.

The example below allows for autoplay if the user has interacted with the page before the video comes into view. To see this, reload the page
and go to the top. Click anywhere on the page before scrolling down to the video and you should see it autoplay when it comes into view.

```svelte
<script>
  import { Video } from '@reuters-graphics/graphics-components';
</script>

<Video
  ariaDescription="{'Compulsory description of your video for screen readers.'}"
  src="{'path-to-video-or-external-url'}"
  size="{'normal'}"
  controlsOpacity="{1}"
  loopVideo="{false}"
  muteVideo="{false}"
  allowSoundToAutoplay="{true}"
/>
```
