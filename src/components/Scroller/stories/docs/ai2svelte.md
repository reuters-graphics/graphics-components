A more detailed example of using `Scroller` with graphics created by [ai2svelte](https://github.com/reuters-graphics/ai2svelte).

```svelte
<script>
  import { Scroller } from '@reuters-graphics/graphics-components';

  import MyAiMap1 from './ai2svelte/my-map-step-1.svelte';
  import MyAiMap2 from './ai2svelte/my-map-step-2.svelte';
  import MyAiMap3 from './ai2svelte/my-map-step-3.svelte';

  import { assets } from '$app/paths'; // If using with the Graphics Kit

  const steps = [
    { background: MyAiMap1, backgroundProps: { assetsPath: assets }, foreground: '#### Step 1\n\nLorem ipsum' },
    { background: MyAiMap2, backgroundProps: { assetsPath: assets }, foreground: '#### Step 2\n\nLorem ipsum' },
    { background: MyAiMap3, backgroundProps: { assetsPath: assets }, foreground: '#### Step 3\n\nLorem ipsum' },
  ]
</script>


<Scroller
  steps="{steps}"
  backgroundWidth="fluid"
  foregroundPosition="middle"
  stackBackground={true}
  embedded={false}
/>
```

When working with a Google doc, here's an example of how you can tie your text into your steps.

```yaml
# Google doc block
Type: scroller
ID: map-scrolly
Step1Text: #### Step 1

Lorem Ipsum
:end
Step2Text: #### Step 2

Lorem Ipsum
:end
Step3Text: #### Step 3

Lorem Ipsum
:end
```

```svelte
<!-- App.svelte -->
<script>
  // Previos imports and stuff...

  // This should be already imported for you.
  import content from '$locales/en/content.json';


  // Get the data for the block in content by its ID
  const scrollerBlock = content.blocks.find(block => block.ID === 'map-scrolly');

  // Now plug your text into your step foregrounds
  const steps = [
    { background: MyAiMap1, backgroundProps: { basePath: assets }, foreground: scrollerBlock.Step1Text },
    { background: MyAiMap2, backgroundProps: { basePath: assets }, foreground: scrollerBlock.Step2Text },
    { background: MyAiMap3, backgroundProps: { basePath: assets }, foreground: scrollerBlock.Step3Text },
  ]
</script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
    <!-- ... other blocks -->

  <!-- Copy/paste into your blocks loop! -->
  {:else if block.Type === 'scroller' && block.ID === 'map-scrolly'}
    <Scroller
      steps="{steps}"
      backgroundWidth="fluid"
      foregroundPosition="middle"
      stackBackground={true}
      embedded={false}
    />
  <!-- END copy/paste -->


  {/if}
{/each}
```
