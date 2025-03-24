<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PhotoPack from './PhotoPack.svelte';

  const { Story } = defineMeta({
    title: 'Components/Multimedia/PhotoPack',
    component: PhotoPack,
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
  const defaultImages = [
    {
      src: 'https://graphics.thomsonreuters.com/cdn/django-tools/media/graphics-gallery/galleries/world-cup-2022/spain-germany-11-27/2022-11-27T194630Z_544493697_UP1E.jpeg',
      caption:
        "Spain's Sergio Busquets and Aymeric Laporte react before a Germany goal is disallowed following a VAR review.",
      altText: 'alt text',
    },
    {
      src: 'https://graphics.thomsonreuters.com/cdn/django-tools/media/graphics-gallery/galleries/world-cup-2022/spain-germany-11-27/2022-11-27T194619Z_2007900040_UP1.jpeg',
      caption:
        "Spain's Sergio Busquets fouls Germany's Jamal Musiala before being shown yellow card.",
      altText: 'alt text',
    },
    {
      src: 'https://graphics.thomsonreuters.com/cdn/django-tools/media/graphics-gallery/galleries/world-cup-2022/spain-germany-11-27/2022-11-27T194619Z_635809122_UP1E.jpeg',
      caption:
        "Spain's Sergio Busquets is shown a yellow card by referee Danny Desmond Makkelie.",
      altText: 'alt text',
    },
    {
      src: 'https://graphics.thomsonreuters.com/cdn/django-tools/media/graphics-gallery/galleries/world-cup-2022/spain-germany-11-27/2022-11-27T191015Z_1293757566_UP1.jpeg',
      caption:
        "Spain's Sergio Busquets in action with Germany's Thomas Muller.",
      altText: 'alt text',
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
    images: defaultImages,
    layouts: [
      { breakpoint: 750, rows: [2, 3] },
      { breakpoint: 450, rows: [1, 2, 2] },
    ],
  };

  const altTextImages = [
    {
      altText: 'alt text',
      src: 'https://via.placeholder.com/1024x768.jpg',
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

<Story
  name="Demo"
  args={{
    width: 'wide',
    textWidth: 'normal',
    images: defaultImages,
    layouts: defaultLayouts,
  }}
/>

<Story
  name="Missing altText"
  exportName="MissingAltText"
  args={{
    width: 'wide',
    textWidth: 'normal',
    images: altTextImages,
    layouts: altTextLayouts,
  }}
/>
