When your table has lots of rows you should consider breaking it up into pages. This can be done by setting the `paginated` option.

When it is enabled, readers can leaf through the data using a set of buttons below the table. By default there are 25 records per page. You can change the number by adjusting the `pageSize` option.

This is a good option when publishing large tables for readers to explore. It works well with interactive features like searching and filters.

```svelte
<table
  data="{yourData}"
  paginated="{true}"
  title="{'Press Freedom Index'}"
  source="{'Reporters Without Borders'}"
></table>
```
