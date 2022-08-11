<script context="module">
  /**
   * Exported preset themes you can use to customise the `theme` prop.
   */
  export const themes = {
    default: {
      background: '#fff',
      primary: '#404040',
      rules: '#d0d0d0',
    },
    dark: {
      background: '#333',
      primary: '#eee',
      rules: '#999',
    },
  };
</script>

<script lang="ts">
  import QuickLinks from './QuickLinks.svelte';
  import CompanyLinks from './CompanyLinks.svelte';
  import LegalLinks from './LegalLinks.svelte';
  import Referrals from './Referrals/index.svelte';

  import data from './data.json';

  interface Theme {
    background?: string;
    primary?: string;
    accent?: string;
    rules?: string;
  }

  /**
   * Pass in a custom theme to control the colours in the header.
   */
  export let theme: Theme = {};
  
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

  const navTheme = { ...themes.default, ...theme };
</script>

<footer
  style="{`
    --nav-background: ${navTheme.background};
    --nav-primary: ${navTheme.primary};
    --nav-rules: ${navTheme.rules};
  `}"
>
  <div>
    <Referrals referrals="{referrals}" />
    <QuickLinks links="{data[0]}" />
    <CompanyLinks links="{data[0]}" />
    <LegalLinks links="{data[0]}" />
  </div>
</footer>

<style lang="scss">
  footer {
    margin-top: 3rem;
    background-color: var(--nav-background, #fff);
    div {
      max-width: 1400px;
      margin: 0 auto;
    }
  }
</style>
