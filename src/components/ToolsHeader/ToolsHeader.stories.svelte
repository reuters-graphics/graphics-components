<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import ToolsHeader from './ToolsHeader.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Page furniture/ToolsHeader',
    component: ToolsHeader,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template >
  {#snippet children({ args })}
    <div>
      <ToolsHeader {...args} />
    </div>
  {/snippet}
</Template>

<Story name="Default" args="{{}}" />

<style>
  div {
    width: calc(100% + 30px);
    margin-left: -15px;
  }
</style>
