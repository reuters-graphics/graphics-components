<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  type PlacementName =
    | 'reuters_desktop_leaderboard_atf'
    | 'reuters_mobile_leaderboard'
    | 'reuters_desktop_native_1'
    | 'reuters_mobile_mpu_1'
    | 'reuters_sponsorlogo'
    | 'reuters_desktop_canvas';

  /**
   * The unique placement name from FreeStar dashboard.
   * @required
   */
  export let placementName: PlacementName = 'reuters_desktop_native_1';

  /**
   * The unique slot Id from FreeStar dashboard.
   */
  export let dataFreestarAd: string = '__970x250';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  let cls: string = '';
  export { cls as class };

  import { onMount } from 'svelte';

  import Block from '../Block/Block.svelte';

  function getRandomAdId(): string {
    const prefix = 'ad-';
    const idLength = 10;

    const randomChars = Array.from({ length: idLength }, () => {
      const randomCharCode = Math.floor(Math.random() * 36) + 48; // ASCII codes for '0' to '9' and 'a' to 'z'
      return String.fromCharCode(randomCharCode);
    }).join('');

    return prefix + randomChars;
  }

  const randomAdId = getRandomAdId();

  const getAdType = (placementName: PlacementName) => {
    switch (placementName) {
      case 'reuters_desktop_leaderboard_atf':
      case 'reuters_mobile_leaderboard':
        return 'leaderboard';
      case 'reuters_sponsorlogo':
        return 'Sponsorlogo';
      case 'reuters_mobile_mpu_1':
        return 'mpu';
      default:
        return 'native';
    }
  };

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const adstest = urlParams.get('adstest');
    window.graphicsAdQueue = window.graphicsAdQueue || [];
    window.graphicsAdQueue.push({
      placementName,
      slotId: randomAdId,
      type: getAdType(placementName),
      graphicId: window.location.pathname,
      adstest,
    });
  });
</script>

<!-- @component `AdSlot` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-AdSlot--default) -->
<Block id="{id}" class="freestar-adslot {cls}">
  <div data-freestar-ad="{dataFreestarAd || null}" id="{randomAdId}"></div>
</Block>
