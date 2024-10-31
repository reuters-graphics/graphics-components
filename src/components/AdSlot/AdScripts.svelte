<script lang="ts">
  import { onMount } from 'svelte';
  import { loadBootstrap } from './adScripts/bootstrap';
  import { loadScript } from './adScripts/loadScript';
  import OneTrust from './OneTrust.svelte';

  onMount(() => {
    window.graphicsAdQueue = window.graphicsAdQueue || [];
    loadBootstrap();
    // Load Freestar script
    loadScript('https://a.pub.network/reuters-com/pubfig.min.js');
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://a.pub.network/" crossorigin="" />
  <link rel="preconnect" href="https://b.pub.network/" crossorigin="" />
  <link rel="preconnect" href="https://c.pub.network/" crossorigin="" />
  <link rel="preconnect" href="https://d.pub.network/" crossorigin="" />
  <link rel="preconnect" href="https://c.amazon-adsystem.com" crossorigin="" />
  <link rel="preconnect" href="https://s.amazon-adsystem.com" crossorigin="" />
  <link rel="preconnect" href="https://btloader.com/" crossorigin="" />
  <link rel="preconnect" href="https://api.btloader.com/" crossorigin="" />
  <link
    rel="preconnect"
    href="https://confiant-integrations.global.ssl.fastly.net"
    crossorigin=""
  />
  <link rel="stylesheet" href="https://a.pub.network/reuters-com/cls.css" />
</svelte:head>

<OneTrust />
