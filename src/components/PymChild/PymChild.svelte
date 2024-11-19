<!-- @component `PymChild` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-pymchild--docs) -->
<script lang="ts">
  /** Pym.js polling interval */
  export let polling: number = 500;

  import { onMount } from 'svelte';
  import pym from 'pym.js';
  import { pymChildStore } from './stores.js';

  let pymChild;

  onMount(() => {
    pymChild = new pym.Child({ polling });
    pymChildStore.set(pymChild);
  });
</script>
