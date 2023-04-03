Allow users to search the table by setting the optional `searchable` variable. Modify the default text that appears in the box by supplying the `searchPlaceholder` option.

```svelte
<Table
  data="{yourData},"
  searchable="{true},"
  paginated="{true},"
  title="{'Press Freedom Index'},"
  notes="{'Source: <a href="https://en.wikipedia.org/wiki/Press_Freedom_Index">Reporters Without Borders</a>'},"
/>
```
