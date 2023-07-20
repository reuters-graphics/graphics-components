<script lang="ts">
  import { onMount } from 'svelte';
  import bootstrapLoad from './scripts/bootstrapLoad';

  onMount(() => {
    (<any>window).graphicsAdQueue = (<any>window).graphicsAdQueue || [];
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

  <script
    src="https://graphics.thomsonreuters.com/cdn/js/bootstrap.static.js"
    on:load="{bootstrapLoad}"></script>

  <script
    src="https://a.pub.network/reuters-com/pubfig.min.js"
    data-cfasync="false"
    async></script>
</svelte:head>
