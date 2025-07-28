<script lang="ts">
  import ScrollerVideo from '../ScrollerVideo.svelte';
  import ScrollerVideoForeground from '../ScrollerVideoForeground.svelte';
  import Goldengate from '../videos/goldengate.mp4';
  import BodyText from '../../BodyText/BodyText.svelte';

  import type { ContainerWidth } from '../../@types/global';

  const content = {
    blocks: [
      {
        type: 'scroller-video',
        id: 'goldengate-scroller',
        src: '../videos/goldengate.mp4',
        height: '200svh',
        foregrounds: [
          {
            startTime: '0',
            endTime: '2',
            width: 'normal',
            position: 'bottom center',
            backgroundColour: 'rgba(0, 0, 0, 0.8)',
            text: '#### Golden Gate Bridge\n\nThe Golden Gate Bridge took over 4 years to build (1933-1937) and was the longest suspension bridge in the world at the time of its completion, spanning 4,200 feet between its towers.',
          },
          {
            startTime: '4',
            endTime: '7',
            width: 'normal',
            position: 'bottom center',
            backgroundColour: 'rgba(0, 0, 0, 0.8)',
            text: "The bridge's iconic International Orange color was chosen partly for visibility in San Francisco's frequent fog. The paint job requires constant maintenance, with a dedicated crew painting the bridge year-round to protect it from rust and corrosion.",
          },
          {
            startTime: '8',
            endTime: '11',
            width: 'normal',
            position: 'bottom center',
            backgroundColour: 'rgba(0, 0, 0, 0.8)',
            text: '#### Engineering Marvel\n\nThe Golden Gate Bridge sways up to **27 feet** sideways in strong winds and can handle winds up to 100 mph. On foggy days, the bridge can collect enough moisture to drip like rain, and it has been struck by ships only once in its history.',
          },
        ],
      },
    ],
  };

  const dummyText =
    'Reprehenderit hamburger pork bresaola, dolore chuck sirloin landjaeger ham hock tempor meatball alcatra nostrud pork belly. Culpa pork belly doner ea jowl, elit deserunt leberkas cow shoulder ham hock dolore.';
  const scrollerVideoBlock = content.blocks[0];
</script>

<BodyText text={dummyText} />
<BodyText text={dummyText} />
<BodyText text={dummyText} />
<BodyText text={dummyText} />

<ScrollerVideo
  src={Goldengate}
  height="200svh"
  trackScroll={false}
  showDebugInfo
  embedded={true}
  embeddedProps={{
    threshold: 0.5,
    height: '80svh',
    duration: 5000,
    delay: 200,
  }}
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
<BodyText text={dummyText} />
