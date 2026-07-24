<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MatchStrip from './MatchStrip.svelte';
  import type { Contestant, SideScore } from '../../types';

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

  const { Story } = defineMeta({
    title: 'Components/Football/MatchStrip',
    component: MatchStrip,
    tags: ['autodocs'],
    args: {
      getTeam,
      linkBase: '',
      embed: false,
      loading: false,
      link: false,
    },
    argTypes: {
      isFixture: { control: 'boolean' },
      isLive: { control: 'boolean' },
      overtime: { control: 'boolean' },
      loading: { control: 'boolean' },
    },
  });
</script>

<Story
  name="Finished match"
  args={{ homeTeam: england, awayTeam: brazil, homeScore, awayScore }}
/>

<Story
  name="Live match"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    isLive: true,
    homeScore: { score: 1, pen: 0 },
    awayScore: { score: 1, pen: 0 },
  }}
/>

<Story
  name="Extra time (AET)"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    overtime: true,
    homeScore: { score: 2, pen: 0 },
    awayScore: { score: 2, pen: 0 },
  }}
/>

<Story
  name="Upcoming fixture (date)"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    isFixture: true,
    dateStamp: { month: 'Jun', day: '12', time: '20:00' },
  }}
/>

<Story
  name="Upcoming fixture (time only)"
  args={{
    homeTeam: england,
    awayTeam: brazil,
    isFixture: true,
    showTimeOnly: true,
    dateStamp: { month: 'Jun', day: '12', time: '20:00' },
  }}
/>

<Story
  name="Loading"
  args={{ homeTeam: england, awayTeam: brazil, loading: true, isFixture: true }}
/>
