Allow users to filter the table by providing one of the attributes as the `filterField`. This works best with categorical columns.

```svelte
<Table
  data={yourData},
  filterField='Region',
  title='Press Freedom Index',
  notes='Source: <a href="https://en.wikipedia.org/wiki/Press_Freedom_Index">Reporters Without Borders</a>',
/>
```
