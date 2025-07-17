<script lang="ts">
  import ScrollyVideo from '../ScrollyVideo.svelte';
  import Foreground from '../Foreground.svelte';
  import SM from '../videos/v_9_16.mp4';
  import MD from '../videos/v_1_1.mp4';
  import LG from '../videos/v_16_9.mp4';
  import GraphicBlock from '../../GraphicBlock/GraphicBlock.svelte';
  import Headline from '../../Headline/Headline.svelte';
  import Annotation1 from './graphic/ai2svelte/annotation1.svelte';
  import Annotation2 from './graphic/ai2svelte/annotation2.svelte';
  import Annotation3 from './graphic/ai2svelte/annotation3.svelte';
  import Annotation4 from './graphic/ai2svelte/annotation4.svelte';

  let width = $state(1);
</script>

<svelte:window bind:innerWidth={width} />

{#snippet ScrollForeground()}
  <Foreground startTime={0} endTime={0.3}>
    <Headline
      class="custom-headline"
      hed="ScrollyVideo inside ScrollerBase"
      dek="This is a demo of ScrollyVideo inside ScrollerBase component."
      section={'Reuters Graphics'}
      authors={['Jane Doe']}
      publishTime={new Date('2020-01-01').toISOString()}
    />
  </Foreground>
  <Foreground startTime={0.3} endTime={2.2}>
    <GraphicBlock title="" description="" width="fluid">
      <Annotation1 />
    </GraphicBlock>
  </Foreground>
  <Foreground startTime={2.2} endTime={3.2}>
    <GraphicBlock title="" description="" width="fluid">
      <Annotation2 />
    </GraphicBlock>
  </Foreground>
  <Foreground startTime={3.2} endTime={4.5}>
    <GraphicBlock title="" description="" width="fluid">
      <Annotation3 />
    </GraphicBlock>
  </Foreground>
  <Foreground startTime={6.5} endTime={8}>
    <GraphicBlock title="" description="" width="fluid">
      <Annotation4 />
    </GraphicBlock>
  </Foreground>
{/snippet}

{#snippet ScrollVideo(height: string, VideoSrc: string)}
  <ScrollyVideo
    class="surf-scrolly"
    {height}
    src={VideoSrc}
    useWebCodecs={true}
    showDebugInfo
  >
    {@render ScrollForeground()}
  </ScrollyVideo>
{/snippet}

{#if width < 600}
  {@render ScrollVideo('800svh', SM)}
{:else if width < 1200}
  {@render ScrollVideo('800svh', MD)}
{:else}
  {@render ScrollVideo('800svh', LG)}
{/if}

<style lang="scss">
  :global(.custom-headline *) {
    color: white;
  }

  :global(.surf-scrolly .scrolly-video-foreground) {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.85));
  }
</style>
