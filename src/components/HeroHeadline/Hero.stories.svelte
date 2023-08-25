<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import backgroundGraphicDocs from './stories/docs/backgroundGraphic.md?raw';
  // @ts-ignore
  import inlineGraphicDocs from './stories/docs/inlineGraphic.md?raw';

  // @ts-ignore
  import polarImgSrc from './stories/polar.jpg';

  import HeroHeadline from './Hero.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';

  import CrashMap from './stories/graphics/crash.svelte';
  import QuakeMap from './stories/graphics/quakemap.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      hedSize: {
        control: 'select',
        options: ['small', 'normal', 'big', 'bigger', 'biggest'],
      },
      hedWidth: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest'],
      },
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest'],
      },
    },
  };
</script>

<Meta
  title="Components/HeroHeadline"
  component="{HeroHeadline}"
  {...metaProps}
/>

<Template let:args>
  <HeroHeadline {...args} />
</Template>

<Story
  name="With backdrop photo"
  args="{{
    section: 'World News',
    hed: 'Reuters Graphics Interactive',
    dek: 'The beginning of a beautiful page',
    authors: ['Simon Scarr', 'Vijdan Mohammad Kawoosa'],
    publishTime: new Date('2022-03-04').toISOString(),
    img: polarImgSrc,
  }}"
/>

<Story name="With backdrop graphic" {...withStoryDocs(backgroundGraphicDocs)}>
  <HeroHeadline
    hed="{'Earthquake devastates Afghanistan'}"
    hedSize="{'big'}"
    hedWidth="wide"
    class="mb-0"
    dek=""
    authors="{[
      'Anand Katakam',
      'Vijdan Mohammad Kawoosa',
      'Adolfo Arranz',
      'Wen Foo',
      'Simon Scarr',
      'Aman Bhargava',
      'Jitesh Chowdhury',
      'Manas Sharma',
      'Aditi Bhandari',
    ]}"
    publishTime="{new Date('2022-06-24').toISOString()}"
  >
    <div slot="background">
      <GraphicBlock
        width="fluid"
        role="figure"
        class="my-0"
        textWidth="normal"
        notes=""
        ariaDescription="Earthquake impact map"
      >
        <svelte:component this="{QuakeMap}" />
      </GraphicBlock>
    </div>
  </HeroHeadline>
  <style lang="scss">
    .hero-headline .headline {
      align-items: flex-end;

      @media (max-width: 1100px) {
        max-width: var(--normal-column-width) !important;
      }
    }

    .hero-wrapper {
      // Make hero smaller than 100vh
      --heroHeight: 85svh;

      @media (max-width: 960px) {
        --heroHeight: 65svh;
      }

      // Custom hero sizing for landscape mobile
      @media (max-width: 960px) and (orientation: landscape) {
        --heroHeight: 200svh;
      }
    }
  </style>
</Story>

<Story name="With inline graphic" {...withStoryDocs(inlineGraphicDocs)}>
  <HeroHeadline
    hed="{'The plunge from 29,000 feet'}"
    hedWidth="wide"
    class="mb-0"
    dek="{'How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes.'}"
    section="{'Global news'}"
    authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
    publishTime="{new Date('2020-01-01').toISOString()}"
  >
    <div slot="inline">
      <GraphicBlock
        width="fluid"
        role="figure"
        class="my-0"
        textWidth="normal"
        notes="Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus"
        ariaDescription="Aerial map showing trajectory of crash"
      >
        <svelte:component this="{CrashMap}" />
      </GraphicBlock>
    </div>
  </HeroHeadline>
</Story>
