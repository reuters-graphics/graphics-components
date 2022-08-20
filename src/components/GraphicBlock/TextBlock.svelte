<script lang="ts">
  import type { ContainerWidth } from '../@types/global';
  
  /** Width of the component within the text well. */
  export let width: ContainerWidth | null = null;
  import Block from '../Block/Block.svelte';
</script>

{#if (width)}
  <Block {width} cls="m-0">
    <slot></slot>
  </Block>
{:else}
  <slot></slot>
{/if}
