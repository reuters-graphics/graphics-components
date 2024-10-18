<script>
  import { onMount } from 'svelte';
  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://www.dianomi.com/js/contextfeed.js';
    script.id = 'dianomi_context_script';
    document.head.appendChild(script);
  });
</script>

<div class="dianomi_context" data-dianomi-context-id="1948"></div>
