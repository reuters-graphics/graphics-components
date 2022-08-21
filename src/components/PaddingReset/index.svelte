<script>
  export let width = 'normal';
</script>

{#if width === 'fluid'}
  <div>
    <slot></slot>
  </div>
{:else}
  <slot></slot>
{/if}

<style>
  div {
    width: 100%;
    padding: 0 15px;
  }
</style>