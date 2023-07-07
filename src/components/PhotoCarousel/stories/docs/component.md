A simple, accessible photo carousel with lazy-loading and mobile swipe built in.

```html
<script>
  import { PhotoCarousel } from '@reuters-graphics/graphics-components';

  const photos = [
    {
      src: 'https://.../myImage.jpg',
      altText: 'A picture of...',
      caption: 'My caption...', // Optional
      credit: 'REUTERS/Jane Doe', // Optional
      objectFit: 'contain', // Optional
      objectPosition: '50% 50%', // Optional
    },
    // ...
  ];
</script>

<PhotoCarousel photos="{photos}" />
```
