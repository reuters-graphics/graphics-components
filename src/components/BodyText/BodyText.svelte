<script lang="ts">
  /**
   * A markdown text string.
   * @type {string}
   * @required
   */
  export let text: string;

  import { marked } from 'marked';
  import Block from '../Block/Block.svelte';
</script>

<Block cls="body-text">
  {#if text}
    {@html marked.parse(text)}
  {/if}
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import "../../scss/mixins";

  :global {
    div.article-block.body-text {
      @include body-text;
    }
  }
</style>