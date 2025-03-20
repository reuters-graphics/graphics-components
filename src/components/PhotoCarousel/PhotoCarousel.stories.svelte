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
  import photosJson from './demo/photos.json';
  // import { PhotoCarouselImage } from '../@types/global';

  const photos = photosJson.map((p) => ({ ...p, altText: p.caption }));
</script>

<Story
  name="Demo"
  args={{
    photos,
  }}
/>

<Story name="Custom text" exportName="CustomText">
  <PhotoCarousel {photos}>
    {#snippet credit(photo)}
      <p class="custom-credit">{photo.credit}</p>
    {/snippet}
    {#snippet caption(photo)}
      <p class="custom-caption">{photo.caption}</p>
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
