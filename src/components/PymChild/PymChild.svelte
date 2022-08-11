<script lang="ts">
  /** Pym.js polling interval */
  export let polling: number = 500;

  import { onMount } from 'svelte';
  import pym from 'pym.js';

  // @ts-ignore
  let pymChild;

  onMount(() => {
    pymChild = new pym.Child({ polling });
  });
</script>