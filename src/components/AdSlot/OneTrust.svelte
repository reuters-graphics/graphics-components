<!-- This component manages the OneTrust prefs button, so it's not permanently fixed on page... -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { throttle } from 'es-toolkit';

  let lastScroll = 0;
  let showManagePreferences = true;

  const togglePrefs = (on: boolean = true) => {
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
    if (typeof window === 'undefined') return;
    const throttledHandle = throttle(handleScroll, 250);
    window.addEventListener('scroll', throttledHandle, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', throttledHandle);
    };
  });
</script>
