<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, userEvent, within, waitFor } from 'storybook/test';
  import BlogTOC from './BlogTOC.svelte';

  const { Story } = defineMeta({
    title: 'Components/Blog/BlogTOC',
    component: BlogTOC,
  });

  const posts = [
    {
      title: 'Iran fires ballistic missiles at Israel in major escalation',
      slugTitle: 'Iran fires ballistic missiles at Israel in major escalation',
      publishTime: '2024-10-01T18:30:00Z',
    },
    {
      title: 'Israel vows response as world leaders call for restraint',
      slugTitle: 'Israel vows response as world leaders call for restraint',
      publishTime: '2024-10-02T09:15:00Z',
    },
    {
      title: 'Oil prices surge amid fears of wider Middle East conflict',
      slugTitle: 'Oil prices surge amid fears of wider Middle East conflict',
      publishTime: '2024-10-02T14:00:00Z',
    },
    {
      title:
        'UN Security Council holds emergency session on Iran-Israel crisis',
      slugTitle:
        'UN Security Council holds emergency session on Iran-Israel crisis',
      publishTime: '2024-10-03T11:00:00Z',
    },
    {
      title: 'Iran says missile attack achieved its objectives',
      slugTitle: 'Iran says missile attack achieved its objectives',
      publishTime: '2024-10-03T16:30:00Z',
    },
    {
      title: 'Israel launches airstrikes on Hezbollah targets in Lebanon',
      slugTitle: 'Israel launches airstrikes on Hezbollah targets in Lebanon',
      publishTime: '2024-10-04T08:00:00Z',
    },
    {
      title: 'U.S. sends additional warships to Middle East region',
      slugTitle: 'U.S. sends additional warships to Middle East region',
      publishTime: '2024-10-04T13:45:00Z',
    },
  ];
</script>

<!--
  BlogTOC is collapsed by default, so click it open — both to exercise the
  interaction and so the Chromatic snapshot covers the expanded list, not
  just the closed toggle button.
-->
<Story
  name="Demo"
  asChild
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button', { name: /show all articles/i });

    await userEvent.click(toggle);

    await waitFor(() =>
      expect(
        canvas.getByText(
          'Oil prices surge amid fears of wider Middle East conflict'
        )
      ).toBeVisible()
    );
  }}
  parameters={{
    // The list slides open on click; give it a beat to settle before
    // Chromatic snapshots so it doesn't land mid-transition. The infinite
    // scroll-hint animations inside the list carry their own
    // data-chromatic="ignore" markers (see BlogTOC.svelte), since they never
    // settle.
    chromatic: { delay: 400 },
  }}
>
  <BlogTOC {posts} />
</Story>
