<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import EndNotes from './EndNotes.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  const notes = [
    {
      title: 'Note',
      text: 'Data is current as of today.',
    },
    {
      title: 'Sources',
      text: 'Data, Inc.',
    },
    {
      title: 'Edited by',
      text: '<a href="https://www.reuters.com/graphics/">Editor</a>, Copyeditor',
    },
  ];
</script>

<Meta
  title="Components/EndNotes"
  component="{EndNotes}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <EndNotes {...args} />
</Template>

<Story
  name="Default"
  args="{{
    notes,
  }}"
/>
