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

Then add the following structure to your ArchieML Doc, taking care that the names of your charts in the `aiCharts` object match the names of your step backgrounds:

```yaml
[blocks]
# ...

type: ai-scroller
id: my-map-scroller
width: normal
foregroundPosition: middle
stackBackground: true
[.steps]
  background: AiMap1
  text: #### Step 1

  Lorem ipsum
  :end
  altText: A map showing the Upper West side in New York City.

  Can add paragraphs of alt text if you want to break up sentences.
  :end

  background: AiMap2
  text: #### Step 2

  Lorem ipsum
  :end
  altText: The same map now highlights 98th Street.
  :end

  background: AiMap3
  text: #### Step 3

  Lorem ipsum
  :end
  altText: The same map now highlights three locations near 98th Street where something particulary important happened.
  :end
[]

# ...
[]
```

```svelte
<!-- App.svelte -->
{#each content.blocks as block}
  {#if block.type === 'text'}
  <!-- ... -->
  
  {:else if block.type === 'ai-scroller'}
      <Scroller
        id="{block.id}"
        backgroundWidth="{block.width}"
        foregroundPosition="{block.foregroundPosition}"
        stackBackground="{block.stackBackground === 'true'}"
        steps="{block.steps.map((step) => ({
          background: aiCharts[step.background],
          backgroundProps: assets || '/',
          foreground: step.text,
          altText: step.altText,
        }))}"
      />
  
  <!-- ... -->
  {/if}
{/each}
```