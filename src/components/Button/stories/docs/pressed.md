Link the `pressed` variable to a boolean value to toggle the selected state of button in the click event.

```html
<script>
  import { Button } from '@reuters-graphics/graphics-components';

  let isPressed = false;

  function handleButtonClick(event) {
    isPressed = !isPressed;
  }
</script>

<button
  content="{'My button'}"
  on:click="{handleButtonClick}"
  pressed="{isPressed}"
/>
```
