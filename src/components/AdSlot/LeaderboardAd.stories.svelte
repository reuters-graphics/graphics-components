<script module lang="ts">
  import LeaderboardAd from './LeaderboardAd.svelte';
  // @ts-ignore raw
  import adDocs from './stories/docs/leaderboard.md?raw';
  import { withComponentDocs } from './../../docs/utils/withParams';

  export const meta = {
    title: 'Components/Ads & analytics/LeaderboardAd',
    component: LeaderboardAd,
    ...withComponentDocs(adDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
  import AdScripts from './AdScripts.svelte';
</script>

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
