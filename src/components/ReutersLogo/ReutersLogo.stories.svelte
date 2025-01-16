<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import ReutersLogo from './ReutersLogo.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Logos/ReutersLogo',
    component: ReutersLogo,
    ...withComponentDocs(componentDocs),
    argTypes: {
      logoColour: { control: 'color' },
      textColour: { control: 'color' },
    },
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template >
  {#snippet children({ args })}
    <ReutersLogo {...args} />
  {/snippet}
</Template>

<Story name="Default" />
