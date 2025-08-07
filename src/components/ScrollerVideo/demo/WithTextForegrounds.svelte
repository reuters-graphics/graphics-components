<script lang="ts">
  import ScrollerVideo from '../ScrollerVideo.svelte';
  import ScrollerVideoForeground from '../ScrollerVideoForeground.svelte';
  import Drone from '../videos/drone.mp4';
  import type { ContainerWidth } from '../../@types/global';

  const content = {
    blocks: [
      {
        type: 'scroller-video',
        id: 'alps-scroller',
        src: 'videos/alps.mp4',
        height: '800lvh',
        foregrounds: [
          {
            startTime: '0',
            endTime: '5',
            width: 'normal',
            position: 'bottom center',
            backgroundColour: 'rgba(0, 0, 0, 0.8)',
            text: '#### The Alps\n\nThe Alps stretch across eight countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia, covering about 1,200 kilometers (750 miles).',
          },
          {
            startTime: '7',
            endTime: '12',
            width: 'normal',
            position: 'bottom center',
            backgroundColour: 'rgba(0, 0, 0, 0.8)',
            text: "Mont Blanc, standing at 4,809 meters (15,777 feet), is the highest peak in the Alps and Western Europe, though there's ongoing debate between France and Italy about exactly where the summit lies.",
          },
          {
            startTime: '14',
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

  const scrollerVideoBlock = content.blocks[0];
</script>

<ScrollerVideo
  id={scrollerVideoBlock.id}
  height={scrollerVideoBlock.height}
  src={Drone}
  useWebCodecs={true}
  showDebugInfo
>
  {#each scrollerVideoBlock.foregrounds as foreground}
    <ScrollerVideoForeground
      startTime={parseFloat(foreground.startTime)}
      endTime={parseFloat(foreground.endTime)}
      width={foreground.width as ContainerWidth}
      position={foreground.position}
      backgroundColour={foreground.backgroundColour}
      text={foreground.text}
    />
  {/each}
</ScrollerVideo>

<style lang="scss">
  :global(.custom-headline *) {
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
  }

  :global {
    #alps-scroller .foreground-text {
      * {
        color: white;
      }
    }
  }
</style>
