<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `YourComponent` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ComponentFolderSlug-YourComponentSlug--docs) -->
<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  /**
   * A source for the image.
   * @required
   */
  export let src: string;

  /**
   * AltText for the image.
   * @required
   */
  export let altText: string;

  /** Height of the image. */
  export let height: number = 500;

  // You can declare custom types to help users implement your component.
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'normal';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  let cls: string = '';
  export { cls as class };

  import Block from '../Block/Block.svelte';
</script>

<Block {width} {id} class="photo {cls}">
  <div
    style:background-image={`url(${src})`}
    style:height={`${height}px`}
  ></div>
  <p class="visually-hidden">{altText}</p>
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
