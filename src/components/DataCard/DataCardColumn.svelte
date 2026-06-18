<!-- @component `DataCardColumn`

A single value column inside a `DataCardColumns` row. Flexes to share the row's
width evenly with its siblings, so you don't have to hand-roll `flex` styles on
a wrapper `div`. -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** The column's content, e.g. a `DataCardBigNumber` and a `DataCardLabel`. */
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="data-card-column">
  {@render children()}
</div>

<style lang="scss">
  .data-card-column {
    flex: 1 1 0;
    min-width: 0;
  }
</style>
