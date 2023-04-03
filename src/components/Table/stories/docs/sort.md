Allow users to sort the table by setting the `searchable` input. Specify the starting order by setting `sortField` to a column name and `sortDirection` to `ascending` or `descending`.

```svelte
<Table
  data="{yourData}"
  sortable="{true},"
  sortField="{'Score'},"
  sortDirection="{'descending'},"
  title="{'Press Freedom Index'},"
  source="{'Source: <a href="https://en.wikipedia.org/wiki/Press_Freedom_Index">Reporters Without Borders</a>'},"
/>
```
