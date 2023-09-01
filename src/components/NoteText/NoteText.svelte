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

<Block class="notes">
  {#if text}
    {@html marked.parse(text)}
  {/if}
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss" global>
  @import '../../scss/mixins';

  .article-block.notes {
    @include fmb-9;
    @include fmt-7;

    h2,
    h3,
    h4,
    h5,
    h6 {
      @include body-note;
      @include tracking-wide;
      @include text-primary;
      @include font-semibold;
      @include fmt-3;
      text-transform: none;
    }

    p {
      @include body-note;
      @include text-sm;
    }
  }
</style>
