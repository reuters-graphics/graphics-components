<!-- @component `PaddingReset` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-layout-paddingreset--docs) -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /**
     * Set to `true` if the parent container is fluid.
     */
    containerIsFluid?: boolean;
    /**
     * Content to be padded.
     */
    children: Snippet;
  }

  let { containerIsFluid = true, children }: Props = $props();
</script>

{#if containerIsFluid}
  <div>
    <!-- Padded content -->
    {@render children()}
  </div>
{:else}
  <!-- Padded content -->
  {@render children()}
{/if}

<style>
  div {
    width: 100%;
    padding: 0 15px;
  }
</style>
