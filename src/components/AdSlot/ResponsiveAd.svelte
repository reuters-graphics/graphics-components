<script lang="ts">
  import type {
    DesktopAdType,
    DesktopPlacementName,
    MobileAdType,
    MobilePlacementName,
  } from './@types/ads';
  import AdSlot from './AdSlot.svelte';

  interface Props {
    desktopPlacementName: DesktopPlacementName;
    mobileBreakpoint?: number;
  }

  let { desktopPlacementName, mobileBreakpoint = 1024 }: Props = $props();

  let windowWidth: number = $state();

  const getMobilePlacementName = (
    desktopPlacementName: DesktopPlacementName
  ): MobilePlacementName => {
    switch (desktopPlacementName) {
      case 'reuters_desktop_leaderboard_atf':
        return 'reuters_mobile_leaderboard';
      case 'reuters_sponsorlogo':
        return 'reuters_sponsorlogo';
      case 'reuters_desktop_native_1':
        return 'reuters_mobile_mpu_1';
      case 'reuters_desktop_native_2':
        return 'reuters_mobile_mpu_2';
      case 'reuters_desktop_native_3':
        return 'reuters_mobile_mpu_3';
      default:
        return 'reuters_mobile_mpu_1';
    }
  };

  const getAdType = (
    placementName: DesktopPlacementName | MobilePlacementName
  ): DesktopAdType | MobileAdType => {
    switch (placementName) {
      case 'reuters_desktop_leaderboard_atf':
      case 'reuters_mobile_leaderboard':
        return 'leaderboard';
      case 'reuters_sponsorlogo':
        return 'sponsorlogo';
      case 'reuters_mobile_mpu_1':
        return 'mpu';
      case 'reuters_mobile_mpu_2':
        return 'native';
      case 'reuters_mobile_mpu_3':
        return 'mpu2';
      case 'reuters_desktop_native_1':
        return 'native';
      case 'reuters_desktop_native_2':
        return 'canvas';
      case 'reuters_desktop_native_3':
        return 'flex';
      default:
        return 'native';
    }
  };

  let placementName =
    $derived(windowWidth && windowWidth < mobileBreakpoint ?
      getMobilePlacementName(desktopPlacementName)
    : desktopPlacementName);
  let adType = $derived(getAdType(placementName));
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

{#if windowWidth}
  {#key placementName}
    <AdSlot {placementName} {adType} />
  {/key}
{/if}
