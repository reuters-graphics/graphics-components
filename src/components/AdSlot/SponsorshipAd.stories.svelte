<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import adDocs from './stories/docs/sponsorship.md?raw';

  import AdScripts from './AdScripts.svelte';
  import SponsorshipAd from './SponsorshipAd.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Components/SponsorshipAd',
    component: SponsorshipAd,
    ...withComponentDocs(adDocs),
  };
</script>

<Meta title="Components/SponsorshipAd" {...meta} />

<Template let:args>
  <div>
    <AdScripts />
    <SponsorshipAd />
  </div>
</Template>

<Story name="Default" />
