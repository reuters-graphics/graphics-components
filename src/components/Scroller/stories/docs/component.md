The `Scroller` component helps you quickly create basic scrollytelling graphics with several layout options.

Check out the "Canvas" tab to play with the layout options available on this component.

> This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should probably use [svelte-scroller](https://github.com/sveltejs/svelte-scroller), which is a lower level component you can more easily customize.

```svelte
<script>
  import { Scroller } from '@reuters-graphics/graphics-components';

  import MyColourBackground from './MyColourBackground.svelte';

  const steps = [
    { background: MyColourBackground, backgroundProps: { colour: 'red' }, foreground: '#### Step 1\n\nLorem ipsum red' },
    { background: MyColourBackground, backgroundProps: { colour: 'blue' }, foreground: '#### Step 2\n\nLorem ipsum blue' },
    { background: MyColourBackground, backgroundProps: { colour: 'green' }, foreground: '#### Step 3\n\nLorem ipsum green' },
  ]
</script>


<Scroller
  steps="{steps}"
  backgroundWidth="fluid"
  foregroundPosition="middle"
  embedded={false}
/>
```
