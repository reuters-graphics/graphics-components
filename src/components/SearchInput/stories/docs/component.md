> **Welcome to your new component!** Use this template to build your component and customise its storybook.

- Build your component in `SearchInput/SearchInput.svelte`.
- Write your component's storybook in `SearchInput/SearchInput.stories.svelte`.
- Don't forget to add your component to `src/index.js`:

  ```javascript
  // ...
  export { default as SearchInput } from './components/SearchInput/SearchInput.svelte';
  ```

- Commit your component to a new branch and push it to GitHub! 🏁

---

```svelte
<script>
  import { SearchInput } from '@reuters-graphics/graphics-components';
</script>

<SearchInput />
```
