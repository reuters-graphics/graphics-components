<script lang="ts">
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  
  /** Width of the component within the text well. */
  export let width: ContainerWidth | null = null;
  import Block from "../Block/Block.svelte";
</script>

{#if (width)}
  <Block {width} noMargin={true}>
    <slot></slot>
  </Block>
{:else}
  <slot></slot>
{/if}
