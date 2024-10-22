<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    // Check user login status
    let isLoggedIn = localStorage.getItem('ArcId.USER_PROFILE') !== null;
    if (!isLoggedIn) {
      const script = document.createElement('script');
      script.textContent = `p
      freestar.config.enabled_slots.push({
        placementName: 'reuters_1x1_bouncex',
        slotId: 'reuters_1x1_bouncex',
      });
    `;
      script.setAttribute('data-cfasync', 'false');
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
  });
</script>

<div id="reuters_1x1_bouncex"></div>
