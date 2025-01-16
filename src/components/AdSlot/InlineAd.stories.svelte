<script module lang="ts">
  import InlineAd from './InlineAd.svelte';
  // @ts-ignore raw
  import adDocs from './stories/docs/inline.md?raw';
  import { withComponentDocs } from './../../docs/utils/withParams';

  export const meta = {
    title: 'Components/Ads & analytics/InlineAd',
    component: InlineAd,
    ...withComponentDocs(adDocs),
  };
</script>

<script lang="ts">
  import { Template, Story } from '@storybook/addon-svelte-csf';
  import AdScripts from './AdScripts.svelte';
</script>

<Template>
  <div>
    <AdScripts />
    <InlineAd />
    <InlineAd />
  </div>
</Template>

<Story name="Default" />
