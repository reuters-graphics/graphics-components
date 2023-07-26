<!-- @component `NoteText` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-NoteText--default) -->
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

<Block class="notes mb-24">
  {#if text}
    {@html marked.parse(text)}
  {/if}
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss" global>
  @import '../../scss/mixins';

  div.article-block.notes {
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: var(--theme-font-size-base) 0 0;
      @include text-sm;
      @include text-primary;
      @include leading-tight;
      @include tracking-normal;
      @include font-bold;
      text-transform: none;
    }

    p {
      @include font-note;
      @include font-light;
      @include text-sm;
    }
  }
</style>
