<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `SponsorshipAd` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ads-analytics-sponsorshipad--docs) -->
<script lang="ts">
  import Block from '../Block/Block.svelte';
  import type { SponsorshipAdType } from './@types/ads';
  import ResponsiveAd from './ResponsiveAd.svelte';

  interface Props {
    /** Add an ID to target with SCSS. */
    id?: string;
    /** Add a class to target with SCSS. */
    class?: string;
    /**
     * Label placed directly above the sponsorship ad
     */
    adLabel?: string;
  }

  let { id = '', class: cls = 'my-12', adLabel = '' }: Props = $props();

  const desktopPlacementName: SponsorshipAdType['desktop']['placementName'] =
    'reuters_sponsorlogo';
</script>

<Block {id} class="freestar-adslot {cls}">
  <div class="ad-block">
    {#if adLabel}
      <div class="ad-label">
        <div>{adLabel}</div>
      </div>
    {/if}
    <div class="ad-container">
      <div class="ad-slot__inner">
        <div>
          <ResponsiveAd {desktopPlacementName} />
        </div>
      </div>
    </div>
  </div>
</Block>

<style lang="scss">
  div.ad-block {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    div.ad-label {
      font-family: Knowledge, 'Source Sans Pro', Arial, Helvetica, sans-serif;
      font-size: 12px;
      margin: 0;
      line-height: 1.333;
      color: var(--theme-colour-text-secondary);
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }
    div.ad-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 32px;
      div.ad-slot__inner {
        margin: auto 0;
        width: 100%;
        max-width: 100%;
        flex: unset;
        & > div {
          display: block;
          :global(div[data-freestar-ad]) {
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
