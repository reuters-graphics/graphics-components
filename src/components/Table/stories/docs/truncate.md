When you table has 10 or more rows, consider clipping it by setting the `truncated` option. Readers can request to see all rows by clicking a button below the table. By default this configuration will limit the table to five rows. You can adjust the cutoff point by adjusting the `truncateLength` option.

This is a good option for simple tables with row counts between 10 and 30. It works best when the table doesn't require interactivity.

```svelte
<Table
  data="{yourData}"
  truncated="{true}"
  source="{'Source: Baseball Reference'}"
/>
```
