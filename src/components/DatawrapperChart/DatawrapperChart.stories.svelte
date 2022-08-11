<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import withChatterDocs from './stories/docs/withChatter.md?raw';

  import DatawrapperChart from './DatawrapperChart.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/DatawrapperChart',
    component: DatawrapperChart,
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    }
  };
</script>

<Meta {...meta} />

<Template let:args>
  <DatawrapperChart {...args} />
</Template>

<Story
  name="Default"
  args={{
    src: 'https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html',
    id: 'abortion-rights-map',
    ariaLabel: 'map',
    title: 'Global abortion access',
  }}
/>

<Story name="With chatter" {...withStoryDocs(withChatterDocs)}>
  <DatawrapperChart
    title='Global abortion access'
    ariaLabel='map'
    id='abortion-rights-map'
    src='https://graphics.reuters.com/USA-ABORTION/lgvdwemlbpo/media-embed.html'
  >
    <div slot="title" class="title">
      <h3>Global abortion access</h3>
      <p>A map of worldwide access to abortion.</p>
    </div>
    <aside slot="notes">
      <p class="note">Note: Different indicators and additional restrictions, including different gestational limits, apply in some countries. Refer to source for full classification. Current as of May 4, 2022.</p>
      <p class="source">Source: Center for Reproductive Rights</p>
    </aside>
  </DatawrapperChart>
</Story>