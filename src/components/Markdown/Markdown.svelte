<!-- @component `Markdown` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-markdown--docs) -->
<script lang="ts">
  import type { Action } from 'svelte/action';
  import { marked } from 'marked';
  import { staticMarkdown } from './stores';

  interface Props {
    /** A Markdown formatted string */
    source?: string;
    /** Parse markdown inline, i.e., without wrapping it in paragraph tags */
    parseInline?: boolean;
  }

  let { source = '', parseInline = false }: Props = $props();

  let markdown = $derived(
    parseInline ? marked.parseInline(source) : marked.parse(source)
  );

  const setInnerHTML: Action<HTMLElement, string> = (node, html) => {
    node.innerHTML = html;
    return {
      update(html) {
        node.innerHTML = html;
      },
      destroy() {
        node.innerHTML = '';
      },
    };
  };
</script>

{#if source}
  {#if $staticMarkdown}
    <div>
      {@html markdown}
    </div>
  {:else}
    <div use:setInnerHTML="{markdown}"></div>
  {/if}
{/if}

<style>
  div {
    display: contents;
  }
</style>
