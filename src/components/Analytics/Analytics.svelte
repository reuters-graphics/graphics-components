<!-- @component `Analytics` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ads-analytics-analytics--docs) -->

<script module>
  import { registerPageview as registerChartbeatPageview } from './providers/chartbeat';
  import { registerPageview as registerGAPageview } from './providers/ga';
  import { registerPageview as registerParselyPageview } from './providers/parsely';

  /** Register virtual pageviews when using client-side routing in multipage applications. */
  function registerPageview() {
    registerChartbeatPageview();
    registerGAPageview();
    registerParselyPageview();
  }

  export { registerPageview };
</script>

<script lang="ts">
  interface Author {
    name: string;
  }

  import { onMount } from 'svelte';
  import { ga, chartbeat, parsely } from './providers';
  interface Props {
    /**
     * Used to associate a page with its author(s) in Chartbeat.
     */
    authors?: Author[];
  }

  let { authors = [] }: Props = $props();

  onMount(() => {
    ga();
    chartbeat(authors);
    parsely();
  });
</script>
