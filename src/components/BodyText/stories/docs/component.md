The `BodyText` creates the main text of your page. You can pass the `text` prop a [markdown-formatted](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) string, which will be parsed into paragraphs, headers, lists, blockquotes or whatever else you need.

Use it like this:

```html
<script>
  import { BodyText } from '@reuters-graphics/graphics-components';

  const markdownText = `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`;
</script>

<BodyText text="{markdownText}" />
```

... or more commonly, you'll use it with a Google doc in the Graphics Kit like this:

```html
<script>
  import { BodyText } from '@reuters-graphics/graphics-components';

  import content from '$locales/en/content.json';
</script>

{#each content.blocks as block} {#if block.Type === 'text'}
<BodyText text="{block.Text}" />
{/if} {/each}
```
