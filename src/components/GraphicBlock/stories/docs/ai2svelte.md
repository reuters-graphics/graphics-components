You can use `GraphicBlock` with components created by [ai2svelte](https://github.com/reuters-graphics/ai2svelte).

```svelte
<script>
  import { GraphicBlock } from '@reuters-graphics/graphics-components';
  import MyAiMap from './ai2svelte/my-map.svelte';
  import { assets } from '$app/paths'; // If using with the Graphics Kit
</script>

<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  ariaDescription="A map showing shake intensity of the quake."
>
  <MyAiMap basePath={assets} />
</GraphicBlock>
```
