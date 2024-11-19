<!-- @component `SiteFooter` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-SiteFooter--default) -->
<script lang="ts">
  import QuickLinks from './QuickLinks.svelte';
  import CompanyLinks from './CompanyLinks.svelte';
  import LegalLinks from './LegalLinks.svelte';
  import ReferralBlock from '../ReferralBlock/ReferralBlock.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';

  import starterData from './data.json';
  import { onMount } from 'svelte';

  /**
   * Set to `false` to remove graphics referrals
   */
  export let includeReferrals = true;

  let data = starterData;

  onMount(async () => {
    if (new URL(document.location.href).origin !== 'https://www.reuters.com') {
      return;
    }
    try {
      const response = await fetch(
        'https://www.reuters.com/site-api/footer/?' +
          new URLSearchParams({
            _website: 'reuters',
            outputType: 'json',
          })
      );
      const footerData = await response.json();
      // Dumb verification...
      if (!footerData[0].company_description) return;
      data = footerData;
    } catch {
      console.warn('Unable to fetch site footer data');
    }
  });
</script>

<footer
  class="my-0"
  style="{`
    --nav-background: var(--theme-colour-background, #fff);
    --nav-primary: var(--theme-colour-text-primary, #404040);
    --nav-rules: var(--theme-colour-brand-rules, #d0d0d0);
    --theme-font-family-sans-serif: Knowledge, sans-serif;
  `}"
>
  <div>
    {#if includeReferrals}
      <PaddingReset>
        <ReferralBlock
          heading="More from Reuters Graphics"
          collection="graphics"
          class="fpy-4"
        />
      </PaddingReset>
    {/if}
    <QuickLinks links="{data[0]}" />
    <CompanyLinks links="{data[0]}" />
    <LegalLinks links="{data[0]}" />
  </div>
</footer>

<style lang="scss">
  footer {
    margin-top: 0;
    background-color: var(--nav-background, #fff);
    div {
      max-width: 1400px;
      margin: 0 auto;
    }
    :global(a) {
      text-decoration: none;
    }
    :global(a:hover) {
      text-decoration: underline;
    }
  }
</style>
