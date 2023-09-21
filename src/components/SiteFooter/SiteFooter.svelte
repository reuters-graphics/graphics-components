<!-- @component `SiteFooter` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-SiteFooter--default) -->
<script lang="ts">
  import QuickLinks from './QuickLinks.svelte';
  import CompanyLinks from './CompanyLinks.svelte';
  import LegalLinks from './LegalLinks.svelte';
  import Referrals from './Referrals/index.svelte';

  import starterData from './data.json';
  import starterDataJp from './data-jp.json';
  import { onMount } from 'svelte';

  interface Referral {
    url: URL;
    image: URL;
    title: string;
    description?: string;
  }

  /**
   * Custom referrals to other Reuters Graphics projects
   */
  export let referrals: Referral[] = [];
  export let lang = 'en';

  let data = lang === 'ja' ? starterDataJp : starterData;
  const domain = lang === 'ja' ? 'jp' : 'www';
  const website = lang === 'ja' ? 'reuters-japan' : 'reuters';
  const font =
    lang === 'ja'
      ? '-apple-system, "Hiragino Kaku Gothic Pro", "Meiryo", "MS Pgothic", helvetica, arial, sans-serif'
      : 'Knowledge';

  onMount(async () => {
    if (new URL(document.location.href).origin !== 'https://www.reuters.com') {
      return;
    }
    try {
      const response = await fetch(
        `https://${domain}.reuters.com/site-api/footer/?` +
          new URLSearchParams({
            _website: website,
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
    --theme-font-family-sans-serif: ${font}, sans-serif;
  `}"
>
  <div>
    {#if lang !== 'ja'}
      <Referrals referrals="{referrals}" />
    {/if}
    <QuickLinks links="{data[0]}" lang="{lang}" />
    <CompanyLinks links="{data[0]}" lang="{lang}" />
    <LegalLinks links="{data[0]}" lang="{lang}" />
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
