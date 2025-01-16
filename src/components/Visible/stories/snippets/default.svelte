<script>
  import { Visible } from '@reuters-graphics/graphics-components';
</script>

<Visible >
  {#snippet children({ visible })}
    {#if visible}
      <p>Visible!</p>
    {:else}
      <p>Not yet visible.</p>
    {/if}
  {/snippet}
</Visible>
