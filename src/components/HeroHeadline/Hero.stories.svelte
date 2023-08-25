<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  // import backgroundImageDocs from './stories/docs/backgroundImage.md?raw';

  // @ts-ignore
  import polarImgSrc from './stories/polar.jpg';
  // import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';

  import HeroHeadline from './Hero.svelte';

  import {
    withComponentDocs,
    // withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      hedSize: {
        control: 'select',
        options: ['small', 'normal', 'big', 'bigger', 'biggest'],
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
  name="Default"
  args="{{
    section: 'World News',
    hed: 'Reuters Graphics Interactive',
    hedSize: 'normal',
    dek: 'The beginning of a beautiful page',
    authors: ['Simon Scarr', 'Vijdan Mohammad Kawoosa'],
    publishTime: new Date('2022-03-04').toISOString(),
    img: polarImgSrc,
  }}"
/>

<!-- <Story name="With inline media" {...withStoryDocs(backgroundImageDocs)}>
  <HeroHeadline
    hed="{'The plunge from 29,000 feet'}"
    dek="{'How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes.'}"
    section="{'Global news'}"
    authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
    publishTime="{new Date('2020-01-01').toISOString()}"
  />
</Story> -->
