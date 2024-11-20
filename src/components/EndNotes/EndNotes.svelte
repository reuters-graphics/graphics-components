<!-- @component `EndNotes` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-endnotes--docs) -->
<script lang="ts">
  interface EndNote {
    /**
     * Title of the note item
     */
    title: string;
    /**
     * Contents of the note as a markdown string
     * @required
     */
    text: string;
  }

  /**
   * An array of endnote items.
   * @required
   */
  export let notes: EndNote[] = [];

  import Block from '../Block/Block.svelte';
  import Markdown from '../Markdown/Markdown.svelte';
</script>

<Block class="notes fmt-6 fmb-8">
  {#if notes}
    {#each notes as note}
      <div class="note-title">
        <Markdown source="{note.title}" />
      </div>
      <div class="note-content">
        <Markdown source="{note.text}" />
      </div>
    {/each}
  {/if}
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .note-title {
    :global(p) {
      @include mixins.body-caption;
      @include mixins.text-primary;
      @include mixins.font-medium;
      @include mixins.tracking-normal;
      @include mixins.fmt-3;
      margin-bottom: 0.125rem;
      text-transform: none;
    }
  }

  .note-content {
    :global(p) {
      @include mixins.body-caption;
      @include mixins.fmt-0;
    }
  }
</style>
