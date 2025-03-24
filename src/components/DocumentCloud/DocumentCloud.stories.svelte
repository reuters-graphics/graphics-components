<script module lang="ts">
  import DocumentCloud from './DocumentCloud.svelte';
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Multimedia/DocumentCloud',
    component: DocumentCloud,
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template>
  {#snippet children({ args })}
    <DocumentCloud {...args} />
  {/snippet}
</Template>

<Story
  name="Default"
  args={{
    width: 'normal',
    slug: '3259984-Trump-Intelligence-Allegations',
    altText: 'These Reports Allege Trump Has Deep Ties To Russia',
  }}
/>
