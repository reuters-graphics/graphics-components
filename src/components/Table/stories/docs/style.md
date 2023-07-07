You can tailor the table's appearance by crafting CSS that targets specific elements.

Like other components, you can apply labels by providing the `id` of `cls` options, which allow you to make broad changes that remain limited to your element.

Each column has a `data-field` attribute that contains the field's name. Use it to apply different styles to different fields. One common use is setting different text alignments on different columns.

```html
<table
  id="{'custom-table'}"
  data="{yourData}"
  title="{'The Richest Women in the World'}"
  source="{'Source: Forbes'}"
/>

<style lang="scss">
  /* Here we right align the table's numeric column. */
  #custom-table {
    [data-field='Net worth (in billions)'] {
      text-align: right;
    }
  }
</style>
```
