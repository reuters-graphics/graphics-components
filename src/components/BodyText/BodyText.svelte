<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `BodyText` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-bodytext--docs) -->
<script lang="ts">
  import Markdown from '../Markdown/Markdown.svelte';
  /**
   * A markdown text string.
   * @type {string}
   * @required
   */
  export let text: string;

  /** Add a class to target with SCSS. */
  let cls: string = '';
  export { cls as class };

  /** Add an id to the block tag to target it with custom CSS. */
  export let id: string = '';

  import Block from '../Block/Block.svelte';
</script>

<Block {id} class="fmy-6 {cls}">
  <Markdown source="{text}" />
</Block>
