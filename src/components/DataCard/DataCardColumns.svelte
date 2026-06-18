<!-- @component `DataCardColumns`

A simple flex row for laying out two or more value columns side by side inside a
`DataCard`. -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** The columns to lay out side by side. */
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="data-card-columns">
  {@render children()}
</div>

<style lang="scss">
  .data-card-columns {
    display: flex;
    gap: 4px;
  }
</style>
