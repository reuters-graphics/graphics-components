<script>
  export let width = 'normal';
</script>

{#if width === 'fluid'}
  <div>
    <slot />
  </div>
{:else}
  <slot />
{/if}

<style>
  div {
    width: 100%;
    padding: 0 15px;
  }
</style>
