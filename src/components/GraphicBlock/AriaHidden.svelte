<script lang="ts">
  interface Props {
    /**
     * Whether to wrap the graphic with an aria hidden tag.
     */
    hidden?: boolean;
    children?: import('svelte').Snippet;
  }

  let { hidden = false, children }: Props = $props();
</script>

{#if hidden}
  <div aria-hidden="true">
    {@render children?.()}
  </div>
{:else}
  {@render children?.()}
{/if}
