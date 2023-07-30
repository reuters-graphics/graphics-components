<!-- @component `BodyText` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-bodytext--default) -->
<script lang="ts">
  /**
   * A markdown text string.
   * @type {string}
   * @required
   */
  export let text: string;

  /** Add a class to target with SCSS. */
  let cls: string = '';
  export { cls as class };

  import { marked } from 'marked';
  import Block from '../Block/Block.svelte';
</script>

<Block class="body-text {cls}">
  {#if text}
    {@html marked.parse(text)}
  {/if}
</Block>
