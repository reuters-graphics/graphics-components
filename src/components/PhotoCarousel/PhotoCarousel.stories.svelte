<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PhotoCarousel from './PhotoCarousel.svelte';

  const { Story } = defineMeta({
    title: 'Components/Multimedia/PhotoCarousel',
    component: PhotoCarousel,
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  });
</script>

<script>
  import imagesJson from './demo/images.json';

  const images = imagesJson.map((img) => ({ ...img, altText: img.caption }));
</script>

<Story
  name="Demo"
  args={{
    images,
  }}
/>

<Story name="Custom text" exportName="CustomText">
  <PhotoCarousel {images}>
    {#snippet credit(image)}
      <p class="custom-credit">{image.credit}</p>
    {/snippet}
    {#snippet caption(image)}
      <p class="custom-caption">{image.caption}</p>
    {/snippet}
  </PhotoCarousel>
</Story>

<style lang="scss">
  p {
    position: absolute;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    font-family: sans-serif;
    font-size: 0.8rem;
    padding: 0 5px;
    &.custom-credit {
      top: 0;
      right: 0;
    }
    &.custom-caption {
      bottom: 5px;
      left: 0;
    }
  }
</style>
