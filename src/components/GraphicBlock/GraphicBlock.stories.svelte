<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import quickitDocs from './stories/docs/quickit.md?raw';
  // @ts-ignore
  import customTextDocs from './stories/docs/customText.md?raw';
  // @ts-ignore
  import ai2svelteDocs from './stories/docs/ai2svelte.md?raw';
  // @ts-ignore
  import ariaDocs from './stories/docs/aria.md?raw';

  import GraphicBlock from './GraphicBlock.svelte';

  import AiMap from './stories/ai2svelte/ai-chart.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  // @ts-ignore
  import PlaceholderImg from './stories/placeholder.png';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      textWidth: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta
  title="Components/GraphicBlock"
  component="{GraphicBlock}"
  {...metaProps}
/>

<Template let:args>
  <GraphicBlock {...args}>
    <div class="demo-graphic">
      <img src="{PlaceholderImg}" alt="placeholder" />
    </div>
  </GraphicBlock>
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
    title: 'Bacon ipsum dolor amet t-bone',
    description:
      'Pork loin t-bone jowl prosciutto, short loin flank kevin tri-tip cupim pig pork. Meatloaf tri-tip frankfurter short ribs, cupim brisket bresaola chislic tail jerky burgdoggen pancetta.',
    notes:
      'Note: Data current as of Aug. 2, 2022.\n\nSource: [Google research](https://google.com)',
  }}"
/>

<Story name="🚀 QUICKIT" {...withStoryDocs(quickitDocs)}>
  <GraphicBlock
    width="normal"
    title="Earthquake in Haiti"
    description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
    notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  >
    <AiMap />
  </GraphicBlock>
</Story>

<Story name="Custom text" {...withStoryDocs(customTextDocs)}>
  <GraphicBlock width="normal">
    <div slot="title">
      <h5>My smaller title</h5>
    </div>
    <div class="demo-graphic">
      <img src="{PlaceholderImg}" alt="placeholder" />
    </div>
    <aside slot="notes">
      <p><strong>Note:</strong> Data current as of Aug. 2, 2022.</p>
    </aside>
  </GraphicBlock>
</Story>

<Story name="Ai2svelte" {...withStoryDocs(ai2svelteDocs)}>
  <GraphicBlock
    width="normal"
    title="Earthquake in Haiti"
    description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
    notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  >
    <AiMap />
  </GraphicBlock>
</Story>

<Story name="ARIA" {...withStoryDocs(ariaDocs)}>
  <GraphicBlock
    width="normal"
    title="Earthquake in Haiti"
    description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
    notes="Note: A shakemap represents the ground shaking produced by an earthquake."
    ariaDescription="A map showing the shake intensity produced by the earthquake."
  >
    <AiMap />
  </GraphicBlock>
</Story>

<style lang="scss">
  div.demo-graphic {
    height: 400px;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      opacity: 0.4;
    }
  }
</style>
