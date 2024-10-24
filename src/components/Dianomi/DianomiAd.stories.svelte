<script lang="ts">
  import { Story, Meta } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import adDocs from './stories/docs/dianomi.md?raw';

  import DianomiAd from './DianomiAd.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  const meta = {
    ...withComponentDocs(adDocs),
  };
</script>

<Meta title="Components/DianomiAd" component="{DianomiAd}" {...meta} />

<Story name="Default">
  <DianomiAd />
</Story>
