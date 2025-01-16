<script module lang="ts">
    import { defineMeta } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import archieMLDocs from './stories/docs/archieML.md?raw';
  // @ts-ignore raw
  import missingAltTextDocs from './stories/docs/missingAltText.md?raw';

  import FeaturePhoto from './FeaturePhoto.svelte';

  // import {
  //   withComponentDocs,
  //   withStoryDocs,
  // } from '$lib/docs/utils/withParams.js';


  const { Story } = defineMeta({
    title: 'Components/Multimedia/FeaturePhoto',
    component: FeaturePhoto,
    // ...withComponentDocs(componentDocs),
    tags: ['autodocs'],
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
  });
</script>

<script>
  // @ts-ignore jpg
  import sharkSrc from './stories/shark.jpg';
</script>


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
/>
<!-- {...withStoryDocs(archieMLDocs)} -->

<Story
  name="Missing altText"
  args="{{
    src: sharkSrc,
    width: 'normal',
    caption: 'Carcharodon carcharias - REUTERS',
  }}"
/>
<!-- {...withStoryDocs(missingAltTextDocs)} -->
