<script lang="ts">
  import type { ContainerWidth } from '../@types/global';

  import Block from '../Block/Block.svelte';
  interface Props {
    /** Width of the component within the text well. */
    width?: ContainerWidth | null;
    children?: import('svelte').Snippet;
  }

  let { width = null, children }: Props = $props();
</script>

{#if width}
  <Block {width} class="notes fmy-0">
    {@render children?.()}
  </Block>
{:else}
  {@render children?.()}
{/if}
