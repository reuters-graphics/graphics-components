<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import AdScripts from './AdScripts.svelte';
  import SponsorshipAd from './SponsorshipAd.svelte';

  const { Story } = defineMeta({
    title: 'Components/Ads & analytics/SponsorshipAd',
    component: SponsorshipAd,
  });
</script>

{#snippet template()}
  <div>
    <AdScripts />
    <SponsorshipAd />
  </div>
{/snippet}

<Story name="Demo" children={template} />
