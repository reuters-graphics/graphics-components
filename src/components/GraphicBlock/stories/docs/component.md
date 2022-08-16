The `GraphicBlock` component is a special derivative of the [`Block`](./?path=/docs/layout-block) component that also handles text elements around a graphic.

Many other components use this one to wrap graphics with styled text. When you use it, you'll also wrap your chart elements or component with it like this:

---

```svelte
<script>
  import { GraphicBlock } from '@reuters-graphics/graphics-components';
</script>

<GraphicBlock
  width="normal"
  title="Title for my chart"
  description="Pork loin t-bone jowl prosciutto, short loin flank kevin tri-tip cupim pig pork. Meatloaf tri-tip frankfurter short ribs, cupim brisket bresaola chislic tail jerky burgdoggen pancetta."
  notes="Note: Data current as of Aug. 2, 2022.\n\nSource: [Google research](https://google.com)"
>
  <div id="my-chart"></div>
</GraphicBlock>
```
