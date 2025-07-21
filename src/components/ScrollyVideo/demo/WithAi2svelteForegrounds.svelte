<script lang="ts">
  import ScrollyVideo from '../ScrollyVideo.svelte';
  import ScrollyVideoForeground from '../ScrollyVideoForeground.svelte';
  import SM from '../videos/waves_sm.mp4';
  import MD from '../videos/waves_md.mp4';
  import LG from '../videos/waves_lg.mp4';
  import Headline from '../../Headline/Headline.svelte';

  // Foreground ai2svelte components
  import Foreground1 from './graphic/ai2svelte/annotation1.svelte';
  import Foreground2 from './graphic/ai2svelte/annotation2.svelte';
  import Foreground3 from './graphic/ai2svelte/annotation3.svelte';
  import Foreground4 from './graphic/ai2svelte/annotation4.svelte';

  // Foreground ai2svelte graphics components
  const aiChartsForeground = {
    Foreground1,
    Foreground2,
    Foreground3,
    Foreground4,
  };

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
            foreground: 'Foreground1',
          },
          {
            startTime: '2.2',
            endTime: '3.2',
            width: 'fluid',
            foreground: 'Foreground2',
          },
          {
            startTime: '3.2',
            endTime: '4.5',
            width: 'fluid',
            foreground: 'Foreground3',
          },
          {
            startTime: '6.5',
            endTime: '8',
            width: 'fluid',
            foreground: 'Foreground4',
          },
        ],
      },
    ],
  };
  const scrollyVideoBlock = content.blocks[0];

  let width = $state(1);
</script>

<svelte:window bind:innerWidth={width} />

{#snippet ScrollVideo(height: string, src: string)}
  <ScrollyVideo
    id={scrollyVideoBlock.id}
    {height}
    {src}
    useWebCodecs={true}
    showDebugInfo
  >
    <ScrollyVideoForeground
      startTime={parseFloat(content.startTime)}
      endTime={parseFloat(content.endTime)}
    >
      <Headline
        class="custom-headline"
        hed={content.hed}
        authors={content.authors}
        publishTime={new Date(content.publishTime).toISOString()}
      />
    </ScrollyVideoForeground>

    {#each scrollyVideoBlock.foregrounds as foreground}
      <ScrollyVideoForeground
        startTime={parseFloat(foreground.startTime)}
        endTime={parseFloat(foreground.endTime)}
        width={foreground.width as 'fluid'}
        Foreground={aiChartsForeground[
          foreground.foreground as keyof typeof aiChartsForeground
        ]}
      />
    {/each}
  </ScrollyVideo>
{/snippet}

{#if width < 600}
  {@render ScrollVideo(scrollyVideoBlock.height, SM)}
{:else if width < 1200}
  {@render ScrollVideo(scrollyVideoBlock.height, MD)}
{:else}
  {@render ScrollVideo(scrollyVideoBlock.height, LG)}
{/if}

<style lang="scss">
  :global(.custom-headline *) {
    color: white;
  }

  :global(.surf-scrolly .scrolly-video-foreground) {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.85));
  }
</style>
