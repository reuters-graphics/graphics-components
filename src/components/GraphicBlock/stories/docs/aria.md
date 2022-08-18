If your chart isn't easily read by screen readers — for example, it has annotations that when read without the visual won't make sense — you should add an `ariaDescription` that better describes the chart.

The `ariaDescription` string will be processed as markdown, so you can add multiple paragraphs, links, headers or whatever else you need in markdown.

> **Note:** When you set an `ariaDescription`, your graphic will be automatically wrapped in a div that tells screen readers not to read the text in the graphic, but instead read the hidden ARIA description.

```svelte
<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  ariaDescription="A map showing the shake intensity produced by the earthquake."
>
  <MyAiMap assetsPath={assets} />
</GraphicBlock>
```

Sometimes, instead of a simple ARIA description for graphics, we want to also provide a data table or something else that requires more complex markup.

You can add custom markup for screen readers only by using the `aria` named slot.

> **Note:** The `aria` slot will override the `ariaDescription` and will also hide the text in your graphic from screen readers.

```svelte
<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
>
  <MyAiMap basePath={assets} />
  <div slot="aria">
    <p>A shakemap shows the intensity of the 7.2-magnitude earthquake that struck Haiti at 8:29 a.m. EST, Aug. 14, 2021.</p>
    <table>
      <tr>
        <th>City</th>
        <th>Felt shake strength</th>
      </tr>
      <tr>
        <td>Les Cayes</td>
        <td>Very strong</td>
      </tr>
      <tr>
        <td>Jeremie</td>
        <td>Strong</td>
      </tr>
    </table>
  </div>
</GraphicBlock>
```

[Read this](https://accessibility.psu.edu/images/charts/) for more information on using screen reader data tables for charts.
