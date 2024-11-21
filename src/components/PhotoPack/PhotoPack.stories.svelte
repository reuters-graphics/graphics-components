<script context="module" lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import archieMLDocs from './stories/docs/archieML.md?raw';
  // @ts-ignore raw
  import missingAltTextDocs from './stories/docs/missingAltText.md?raw';

  import PhotoPack from './PhotoPack.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Multimedia/PhotoPack',
    component: PhotoPack,
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

  const defaultImages = [
    {
      src: 'https://via.placeholder.com/1024x768.jpg',
      altText: 'alt text',
      caption:
        'A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin',
      maxHeight: 400,
    },
    {
      src: 'https://via.placeholder.com/1640x1180.jpg',
      altText: 'alt text',
      caption:
        'Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS',
    },
    {
      src: 'https://via.placeholder.com/1200x900.jpg',
      altText: 'alt text',
      caption:
        'People walk past the remains of a missile at a bus terminal in Kyiv, Ukraine March 4, 2022. REUTERS/Valentyn Ogirenko',
    },
    {
      src: 'https://via.placeholder.com/1024x768.jpg',
      altText: 'alt text',
      caption:
        'People walk past the remains of a missile at a bus terminal. REUTERS/Valentyn Ogirenko',
    },
  ];

  const defaultLayouts = [
    { breakpoint: 450, rows: [1, 2, 1] },
    { breakpoint: 750, rows: [1, 3] },
  ];

  const archieMLBlock = {
    type: 'photo-pack',
    id: 'my-photo-pack',
    class: 'mb-2',
    width: 'wide',
    textWidth: 'normal',
    gap: '15',
    images: [
      {
        src: 'https://via.placeholder.com/1024x768.jpg',
        altText: 'alt text',
        caption: 'Lorem ipsum. Reuters/Photog',
        maxHeight: 600,
      },
      {
        src: 'https://via.placeholder.com/1024x768.jpg',
        altText: 'alt text',
        caption: 'Lorem ipsum. Reuters/Photog',
      },
      {
        src: 'https://via.placeholder.com/1024x768.jpg',
        altText: 'alt text',
        caption: 'Lorem ipsum. Reuters/Photog',
      },
      {
        src: 'https://via.placeholder.com/1024x768.jpg',
        altText: 'alt text',
        caption: 'Lorem ipsum. Reuters/Photog',
      },
      {
        src: 'https://via.placeholder.com/1024x768.jpg',
        altText: 'alt text',
        caption: 'Lorem ipsum. Reuters/Photog',
      },
    ],
    layouts: [
      { breakpoint: 750, rows: [2, 3] },
      { breakpoint: 450, rows: [1, 2, 2] },
    ],
  };

  const altTextImages = [
    {
      src: 'https://via.placeholder.com/1024x768.jpg',
      altText: 'alt text',
      caption:
        'A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin',
      maxHeight: 400,
    },
    {
      src: 'https://via.placeholder.com/1640x1180.jpg',
      altText: '',
      caption:
        'Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS',
    },
  ];
  const altTextLayouts = [{ breakpoint: 450, rows: [2] }];
</script>

<Template let:args>
  <PhotoPack {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'wide',
    textWidth: 'normal',
    images: defaultImages,
    layouts: defaultLayouts,
  }}"
/>

<Story
  name="ArchieML"
  {...withStoryDocs(archieMLDocs)}
  args="{archieMLBlock}"
/>

<Story
  name="Missing altText"
  args="{{
    width: 'wide',
    textWidth: 'normal',
    images: altTextImages,
    layouts: altTextLayouts,
  }}"
  {...withStoryDocs(missingAltTextDocs)}
/>
