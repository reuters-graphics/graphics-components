<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import EndNotes from './EndNotes.svelte';

  import {
    withComponentDocs
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/EndNotes',
    component: EndNotes,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <EndNotes {...args} />
</Template>

<Story
  name="Default"
  args={{
    text: `### Source

Reuters research.

### Credits

People.`
  }}
/>
