End notes includes notes to the main article — usually things like sources, clarifiying notes and minor corrections at the end of a story.

```svelte
<script>
  import { EndNotes } from '@reuters-graphics/graphics-components';

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

<EndNotes notes="{notes}" />
```
