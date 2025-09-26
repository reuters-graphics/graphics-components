<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ScrollerLottie from './ScrollerLottie.svelte';
  import ScrollerLottieForeground from './ScrollerLottieForeground.svelte';
  import Headline from '../Headline/Headline.svelte';
  import Theme from '../Theme/Theme.svelte';

  import MarkerSample from './data/markerSample.lottie?url';
  import ForegroundSample from './data/foregroundSample.lottie?url';
  import WithScrollerBase from './demo/withScrollerBase.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/ScrollerLottie',
    component: ScrollerLottie,
    argTypes: {
      data: {
        table: {
          disable: true, // Hides from Docs table
        },
        control: false, // Removes from Controls panel
      },
      lottiePlayer: {
        table: {
          category: 'Bindable states',
        },
      },
      progress: {
        table: {
          category: 'Bindable states',
        },
      },
    },
  });

  let progress = $state(0);
</script>

<Story name="Basic">
  <ScrollerLottie autoplay loop showDebugInfo />
</Story>

<Story name="Marker">
  <ScrollerLottie
    src={MarkerSample}
    showDebugInfo
    autoplay
    marker="ballerina"
    loop
    mode="bounce"
  />
</Story>

<Story name="Segment">
  <ScrollerLottie autoplay loop showDebugInfo segment={[0, 20]} speed={0.5} />
</Story>

<Story name="Themes">
  <ScrollerLottie
    src={'https://lottie.host/9a5a6605-fc90-4935-8d10-9df4c83902ff/PFUKH53LJk.lottie'}
    showDebugInfo
    autoplay
    bind:progress
    themeId={progress < 0.33 ? 'Water'
    : progress < 0.66 ? 'air'
    : 'earth'}
  />
</Story>

<Story name="Using with ScrollerBase" exportName="ScrollerBase">
  <WithScrollerBase />
</Story>

<Story name="With foregrounds">
  <ScrollerLottie
    src={ForegroundSample}
    showDebugInfo
    autoplay
    speed={0.5}
    loop
    mode="bounce"
  >
    <ScrollerLottieForeground
      startFrame={50}
      endFrame={100}
      text="Foreground caption between frames 50 and 100."
      position="bottom center"
      backgroundColour="rgba(0, 0, 0)"
      width="normal"
    />

    <ScrollerLottieForeground
      startFrame={0}
      endFrame={50}
      position="center center"
      backgroundColour="rgba(0, 0, 0)"
      width="normal"
    >
      <Theme base="dark">
        <Headline
          hed="ScrollerLottie with foreground component"
          dek="This is an example of using a Svelte component as the foreground."
          width="normal"
          authors={['Jane Doe', 'John Doe']}
        />
      </Theme>
    </ScrollerLottieForeground>
  </ScrollerLottie>
</Story>

<style lang="scss">
  :global {
    .scroller-lottie-foreground {
      header {
        padding: 2rem;
        background-color: black;
      }

      .foreground-text {
        p {
          color: white !important;
        }
      }
    }
  }
</style>
