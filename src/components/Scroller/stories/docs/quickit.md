For Graphics Kit users, the `Scroller` component is built-in for scrollytelling with [ai2svelte](https://github.com/reuters-graphics/ai2svelte) graphics and text.

First, import your ai2svelte graphics in `App.svelte` and add them to the `aiCharts` object;

```svelte
<!-- App.svelte -->
<script>
  // Other stuff...

  import AiMap1 from './ai2svelte/my-map-1.svelte';
  import AiMap2 from './ai2svelte/my-map-2.svelte';
  import AiMap3 from './ai2svelte/my-map-3.svelte';

  const aiCharts = {
    // Other charts...
    AiMap1,
    AiMap2,
    AiMap3,
  };
</script>
```

Then add the following structure to your Google Doc, taking care that the names of your charts in the `aiCharts` object match the names of your step backgrounds:

```yaml
# Google doc block
Type: ai-scroller
ID: my-map-scroller
Width: normal
ForegroundPosition: middle
StackBackground: true
[.Steps]
  Background: AiMap1
  Text: #### Step 1

  Lorem ipsum
  :end

  Background: AiMap2
  Text: #### Step 2

  Lorem ipsum
  :end

  Background: AiMap3
  Text: #### Step 3

  Lorem ipsum
  :end
[]

```
