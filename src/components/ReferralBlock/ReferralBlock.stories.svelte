<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ReferralBlock from './ReferralBlock.svelte';
  import { referralsApi } from './getReferrals';

  // A handful of fake Reuters.com articles, shaped like the referral API
  // response, so the fetch-backed stories render off the network. The
  // production hostname guard in `getReferrals` is left untouched — we instead
  // flip the overridable `referralsApi.enabled` seam just for these stories.
  const MOCK_ARTICLES = [
    ['World', 'Leaders gather for a summit on shared climate goals'],
    ['Business', 'Markets edge higher as earnings season gets underway'],
    ['Sports', 'Underdogs stun the favorites deep into extra time'],
    ['Technology', 'Chipmakers race to keep pace with surging AI demand'],
    ['Politics', 'Lawmakers spar over a sweeping new budget package'],
    ['Science', 'Astronomers spot a surprisingly bright passing comet'],
    ['Health', 'Researchers report encouraging results from a trial'],
    ['Culture', 'A career retrospective celebrates a beloved director'],
  ].map(([kicker, title], i) => ({
    canonical_url: `/sample/referral-${i}/`,
    title,
    headline_category: kicker,
    kicker: { name: kicker },
    display_time: new Date(Date.now() - i * 36e5).toISOString(),
    thumbnail: {
      url: 'https://placehold.co/240x240',
      alt_text: 'Placeholder image',
    },
  }));

  // Storybook `beforeEach` hook: stub the network fetch and enable the API for
  // the duration of a story, restoring both afterwards. Applied only to the
  // fetch-backed stories; "Manual stories" never reaches the fetch path.
  const mockReferralsFetch = () => {
    const originalFetch = window.fetch;
    const originalEnabled = referralsApi.enabled;

    window.fetch = (async () =>
      new Response(JSON.stringify({ result: { articles: MOCK_ARTICLES } }), {
        headers: { 'Content-Type': 'application/json' },
      })) as typeof window.fetch;
    referralsApi.enabled = () => true;

    return () => {
      window.fetch = originalFetch;
      referralsApi.enabled = originalEnabled;
    };
  };

  const { Story } = defineMeta({
    title: 'Components/Page furniture/ReferralBlock',
    component: ReferralBlock,
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      section: {
        control: 'select',
        options: [
          '/world/',
          '/world/europe/',
          '/lifestyle/',
          '/lifestyle/sports/',
          '/legal/',
          '/business/',
          '/business/energy/',
        ],
      },
      number: {
        control: 'select',
        options: [2, 4, 6, 8],
      },
    },
  });
</script>

<Story
  name="Demo"
  beforeEach={mockReferralsFetch}
  args={{
    section: '/lifestyle/sports/',
    class: 'fmy-0',
    heading: 'More World Cup coverage',
  }}
/>

<Story
  name="By collection"
  exportName="ByCollection"
  beforeEach={mockReferralsFetch}
  args={{
    collection: 'x-trump',
    number: 6,
    class: 'fmy-8',
    heading: 'The latest Trump coverage',
  }}
/>

<Story
  name="Manual stories"
  exportName="ManualStories"
  args={{
    class: 'fmy-0',
    heading: 'Related coverage',
    stories: [
      {
        url: 'https://www.reuters.com/world/europe/',
        kicker: 'Europe',
        title: 'A hand-picked story you provide yourself',
        imageUrl: 'https://placehold.co/240x240',
        imageAlt: 'Placeholder image',
        time: new Date(),
      },
      {
        url: 'https://www.reuters.com/business/energy/',
        kicker: 'Energy',
        title: 'Another one-off referral with no publish time',
        imageUrl: 'https://placehold.co/240x240',
        imageAlt: 'Placeholder image',
      },
    ],
  }}
/>
