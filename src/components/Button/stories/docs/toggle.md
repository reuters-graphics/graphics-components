You can toggle between multiple buttons by linking the `pressed` variable to a `value` property on each button.

```html
<script>
  import { Button } from '@reuters-graphics/graphics-components';

  let isPressed = undefined;

  function handleButtonClick(event) {
    isPressed = event.detail.value;
  }
</script>

<button
  content="{'Yes'}"
  value="{'yes'}"
  on:click="{handleButtonClick}"
  pressed="{isPressed === 'yes'}"
/>

<button
  content="{'No'}"
  value="{'no'}"
  on:click="{handleButtonClick}"
  pressed="{isPressed === 'no'}"
/>
```
