For Graphics Kit users, the `GraphicBlock` component is built-in to handle [ai2svelte](https://github.com/reuters-graphics/ai2svelte) graphics.

First, import your ai2svelte graphic in `App.svelte` and add it to the `aiCharts` object;

```svelte
<!-- App.svelte -->
<script>
  // Other stuff...

  import AiMap from './ai2svelte/my-map.svelte';

  const aiCharts = {
    // Other charts...
    AiMap,
  };
</script>
```

Then add the following structure to your Google Doc, taking care that the name of your chart in the `aiCharts` object matches the name of your `Chart`:

```yaml
# Google doc block
Type: ai-graphic
Chart: AiMap
Width: normal
TextWidth: normal
Title: Earthquake in Haiti
Description: The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021.
Notes: \Note: A shakemap represents the ground shaking produced by an earthquake.

\Source: USGIS
:end
Aria: A map that shows the shake intensity of the earthquake, which was worst in central Haiti.
:end
```
