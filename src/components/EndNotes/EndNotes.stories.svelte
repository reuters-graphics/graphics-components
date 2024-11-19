<script context="module" lang="ts">
  import EndNotes from './EndNotes.svelte';
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/EndNotes',
    component: EndNotes,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { getEndNotesPropsFromDoc } from './docProps';

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

<Template let:args>
  <EndNotes {...args} />
</Template>

<Story name="Default" args="{{ notes: getEndNotesPropsFromDoc(notes) }}" />
