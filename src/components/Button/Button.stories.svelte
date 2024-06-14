<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import pressedDocs from './stories/docs/pressed.md?raw';

  import Button from './Button.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  let isPressed = false;
  function handleClick(e) {
    console.log('You clicked my button!');
    isPressed = !isPressed;
  }
</script>

<Meta
  title="Components/Button"
  component="{Button}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Button {...args} on:buttonClicked="{handleClick}" />
</Template>

<Story
  name="Default"
  args="{{
    text: 'My button',
  }}"
/>

<Story
  name="Pressed"
  {...withStoryDocs(pressedDocs)}
  args="{{
    text: 'My button',
    pressed: isPressed,
  }}"
/>
