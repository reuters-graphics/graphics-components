<!-- @component `PymChild` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-pymchild--docs) -->
<script lang="ts">
  

  import { onMount } from 'svelte';
  import pym from 'pym.js';
  import { pymChildStore } from './stores.js';
  interface Props {
    /** Pym.js polling interval */
    polling?: number;
  }

  let { polling = 500 }: Props = $props();

  let pymChild;

  onMount(() => {
    pymChild = new pym.Child({ polling });
    pymChildStore.set(pymChild);
  });
</script>
