<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import Table from './Table.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  // You can import JSON you need in stories directly in code!
  // @ts-ignore
  import AirportsData from './stories/airports.json';

  const meta = {
    title: 'Components/Table',
    component: Table,
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Table {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
    data: AirportsData,
    includedFields: ['iata', 'name', 'city', 'state'],
  }}"
/>
