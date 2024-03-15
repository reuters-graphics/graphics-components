<script lang="ts">
  import Block from '../Block/Block.svelte';
  import { DesktopPlacementName } from './@types/ads';
  import ResponsiveAd from './ResponsiveAd.svelte';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  let cls: string = 'my-12';
  export { cls as class };

  const desktopPlacementName: DesktopPlacementName = 'reuters_desktop_native_1';
</script>

<!-- @component `InlineAd` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-InlineAd--default) -->
<Block id="{id}" class="freestar-adslot {cls}">
  <div class="ad-block">
    <div class="ad-label">Advertisement · Scroll to continue</div>
    <div class="ad-container">
      <div class="ad-slot__inner">
        <div>
          <ResponsiveAd desktopPlacementName="{desktopPlacementName}" />
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
