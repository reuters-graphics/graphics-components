<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import adDocs from './stories/docs/sponsorship.md?raw';

  import AdScripts from './AdScripts.svelte';
  import SponsorshipAd from './SponsorshipAd.svelte';

  import { withComponentDocs } from './../../docs/utils/withParams';

  const meta = {
    ...withComponentDocs(adDocs),
  };
</script>

<Meta title="Components/SponsorshipAd" component="{SponsorshipAd}" {...meta} />

<Template>
  <div>
    <AdScripts />
    <SponsorshipAd />
  </div>
</Template>

<Story name="Default" />
