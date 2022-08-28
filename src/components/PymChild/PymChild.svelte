<!-- @component `PymChild` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/utilities-PymChild--default) -->
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
