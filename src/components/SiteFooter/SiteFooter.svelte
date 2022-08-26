<script lang="ts">
  import QuickLinks from './QuickLinks.svelte';
  import CompanyLinks from './CompanyLinks.svelte';
  import LegalLinks from './LegalLinks.svelte';
  import Referrals from './Referrals/index.svelte';

  import data from './data.json';

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
</script>

<footer
  style="{`
    --nav-background: var(--theme-colour-background, #fff);
    --nav-primary: var(--theme-colour-text-primary, #404040);
    --nav-rules: var(--theme-colour-brand-rules, #d0d0d0);
  `}"
>
  <div>
    <Referrals referrals="{referrals}" />
    <QuickLinks links="{data[0]}" />
    <CompanyLinks links="{data[0]}" />
    <LegalLinks links="{data[0]}" />
  </div>
</footer>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  footer {
    margin-top: 0;
    background-color: var(--nav-background, #fff);
    div {
      max-width: 1400px;
      margin: 0 auto;
    }
    :global {
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
