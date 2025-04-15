<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FeaturePhoto from './FeaturePhoto.svelte';

  const { Story } = defineMeta({
    title: 'Components/Multimedia/FeaturePhoto',
    component: FeaturePhoto,
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
  import sharkSrc from './images/shark.jpg';
</script>

<Story
  name="Demo"
  args={{
    src: sharkSrc,
    altText: 'A shark!',
    caption: 'Carcharodon carcharias - REUTERS',
  }}
/>

<Story
  name="Missing altText"
  exportName="MissingAltText"
  args={{
    src: sharkSrc,
    caption: 'Carcharodon carcharias - REUTERS',
  }}
/>
