Invite users to pick an option from a predefined list.

---

```html
<script>
  import { Select } from '@reuters-graphics/graphics-components';

  // Options must be provided as a list of objects with `text` and `value` keys.
  const optionList = [
    {
      text: 'Red', // The `text` key is what is displayed to the user.
      value: 'r', // The `value` key is what is passed to the `selected` property.
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

<Select options="{optionList}" />
```
