<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import archieMLDocs from './stories/docs/archieML.md?raw';
  // @ts-ignore raw
  import missingAltTextDocs from './stories/docs/missingAltText.md?raw';

  import FeaturePhoto from './FeaturePhoto.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Multimedia/FeaturePhoto',
    component: FeaturePhoto,
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

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore jpg
  import sharkSrc from './stories/shark.jpg';
</script>

<Template >
  {#snippet children({ args })}
    <FeaturePhoto {...args} />
  {/snippet}
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
  name="ArchieML"
  args="{{
    src: sharkSrc,
    altText: 'A shark!',
    width: 'normal',
    caption: 'Carcharodon carcharias - REUTERS',
  }}"
  {...withStoryDocs(archieMLDocs)}
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
