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

<script lang="ts">
  import type { ComponentProps } from 'svelte';

  type SmartDefaultsArgs = Omit<ComponentProps<typeof PhotoPack>, 'images'> & {
    imageCount: number;
  };

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

  const allImages = [
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
    {
      src: 'https://graphics.thomsonreuters.com/cdn/django-tools/media/graphics-gallery/galleries/world-cup-2022/spain-germany-11-27/2022-11-27T203612Z_1399473226_UP1.jpeg',
      caption: "Spain's Alvaro Morata celebrates scoring their first goal.",
      altText: 'alt text',
    },
  ];
  const archieMLBlock = {
    id: 'my-photo-pack',
    class: 'mb-2',
    width: 'wide' as const,
    textWidth: 'normal' as const,
    gap: Number('15'),
    images: allImages.slice(0, 5),
    layouts: [
      { breakpoint: 750, rows: [2, 3] },
      { breakpoint: 450, rows: [1, 2, 2] },
    ],
  };
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
<Story name="ArchieML" args={archieMLBlock} />

<Story
  name="Smart layouts"
  args={{
    width: 'wide',
    textWidth: 'normal',
    // @ts-expect-error - imageCount is a custom arg for this story's template
    imageCount: 4,
  }}
  argTypes={{
    // @ts-expect-error - imageCount is a custom arg for this story's template
    imageCount: {
      control: { type: 'range', min: 2, max: 5, step: 1 },
      description:
        'Number of images to display (demonstrates smart default layouts)',
    },
  }}
>
  {#snippet children(args)}
    {@const { imageCount, ...photoPackProps } = args as SmartDefaultsArgs}
    <PhotoPack
      {...photoPackProps}
      images={allImages.slice(0, imageCount || 4)}
    />
  {/snippet}
</Story>
