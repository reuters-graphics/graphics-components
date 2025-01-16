<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import PymChild from './PymChild.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Utilities/PymChild',
    component: PymChild,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template >
  {#snippet children({ args })}
    <PymChild {...args} />
    <div>Nothing to see here. 😎</div>
  {/snippet}
</Template>

<Story name="Default" />
