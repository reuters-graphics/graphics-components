<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ContainerWidth } from '../../@types/global';

  import Block from '../../Block/Block.svelte';
  interface Props {
    /** Width of the component within the text well. */
    width?: ContainerWidth;
    // children?: import('svelte').Snippet;
    children?: Snippet;
  }

  let { width, children }: Props = $props();
</script>

{#if width && children}
  <Block {width} class="notes fmy-0">
    {@render children()}
  </Block>
{:else if children}
  {@render children()}
{/if}
