Allow users to sort the table by setting the `sortable` input. Specify the starting order by setting `sortField` to a column name and `sortDirection` to `ascending` or `descending`.

By default, all fields are sortable. If you'd like to limit the columns where sorting is allowed, provide a list to the `sortableFields` option.

```html
<table
  data="{yourData}"
  sortable="{true}"
  sortField="{'Score'}"
  sortDirection="{'descending'}"
  title="{'Press Freedom Index'}"
  source="{'Source: Reporters Without Borders'}"
/>
```
