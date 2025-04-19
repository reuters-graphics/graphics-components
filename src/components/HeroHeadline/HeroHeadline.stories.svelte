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

<script lang="ts">
  import polarImgSrc from './demo/polar.jpg';
  import eurovisImgSrc from './demo/eurovis.jpeg';

  import Block from '../Block/Block.svelte';
  import SiteHeader from '../SiteHeader/SiteHeader.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import Video from '../Video/Video.svelte';

  import CrashMap from './demo/graphics/crash.svelte';
  import QuakeMap from './demo/graphics/quakemap.svelte';
</script>

<Story name="Photo hero" exportName="PhotoHero">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>
  <HeroHeadline
    section="World News"
    hed="Reuters Graphics Interactive"
    dek="The beginning of a beautiful page"
    authors={['Jane Doe', 'John Doe']}
    publishTime={new Date('2022-03-04').toISOString()}
    img={polarImgSrc}
    notes="Photo by REUTERS"
    ariaDescription="A photo of a polar bear"
  />
</Story>

<Story name="Transparent header" exportName="TransparentHeader">
  <div class="transparent-header">
    <Block width="fluid" class="chromatic-ignore">
      <SiteHeader />
    </Block>
    <HeroHeadline
      section="World News"
      hed="Reuters Graphics Interactive"
      dek="The beginning of a beautiful page"
      authors={['Jane Doe', 'John Doe']}
      publishTime={new Date('2022-03-04').toISOString()}
      img={polarImgSrc}
      ariaDescription="A photo of a polar bear"
    />
  </div>
</Story>

<Story name="Ai2svelte hero" exportName="Ai2svelteHero">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <HeroHeadline
    hed={'Earthquake devastates Afghanistan'}
    hedSize={'big'}
    hedWidth="wide"
    class="custom-hero mb-0"
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
    <GraphicBlock
      width="widest"
      role="figure"
      class="my-0"
      ariaDescription="Earthquake impact map"
    >
      <QuakeMap />
    </GraphicBlock>
  </HeroHeadline>
  <style lang="scss">
    .hero-wrapper {
      // Make hero shorter than 100vh
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

      .custom-hero.headline {
        // Adjust vertical positioning
        align-items: flex-end !important;

        @media (max-width: 1100px) {
          // Adjust line length of title
          max-width: var(--normal-column-width) !important;
        }
      }
    }

    // Override default fixed height for hero layout in embeds
    .hero-wrapper.embedded {
      --heroHeight: 1000px;
    }
  </style>
</Story>

<Story name="Video hero" exportName="VideoHero">
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

<Story name="Inline hero" exportName="InlineHero">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <!-- Set `stacked` to `false` -->
  <HeroHeadline
    stacked={false}
    section="Global news"
    hed="The plunge from 29,000 feet"
    dek="How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes."
    class="mb-0"
    authors={['Simon Scarr', 'Vijdan Mohammad Kawoosa']}
    publishTime={new Date('2020-01-01').toISOString()}
  >
    <GraphicBlock
      width="widest"
      role="figure"
      class="my-0"
      ariaDescription="Earthquake impact map"
      notes="Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus"
    >
      <CrashMap />
    </GraphicBlock>
  </HeroHeadline>
</Story>

<Story name="Custom hed" exportName="CustomHed">
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
    getAuthorPage={(author: string) => {
      return `mailto:${author.replace(' ', '')}@example.com`;
    }}
  >
    {#snippet hed()}
      <h1>
        <div class="body-note">A visual guide to</div>
        <div class="title text-6xl font-light tracking-widest">EUROVISION</div>
      </h1>
    {/snippet}

    {#snippet dek()}
      <div class="dek">
        <p>
          Performers from 37 countries are coming together May 9-13 in
          Liverpool, England, for the 67th annual Eurovision Song Contest. The
          winner gets the trophy and their country gets the right to host next
          year’s event, produced by the European Broadcasting Union (EBU).
        </p>
      </div>
    {/snippet}
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

      .dek {
        margin-top: 1rem;
        p {
          color: #ffffff;
          text-shadow: 1px 1px 8px #ff7c88;
          filter: drop-shadow(0px 0px 12px #ff7c88);
        }
      }
    }
  </style>
</Story>

<style lang="scss">
  .transparent-header {
    :global(.nav-container) {
      background-color: transparent !important;
    }
    :global(.nav-container .inner) {
      background-color: transparent !important;
      border: none !important;
    }

    :global(.hero-wrapper) {
      margin-top: -64px;
    }
  }
</style>
