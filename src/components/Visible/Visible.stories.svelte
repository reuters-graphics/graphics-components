<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Visible from './Visible.svelte';
  import VisibleDemo from './demo/VisibleDemo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/Visible',
    component: Visible,
  });
</script>

<Story name="Demo">
  <VisibleDemo />
</Story>
