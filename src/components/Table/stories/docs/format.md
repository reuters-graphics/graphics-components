Provide custom formatters by providing functions keyed to your field names to the `fieldFormatters` option. Columns are still sorted by the raw, underlying values. This can be used to provide the unit of measurement with numeric fields.

```svelte
<script lang="ts">
const fieldFormatters = {
 'Net worth (in billions)': (v) => '$' + v
};
</script>

<Table
  data={yourData}
  fieldFormatters={fieldFormatters},
  sortable=true,
  sortField='Score',
  sortDirection='descending',
  title='Press Freedom Index',
  notes='Source: <a href="https://en.wikipedia.org/wiki/Press_Freedom_Index">Reporters Without Borders</a>',
/>
```
