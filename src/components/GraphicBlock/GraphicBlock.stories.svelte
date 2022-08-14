<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import customTextDocs from './stories/docs/customText.md?raw';

  import GraphicBlock from './GraphicBlock.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  // @ts-ignore
  import PlaceholderImg from './stories/placeholder.png';

  const meta = {
    title: 'Layout/GraphicBlock',
    component: GraphicBlock,
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
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

<Meta {...meta} />

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
    description: "Pork loin t-bone jowl prosciutto, short loin flank kevin tri-tip cupim pig pork. Meatloaf tri-tip frankfurter short ribs, cupim brisket bresaola chislic tail jerky burgdoggen pancetta.",
    notes: "Note: Data current as of Aug. 2, 2022.\n\nSource: [Google research](https://google.com)"
  }}"
/>

<Story
  name="Custom text"
  {...withStoryDocs(customTextDocs)}
>
  <GraphicBlock
    width="normal"
    notes={"Note: Data current as of Aug. 2, 2022.\n\nSource: [Google research](https://google.com)"}
  >
    <div slot="title">
      <h5>My smaller title</h5>
    </div>
    <div class="demo-graphic">
      <img src="{PlaceholderImg}" alt="placeholder" />
    </div>
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