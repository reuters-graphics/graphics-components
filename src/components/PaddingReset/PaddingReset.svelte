<script>
  /**
   * If parent container is fluid, which resets the padding around contained elements.
   */
  export let containerIsFluid = true;
</script>

{#if containerIsFluid}
  <div>
    <!-- Padded content -->
    <slot />
  </div>
{:else}
  <!-- Padded content -->
  <slot />
{/if}

<style>
  div {
    width: 100%;
    padding: 0 15px;
  }
</style>
