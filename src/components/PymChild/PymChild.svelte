<!-- @component `PymChild` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-utilities-pymchild--docs) -->
<script lang="ts">
  import pym from 'pym.js';
  import { pymChildState } from './state.svelte.js';
  import { onMount } from 'svelte';

  interface Props {
    /** Pym.js polling interval */
    polling?: number;
  }

  let { polling = 500 }: Props = $props();

  onMount(() => {
    let pymChild = new pym.Child({ polling });
    pymChildState.pymChild = pymChild;
  });
</script>
