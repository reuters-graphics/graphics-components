Note text includes notes to the main article — usually things like sources, clarifiying notes and minor corrections at the end of a story.

Note text can be fed a markdown string, but text styling is intentionally restricted in this component. For example, all heading tags are forced to a single font size and weight.

```html
<script>
  import { NoteText } from '@reuters-graphics/graphics-components';

  const markdownText = `### Source

Reuters research.

### Credits

People.`;
</script>

<NoteText text="{markdownText}" />
```
