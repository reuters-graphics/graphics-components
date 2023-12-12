Format column values by supplying functions keyed to field names with the `fieldFormatters` option. Columns are still sorted using the raw, underlying values.

Among other things, this feature can be used to provide a unit of measurement with numeric fields.

```svelte
<script lang="ts">
  const fieldFormatters = {
    'Net worth (in billions)': (v) => '$' + v.toFixed(1),
  };
</script>

<table
  data="{yourData}"
  fieldFormatters="{fieldFormatters}"
  sortable="{true}"
  sortField="{'Score'}"
  sortDirection="{'descending'}"
  title="{'The Richest Women in the World'}"
  source="{'Source: Forbes'}"
></table>
```
