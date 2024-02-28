<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  type PlacementName =
    // Disabling leaderboard for now...
    // | 'reuters_desktop_leaderboard_atf'
    // | 'reuters_mobile_leaderboard'
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
  let cls: string = 'my-12';
  export { cls as class };

  import { onMount } from 'svelte';

  import Block from '../Block/Block.svelte';

  const random4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  const randomAdId = 'ad-' + random4() + random4();

  const getAdType = (placementName: PlacementName) => {
    switch (placementName) {
      // case 'reuters_desktop_leaderboard_atf':
      // case 'reuters_mobile_leaderboard':
      //   return 'leaderboard';
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
  <div class="ad-block">
    <div class="ad-label">Advertisement · Scroll to continue</div>
    <div class="ad-container">
      <div class="ad-slot__inner">
        <div>
          <div
            data-freestar-ad="{dataFreestarAd || null}"
            id="{randomAdId}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</Block>

<style lang="scss">
  div.ad-block {
    border-bottom: 1px solid var(--theme-colour-brand-rules);
    border-top: 1px solid var(--theme-colour-brand-rules);
    div.ad-label {
      font-family: Knowledge, 'Source Sans Pro', Arial, Helvetica, sans-serif;
      font-size: 14px;
      margin: 6px 0;
      line-height: 1.333;
      color: var(--theme-colour-text-secondary);
      width: 100%;
      text-align: center;
    }
    div.ad-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 415px;
      @media (max-width: 767.9px) {
        min-height: 320px;
      }
      div.ad-slot__inner {
        margin: auto 0;
        width: 100%;
        max-width: 100%;
        flex: unset;
        & > div {
          display: block;
          div[data-freestar-ad] {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
</style>
