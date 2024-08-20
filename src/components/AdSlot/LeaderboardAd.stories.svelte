<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import adDocs from './stories/docs/leaderboard.md?raw';

  import AdScripts from './AdScripts.svelte';
  import LeaderboardAd from './LeaderboardAd.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Components/LeaderboardAd',
    component: LeaderboardAd,
    ...withComponentDocs(adDocs),
  };
</script>

<Meta title="Components/LeaderboardAd" {...meta} />

<Template>
  <div>
    <AdScripts />
    <LeaderboardAd />
  </div>
</Template>

<Story name="Default" />

<style>
  div {
    min-height: 200vh;
    background-size: 40px 40px;
    background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
      linear-gradient(to bottom, lightgrey 1px, transparent 1px);
  }
</style>
