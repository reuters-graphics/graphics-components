<script module lang="ts">
  import AdScripts from './AdScripts.svelte';
  import InlineAd from './InlineAd.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';

  const { Story } = defineMeta({
    title: 'Components/Ads & analytics/InlineAd',
    component: InlineAd,
  });
</script>

{#snippet template()}
  <div>
    <AdScripts />
    <InlineAd />
    <InlineAd />
  </div>
{/snippet}

<Story name="Demo" children={template} />
