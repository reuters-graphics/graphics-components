<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Video from './Video.svelte';

  const { Story } = defineMeta({
    title: 'Components/Multimedia/Video',
    component: Video,
  });
</script>

<script>
  import SilentVideo from './demo/silent-video.mp4';
  import SoundVideo from './demo/sound-video.mp4';
</script>

<Story
  name="Demo"
  args={{
    ariaDescription: 'Required description of your video for screen readers.',
    src: SilentVideo,
    width: 'wide',
    notes: 'Optional caption for your video.',
  }}
/>

<Story
  name="Autoplay controls"
  exportName="Autoplay"
  args={{
    ariaDescription: 'Required description of your video for screen readers.',
    src: SilentVideo,
    loopVideo: true,
    notes:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
  }}
/>

<Story
  name="Audio controls"
  exportName="Audio"
  args={{
    ariaDescription: 'Required description of your video for screen readers.',
    src: SoundVideo,
    notes:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    controlsColour: '#152a1c',
    controlsOpacityMax: 1,
    controlsOpacityMin: 0.5,
    playVideoThreshold: 0.9,
    muteVideo: false,
    soundAutoplay: true,
  }}
/>

<Story
  name="Controls"
  args={{
    ariaDescription: 'Required description of your video for screen readers.',
    src: SilentVideo,
    width: 'normal',
    notes:
      "World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",
    playVideoThreshold: 0.9,
    controlsColour: 'white',
    controlsOpacityMax: 1,
    controlsOpacityMin: 0.5,
    controlsPosition: 'bottom right',
    separateReplayIcon: true,
    loopVideo: false,
    soundAutoplay: true,
  }}
/>

<Story name="Text elements" exportName="Text">
  <Video
    src={SilentVideo}
    ariaDescription="Required description of your video for screen readers."
    title="Title for your video"
    description="Description for your video"
  >
    {#snippet notes()}
      <aside>
        <p class="notes">Custom-styled notes for the video.</p>
      </aside>
    {/snippet}
  </Video>
</Story>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  p.notes {
    @include mixins.body-note;
  }
</style>
