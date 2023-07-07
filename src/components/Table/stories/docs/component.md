Present structured data in a table. Consider making it interactive.

---

```html
<script>
  import { Table } from '@reuters-graphics/graphics-components';

  // Import your data as JSON, or otherwise structure it
  import yourData from './stories/homeRuns.json';
</script>

<table data="{yourData}" />
```
