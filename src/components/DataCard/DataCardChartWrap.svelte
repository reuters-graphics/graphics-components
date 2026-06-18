<!-- @component `DataCardChartWrap`

A positioned, flex-growing wrapper for a chart or other visual placed inside a
`DataCard`. Fills the remaining card height when siblings are fixed-size. -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** The chart or visual to wrap. */
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="data-card-chart-wrap">
  {@render children()}
</div>

<style lang="scss">
  .data-card-chart-wrap {
    position: relative;
    /* Grows to fill remaining card height when siblings are fixed-size */
    flex: 1;
    min-height: 0;
  }
</style>
