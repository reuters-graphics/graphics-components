<script context="module">
  import { registerPageview as registerChartbeatPageview } from './providers/chartbeat';
  import { registerPageview as registerGAPageview } from './providers/ga';
  import { registerPageview as registerParselyPageview } from './providers/parsely';

  /** Register virtual pageviews when using client-side routing in multipage applications. */
  export function registerPageview() {
    registerChartbeatPageview();
    registerGAPageview();
    registerParselyPageview();
  }
</script>

<!-- @component `Analytics` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ads-analytics-analytics--docs) -->
<script lang="ts">
  interface Author {
    name: string;
  }
  /**
   * Used to associate a page with its author(s) in Chartbeat.
   */
  export let authors: Author[] = [];

  import { onMount } from 'svelte';
  import { ga, chartbeat, parsely } from './providers';

  onMount(() => {
    ga();
    chartbeat(authors);
    parsely();
  });
</script>
