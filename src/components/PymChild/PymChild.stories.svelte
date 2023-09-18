<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import PymChild from './PymChild.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Components/PymChild"
  component="{PymChild}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <PymChild {...args} />
  <div>Nothing to see here. 😎</div>
</Template>

<Story name="Default" />
