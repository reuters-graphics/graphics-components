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

<Block cls="notes">
  {#if text}
    {@html marked.parse(text)}
  {/if}
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  // Same as body text... we probably should unbind these styles from the component
  // and import them in the app through a separate scss file.
  @import "../../scss/mixins";

  :global {
    div.article-block.notes {
      @include note-text;
    }
  }
</style>
