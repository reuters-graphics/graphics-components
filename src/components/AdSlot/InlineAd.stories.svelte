<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import adDocs from './stories/docs/inline.md?raw';

  import AdScripts from './AdScripts.svelte';
  import InlineAd from './InlineAd.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Components/InlineAd',
    component: InlineAd,
    ...withComponentDocs(adDocs),
  };
</script>

<Meta title="Components/InlineAd" {...meta} />

<Template let:args>
  <div>
    <AdScripts />
    <InlineAd />
    <InlineAd />
  </div>
</Template>

<Story name="Default" />
