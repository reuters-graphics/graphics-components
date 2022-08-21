<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import moreDocs from './stories/docs/more.md?raw';

  import PhotoPack from './PhotoPack.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Components/PhotoPack',
    component: PhotoPack,
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      captionWidth: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };

  const defaultImages = [
    {
      row: 1,
      src: 'https://via.placeholder.com/1024x768.jpg',
      altText: 'alt text',
      caption: 'A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin',
      maxHeight: 400,
    },
    {
      row: 2,
      src: 'https://via.placeholder.com/1640x1180.jpg',
      altText: 'alt text',
      caption: 'Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS',
    },
    {
      row: 2,
      src: 'https://via.placeholder.com/1200x900.jpg',
      altText: 'alt text',
      caption: 'People walk past the remains of a missile at a bus terminal in Kyiv, Ukraine March 4, 2022. REUTERS/Valentyn Ogirenko',
    },
    {
      row: 2,
      src: 'https://via.placeholder.com/1024x768.jpg',
      altText: 'alt text',
      caption: 'People walk past the remains of a missile at a bus terminal. REUTERS/Valentyn Ogirenko',
    },
  ];

  const groupedImages = [
    {
      row: 1,
      src: 'https://via.placeholder.com/1024x768.jpg',
      altText: 'alt text',
      caption: 'A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin',
      maxHeight: 400,
    },
    {
      row: 2,
      group: 1,
      maxHeight: 300,
      src: 'https://via.placeholder.com/1640x1180.jpg',
      altText: 'alt text',
      caption: 'Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS',
    },
    {
      row: 2,
      group: 2,
      maxHeight: 300,
      src: 'https://via.placeholder.com/1200x900.jpg',
      altText: 'alt text',
      caption: 'People walk past the remains of a missile at a bus terminal in Kyiv, Ukraine March 4, 2022. REUTERS/Valentyn Ogirenko',
    },
    {
      row: 2,
      group: 2,
      maxHeight: 300,
      src: 'https://via.placeholder.com/1024x768.jpg',
      altText: 'alt text',
      caption: 'People walk past the remains of a missile at a bus terminal. REUTERS/Valentyn Ogirenko',
    },
  ];
</script>

<Meta {...meta} />

<Template let:args>
  <PhotoPack {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'wide',
    images: defaultImages,
    breakRows: 750,
  }}"
/>

<Story
  name="More settings"
  args="{{
    width: 'wide',
    images: groupedImages,
    breakRows: 750,
    breakGroups: 600,
  }}"
  {...withStoryDocs(moreDocs)}
/>