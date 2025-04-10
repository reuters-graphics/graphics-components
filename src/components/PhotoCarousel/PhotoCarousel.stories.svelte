<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import customDocs from './stories/docs/withCustom.md?raw';

  import PhotoCarousel from './PhotoCarousel.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Multimedia/PhotoCarousel',
    component: PhotoCarousel,
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  import photosJson from './stories/photos.json';

  const photos = photosJson.map((p) => ({ ...p, altText: p.caption }));
</script>

<Template>
  {#snippet children({ args })}
    <PhotoCarousel {...args} />
  {/snippet}
</Template>

<Story
  name="Default"
  args={{
    width: 'wider',
    photos,
  }}
/>

<Story
  name="Custom credits and captions"
  args={{
    width: 'wider',
    photos,
  }}
  {...withStoryDocs(customDocs)}
>
  <PhotoCarousel
    {...{
      width: 'wider',
      photos,
    }}
  >
    {#snippet credit({ credit })}
      <p class="custom-credit">{credit}</p>
    {/snippet}
    {#snippet caption({ caption })}
      <p class="custom-caption">{caption}</p>
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
