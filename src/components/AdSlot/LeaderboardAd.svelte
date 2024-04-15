<script lang="ts">
  import { DesktopPlacementName } from './@types/ads';
  import ResponsiveAd from './ResponsiveAd.svelte';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';
  export { cls as class };

  let windowWidth = 1200;
  $: adSize = windowWidth < 1024 ? 110 : 275;

  const desktopPlacementName: DesktopPlacementName =
    'reuters_desktop_leaderboard_atf';
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

<!-- @component `LeaderboardAd` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-LeaderboardAd--default) -->
<div class="leaderboard__sticky {cls}" id="{id}" style="--height: {adSize}px;">
  <div class="ad-block">
    <div class="ad-slot__container">
      <div class="ad-slot__inner">
        <div>
          <ResponsiveAd desktopPlacementName="{desktopPlacementName}" />
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .leaderboard__sticky {
    position: sticky;
    position: initial;
    top: 0;
    transition: top 0.8s ease-in-out;
    z-index: 1030;
  }
  div.ad-block {
    width: 100%;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: var(--height);
    .ad-slot__container {
      min-height: var(--height);
      align-items: center;
      display: flex;
      justify-content: center;
      .ad-slot__inner {
        height: 100%;
        max-width: 100%;
      }
    }
  }
</style>
