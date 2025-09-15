<!-- @component `Analytics` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ads-analytics-analytics--docs) -->

<script module>
  // GTM configuration
  const GTM_ID = 'GTM-P9TTSWG2';
  const GTM_SCRIPT=`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`

  import { registerPageview as registerChartbeatPageview } from './providers/chartbeat';
  import { registerPageview as registerGAPageview } from './providers/ga';

  /** Register virtual pageviews when using client-side routing in multipage applications. */
  function registerPageview() {
    registerChartbeatPageview();
    registerGAPageview();
  }

  export { registerPageview };
</script>

<script lang="ts">
  interface Author {
    name: string;
  }

  import { onMount } from 'svelte';
  import { ga, chartbeat } from './providers';
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
  });
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  {@html `<${'script'}>${GTM_SCRIPT}</script>`}
  <!-- End Google Tag Manager -->
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id={GTM_ID}"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
