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
  text="{'Yes'}"
  value="{'yes'}"
  on:buttonClicked="{handleButtonClick}"
  pressed="{isPressed === 'yes'}"
/>

<button
  text="{'No'}"
  value="{'no'}"
  on:buttonClicked="{handleButtonClick}"
  pressed="{isPressed === 'no'}"
/>
```
