<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SiteFooter from './SiteFooter.svelte';
  import Theme from '../Theme/Theme.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page furniture/SiteFooter',
    component: SiteFooter,
  });
</script>

<Story name="Demo" />

<Story name="Customised theme">
  <div>
    <Theme base="dark">
      <SiteFooter />
    </Theme>
  </div>
</Story>

<Story name="Remove referrals" args={{ includeReferrals: false }} />

<style>
  div {
    width: calc(100% + 30px);
    margin-left: -15px;
  }
</style>
