<script>
  import { onMount } from 'svelte';
  import FreestarAdSlot from '@freestar/pubfig-adslot-vue-component';

  const adSlot = {
    placementName: 'div-ad-leaderboard-multi',
    slotId: 'div-ad-leaderboard-multi',
    targeting: { key1: 'value1', key2: 'value2' },
  };
  const channel = 'custom_channel';
  const classList = ['m-30', 'p-15', 'b-thin-red'];
  let adRefreshCount = 0;

  const onNewAdSlotsHook = (placementName) => {
    console.log('freestar.newAdSlots() was called', { placementName });
  };

  const onDeleteAdSlotsHook = (placementName) => {
    console.log('freestar.deleteAdSlots() was called', { placementName });
  };

  const onAdRefreshHook = (placementName) => {
    console.log('adRefresh was called', { placementName });
  };

  const onAdRefresh = () => {
    adRefreshCount += 1;
  };

  const createAdRefreshExample = () => {
    const interval = setInterval(() => {
      const maxRefreshes = 5;
      adRefreshCount += 1;
      if (adRefreshCount === maxRefreshes) {
        clearInterval(interval);
      }
    }, 5000);
  };

  onMount(() => {
    createAdRefreshExample();
  });
</script>

<template>
  <div>
    <FreestarAdSlot
      ad-refresh="{adRefreshCount}"
      placement-name="{adSlot.placementName}"
      targeting="{adSlot.targeting}"
      channel="{channel}"
      classList="{classList}"
      on:new-ad-slots="{onNewAdSlotsHook}"
      on:delete-ad-slots="{onDeleteAdSlotsHook}"
      on:ad-refresh="{onAdRefreshHook}"
    />
    <button on:click="{onAdRefresh}"> Trigger Refresh </button>
  </div>
</template>
