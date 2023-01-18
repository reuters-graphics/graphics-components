Instead of just text, you can use any component in the foreground, too, and pass whatever props you need to it.

If you're making your own custom foreground component, remember to add alt text describing the background graphic.

```svelte
<script>
  // ...
  import MyCounter from './MyCounter.svelte';

  const steps = [
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'red' },
      foreground: MyCounter,
    },
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'blue' },
      foreground: '#### Step 2\n\nLorem ipsum blue',
    },
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'green' },
      foreground: MyCounter,
      foregroundProps: { count: 100 },
    },
  ];
</script>

<Scroller
  steps="{steps}"
  backgroundWidth="fluid"
  foregroundPosition="middle"
  embedded="{false}"
/>
```
