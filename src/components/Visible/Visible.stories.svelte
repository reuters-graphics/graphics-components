<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import defaultSnippet from './stories/snippets/default.svelte?raw';

  import Visible from './Visible.svelte';

  import { withSource, withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Utilities/Visible',
    component: Visible,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template>
  {#snippet children({ args })}
    <Visible {...args}>
      {#snippet children({ visible })}
        {#if visible}
          <p>Visible!</p>
        {:else}
          <p>Not yet visible.</p>
        {/if}
      {/snippet}
    </Visible>
  {/snippet}
</Template>

<Story name="Default" {...withSource({ svelte: defaultSnippet })} />
