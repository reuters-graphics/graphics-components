A more detailed example of using `Scroller` with graphics created by [ai2svelte](https://github.com/reuters-graphics/ai2svelte).

```svelte
<script>
  import { Scroller } from '@reuters-graphics/graphics-components';

  import MyAiMap1 from './ai2svelte/my-map-step-1.svelte';
  import MyAiMap2 from './ai2svelte/my-map-step-2.svelte';
  import MyAiMap3 from './ai2svelte/my-map-step-3.svelte';

  import { assets } from '$app/paths'; // If using with the Graphics Kit

  const steps = [
    {
      background: MyAiMap1,
      backgroundProps: { assetsPath: assets },
      foreground: '#### Step 1\n\nLorem ipsum',
      altText: 'A map showing TKTK',
    },
    {
      background: MyAiMap2,
      backgroundProps: { assetsPath: assets },
      foreground: '#### Step 2\n\nLorem ipsum',
      altText: 'The same map now highlights something interesting.',
    },
    {
      background: MyAiMap3,
      backgroundProps: { assetsPath: assets },
      foreground: '#### Step 3\n\nLorem ipsum',
      altText: 'The same map now shows something else that is interesting.',
    },
  ];
</script>

<Scroller
  steps="{steps}"
  backgroundWidth="fluid"
  foregroundPosition="middle"
  stackBackground="{true}"
  embedded="{false}"
/>
```
