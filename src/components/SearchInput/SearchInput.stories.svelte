<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SearchInput from './SearchInput.svelte';

  const { Story } = defineMeta({
    title: 'Components/Controls/SearchInput',
    component: SearchInput,
  });
</script>

<Story name="Demo" />