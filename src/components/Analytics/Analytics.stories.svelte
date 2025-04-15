<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Analytics from './Analytics.svelte';

  const { Story } = defineMeta({
    title: 'Components/Ads & analytics/Analytics',
    component: Analytics,
  });
</script>

<Story
  name="Demo"
  tags={['!autodocs', '!dev']}
  args={{
    authors: [{ name: 'Jane Doe' }, { name: 'John Doe' }],
  }}
/>
