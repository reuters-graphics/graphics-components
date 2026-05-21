<!-- @component `Analytics` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ads-analytics-analytics--docs) -->
<script module>
  import { registerPageview as registerChartbeatPageview } from './providers/chartbeat';
  import { registerPageview as registerGAPageview } from './providers/ga';

  /** Register virtual pageviews when using client-side routing in multipage applications. */
  function registerPageview() {
    registerChartbeatPageview();
    registerGAPageview();
  }

  export { registerPageview };
  export {
    trackEvent,
    trackPageView,
    trackIdentity,
    createTrackEvent,
  } from './providers/rpta';
</script>

<script lang="ts">
  interface Author {
    name: string;
  }

  import { onMount } from 'svelte';
  import { ga, chartbeat } from './providers';
  import GoogleTagManager from './GTM.svelte';
  import RPTALoader from './RPTALoader.svelte';

  interface Props {
    /**
     * Used to associate a page with its author(s) in Chartbeat.
     */
    authors?: Author[];
    /**
     * Enable RPTA event tracking via Segment. Loads the Segment analytics.js SDK
     * and wires it to RPTA so that trackEvent, trackPageView, and trackIdentity
     * calls are dispatched to downstream providers.
     */
    rpta?: boolean;
  }

  let { authors = [], rpta = false }: Props = $props();

  onMount(() => {
    ga();
    chartbeat(authors);
  });
</script>

<GoogleTagManager />
{#if rpta}
  <RPTALoader />
{/if}
