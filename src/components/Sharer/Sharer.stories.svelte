<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import Sharer from './Sharer.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Components/Sharer"
  component="{Sharer}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Sharer {...args} />
</Template>

<Story name="Default" />
