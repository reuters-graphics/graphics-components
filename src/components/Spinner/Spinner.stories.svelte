<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import Spinner from './Spinner.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      colour: { control: 'color' },
      ringWidth: { control: { type: 'range', min: 2, max: 20, step: 1 } },
      width: { control: { type: 'range', min: 5, max: 100, step: 5 } },
      speed: { control: { type: 'range', min: 0.2, max: 1.0, step: 0.1 } },
      containerPadding: {
        control: { type: 'range', min: 5, max: 100, step: 5 },
      },
    },
  };
</script>

<Meta title="Components/Spinner" component="{Spinner}" {...metaProps} />

<Template let:args>
  <Spinner {...args} />
</Template>

<Story name="Default" />
