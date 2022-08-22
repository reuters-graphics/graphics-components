<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import quickitDocs from './stories/docs/quickit.md?raw';
  // @ts-ignore
  import missingAltTextDocs from './stories/docs/missingAltText.md?raw';

  import PhotoPack from './PhotoPack.svelte';
  import { getPhotoPackPropsFromDoc } from './docProps';

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

  const quickItBlock = {
    Type: 'photo-pack',
    ID: 'my-photo-pack',
    Class: 'mb-2',
    Width: 'wide',
    CaptionWidth: 'normal',
    Gap: '10',
    Images: [
      {
        Src: 'https://via.placeholder.com/1024x768.jpg',
        AltText: 'alt text',
        Caption: 'Lorem ipsum. Reuters/Photog',
        MaxHeight: '600',
      },
      {
        Src: 'https://via.placeholder.com/1024x768.jpg',
        AltText: 'alt text',
        Caption: 'Lorem ipsum. Reuters/Photog',
      },
      {
        Src: 'https://via.placeholder.com/1024x768.jpg',
        AltText: 'alt text',
        Caption: 'Lorem ipsum. Reuters/Photog',
      },
      {
        Src: 'https://via.placeholder.com/1024x768.jpg',
        AltText: 'alt text',
        Caption: 'Lorem ipsum. Reuters/Photog',
      },
      {
        Src: 'https://via.placeholder.com/1024x768.jpg',
        AltText: 'alt text',
        Caption: 'Lorem ipsum. Reuters/Photog',
      },
    ],
    Layouts: [
      { Breakpoint: '750', Rows: '2,3' },
      { Breakpoint: '450', Rows: '1, 2, 2' },
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

<Meta {...meta} />

<Template let:args>
  <PhotoPack {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'wide',
    captionWidth: 'normal',
    images: defaultImages,
    layouts: defaultLayouts,
  }}"
/>

<Story
  name="🚀 QUICKIT"
  {...withStoryDocs(quickitDocs)}
  args="{getPhotoPackPropsFromDoc(quickItBlock)}"
/>

<Story
  name="Mising altText"
  args="{{
    width: 'wide',
    captionWidth: 'normal',
    images: altTextImages,
    layouts: altTextLayouts,
  }}"
  {...withStoryDocs(missingAltTextDocs)}
/>
