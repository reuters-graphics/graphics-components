<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import ToolsHeader from './ToolsHeader.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';
</script>

<Meta
  title="Components/ToolsHeader"
  component="{ToolsHeader}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div>
    <ToolsHeader {...args} />
  </div>
</Template>

<Story name="Default" args="{{}}" />

<style>
  div {
    width: calc(100% + 30px);
    margin-left: -15px;
  }
</style>
