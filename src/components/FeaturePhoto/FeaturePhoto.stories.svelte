<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import missingAltTextDocs from './stories/docs/missingAltText.md?raw';

  import FeaturePhoto from './FeaturePhoto.svelte';

  // @ts-ignore
  import sharkSrc from './stories/shark.jpg';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/FeaturePhoto',
    component: FeaturePhoto,
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    }
  };
</script>

<Meta {...meta} />

<Template let:args>
  <FeaturePhoto {...args} />
</Template>

<Story
  name="Default"
  args={{
    src: sharkSrc,
    altText: 'A shark!',
    width: 'normal',
    caption: 'Carcharodon carcharias - REUTERS'
  }}
/>

<Story
  name="Missing altText"
  args={{
    src: sharkSrc,
    width: 'normal',
    caption: 'Carcharodon carcharias - REUTERS'
  }}
  {...withStoryDocs(missingAltTextDocs)}
/>
