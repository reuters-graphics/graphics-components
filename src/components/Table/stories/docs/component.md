Present structured data in a table. Consider making it interactive.

---

```svelte
<script>
  import { Table } from '@reuters-graphics/graphics-components';

  // Import your data as JSON, or otherwise structure it
  import yourData from './stories/homeRuns.json';
</script>

<Table data="{yourData}" />
```
