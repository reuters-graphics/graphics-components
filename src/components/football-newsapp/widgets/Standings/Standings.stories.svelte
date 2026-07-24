<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Standings from './Standings.svelte';
  import type { FootballContextTeam } from '../../context';
  import type { StandingRow } from '../../types';

  // Mock ambient service — passed as a prop so the story renders standalone
  // without a surrounding setFootballContext().
  const TEAMS: Record<string, FootballContextTeam> = {
    ENG: { slug: 'england', name: 'England' },
    NED: { slug: 'netherlands', name: 'Netherlands' },
    SEN: { slug: 'senegal', name: 'Senegal' },
    ECU: { slug: 'ecuador', name: 'Ecuador' },
  };
  const getTeam = (code: string) => TEAMS[code];

  const rows: StandingRow[] = [
    {
      teamId: '1',
      code: 'ENG',
      teamName: 'England',
      rank: 1,
      played: 3,
      won: 2,
      drawn: 1,
      lost: 0,
      goalsFor: 5,
      goalsAgainst: 1,
      goalDifference: 4,
      points: 7,
    },
    {
      teamId: '2',
      code: 'NED',
      teamName: 'Netherlands',
      rank: 2,
      played: 3,
      won: 1,
      drawn: 2,
      lost: 0,
      goalsFor: 4,
      goalsAgainst: 2,
      goalDifference: 2,
      points: 5,
    },
    {
      teamId: '3',
      code: 'SEN',
      teamName: 'Senegal',
      rank: 3,
      played: 3,
      won: 1,
      drawn: 0,
      lost: 2,
      goalsFor: 3,
      goalsAgainst: 4,
      goalDifference: -1,
      points: 3,
    },
    {
      teamId: '4',
      code: 'ECU',
      teamName: 'Ecuador',
      rank: 4,
      played: 3,
      won: 0,
      drawn: 1,
      lost: 2,
      goalsFor: 1,
      goalsAgainst: 6,
      goalDifference: -5,
      points: 1,
    },
  ];

  const { Story } = defineMeta({
    title: 'Components/Football/Standings',
    component: Standings,
    tags: ['autodocs'],
    args: { getTeam },
    argTypes: {
      rows: { control: 'object', description: 'Ranked standings rows.' },
      groupName: { control: 'text' },
      link: { control: 'boolean' },
    },
  });
</script>

<Story name="Group A" args={{ groupName: 'Group A', rows }} />

<Story name="Linked flags" args={{ groupName: 'Group A', rows, link: true }} />

<Story name="No heading" args={{ rows }} />
