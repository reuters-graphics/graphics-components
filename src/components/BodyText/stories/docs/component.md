Parse mardown-formatted text.

```svelte
<script>
  import { BodyText } from '@reuters-graphics/graphics-svelte-components';

  const markdownText = `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`;
</script>

<BodyText text="{markdownText}" />
```
