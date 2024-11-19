<script context="module" lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import ReutersGraphicsLogo from './ReutersGraphicsLogo.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Logos/ReutersGraphicsLogo',
    component: ReutersGraphicsLogo,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <ReutersGraphicsLogo {...args} />
</Template>

<Story name="Default" args="{{}}" />
