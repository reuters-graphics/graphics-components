<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import EndNotes from './EndNotes.svelte';
  import { getEndNotesPropsFromDoc } from './docProps';
  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  const notes = [
    {
      Title: 'Note',
      Text: 'Data is current as of today.',
    },
    {
      Title: 'Sources',
      Text: 'Data, Inc.',
    },
    {
      Title: 'Edited by',
      Text: '<a href="https://www.reuters.com/graphics/">Editor</a>, Copyeditor',
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

<Story name="Default" args="{{ notes: getEndNotesPropsFromDoc(notes) }}" />
