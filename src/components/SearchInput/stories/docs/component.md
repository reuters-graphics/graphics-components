Invite users to search for something.

```svelte
<script>
  import { SearchInput } from '@reuters-graphics/graphics-components';

  function handleSearchInput(event) {
    const searchText = event.detail.value;
    // Here's where you might update a variable,
    // filter a dataset or make an API call
    // based on the user's input.
    console.log(`Search for ${searchText}`);
  }
</script>

<SearchInput on:search="{handleSearchInput}" />
```
