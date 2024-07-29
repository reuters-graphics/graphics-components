<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import superBasicDocs from './stories/docs/superbasic.md?raw';
  // @ts-ignore
  import basicDocs from './stories/docs/basic.md?raw';
  // @ts-ignore
  import advancedDocs from './stories/docs/advanced.md?raw';

  import { getVideoScrollerPropsFromDoc } from './docProps';

  import VideoScroller from './VideoScroller.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  import Headline from '../Headline/Headline.svelte';

  import Anno1 from './stories/ai2svelte/annotation1.svelte';
  import Anno2 from './stories/ai2svelte/annotation2.svelte';
  import Anno3 from './stories/ai2svelte/annotation3.svelte';

  // 🖼️ You can import images you need in stories directly in code!
  // @ts-ignore
  // import Placeholder from './stories/imgs/placeholder.jpg';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      width: {
        control: 'select',
        options: [
          'narrower',
          'narrow',
          'normal',
          'wide',
          'wider',
          'widest',
          'fluid',
        ],
      },
      captionWidth: {
        control: 'select',
        options: [
          'narrower',
          'narrow',
          'normal',
          'wide',
          'wider',
          'widest',
          'fluid',
        ],
      },
      foregroundPosition: {
        control: 'select',
        options: ['left', 'middle', 'right'],
      },
    },
  };

  const aiAnnos = { Anno1, Anno2, Anno3, Headline };

  const superBasicArgs = {
    Type: 'video-scroller',
    Id: 'my-video-scroller',
    Width: 'fluid',
    Height: '1200',
    Videos: [
      {
        Breakpoint: '1400',
        Src: './src/components/VideoScroller/stories/videos/superbasic/16_9.mp4',
        AspectRatio: '16/9',
      },
    ],
    CaptionWidth: 'normal',
    Caption:
      'Tropical Storm Beryl brought strong winds and rain to southeast Texas on Monday, killing at least three people, flooding highways and cutting power to more than 2.7 million homes and businesses.<br>Video credit: @cjblain10 via X.',
    Embedded: 'false',
    PosterSrc: './src/components/VideoScroller/stories/imgs/placeholder.jpg',
  };

  const basicArgs = {
    Type: 'video-scroller',
    Id: 'my-video-scroller',
    Width: 'fluid',
    Height: '1200',
    Videos: [
      {
        Breakpoint: '1400',
        Src: './src/components/VideoScroller/stories/videos/basic/16_9.mp4',
        AspectRatio: '16/9',
      },
      {
        Breakpoint: '800',
        Src: './src/components/VideoScroller/stories/videos/basic/1_1.mp4',
        AspectRatio: '1/1',
      },
      {
        Breakpoint: '640',
        Src: './src/components/VideoScroller/stories/videos/basic/9_16.mp4',
        AspectRatio: '9/16',
      },
    ],
    Foreground: [
      {
        Element:
          'The Dominican Republic and Haiti were expecting tropical storm conditions on Tuesday (July 2), according to an advisory from the U.S. National Hurricane Center (NHC), as Hurricane Beryl barrelled towards Jamaica as a Category 4 storm.',
        Position: '0.2',
      },
      {
        Element:
          'Reuters was able to confirm the location of the video from road layout, nearby buildings, trees and boardwalk seen in the video that matched file and satellite imagery of the area. Reuters was able to confirm the date of the videos from the original file metadata.',
        Position: '0.5',
      },
      {
        Element:
          "Beryl is the 2024 Atlantic season's first hurricane and the earliest storm on record to reach the highest category on the Saffir-Simpson Scale that classifies hurricanes.",
        Position: '0.7',
      },
      {
        Element:
          "Climate change likely contributed to Beryl's early formation, while also driving how quickly it intensified, according to scientists surveyed by Reuters, which could provide an unsettling preview of future storms.",
        Position: '0.9',
      },
    ],
    ForegroundClass: 'frgnd-style',
    CaptionWidth: 'normal',
    Caption:
      'Drone video captures waves crashing onto the coast of the capital of the Dominican Republic.<br>Video credit: Instagram/@moises.arias06',
    Embedded: 'false',
    posterSrc: './src/components/VideoScroller/stories/imgs/placeholder.jpg',
  };

  const advancedArgs = {
    Type: 'video-scroller',
    Id: 'my-video-scroller',
    Width: 'fluid',
    Height: '1200',
    Videos: [
      {
        Breakpoint: '1400',
        Src: './src/components/VideoScroller/stories/videos/advanced/v_16_9.mp4',
        AspectRatio: '16/9',
      },
      {
        Breakpoint: '800',
        Src: './src/components/VideoScroller/stories/videos/advanced/v_1_1.mp4',
        AspectRatio: '1/1',
      },
      {
        Breakpoint: '640',
        Src: './src/components/VideoScroller/stories/videos/advanced/v_9_16.mp4',
        AspectRatio: '9/16',
      },
    ],
    Annotations: [
      {
        Anno: 'Headline',
        Start: '0',
        End: '0.1',
        Width: 'narrow',
        Props: {
          hed: 'A hed inside annotation layer',
          dek: 'Yep, can do that',
          section: 'Graphics Component',
          authors: ['Jon McClure', 'Simon Scarr', 'Julia Wolfe'],
          publishTime: new Date('2025-01-01').toISOString(),
          class: 'custom-hed',
        },
      },
      { Anno: 'Anno1', Start: '0.06', End: '0.2' },
      { Anno: 'Anno2', Start: '0.31', End: '0.4' },
      { Anno: 'Anno3', Start: '0.91', End: '0.97' },
    ],
    AnnotationClass: 'anno-shadow',
    Foreground: [
      {
        Element:
          'Multiple annotations can be stacked together. Here, a Headline component and a Ai2Svelte component live together happily.',
        Position: '0.15',
      },
      { Element: 'Some text at 50%...', Position: '0.5' },
      { Element: 'Some text at 90%...', Position: '0.9' },
      {
        Element: 'Headline',
        Position: '0.7',
        Props: {
          hed: 'A hed inside a foreground layer',
          dek: 'Yes, go bonkers!',
          section: 'Graphics Component',
          authors: ['Jon McClure', 'Simon Scarr', 'Julia Wolfe'],
          publishTime: new Date('2025-01-01').toISOString(),
          class: 'custom-hed',
        },
      },
    ],
    ForegroundClass: 'frgnd-style-advanced',
    ForegroundPosition: 'left',
    Caption: 'Video courtesy World Surf League',
    CaptionWidth: 'normal',
    Embedded: 'false',
    Debug: 'true',
    PosterSrc: './src/components/VideoScroller/stories/imgs/placeholder.jpg',
  };
</script>

<Meta
  title="Components/VideoScroller"
  component="{VideoScroller}"
  {...metaProps}
/>

<Template let:args>
  <VideoScroller {...args} />
</Template>

<Story
  name="SuperBasic"
  {...withStoryDocs(superBasicDocs)}
  args="{getVideoScrollerPropsFromDoc(superBasicArgs)}"
/>

<Story
  name="Basic"
  {...withStoryDocs(basicDocs)}
  args="{getVideoScrollerPropsFromDoc(basicArgs)}"
/>

<Story
  name="Advanced"
  {...withStoryDocs(advancedDocs)}
  args="{getVideoScrollerPropsFromDoc(advancedArgs, '', aiAnnos)}"
/>

<style lang="scss">
  :global(.anno-shadow p) {
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.8))
      drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.4));
  }

  :global(.frgnd-style) {
    background-color: rgba(0, 0, 0, 0.6) !important;
    backdrop-filter: blur(4px);
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.4);
  }

  :global(.frgnd-style p) {
    color: white;
  }

  :global(.frgnd-style-advanced) {
    background-color: rgba(255, 255, 255, 0.8) !important;
    backdrop-filter: blur(12px);
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
  }

  :global(.frgnd-style-advanced p) {
    font-family: var(--theme-font-family-sans-serif) !important;
    font-size: var(--theme-font-size-base) !important;
    line-height: 1.3 !important;
    color: #1e1e1e;
  }

  :global(.custom-hed *) {
    color: white;
  }

  :global(.custom-hed header) {
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.6))
      drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.6));
  }
</style>
