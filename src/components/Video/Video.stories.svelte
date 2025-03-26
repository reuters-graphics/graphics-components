<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Video from './Video.svelte';

  const { Story } = defineMeta({
    title: 'Components/Multimedia/Video',
    component: Video,
  });
</script>

<script>
  import SilentVideo from './demo/videos/silent-video.mp4';
  import SoundVideo from './demo/videos/sound-video.mp4';
</script>

<Story
  name="Demo"
  args={{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SilentVideo,
    width: 'wide',
    notes: 'Optional caption for your video.',
  }}
/>

<Story
  name="Playing and looping"
  exportName="PlayingAndLooping"
  args={{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SilentVideo,
    width: 'normal',
    loopVideo: true,
    notes:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
  }}
/>

<Story
  name="Controls"
  args={{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SilentVideo,
    width: 'normal',
    notes:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
    controlsColour: 'white',
    controlsOpacity: 1,
    controlsPosition: 'bottom right',
    separateReplayIcon: true,
    loopVideo: false,
    hoverToSeeControls: true,
  }}
/>

<Story
  name="Videos with sound"
  exportName="WithSound"
  args={{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SoundVideo,
    width: 'normal',
    notes:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
    showControls: true,
    loopVideo: false,
    muteVideo: false,
    playVideoWhenInView: true,
    allowSoundToAutoplay: true,
  }}
/>
