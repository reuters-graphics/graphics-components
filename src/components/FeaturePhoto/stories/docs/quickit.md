An example of using `FeaturePhoto` in the Graphics Kit with a Google Doc.

```yaml
# Google doc block
Type: photo
Width: normal
Src: images/shark.jpg
AltText: The king of the sea
Caption: Carcharodon carcharias - REUTERS
```

```svelte
<!-- App.svelte -->
<script>
  // Add FeaturePhoto to imports from graphics-components
  import { FeaturePhoto } from '@reuters-graphics/graphics-components';

  // These should be already imported for you.
  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
</script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
    <!-- ... other blocks -->

    <!-- Copy/paste into your blocks loop! -->
  {:else if block.Type === 'photo'}
    <FeaturePhoto
      width="{block.Width}"
      src="{`${assets}/${block.Src}`}"
      altText="{block.AltText}"
      caption="{block.Caption}"
    />
    <!-- END copy/paste -->
  {/if}
{/each}
```
