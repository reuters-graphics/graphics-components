A Pym.js child instance for embeddables.

```html
<script>
  import { PymChild } from '@reuters-graphics/graphics-components';
</script>

<PymChild polling="{500}" />
```

You can access the Pym.js child through its store in other components to send custom height updates to parent frames:

```html
<script>
  import {
    PymChild,
    pymChildStore,
  } from '@reuters-graphics/graphics-components';

  const updateHeight = () => {
    if ($pymChildStore) $pymChildStore.sendHeight();
  };
</script>

<PymChild />

<button on:click="{updateHeight}">Update height</button>
```
