<script module lang="ts">
  import { defineMeta, type Args } from '@storybook/addon-svelte-csf';
  import Analytics from './Analytics.svelte';

  const { Story } = defineMeta({
    title: 'Components/Ads & analytics/Analytics',
    component: Analytics,
  });
</script>

{#snippet template(args: Args<typeof Story>)}
  <Analytics {...args} />
  <div>Nothing to see here</div>
{/snippet}

<Story
  name="Demo"
  args={{
    authors: [{ name: 'Jane Doe' }, { name: 'John Doe' }],
  }}
  children={template}
/>
