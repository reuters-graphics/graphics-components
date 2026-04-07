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
    cls?: string;
    numColumns?: number;
    breakpoint?: number;

    children: Snippet<[GridItem]>;
  }

  let {
    items,
    cls,
    numColumns = 2,
    breakpoint = 768,
    children,
  }: Props = $props();

  let windowWidth = $state(Number.POSITIVE_INFINITY);

  const safeNumColumns = $derived(Math.max(1, Math.floor(numColumns)));
  const isStacked = $derived(windowWidth <= breakpoint);
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div
  class="chart-grid {cls}"
  class:is-stacked={isStacked}
  style={`--columns: ${safeNumColumns};`}
>
  {#each items as item (item.id)}
    <div class="grid-item">
      {#if item.title}
        <h4>{item.title}</h4>
      {/if}
      {@render children(item)}
    </div>
  {/each}
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .chart-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
    gap: 10px;
    margin: auto;

    // outline: 2px solid blue;

    // One column on small screens
    &.is-stacked {
      grid-template-columns: 1fr;
    }
  }

  h4 {
    @include mixins.h4;
  }
</style>
