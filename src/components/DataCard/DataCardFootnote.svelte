<!-- @component `DataCardFootnote`

A small print footnote pinned to the bottom of a `DataCard` — useful for
source notes or asterisked caveats. -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** The footnote content. */
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="data-card-footnote">
  {@render children()}
</p>

<style lang="scss">
  .data-card-footnote {
    /* Push to card bottom when card is stretched by a taller sibling */
    margin: auto 0 0 0;
    /* A little breathing room above the footnote */
    padding-top: 6px;
    font-size: var(--dc-footnote-size, 10px);
    color: #999;
  }
</style>
