<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import ToolsHeader from './ToolsHeader.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Utilities/ToolsHeader',
    component: ToolsHeader,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

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
