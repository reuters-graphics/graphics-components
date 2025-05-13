<!-- @component `LeaderboardAd` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ads-analytics-leaderboardad--docs) -->
<script lang="ts">
  import type { LeaderboardAdType } from './@types/ads';
  import ResponsiveAd from './ResponsiveAd.svelte';
  import { onMount } from 'svelte';

  interface Props {
    /** Add an ID to target with SCSS. */
    id?: string;
    /** Add a class to target with SCSS. */
    class?: string;
  }

  let { id = '', class: cls = '' }: Props = $props();

  let windowWidth = $state(1200);
  let adSize = $derived(windowWidth < 1024 ? 110 : 275);

  const desktopPlacementName: LeaderboardAdType['desktop']['placementName'] =
    'reuters_desktop_leaderboard_atf';

  let sticky = $state(false);
  // Handles transition out... somewhat dumb, but here we are...
  let unstick = $state(false);

  onMount(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= adSize * 1.1) {
        sticky = true;
        setTimeout(() => {
          unstick = true;
          setTimeout(() => {
            sticky = false;
          }, 400);
        }, 1500);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
  class="freestar-adslot leaderboard__sticky {cls}"
  class:sticky
  class:unstick
  {id}
  style="--height: {adSize}px;"
>
  <div class="ad-block">
    <div class="ad-slot__container">
      <div class="ad-slot__inner">
        <div>
          <ResponsiveAd {desktopPlacementName} />
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .leaderboard__sticky {
    position: initial;
    top: -275px;
    transition: top 0.4s ease-in-out;
    z-index: 1030;
    &.sticky {
      position: sticky;
      top: 0px;
    }
    &.unstick {
      top: -275px;
    }
  }
  div.ad-block {
    width: 100%;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: var(--height);
    .ad-slot__container {
      height: 0px;
      min-height: var(--height);
      align-items: center;
      display: flex;
      justify-content: center;
      .ad-slot__inner {
        max-width: 100%;
      }
    }
  }
</style>
