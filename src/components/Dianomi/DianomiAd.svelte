<script>
  import { onMount } from 'svelte';
  let scriptLoaded = false;

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://www.dianomi.com/js/contextfeed.js';
    script.id = 'dianomi_context_script';
    script.onload = () => {
      scriptLoaded = true;
    };
    document.head.appendChild(script);
  });
</script>

{#if scriptLoaded}
  <div class="dianomi_context" data-dianomi-context-id="1948"></div>
{/if}
