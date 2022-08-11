> **Welcome to your new component!** Use this template to build your component and customise its storybook.

- Build your component in `YourComponent/YourComponent.svelte`.
- Write your component's storybook in `YourComponent/YourComponent.stories.svelte`.
- Don't forget to add your component to `src/index.js`:

  ```javascript
  // ...
  export { default as YourComponent } from './components/YourComponent/YourComponent.svelte';
  ```

- Commit your component to a new branch and push it to GitHub! 🏁

---

```svelte
<script>
  import { YourComponent  } from '@reuters-graphics/graphics-svelte-components';
</script>


<YourComponent />
```
