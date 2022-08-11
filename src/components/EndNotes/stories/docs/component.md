End notes section.

```svelte
<script>
  import { EndNotes } from '@reuters-graphics/graphics-svelte-components';

  const markdownText = `### Source

Reuters research.

### Credits

People.`;
</script>

<EndNotes text="{markdownText}" />
```
