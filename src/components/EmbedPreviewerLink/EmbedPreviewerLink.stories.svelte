<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import EmbedPreviewerLink from './EmbedPreviewerLink.svelte';

  import {
    withComponentDocs
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Utilities/EmbedPreviewerLink',
    component: EmbedPreviewerLink,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
    <EmbedPreviewerLink {...args} />
</Template>

<Story
  name="Default"
  args={{
    dev: true
  }}
/>
