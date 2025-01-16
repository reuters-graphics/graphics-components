<script module lang="ts">
  import SponsorshipAd from './SponsorshipAd.svelte';
  // @ts-ignore raw
  import adDocs from './stories/docs/sponsorship.md?raw';
  import { withComponentDocs } from './../../docs/utils/withParams';

  export const meta = {
    title: 'Components/Ads & analytics/SponsorshipAd',
    component: SponsorshipAd,
    ...withComponentDocs(adDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  import AdScripts from './AdScripts.svelte';
</script>

<Template>
  <div>
    <AdScripts />
    <SponsorshipAd />
  </div>
</Template>

<Story name="Default" />
