<!-- @component `EndNotes` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-EndNotes--default) -->
<script lang="ts">
  interface EndNote {
    /**
     * Title of the note item
     * @required
     */
    title: String;
    /**
     * Contents of the note as a markdown string
     * @required
     */
    text: String;
  }

  /**
   * An array of endnote items.
   * @required
   */
  export let notes: EndNote[] = [];

  import { marked } from 'marked';
  import Block from '../Block/Block.svelte';
</script>

<Block class="notes fmt-6 fmb-8">
  {#if notes}
    {#each notes as note}
      <div class="note-title">{@html marked.parse(note.title)}</div>
      <div class="note-content">{@html marked.parse(note.text)}</div>
    {/each}
  {/if}
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import '../../scss/mixins';

  .note-title {
    :global(p) {
      @include body-caption;
      @include text-primary;
      @include font-medium;
      @include tracking-normal;
      @include fmt-3;
      margin-bottom: 0.125rem;
      text-transform: none;
    }
  }

  .note-content {
    :global(p) {
      @include body-caption;
      @include fmt-0;
      @include fmb-2;
    }
  }
</style>
