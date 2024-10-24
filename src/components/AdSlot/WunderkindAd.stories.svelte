<script lang="ts">
  import { Template, Story, Meta } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import adDocs from './stories/docs/wunderkind.md?raw';

  import AdScripts from './AdScripts.svelte';
  import WunderkindAd from './WunderkindAd.svelte';

  import { withComponentDocs } from './../../docs/utils/withParams';

  const meta = {
    ...withComponentDocs(adDocs),
  };
</script>

<Meta title="Components/WunderkindAd" component="{WunderkindAd}" {...meta} />

<Template>
  <div>
    <AdScripts />
    <WunderkindAd />
  </div>
</Template>

<Story name="Default" />
