<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import Spinner from './Spinner.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Utilities/Spinner',
    component: Spinner,
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

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template >
  {#snippet children({ args })}
    <Spinner {...args} />
  {/snippet}
</Template>

<Story name="Default" />
