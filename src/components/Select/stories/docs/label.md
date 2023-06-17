You have the option of including a `label` argument that will appear above the pulldown menu.

```html
<script>
  import { Select } from '@reuters-graphics/graphics-components';

  const optionList = [
    {
      text: 'Red',
      value: 'r',
    },
    {
      text: 'Blue',
      value: 'b',
    },
    {
      text: 'Green',
      value: 'g',
    },
  ];
</script>

<Select label="{'Pick a color'}" options="{optionList}" />
```
