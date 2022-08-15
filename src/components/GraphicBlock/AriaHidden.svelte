<script lang="ts">
  /**
   * Whether to wrap the graphic with an aria hidden tag.
   */
  export let hidden: boolean = false;
</script>

{#if hidden}
  <div aria-hidden="true">
    <slot></slot>
  </div>
{:else}
  <slot></slot>
{/if}
