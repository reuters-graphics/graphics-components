<script lang="ts">
  import type {
    DesktopAdType,
    DesktopPlacementName,
    MobileAdType,
    MobilePlacementName,
  } from './@types/ads';
  import { onMount } from 'svelte';
  import { getRandomAdId } from './utils';

  export let placementName: DesktopPlacementName | MobilePlacementName;
  export let adType: DesktopAdType | MobileAdType;

  /**
   * @TODO Unclear at what level this bit of config is used with placements...
   */
  export let dataFreestarAd: string = '__970x250';

  const adId = getRandomAdId();

  onMount(() => {
    const adSlot = {
      placementName,
      slotId: adId,
      targeting: {
        div_id: placementName,
        type: adType,
      },
    };
    // @ts-ignore window global
    const freestar = window?.freestar;
    // Add adSlot to freestar queue directly if already initialised
    if (freestar) {
      freestar.queue.push(function () {
        freestar.newAdSlots([adSlot], freestar.config.channel);
      });
      // ... otherwise add to the graphicsAdQueue queue.
    } else {
      window.graphicsAdQueue = window.graphicsAdQueue || [];
      window.graphicsAdQueue.push(adSlot);
    }

    return () => {
      // @ts-ignore window global
      const freestar = window?.freestar;
      if (freestar) {
        freestar.queue.push(function () {
          freestar.deleteAdSlots(adId);
        });
      }
    };
  });
</script>

<div data-freestar-ad="{dataFreestarAd || null}" id="{adId}"></div>
