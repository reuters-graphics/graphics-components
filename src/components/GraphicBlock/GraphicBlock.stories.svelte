<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import GraphicBlock from './GraphicBlock.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/GraphicBlock',
    component: GraphicBlock,
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
  });
</script>

<script>
  import AiMap from './demo/ai2svelte/ai-chart.svelte';
  import PlaceholderImg from './demo/placeholder.png';
</script>

<Story name="Demo">
  <GraphicBlock
    title="Title for my chart"
    description="Some description for your chart."
    notes="Note: Data current as of Aug. 2, 2022.\n\nSource: [Google research](https://google.com)"
  >
    <!-- Graphic content -->
    <div id="my-chart">
      <img src={PlaceholderImg} alt="placeholder" />
    </div>
  </GraphicBlock>
</Story>

<Story name="Ai2svelte and ArchieML" exportName="Ai2SvelteAndArchieML">
  <GraphicBlock
    title="Earthquake in Haiti"
    description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
    notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  >
    <AiMap />
  </GraphicBlock>
</Story>

<Story name="Custom text" exportName="CustomText">
  <GraphicBlock>
    <div class="demo-graphic">
      <img src={PlaceholderImg} alt="placeholder" />
    </div>

    {#snippet customTitle()}
      <h5>My smaller title</h5>
    {/snippet}

    {#snippet customNotes()}
      <aside>
        <p><strong>Note:</strong> Data current as of Aug. 2, 2022.</p>
      </aside>
    {/snippet}
  </GraphicBlock>
</Story>

<Story name="AREA description" exportName="AriaDescription">
  <GraphicBlock
    title="Earthquake in Haiti"
    description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
    notes="Note: A shakemap represents the ground shaking produced by an earthquake."
    ariaDescription="A map showing the shake intensity produced by the earthquake."
  >
    <AiMap />
  </GraphicBlock>
</Story>

<Story name="Custom AREA description" exportName="CustomAriaDescription">
  <GraphicBlock
    title="Earthquake in Haiti"
    description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
    notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  >
    <AiMap />
    {#snippet customAria()}
      <p>
        A shakemap shows the intensity of the 7.2-magnitude earthquake that
        struck Haiti at 8:29 a.m. EST, Aug. 14, 2021.
      </p>
      <table>
        <tbody>
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
        </tbody>
      </table>
    {/snippet}
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

  // Style the table nicely
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
    }
  }
</style>
