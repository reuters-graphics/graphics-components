<script>
  import { onMount } from 'svelte';
  import { loadBootstrap } from './adScripts/bootstrap';
  import { loadScript } from './adScripts/loadScript';
  import { throttle } from 'lodash-es';

  let lastScroll = 0;
  let showManagePreferences = true;

  const togglePrefs = (on = true) => {
    const btn = document.getElementById('ot-sdk-btn-floating');
    if (!btn) return;
    if (on) {
      showManagePreferences = true;
      btn.style.bottom = '';
    } else {
      showManagePreferences = false;
      btn.style.bottom = '-5rem';
    }
  };

  const handleScroll = () => {
    if (lastScroll > window.scrollY) {
      if (!showManagePreferences) {
        togglePrefs(true);
      }
    } else {
      if (showManagePreferences && window.scrollY > 250) {
        togglePrefs(false);
      }
    }
    lastScroll = window.scrollY;
  };

  onMount(() => {
    window.graphicsAdQueue = window.graphicsAdQueue || [];
    loadScript(
      'https://graphics.thomsonreuters.com/cdn/js/bootstrap.static.js',
      loadBootstrap
    );
    window.addEventListener('scroll', throttle(handleScroll, 250), {
      passive: true,
    });
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
