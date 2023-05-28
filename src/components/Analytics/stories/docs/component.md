Add Google and Chartbeat analytics to your page.

```svelte
<script>
  import { Analytics } from '@reuters-graphics/graphics-components';

  const authors = [{ name: 'Jane Doe' }, { name: 'John Doe' }];
</script>

<Analytics authors="{authors}" />
```
