<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ContainerWidth } from '../../@types/global';

  import Block from '../../Block/Block.svelte';
  interface Props {
    /** Width of the component within the text well. */
    width?: ContainerWidth;
    /** Content to put inside `TextBlock`*/
    children: Snippet;
  }

  let { width, children }: Props = $props();
</script>

{#if width}
  <Block {width} class="notes fmy-0">
    {@render children()}
  </Block>
{:else}
  {@render children()}
{/if}
