This argument lets you set the option that is `selected` by default. It expects that you pass the `value` of the option you want.

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

<select selected="{'g'}" options="{optionList}" />
```
