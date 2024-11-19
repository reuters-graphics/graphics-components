<script context="module" lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import defaultSnippet from './stories/snippets/default.svelte?raw';

  import Visible from './Visible.svelte';

  import { withSource, withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Visible',
    component: Visible,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Visible {...args} let:visible>
    {#if visible}
      <p>Visible!</p>
    {:else}
      <p>Not yet visible.</p>
    {/if}
  </Visible>
</Template>

<Story name="Default" {...withSource({ svelte: defaultSnippet })} />
