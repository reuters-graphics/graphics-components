The `PhotoPack` component makes simple photo grids with custom layouts at whatever breakpoint you need.

```svelte
<script>
  import { PhotoPack } from '@reuters-graphics/graphics-components';

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

`images` are defined with their src, alt text, captions and an optional `maxHeight`, which makes sure the image is no taller than that height in pixels in any layout.

`layouts` describe how those images will be laid out in rows at different breakpoints. The default layout (mobile-first) is each photo on its own row, stacked vertically, but you can group photos into `rows` above a `breakpoint` by specifying the number of photos that should go in that row. For example:

```javascript
const layouts = [{
  breakpoint: 450,
  rows: [1,2,1],
}];
```

... tells the component that when the `PhotoPack` container is 450 pixels or wider, it should group the 4 photos in 3 rows, 1 in the first, 2 in the second and 1 in the last.

You can define as many layouts for as many images as you like.
