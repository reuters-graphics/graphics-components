<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  // Components
  import Lottie from './Lottie.svelte';
  import LottieForeground from './LottieForeground.svelte';
  import Headline from '../Headline/Headline.svelte';
  import Theme from '../Theme/Theme.svelte';

  // Denmo Lottie file
  import DemoLottie from './lottie/demo.lottie?url';
  import MarkerSample from './lottie/markerSample.lottie?url';
  import ForegroundSample from './lottie/foregroundSample.lottie?url';
  import ThemesSample from './lottie/themesLottie.lottie?url';
  import WithScrollerBase from './demo/withScrollerBase.svelte';

  const { Story } = defineMeta({
    title: 'Components/Multimedia/Lottie',
    component: Lottie,
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

<Story name="Demo">
  <Lottie src={DemoLottie} autoplay={true} showDebugInfo={true} />
</Story>

<Story name="Segment">
  <Lottie
    src={DemoLottie}
    autoplay
    loop
    showDebugInfo
    segment={[0, 20]}
    speed={0.5}
  />
</Story>

<Story name="Marker">
  <Lottie
    src={MarkerSample}
    showDebugInfo
    autoplay
    marker="ballerina"
    loop
    mode="bounce"
  />
</Story>

<Story name="Themes">
  <Lottie
    src={ThemesSample}
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
  <Lottie src={ForegroundSample} autoplay loop speed={1.5}>
    <LottieForeground
      startFrame={0}
      endFrame={50}
      position="center center"
      backgroundColour="rgba(0, 0, 0)"
    >
      <div class="headline-container">
        <Theme base="dark">
          <Headline
            hed="Headline"
            dek="This is an example of using a Svelte component as the foreground."
            authors={['Jane Doe', 'John Doe']}
          />
        </Theme>
      </div>
    </LottieForeground>

    <LottieForeground
      startFrame={50}
      endFrame={100}
      text="Foreground caption between frames 50 and 100."
      position="bottom center"
      backgroundColour="rgba(0, 0, 0)"
      width="wide"
    />
  </Lottie>
</Story>

<style lang="scss">
  :global {
    .lottie-foreground-container {
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

  .headline-container {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
