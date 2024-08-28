<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import quickitDocs from './stories/docs/quickit.md?raw';
  // @ts-ignore raw
  import missingAltTextDocs from './stories/docs/missingAltText.md?raw';

  import FeaturePhoto from './FeaturePhoto.svelte';

  // @ts-ignore jpg
  import sharkSrc from './stories/shark.jpg';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      textWidth: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta
  title="Components/FeaturePhoto"
  component="{FeaturePhoto}"
  {...metaProps}
/>

<Template let:args>
  <FeaturePhoto {...args} />
</Template>

<Story
  name="Default"
  args="{{
    src: sharkSrc,
    altText: 'A shark!',
    width: 'normal',
    caption: 'Carcharodon carcharias - REUTERS',
  }}"
/>

<Story
  name="🚀 QUICKIT"
  args="{{
    src: sharkSrc,
    altText: 'A shark!',
    width: 'normal',
    caption: 'Carcharodon carcharias - REUTERS',
  }}"
  {...withStoryDocs(quickitDocs)}
/>

<Story
  name="Missing altText"
  args="{{
    src: sharkSrc,
    width: 'normal',
    caption: 'Carcharodon carcharias - REUTERS',
  }}"
  {...withStoryDocs(missingAltTextDocs)}
/>
