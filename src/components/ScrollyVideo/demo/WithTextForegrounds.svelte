<script lang="ts">
  import ScrollyVideo from '../ScrollyVideo.svelte';
  import ScrollyVideoForeground from '../ScrollyVideoForeground.svelte';
  import Drone from '../videos/drone.mp4';
  import Headline from '../../Headline/Headline.svelte';
  import type { ContainerWidth } from '../../@types/global';

  const content = {
    hed: 'The Alps',
    authors: ['Jane Doe'],
    publishTime: '2020-01-01T00:00:00Z',
    startTime: '0',
    endTime: '2',
    blocks: [
      {
        type: 'scrolly-video',
        id: 'alps-scrolly',
        src: 'videos/alps.mp4',
        height: '800svh',
        foregrounds: [
          {
            startTime: '3',
            endTime: '7',
            width: 'normal',
            position: 'bottom center',
            backgroundColour: 'rgba(0, 0, 0, 0.8)',
            text: '#### The Alps\n\nThe Alps stretch across eight countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia, covering about 1,200 kilometers (750 miles).',
          },
          {
            startTime: '9',
            endTime: '12',
            width: 'normal',
            position: 'bottom center',
            backgroundColour: 'rgba(0, 0, 0, 0.8)',
            text: "Mont Blanc, standing at 4,809 meters (15,777 feet), is the highest peak in the Alps and Western Europe, though there's ongoing debate between France and Italy about exactly where the summit lies.",
          },
          {
            startTime: '16',
            endTime: '20',
            width: 'normal',
            position: 'bottom center',
            backgroundColour: 'rgba(0, 0, 0, 0.8)',
            text: '#### History\n\nThe Alps were formed around **65 million years** ago when the African and Eurasian tectonic plates collided, pushing the land upward. Over 14 million people live in the Alpine region, with tourism supporting approximately 120 million visitors annually.',
          },
        ],
      },
    ],
  };

  const scrollyVideoBlock = content.blocks[0];
</script>

<ScrollyVideo
  id={scrollyVideoBlock.id}
  height={scrollyVideoBlock.height}
  src={Drone}
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
      hedSize="bigger"
    />
  </ScrollyVideoForeground>

  {#each scrollyVideoBlock.foregrounds as foreground}
    <ScrollyVideoForeground
      startTime={parseFloat(foreground.startTime)}
      endTime={parseFloat(foreground.endTime)}
      width={foreground.width as ContainerWidth}
      position={foreground.position}
      text={foreground.text}
      backgroundColour={foreground.backgroundColour}
    />
  {/each}
</ScrollyVideo>

<style lang="scss">
  :global(.custom-headline *) {
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
  }

  :global {
    #alps-scrolly .foreground-text {
      * {
        color: white;
      }
    }
  }
</style>
