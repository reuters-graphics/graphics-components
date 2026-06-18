<!-- @component `DataCardTopline`

The bold heading row at the top of a `DataCard`. -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** The topline heading content. */
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<h4 class="data-card-topline">
  {@render children()}
</h4>

<style lang="scss">
  .data-card-topline {
    margin: 0 0 2px 0;
    font-size: var(--dc-topline-size, 12px);
    font-weight: 700;
    color: var(--theme-colour-text-primary, #333);
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
