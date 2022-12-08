<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import playAndLoopDocs from './stories/docs/playAndLoop.md?raw';
  // @ts-ignore
  import controlsDocs from './stories/docs/controls.md?raw';
  // @ts-ignore
  // import withSoundDocs from './stories/docs/withSound.md?raw';

  // @ts-ignore
  import SilentVideo from './stories/videos/silent-video.mp4';
  // @ts-ignore
  import SoundVideo from './stories/videos/sound-video.mp4';

  import Video from './Video.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/Video',
    component: Video,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Video {...args} />
</Template>

<Story
  name="Default"
  args="{{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SilentVideo,
    width: 'wide',
    caption: 'Optional caption for your video.',
  }}"
/>

<Story
  name="Playing and looping"
  args="{{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SilentVideo,
    width: 'normal',
    loopVideo: true,
    caption:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
  }}"
  {...withStoryDocs(playAndLoopDocs)}
/>

<Story
  name="Controls"
  args="{{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SilentVideo,
    width: 'normal',
    caption:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
    controlsColour: 'white',
    controlsOpacity: 1,
    controlsPosition: 'bottom right',
    separateReplayIcon: true,
    loopVideo: false,
    hoverToSeeControls: true,
  }}"
  {...withStoryDocs(controlsDocs)}
/>

<Story
  name="Videos with sound"
  args="{{
    ariaDescription: 'Compulsory description of your video for screen readers.',
    src: SoundVideo,
    width: 'normal',
    caption:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
    showControls: true,
    loopVideo: false,
    muteVideo: false,
    playVideoWhenInView: true,
    allowSoundToAutoplay: true,
  }}"
  {...withStoryDocs(controlsDocs)}
/>
