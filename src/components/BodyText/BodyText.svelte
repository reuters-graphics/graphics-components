<!-- @component `BodyText` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-bodytext--docs) -->
<script lang="ts">
  import Markdown from '../Markdown/Markdown.svelte';
  import Block from '../Block/Block.svelte';
  interface Props {
    /** A markdown text string. */
    text: string;
    /** Add a class to target with SCSS. */
    class?: string;
    /** Add an id to the block tag to target it with custom CSS. */
    id?: string;
  }

  let { text, class: cls = '', id = '' }: Props = $props();
</script>

<Block {id} class="fmy-6 {cls}">
  <Markdown source={text} />
</Block>
