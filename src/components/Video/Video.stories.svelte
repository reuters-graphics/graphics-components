<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import playAndLoopDocs from './stories/docs/playAndLoop.md?raw';
  // @ts-ignore raw
  import controlsDocs from './stories/docs/controls.md?raw';
  // @ts-ignore raw
  // import withSoundDocs from './stories/docs/withSound.md?raw';

  import Video from './Video.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Multimedia/Video',
    component: Video,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import SilentVideo from './stories/videos/silent-video.mp4';
  // @ts-ignore raw
  import SoundVideo from './stories/videos/sound-video.mp4';
</script>

<Template>
  {#snippet children({ args })}
    <Video {...args} />
  {/snippet}
</Template>

<Story
  name="Default"
  args={{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SilentVideo,
    width: 'wide',
    notes: 'Optional caption for your video.',
  }}
/>

<Story
  name="Playing and looping"
  args={{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SilentVideo,
    width: 'normal',
    loopVideo: true,
    notes:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
  }}
  {...withStoryDocs(playAndLoopDocs)}
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
  {...withStoryDocs(controlsDocs)}
/>

<Story
  name="Videos with sound"
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
  {...withStoryDocs(controlsDocs)}
/>
