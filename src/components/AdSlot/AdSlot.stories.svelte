<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import AdSlot from './AdSlot.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Components/AdSlot',
    component: AdSlot,
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
  <AdSlot {...args} />
</Template>

<Story name="Default" />
