Body text includes the main text of your page.

```svelte
<script>
  import { BodyText } from '@reuters-graphics/graphics-components';

  const markdownText = `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`;
</script>

<BodyText text="{markdownText}" />
```

```svelte
<script>
  import { BodyText } from '@reuters-graphics/graphics-components';

  import content from '$locales/en/content.json';
</script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
    <BodyText text="{block.Text}" />
  {/if}
{/each}


```
