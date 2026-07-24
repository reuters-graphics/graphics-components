<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MatchCard from './MatchCard.svelte';
  import type { Contestant, Goal, Card, SideScore } from '../../types';

  // Mock ambient `getTeam` service — returns a `{ slug, name }` for any input
  // so the child `Flag` can resolve its slug (it falls back to an inlined
  // placeholder flag image when no `resolveFlag` is supplied).
  const getTeam = (code: string) => ({
    slug: String(code).toLowerCase().replace(/\s+/g, '-'),
    name: String(code),
  });

  const england: Contestant = {
    id: '1',
    name: 'England',
    code: 'ENG',
    shortName: 'England',
    position: 'home',
  };
  const brazil: Contestant = {
    id: '2',
    name: 'Brazil',
    code: 'BRA',
    shortName: 'Brazil',
    position: 'away',
  };

  const homeScore: SideScore = { score: 2, pen: 0 };
  const awayScore: SideScore = { score: 1, pen: 0 };

  const homeEvents: (Goal | Card)[] = [
    { contestantId: '1', type: 'G', timeMin: 23, scorerName: 'H. Kane' },
    { contestantId: '1', type: 'PG', timeMin: 57, scorerName: 'H. Kane' },
  ];
  const awayEvents: (Goal | Card)[] = [
    { contestantId: '2', type: 'G', timeMin: 41, scorerName: 'Vinícius Jr' },
    { contestantId: '2', type: 'RC', timeMin: 88, playerName: 'Casemiro' },
  ];

  const { Story } = defineMeta({
    title: 'Components/Football/MatchCard',
    component: MatchCard,
    tags: ['autodocs'],
    // Ambient services passed as props so the card renders standalone.
    args: {
      getTeam,
      linkBase: '',
      embed: false,
      windowWidth: 1000,
      flagLink: false,
      loading: false,
    },
    argTypes: {
      isFixture: { control: 'boolean' },
      isLive: { control: 'boolean' },
      overtime: { control: 'boolean' },
      loading: { control: 'boolean' },
      windowWidth: { control: { type: 'number', min: 240, max: 1400 } },
    },
  });
</script>

<Story
  name="Finished match"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    homeScore,
    awayScore,
    homeEvents,
    awayEvents,
    dateStamp: { month: 'Jun', day: '12' },
    isGroupStage: true,
  }}
/>

<Story
  name="Live match"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    isLive: true,
    matchTime: "67'",
    homeScore: { score: 1, pen: 0 },
    awayScore: { score: 1, pen: 0 },
    homeEvents: [
      { contestantId: '1', type: 'G', timeMin: 34, scorerName: 'B. Saka' },
    ],
    awayEvents: [
      { contestantId: '2', type: 'G', timeMin: 52, scorerName: 'Rodrygo' },
    ],
  }}
/>

<Story
  name="Extra time (AET) with shoot-out"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    overtime: true,
    homeScore: { score: 1, pen: 4 },
    awayScore: { score: 1, pen: 3 },
    dateStamp: { month: 'Jul', day: '9' },
  }}
/>

<Story
  name="Upcoming fixture"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    isFixture: true,
    dateStamp: { month: 'Jun', day: '12', time: '20:00' },
    isGroupStage: true,
  }}
/>

<Story
  name="Loading"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    loading: true,
    isFixture: true,
    dateStamp: { month: 'Jun', day: '12', time: '20:00' },
  }}
/>
