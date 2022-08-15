An example of using `GraphicBlock` in the Graphics Kit with an ai2svelte chart and a Google Doc.

```yaml
# Google doc block
Type: ai2svelte
ID: my-map
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

```svelte
<!-- App.svelte -->
<script>
  // Import the component ai2svelte made
  import MyMap from './ai2svelte/my-map.svelte';
  
  // These should be already imported for you.
  import { GraphicBlock } from '@reuters-graphics/graphics-components';
  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
</script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
    <!-- ... other blocks -->

  <!-- Copy/paste into your blocks loop! -->
  {:else if block.Type === 'ai2svelte' && block.ID === 'my-map'}
    <GraphicBlock
      width={block.Width}
      textWidth={block.TextWidth}
      title={block.Title}
      description={block.Description}
      notes={block.Notes}
      ariaDescription={block.Aria}
    >
      <MyMap basePath={assets} />
    </GraphicBlock>
  <!-- END copy/paste -->


  {/if}
{/each}
```

> **Note:** Unlike other components you may use in the Kit, ai2svelte graphics have to be added individually to `App.svelte` and the ai2svelte component for each graphic passed into its respective `GraphicBlock`. That's why each block in the Google Doc has an `ID` key.
