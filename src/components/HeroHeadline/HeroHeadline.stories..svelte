<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import HeroHeadline from './HeroHeadline.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/HeroHeadline',
    component: HeroHeadline,
    argTypes: {
      hedSize: {
        control: 'select',
        options: ['small', 'normal', 'big', 'bigger', 'biggest'],
      },
      hedWidth: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest'],
      },
      hedAlign: {
        control: 'select',
        options: ['left', 'center', 'right'],
      },
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest'],
      },
    },
  });
</script>

<script>
  import polarImgSrc from './demo/polar.jpg';
  import eurovisImgSrc from './demo/eurovis.jpeg';

  import Block from '../Block/Block.svelte';
  import SiteHeader from '../SiteHeader/SiteHeader.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import FeaturePhoto from '../FeaturePhoto/FeaturePhoto.svelte';
  import Video from '../Video/Video.svelte';

  import CrashMap from './demo/graphics/crash.svelte';
  import QuakeMap from './demo/graphics/quakemap.svelte';
</script>

{#snippet template(args)}
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <HeroHeadline {...args} />
{/snippet}

<Story
  name="Demo"
  args={{
    section: 'World News',
    hed: 'Reuters Graphics Interactive',
    dek: 'The beginning of a beautiful page',
    authors: ['Simon Scarr', 'Vijdan Mohammad Kawoosa'],
    publishTime: new Date('2022-03-04').toISOString(),
    img: polarImgSrc,
  }}
>
  {@render template({
    section: 'World News',
    hed: 'Reuters Graphics Interactive',
    dek: 'The beginning of a beautiful page',
    authors: ['Simon Scarr', 'Vijdan Mohammad Kawoosa'],
    publishTime: new Date('2022-03-04').toISOString(),
    img: polarImgSrc,
  })}
</Story>

<!-- 
<Story name="With transparent header">
  <div class="transparent-header">
    <Block width="fluid" class="chromatic-ignore">
      <SiteHeader />
    </Block>

    <HeroHeadline
      section="World News"
      hed="Reuters Graphics Interactive"
      dek="The beginning of a beautiful page"
      authors={['Simon Scarr', 'Vijdan Mohammad Kawoosa']}
      publishTime={new Date('2022-03-04').toISOString()}
      img={polarImgSrc}
    />
  </div>
</Story>

<Story name="With backdrop graphic">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <HeroHeadline
    hed={'Earthquake devastates Afghanistan'}
    hedSize={'big'}
    hedWidth="wide"
    class="custom-hero mb-0"
    dek=""
    authors={[
      'Anand Katakam',
      'Vijdan Mohammad Kawoosa',
      'Adolfo Arranz',
      'Wen Foo',
      'Simon Scarr',
      'Aman Bhargava',
      'Jitesh Chowdhury',
      'Manas Sharma',
      'Aditi Bhandari',
    ]}
    publishTime={new Date('2022-06-24').toISOString()}
  >
    <div slot="background">
      <GraphicBlock
        width="widest"
        role="figure"
        class="my-0"
        textWidth="normal"
        notes=""
        ariaDescription="Earthquake impact map"
      >
        <svelte:component this={QuakeMap} />
      </GraphicBlock>
    </div>
  </HeroHeadline>
  <style lang="scss">
    .hero-wrapper {
      .custom-hero.headline {
        // Adjust vertical positioning
        align-items: flex-end !important;

        @media (max-width: 1100px) {
          // Adjust line length of title
          max-width: var(--normal-column-width) !important;
        }
      }

      // Make hero smaller than 100vh
      --heroHeight: 85svh;

      @media (max-width: 960px) {
        --heroHeight: 65svh;
      }

      // For small height
      @media (max-height: 850px) {
        --heroHeight: 100svh;
      }

      // Custom hero sizing for landscape mobile
      @media (max-width: 960px) and (orientation: landscape) {
        --heroHeight: 200svh;
      }
    }

    // Override default fixed height for hero layout in embeds
    .hero-wrapper.embedded {
      --heroHeight: 1000px;
    }
  </style>
</Story>

<Story name="With backdrop video">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <HeroHeadline
    class="video-hero"
    hed="The conflict in Ethiopia"
    hedSize="bigger"
    hedWidth="wide"
    authors={['Aditi Bhandari ', 'David Lewis']}
    publishTime={new Date('2020-12-18').toISOString()}
  >
    <div slot="background">
      <Video
        width="widest"
        class="my-0"
        showControls={false}
        preloadVideo="auto"
        playVideoWhenInView={false}
        src="https://vm.reuters.tv/9c72e/titlef2ac(425954_R21MP41500).mp4"
        poster="https://www.reuters.com/resizer/vexYmtEuXKmfnsCbfS6jSMVbHms=/1080x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VKJHKJEENVO4DASDND3VLHPV5Y.jpg"
        notes="Drone footage from the Village 8 refugee camp in Sudan."
        ariaDescription="Aerial footage of people houses in refugee camp"
      />
    </div>
  </HeroHeadline>
  <style lang="scss">
    .hero-wrapper {
      --heroHeight: calc(100svh - 60px);
      .video-hero.headline {
        header {
          // Adjust vertical position as offset from default center
          top: calc(50svh - 250px);
        }

        h1 {
          color: #ffd430;
          text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
        }
      }
    }
  </style>
</Story>

<Story name="With inline photo">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <HeroHeadline
    hed={'Buried under the bricks'}
    hedWidth="wide"
    class="mb-0"
    dek={'How mud-brick housing made the Morocco earthquake so deadly'}
    section={'Global news'}
    authors={['Mariano Zafra']}
    publishTime={new Date('2020-01-01').toISOString()}
  >
    <div slot="inline">
      <FeaturePhoto
        width="widest"
        class="my-0"
        src="https://www.reuters.com/graphics/MOROCCO-QUAKE/CONSTRUCTION/xmpjlblojpr/cdn/images/opening.jpg"
        caption="Photo by REUTERS/Nacho Doce."
        altText="A photo of the town of Adassil, Morocco, showing severe damage to many houses, which have collapsed after the earthquake. The houses are all made of mud brick."
      />
    </div>
  </HeroHeadline>
</Story>

<Story name="With inline graphic">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <HeroHeadline
    hed={'The plunge from 29,000 feet'}
    hedWidth="wide"
    class="mb-0"
    dek={'How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes.'}
    section={'Global news'}
    authors={['Simon Scarr', 'Vijdan Mohammad Kawoosa']}
    publishTime={new Date('2020-01-01').toISOString()}
  >
    <div slot="inline">
      <GraphicBlock
        width="widest"
        role="img"
        class="my-0"
        textWidth="normal"
        notes="Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus"
        ariaDescription="Aerial map showing trajectory of crash"
      >
        <svelte:component this={CrashMap} />
      </GraphicBlock>
    </div>
  </HeroHeadline>
</Story>

<Story name="With inline video">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <HeroHeadline
    hed={'Devastation in Derna'}
    hedWidth="wide"
    class="mb-0"
    dek={'How raging floods burst dams, destroyed neighbourhoods and killed thousands in Libya'}
    section={'Global news'}
    authors={['Simon Scarr']}
    publishTime={new Date('2020-01-01').toISOString()}
  >
    <div slot="inline">
      <Video
        width="widest"
        class="my-0"
        showControls={false}
        preloadVideo="auto"
        playVideoWhenInView={false}
        src="https://www.reuters.com/graphics/LIBYA-STORM/EXPLAINER/klvyzqebzpg/cdn/video/drone.mp4"
        notes="Drone shots of Derna, Libya. September 14, 2023. REUTERS"
        ariaDescription="alttext fot video"
      />
    </div>
  </HeroHeadline>
</Story>

<Story name="With custom hed">
  <HeroHeadline
    class="custom-hed"
    authors={[
      'Prasanta Kumar Dutta',
      'Dea Bankova',
      'Aditi Bhandari',
      'Anurag Rao',
    ]}
    publishTime={new Date('2023-05-11').toISOString()}
    img={eurovisImgSrc}
  >
    <h1 slot="hed">
      <div class="body-note">A visual guide to</div>
      <div class="title text-6xl font-light tracking-widest">EUROVISION</div>
    </h1>
  </HeroHeadline>

  <style lang="scss">
    .custom-hed {
      h1 {
        .body-note {
          color: #ffffff;
        }
        .title {
          color: #ffffff;
          text-shadow: 1px 1px 8px #ff7c88;
          filter: drop-shadow(0px 0px 12px #ff7c88);
        }
      }
    }
  </style>
</Story> -->

<style lang="scss">
  .transparent-header {
    :global(.nav-container) {
      background-color: transparent !important;
    }
    :global(.nav-container .inner) {
      background-color: transparent !important;
      border: none;
    }

    :global(.hero-wrapper) {
      margin-top: -64px;
    }
  }
</style>
