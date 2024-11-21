```yaml
[blocks]

type: photo
width: normal
src: images/shark.jpg
altText: The king of the sea
caption: Carcharodon carcharias - REUTERS

[]
```

```svelte
<!-- App.svelte -->
<script>
  import { FeaturePhoto } from '@reuters-graphics/graphics-components';

  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
</script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
  <!-- ... -->

  {:else if block.type === 'photo'}
    <FeaturePhoto
      width="{block.width}"
      src="{`${assets}/${block.src}`}"
      altText="{block.altText}"
      caption="{block.caption}"
    />

  <!-- ... -->
  {/if}
{/each}
```
