Invite users to click.

```html
<script>
  import { Button } from '@reuters-graphics/graphics-components';

  function handleButtonClick(event) {
    // Here you could do something with the event,
    // like trigger a modal or a tooltip.
    console.log('You clicked my button!');
  }
</script>

<button text="{'My button'}" on:buttonClicked="{handleButtonClick}" />
```
