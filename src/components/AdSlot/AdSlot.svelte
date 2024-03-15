<script lang="ts">
  import type { PlacementName, AdType } from './@types/ads';
  import { onMount } from 'svelte';
  import { getRandomAdId } from './utils';

  export let placementName: PlacementName;
  export let adType: AdType;

  /**
   * @TODO Unclear at what level this bit of config is used with placements...
   */
  export let dataFreestarAd: string = '__970x250';

  const adId = getRandomAdId();

  onMount(() => {
    window.graphicsAdQueue = window.graphicsAdQueue || [];
    window.graphicsAdQueue.push({
      placementName,
      slotId: adId,
      targeting: {
        div_id: adId,
        type: adType,
      },
    });
  });
</script>

<div data-freestar-ad="{dataFreestarAd || null}" id="{adId}"></div>
