<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import withChatterDocs from './stories/docs/withChatter.md?raw';

  import DatawrapperChart from './DatawrapperChart.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta
  title="Components/DatawrapperChart"
  component="{DatawrapperChart}"
  {...metaProps}
/>

<Template let:args>
  <DatawrapperChart {...args} />
</Template>

<Story
  name="Default"
  args="{{
    src: 'https://reuters.com/graphics/USA-ABORTION/lgpdwggnwvo/media-embed.html',
    id: 'abortion-rights-map',
    ariaLabel: 'map',
    frameTitle: 'Global abortion access',
  }}"
/>

<Story name="With chatter" {...withStoryDocs(withChatterDocs)}>
  <DatawrapperChart
    frameTitle="Global abortion access"
    ariaLabel="map"
    id="abortion-rights-map"
    src="https://reuters.com/graphics/USA-ABORTION/lgvdwemlbpo/media-embed.html"
    title="Global abortion access"
    description="A map of worldwide access to abortion."
    notes="{'Note: Different indicators and additional restrictions, including different gestational limits, apply in some countries. Refer to source for full classification. Current as of May 4, 2022.\n\nSource: Center for Reproductive Rights'}"
  />
</Story>
