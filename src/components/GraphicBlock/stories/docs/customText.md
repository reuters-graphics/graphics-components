You can override the markup used to generate the chart text elements by using the `title` and/or `notes` named slots like this:

```svelte
<GraphicBlock
  width="normal"
  notes={"Note: Data current as of Aug. 2, 2022.\n\nSource: [Google research](https://google.com)"}
>
  <h5 slot="title">My smaller title</h5>
  <div id="my-chart" />
</GraphicBlock>
```
