<!-- @component `NoteText` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-NoteText--default) -->
<script lang="ts">
  /**
   * A markdown text string.
   * @type {string}
   * @required
   */
  export let text: string;

  /**
   * Whether or not to include our Trust Principles at the bottom of the note. True by default.
   * @type {boolean}
   */
  export let trustPrinciples: boolean = true;

  import { marked } from 'marked';
  import Block from '../Block/Block.svelte';
</script>

<Block cls="notes mb-6">
  {#if text}
    {@html marked.parse(text)}
  {/if}
  {#if trustPrinciples}
    <h3>Standards</h3>
    <p>
      Thomson Reuters is dedicated to upholding the Trust Principles. Learn more
      by reading <a
        href="https://www.thomsonreuters.com/en/about-us/trust-principles.html"
        >our commitment</a
      > to independence, integrity and freedom from bias.
    </p>
  {/if}
</Block>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss" global>
  // Same as body text... we probably should unbind these styles from the component
  // and import them in the app through a separate scss file.
  @import '../../scss/mixins';

  div.article-block.notes {
    @include note-text;
  }
</style>
