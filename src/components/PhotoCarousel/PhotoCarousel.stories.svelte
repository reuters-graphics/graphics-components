<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import customDocs from './stories/docs/withCustom.md?raw';

  import PhotoCarousel from './PhotoCarousel.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  import photosJson from './stories/photos.json';

  const photos = photosJson.map((p) => ({ ...p, altText: p.caption }));

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta
  title="Components/PhotoCarousel"
  component="{PhotoCarousel}"
  {...metaProps}
/>

<Template let:args>
  <PhotoCarousel {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'wider',
    photos,
  }}"
/>

<Story
  name="Custom credits and captions"
  args="{{
    width: 'wider',
    photos,
  }}"
  {...withStoryDocs(customDocs)}
>
  <PhotoCarousel
    {...{
      width: 'wider',
      photos,
    }}
  >
    <p class="custom-credit" slot="credit" let:credit>{credit}</p>
    <p class="custom-caption" slot="caption" let:caption>{caption}</p>
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
