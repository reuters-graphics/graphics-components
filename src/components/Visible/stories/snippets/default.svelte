<script>
  import { Visible } from '@reuters-graphics/graphics-svelte-components';
</script>

<Visible let:visible>
  {#if visible}
    <p>Visible!</p>
  {:else}
    <p>Not yet visible.</p>
  {/if}
</Visible>