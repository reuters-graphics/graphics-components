<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatawrapperChart from './DatawrapperChart.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/DatawrapperChart',
    component: DatawrapperChart,
    tags: ['autodocs'],
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  });
</script>

<Story
  name="Demo"
  args={{
    src: 'https://reuters.com/graphics/USA-ABORTION/lgpdwggnwvo/media-embed.html',
    id: 'abortion-rights-map',
    ariaLabel: 'map',
    frameTitle: 'Global abortion access',
  }}
/>

<Story
  name="With chatter"
  tags={['!autodocs']}
  args={{
    frameTitle: 'Global abortion access',
    ariaLabel: 'map',
    id: 'abortion-rights-map',
    src: 'https://reuters.com/graphics/USA-ABORTION/lgvdwemlbpo/media-embed.html',
    title: 'Global abortion access',
    description: 'A map of worldwide access to abortion.',
    notes:
      'Note: Different indicators and additional restrictions, including different gestational limits, apply in some countries. Refer to source for full classification. Current as of May 4, 2022.\n\nSource: Center for Reproductive Rights',
  }}
/>
