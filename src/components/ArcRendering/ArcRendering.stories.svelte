<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ArcRendering from './ArcRendering.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page furniture/ArcRendering',
    component: ArcRendering,
    argTypes: {
      shell: { control: 'boolean' },
      paywall: { control: 'boolean' },
      leaderboardAd: { control: 'boolean' },
    },
  });
</script>

<Story
  name="Default"
  args={{
    shell: true,
    paywall: false,
    leaderboardAd: true,
  }}
>
  {#snippet children(args)}
    <ArcRendering {...args}>
      <p>Page content rendered inside the reuters.com shell.</p>
    </ArcRendering>
  {/snippet}
</Story>
