<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  /**
   * The unique placement name from FreeStar dashboard.
   * @required
   */
  export let placementName: string;

  /**
   * The unique slot Id from FreeStar dashboard.
   */
  export let dataFreestarAd: string;

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';

  import { onMount } from 'svelte';

  import Block from '../Block/Block.svelte';

  onMount(() => {
    window.graphicsAdQueue = window.graphicsAdQueue || [];
    window.graphicsAdQueue.push({
      placementName,
      slotId: placementName,
    });
  });
</script>

<!-- @component `AdSlot` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-AdSlot--default) -->
<Block id="{id}" cls="freestar-adslot {cls}">
  <div data-freestar-ad="{dataFreestarAd || null}" id="{placementName}"></div>
</Block>
