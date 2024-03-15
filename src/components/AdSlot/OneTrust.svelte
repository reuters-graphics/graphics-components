<!-- This component manages the OneTrust prefs button, so it's not permanently fixed on page... -->
<script>
  import { onMount } from 'svelte';
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
    window.addEventListener('scroll', throttle(handleScroll, 250), {
      passive: true,
    });
  });
</script>
