<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BlogTOC from './BlogTOC.svelte';
  import BlogPost from '../BlogPost/BlogPost.svelte';
  import BodyText from '../BodyText/BodyText.svelte';
  import Headline from '../Headline/Headline.svelte';
  import ClockWall from '../ClockWall/ClockWall.svelte';

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

<Story name="Demo" args={{ posts, base: '' }}>
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

  <BlogTOC {posts} base="" />

  <BlogPost
    title="Iran fires ballistic missiles at Israel in major escalation"
    slugTitle="Iran fires ballistic missiles at Israel in major escalation"
    authors={['John Smith', 'Jane Doe']}
    publishTime="2024-10-01T18:30:00Z"
    updateTime="2024-10-01T21:45:00Z"
    base=""
  >
    <BodyText
      text="Iran launched a barrage of ballistic missiles at Israel on Tuesday in its first direct attack on Israeli territory, marking a significant escalation in the conflict gripping the Middle East."
    />
    <BodyText
      text="The attack, which Iran said was in retaliation for Israeli strikes that killed senior Hezbollah and Hamas leaders, prompted Israel and the United States to vow a response."
    />
  </BlogPost>
</Story>
