<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
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

<Template let:args>
  <div>
    <AdScripts />
    <LeaderboardAd />
  </div>
</Template>

<Story name="Default" />
