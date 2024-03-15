<script lang="ts">
  import type { DesktopPlacementName, PlacementName } from './@types/ads';
  import AdSlot from './AdSlot.svelte';

  export let desktopPlacementName: DesktopPlacementName;
  export let mobileBreakpoint = 1024;

  let windowWidth: number;

  const getMobilePlacementName = (
    desktopPlacementName: DesktopPlacementName
  ) => {
    switch (desktopPlacementName) {
      case 'reuters_desktop_leaderboard_atf':
        return 'reuters_mobile_leaderboard' as const;
      case 'reuters_sponsorlogo':
        return 'reuters_sponsorlogo' as const;
      default:
        return 'reuters_mobile_mpu_1' as const;
    }
  };

  const getAdType = (placementName: PlacementName) => {
    switch (placementName) {
      case 'reuters_desktop_leaderboard_atf':
      case 'reuters_mobile_leaderboard':
        return 'leaderboard' as const;
      case 'reuters_sponsorlogo':
        return 'sponsorlogo' as const;
      case 'reuters_mobile_mpu_1':
        return 'mpu' as const;
      case 'reuters_billboard_desktop':
        return 'billboard' as const;
      default:
        return 'native' as const;
    }
  };

  $: placementName =
    windowWidth && windowWidth < mobileBreakpoint
      ? getMobilePlacementName(desktopPlacementName)
      : desktopPlacementName;
  $: adType = getAdType(placementName);
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

{#if windowWidth}
  {#key placementName}
    <AdSlot placementName="{placementName}" adType="{adType}" />
  {/key}
{/if}
