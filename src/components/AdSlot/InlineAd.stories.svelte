<script lang="ts">
  import { Template, Story, Meta } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import adDocs from './stories/docs/inline.md?raw';

  import AdScripts from './AdScripts.svelte';
  import InlineAd from './InlineAd.svelte';

  import { withComponentDocs } from './../../docs/utils/withParams';

  const meta = {
    ...withComponentDocs(adDocs),
  };
</script>

<Meta title="Components/InlineAd" component="{InlineAd}" {...meta} />

<Template>
  <div>
    <AdScripts />
    <InlineAd />
    <InlineAd />
  </div>
</Template>

<Story name="Default" />
