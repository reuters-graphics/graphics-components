<script lang="ts">
  /**
   * Generic small multiples grid component
   * Reusable across different chart types (LineChart, BarChart, etc.)
   * Uses slots for maximum flexibility
   */

  import type { Snippet } from 'svelte';

  interface GridItem {
    id: string;
    title?: string;
    [key: string]: any;
  }

  interface Props {
    items: GridItem[];
    columnsPerRow?: number;
    gap?: number;
    children?: Snippet<[GridItem]>;
  }

  let { items, columnsPerRow = 2, gap = 24, children }: Props = $props();

  const gridColumns = `repeat(${columnsPerRow}, 1fr)`;
</script>

<div class="chart-grid" style="--grid-columns: {gridColumns}; --gap: {gap}px;">
  {#each items as item (item.id)}
    <div class="grid-item">
      {#if item.title}
        <h3 class="item-title">{item.title}</h3>
      {/if}
      <div class="chart-container">
        {#if children}
          {@render children(item)}
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  :global(.chart-grid) {
    width: 100%;
    display: grid;
    grid-template-columns: var(--grid-columns);
    gap: var(--gap);
  }

  :global(.grid-item) {
    display: flex;
    flex-direction: column;
  }

  :global(.item-title) {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 12px 0;
    color: #333;
  }

  :global(.chart-container) {
    flex: 1;
  }
</style>
