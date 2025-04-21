<script module lang="ts">
  import EndNotes from './EndNotes.svelte';

  import { defineMeta } from '@storybook/addon-svelte-csf';

  const { Story } = defineMeta({
    title: 'Components/Text elements/EndNotes',
    component: EndNotes,
  });
</script>

<script>
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

<Story name="Demo" args={{ notes }} />
