<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Visible from './Visible.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/Visible',
    component: Visible,
  });
</script>

<Story name="Demo">
  <!-- Optionally set your own `top`, `bottom`, `right` and `left` values with units -->
  <Visible top={{ value: 10, unit: 'px' }}>
    {#snippet children(visible)}
      {#if visible}
        <p>Visible!</p>
      {:else}
        <p>Not yet visible.</p>
      {/if}
    {/snippet}
  </Visible>
</Story>
