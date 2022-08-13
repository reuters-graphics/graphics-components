<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import NoteText from './NoteText.svelte';

  import {
    withComponentDocs
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/NoteText',
    component: NoteText,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <NoteText {...args} />
</Template>

<Story
  name="Default"
  args={{
    text: `## Source

[European Forest Fire Information System](https://effis.jrc.ec.europa.eu/); Reuters research

#### Credits

Jane Doe & John Doe`
  }}
/>
