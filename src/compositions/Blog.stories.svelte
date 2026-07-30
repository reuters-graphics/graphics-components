<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, within } from 'storybook/test';
  import Headline from '../components/Headline/Headline.svelte';
  import ClockWall from '../components/ClockWall/ClockWall.svelte';
  import BlogTOC from '../components/BlogTOC/BlogTOC.svelte';
  import BlogPost from '../components/BlogPost/BlogPost.svelte';
  import BodyText from '../components/BodyText/BodyText.svelte';

  // A live-news blog page pairs a Headline with a ClockWall for the cities in
  // the story, a BlogTOC linking to every post published so far, and a series
  // of BlogPost entries as the story develops.

  const { Story } = defineMeta({
    title: 'Compositions/Blog',
    parameters: {
      // This is a documentation-only composition, so hide the controls table.
      controls: { disable: true },
      // ClockWall redraws the real wall-clock time on a timer — there's no
      // CSS animation to pause, so skip Chromatic entirely rather than try
      // to pin it (matches ClockWall's own story, which does the same).
      chromatic: { disable: true },
    },
  });

  // Smoke-test the composed page: a `play` function turns this story into an
  // interaction test that fails if any composed component stops rendering
  // its key furniture.
  async function smokeTest({ canvasElement }: { canvasElement: HTMLElement }) {
    const canvas = within(canvasElement);
    // The headline opens the page.
    await expect(
      canvas.getByText('Maps of the Iran crisis')
    ).toBeInTheDocument();
    // ClockWall renders a clock for each city.
    await expect(canvas.getByText('Tehran')).toBeInTheDocument();
    // BlogTOC renders its toggle button.
    await expect(canvas.getByText('Show all articles')).toBeInTheDocument();
    // The first BlogPost renders its body text.
    await expect(
      canvas.getByText(
        'Iran launched a barrage of ballistic missiles at Israel on Tuesday in its first direct attack on Israeli territory, marking a significant escalation in the conflict gripping the Middle East.'
      )
    ).toBeInTheDocument();
  }

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

<Story name="Demo" asChild play={smokeTest}>
  <Headline
    section="Graphics"
    hed="Maps of the Iran crisis"
    hedSize="big"
    width="normal"
    class="mb-2"
  />

  <ClockWall
    cities={[
      { name: 'Tehran', tzIdentifier: 'Asia/Tehran' },
      { name: 'Tel Aviv', tzIdentifier: 'Asia/Tel_Aviv' },
      { name: 'Washington D.C.', tzIdentifier: 'America/New_York' },
    ]}
  />

  <BlogTOC {posts} />

  <BlogPost
    title="Iran fires ballistic missiles at Israel in major escalation"
    slugTitle="Iran fires ballistic missiles at Israel in major escalation"
    authors={['John Smith', 'Jane Doe']}
    publishTime="2024-10-01T18:30:00Z"
    updateTime="2024-10-01T21:45:00Z"
  >
    <BodyText
      text="Iran launched a barrage of ballistic missiles at Israel on Tuesday in its first direct attack on Israeli territory, marking a significant escalation in the conflict gripping the Middle East."
    />
    <BodyText
      text="The attack, which Iran said was in retaliation for Israeli strikes that killed senior Hezbollah and Hamas leaders, prompted Israel and the United States to vow a response."
    />
  </BlogPost>
</Story>
