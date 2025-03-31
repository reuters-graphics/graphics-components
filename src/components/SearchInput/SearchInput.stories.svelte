<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SearchInput from './SearchInput.svelte';

  const { Story } = defineMeta({
    title: 'Components/Controls/SearchInput',
    component: SearchInput,
  });
</script>

<script lang="ts">
  function filterData(newSearchText: string) {
    /** This function would typically filter a dataset based on the search input.*/
    console.log('Filtering data with:', newSearchText);
  }
  function handleSearchInput(newSearchText: string) {
    /** Here's where you might update a variable, filter a dataset or make an API call based on the user's input.*/
    filterData(newSearchText);
  }
</script>

<Story name="Demo">
  <SearchInput onsearch={handleSearchInput} />
</Story>
