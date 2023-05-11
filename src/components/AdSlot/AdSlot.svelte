<!-- @component `YourComponent` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-YourComponent--default) -->
<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  // You can declare custom types to help users implement your component.
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'normal';
  export let id: string = ''; /** Add an ID to target with SCSS. */
  export let cls: string = ''; /** Add a class to target with SCSS. */

  import Block from '../Block/Block.svelte';
</script>

<Block width="{width}" id="{id}" cls="photo {cls}">
  <div><p>Ad Slot</p></div>
</Block>

<style lang="scss">
  div {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
