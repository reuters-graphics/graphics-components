A simple, clean text timeline.

```svelte
<script>
  import { SimpleTimeline } from '@reuters-graphics/graphics-components';

  const dates = [
    {
      date: 'May 18',
      events: [
        {
          title: 'A title for the event',
          titleLink: 'https://...', // optional
          context: 'Lorem ipsum...', // optional
        },
        // More events...
      ],
    },
    // More dates...
  ];
</script>

<SimpleTimeline dates="{dates}" />
```
