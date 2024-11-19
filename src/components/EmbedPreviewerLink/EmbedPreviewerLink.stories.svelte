<script context="module" lang="ts">
  import EmbedPreviewerLink from './EmbedPreviewerLink.svelte';
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Utilities/EmbedPreviewerLink',
    component: EmbedPreviewerLink,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <EmbedPreviewerLink {...args} />
</Template>

<Story
  name="Default"
  args="{{
    dev: true,
  }}"
/>
