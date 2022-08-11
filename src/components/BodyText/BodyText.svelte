<script lang="ts">
  /**
   * A markdown text string.
   * @type {string}
   * @required
   */
  export let text: string;

  import { marked } from 'marked';
  import Section from '../Section/Section.svelte';
</script>

<Section cls="body-text">
  {#if text}
    {@html marked.parse(text)}
  {/if}
</Section>
