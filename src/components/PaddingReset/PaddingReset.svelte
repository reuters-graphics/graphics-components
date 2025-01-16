<!-- @component `PaddingReset` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-layout-paddingreset--docs) -->
<script lang="ts">
  
  interface Props {
    /**
   * If parent container is fluid, which resets the padding around contained elements.
   */
    containerIsFluid?: boolean;
    children?: import('svelte').Snippet;
  }

  let { containerIsFluid = true, children }: Props = $props();
</script>

{#if containerIsFluid}
  <div>
    <!-- Padded content -->
    {@render children?.()}
  </div>
{:else}
  <!-- Padded content -->
  {@render children?.()}
{/if}

<style>
  div {
    width: 100%;
    padding: 0 15px;
  }
</style>
