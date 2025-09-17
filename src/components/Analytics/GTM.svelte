<script lang="ts">
  const GTM_ID = 'GTM-P9TTSWG2';
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  <link href="https://www.googletagmanager.com" rel="preconnect" />
  <script>
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
  </script>
  <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}>
  </script>
  <!-- End Google Tag Manager -->
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe
    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
    height="0"
    width="0"
    style="display:none;visibility:hidden"
    title=""
  ></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
