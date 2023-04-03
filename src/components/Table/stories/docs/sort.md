Allow users to sort the table by setting the `sortable` input. Specify the starting order by setting `sortField` to a column name and `sortDirection` to `ascending` or `descending`.

```svelte
<Table
  data="{yourData}"
  sortable="{true}"
  sortField="{'Score'}"
  sortDirection="{'descending'}"
  title="{'Press Freedom Index'}"
  source="{'Source: Reporters Without Borders'}"
/>
```
