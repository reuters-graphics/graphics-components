`showControls`

- By default, the video has a play/pause button, which corresponds to
  `showControls={true}`. If you don't want these, just set `showControls={false}`.
  When you do that, the icons themselves will disappear but the functionality of playing and pausing remains and can be done by clicking on the video itself.
  If you don't want to enable any play/pause functionality, add `possibleToPlayPause={false}`.
- If you want to show the controls only when the video is hovered, set `hoverToSeeControls={true}`.

`controlsColour`, `controlsOpacity`, `controlsPosition`, `separateReplayIcon`

If you do want to leave the controls, you have a couple of options to style them:

- Set `controlsColour` to a colour of your choosing.
- Set `controlsOpacity` to a value between `0` and `1` to control the opacity. The default is `0.5`.
- Change the placement of the controls to one of: `top right`, `top left`, `bottom right`, `bottom left`, `center` by setting `controlsPosition`.
- Change the play button to a replay button at the end of the video with the option `separateReplayIcon={true}`.

Here is an example with bottom right corner white opaque controls, with a replay button, where you have to hover on the video to see the controls.

```html
<script>
  import { Video } from '@reuters-graphics/graphics-components';
</script>

<video
  ariaDescription="{'Compulsory description of your video for screen readers.'}"
  src="{'path-to-video-or-external-url'}"
  width="{'normal'}"
  caption="{'Optional caption for your video.'}"
  playVideoThreshold="{0.1}"
  controlsColour="{'white'}"
  controlsOpacity="{1}"
  controlsPosition="{'bottom right'}"
  separateReplayIcon="{true}"
  loopVideo="{false}"
  hoverToSeeControls="{true}"
/>
```
