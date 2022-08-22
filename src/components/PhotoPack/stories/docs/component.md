The `PhotoPack` component makes simple photo grids with custom layouts at whatever breakpoint you need.

```svelte
<script>
  import { PhotoPack } from '@reuters-graphics/graphics-svelte-components';

  const images = [
    {
      src: 'https://...',
      altText: 'Alt text',
      caption: 'Lorem ipsum. REUTERS/Photog',
      // Optional max-height of image across all layouts
      maxHeight: 800,
    },
    // ...
  ];

  const layouts = [
    {
      // Breakpoint above which this layout applies
      breakpoint: 450,
      // Number of photos in each row of this layout, adding up to the total number of images
      rows: [1, 2, 1],
    },
    { breakpoint: 750, rows: [1, 3] },
  ];
</script>

<PhotoPack images="{images}" layouts="{layouts}" />
```
