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

When working with a ArchieML doc, here's an example of how you can tie your text into your steps.

```yaml
# Google doc block
Type: scroller
ID: map-scrolly
Step1Text: #### Step 1

Lorem Ipsum
:end
AltText1: A map showing the Upper West side in New York City.
:end

Step2Text: #### Step 2

Lorem Ipsum
:end
AltText2: The same map now highlights 98th Street.
:end

Step3Text: #### Step 3

Lorem Ipsum
:end
AltText3: The same map now highlights three locations near 98th Street where something particulary important happened.
:end
```

```svelte
<!-- App.svelte -->
<script>
  // Previos imports and stuff...

  // This should be already imported for you.
  import content from '$locales/en/content.json';

  // Get the data for the block in content by its ID
  const scrollerBlock = content.blocks.find(
    (block) => block.ID === 'map-scrolly'
  );

  // Now plug your text into your step foregrounds
  const steps = [
    {
      background: MyAiMap1,
      backgroundProps: { basePath: assets },
      foreground: scrollerBlock.Step1Text,
      altText: scrollerBlock.AltText1,
    },
    {
      background: MyAiMap2,
      backgroundProps: { basePath: assets },
      foreground: scrollerBlock.Step2Text,
      altText: scrollerBlock.AltText2,
    },
    {
      background: MyAiMap3,
      backgroundProps: { basePath: assets },
      foreground: scrollerBlock.Step3Text,
      altText: scrollerBlock.AltText3,
    },
  ];
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
      stackBackground="{true}"
      embedded="{false}"
    />
    <!-- END copy/paste -->
  {/if}
{/each}
```
