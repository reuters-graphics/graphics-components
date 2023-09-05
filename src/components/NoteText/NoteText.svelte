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

<Block class="notes fmt-6 fmb-8">
  {#if text}
    {@html marked.parse(text)}
  {/if}
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss" global>
  @import '../../scss/mixins';

  .article-block.notes {
    h2,
    h3,
    h4,
    h5,
    h6 {
      @include body-caption;
      @include text-primary;
      @include font-medium;
      @include fmt-3;
      @include fmb-0;
      text-transform: none;
    }

    p {
      @include body-caption;
      @include fmt-0;
    }
  }
</style>
