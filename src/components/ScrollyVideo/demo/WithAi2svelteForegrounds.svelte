<script lang="ts">
  import ScrollyVideo from '../ScrollyVideo.svelte';
  import ScrollyVideoForeground from '../ScrollyVideoForeground.svelte';
  import SM from '../videos/waves_sm.mp4';
  import MD from '../videos/waves_md.mp4';
  import LG from '../videos/waves_lg.mp4';
  import Headline from '../../Headline/Headline.svelte';
  import Block from '../../Block/Block.svelte';

  // Foreground ai2svelte components
  import Annotation1 from './graphic/ai2svelte/annotation1.svelte';
  import Annotation2 from './graphic/ai2svelte/annotation2.svelte';
  import Annotation3 from './graphic/ai2svelte/annotation3.svelte';
  import Annotation4 from './graphic/ai2svelte/annotation4.svelte';

  const content = {
    hed: 'Wind and waves',
    authors: ['Jane Doe'],
    publishTime: '2020-01-01T00:00:00Z',
    startTime: '0',
    endTime: '0.3',
    blocks: [
      {
        type: 'scrolly-video',
        id: 'surf-scrolly',
        height: '800svh',
        foregrounds: [
          {
            startTime: '0.3',
            endTime: '2.2',
            width: 'fluid',
            foregroud: 'Annotation1',
          },
          {
            startTime: '7',
            endTime: '12',
            width: 'fluid',
            foreground: 'Annotation2',
          },
          {
            startTime: '14',
            endTime: '20',
            width: 'fluid',
            foreground: 'Annotation3',
          },
        ],
      },
    ],
  };
  const scrollyVideoBlock = content.blocks[0];

  let width = $state(1);

  let src = $derived(() => {
    if (width < 600) return '../videos/waves_sm.mp4';
    else if (width < 1200) return '../videos/waves_md.mp4';
    else return '../videos/waves_lg.mp4';
  });
</script>

<svelte:window bind:innerWidth={width} />

{#snippet ScrollVideo(height: string, VideoSrc: string)}
  <ScrollyVideo
    class="surf-scrolly"
    {height}
    src={VideoSrc}
    useWebCodecs={true}
    showDebugInfo
  >
    <ScrollyVideoForeground startTime={0} endTime={0.3}>
      <Headline
        class="custom-headline"
        hed="Wind and waves"
        authors={['Jane Doe']}
        publishTime={new Date('2020-01-01').toISOString()}
      />
    </ScrollyVideoForeground>

    {#each scrollyVideoBlock.foregrounds as foreground, idx}
      {#if foreground.foreground}
        <ScrollyVideoForeground
          startTime={parseFloat(foreground.startTime)}
          endTime={parseFloat(foreground.endTime)}
        >
          <Block width="fluid">
            {#if idx === 0}
              <Annotation1 />
            {:else if idx === 1}
              <Annotation2 />
            {:else if idx === 2}
              <Annotation3 />
            {:else if idx === 3}
              <Annotation4 />
            {/if}
          </Block>
        </ScrollyVideoForeground>
      {/if}
    {/each}
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
