<script module lang="ts">
  import AdScripts from './AdScripts.svelte';
  import LeaderboardAd from './LeaderboardAd.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';

  const { Story } = defineMeta({
    title: 'Components/Ads & analytics/LeaderboardAd',
    component: LeaderboardAd,
  });
</script>

{#snippet template()}
  <div>
    <AdScripts />
    <LeaderboardAd />
  </div>
{/snippet}

<Story name="Demo" children={template} />

<style>
  div {
    min-height: 200vh;
    background-size: 40px 40px;
    background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
      linear-gradient(to bottom, lightgrey 1px, transparent 1px);
  }
</style>
