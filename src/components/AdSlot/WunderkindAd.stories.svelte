<script lang="ts">
  import { Story, Meta } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import adDocs from './stories/docs/wunderkind.md?raw';

  import WunderkindAd from './WunderkindAd.svelte';

  import { withComponentDocs } from './../../docs/utils/withParams';

  const meta = {
    ...withComponentDocs(adDocs),
  };
</script>

<Meta title="Components/WunderkindAd" component="{WunderkindAd}" {...meta} />

<Story name="Default">
  <WunderkindAd />
</Story>
