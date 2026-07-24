<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LiveBug from './LiveBug.svelte';

  const { Story } = defineMeta({
    title: 'Components/Football/Elements/LiveBug',
    component: LiveBug,
    tags: ['autodocs'],
  });
</script>

<Story name="Default" />
