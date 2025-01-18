<script lang="ts">
  import type {
    DesktopAdType,
    DesktopPlacementName,
    MobileAdType,
    MobilePlacementName,
  } from './@types/ads';
  import { onMount } from 'svelte';
  import { getRandomAdId } from './utils';

  interface Props {
    placementName: DesktopPlacementName | MobilePlacementName;
    adType: DesktopAdType | MobileAdType;
    /**
     * @TODO Unclear at what level this bit of config is used with placements...
     */
    dataFreestarAd?: string;
  }

  let { placementName, adType, dataFreestarAd = '__970x250' }: Props = $props();

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

<div data-freestar-ad={dataFreestarAd || null} id={adId}></div>

<style>
  :global(div.freestar-adslot:has(.unfulfilled-ad)) {
    display: none;
  }
</style>
