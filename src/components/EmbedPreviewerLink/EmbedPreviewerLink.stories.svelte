<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import EmbedPreviewerLink from './EmbedPreviewerLink.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Components/EmbedPreviewerLink"
  component="{EmbedPreviewerLink}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <EmbedPreviewerLink {...args} />
</Template>

<Story
  name="Default"
  args="{{
    dev: true,
  }}"
/>
