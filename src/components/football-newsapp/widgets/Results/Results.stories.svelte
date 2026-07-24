<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Results from './Results.svelte';
  import type { FootballContextTeam } from '../../context';
  import type { Match } from '../../types';

  // Mock ambient service — passed as a prop so the story renders standalone.
  const TEAMS: Record<string, FootballContextTeam> = {
    ENG: { slug: 'england', name: 'England' },
    NED: { slug: 'netherlands', name: 'Netherlands' },
    SEN: { slug: 'senegal', name: 'Senegal' },
    ECU: { slug: 'ecuador', name: 'Ecuador' },
  };
  const getTeam = (code: string) => TEAMS[code];

  const contestant = (id: string, code: string, name: string, position: 'home' | 'away') => ({
    id,
    code,
    name,
    shortName: name,
    position,
  });

  const finished = (
    id: string,
    home: [string, string],
    away: [string, string],
    hs: number,
    as: number
  ): Match => ({
    id,
    status: 'Played',
    contestants: [
      contestant(`${id}-h`, home[0], home[1], 'home'),
      contestant(`${id}-a`, away[0], away[1], 'away'),
    ],
    scores: { total: { home: hs, away: as } },
  });

  const matches: Match[] = [
    finished('m1', ['ENG', 'England'], ['SEN', 'Senegal'], 2, 1),
    finished('m2', ['NED', 'Netherlands'], ['ECU', 'Ecuador'], 1, 1),
    {
      id: 'm3',
      status: 'Playing',
      contestants: [
        contestant('m3-h', 'ENG', 'England', 'home'),
        contestant('m3-a', 'NED', 'Netherlands', 'away'),
      ],
      scores: { total: { home: 0, away: 0 } },
    },
    {
      id: 'm4',
      status: 'Fixture',
      contestants: [
        contestant('m4-h', 'SEN', 'Senegal', 'home'),
        contestant('m4-a', 'ECU', 'Ecuador', 'away'),
      ],
    },
  ];

  const { Story } = defineMeta({
    title: 'Components/Football/Results',
    component: Results,
    tags: ['autodocs'],
    args: { getTeam },
    argTypes: {
      matches: { control: 'object', description: 'Matches for the group.' },
      groupName: { control: 'text' },
      link: { control: 'boolean' },
    },
  });
</script>

<Story name="Group A" args={{ groupName: 'Group A', matches }} />

<Story name="Linked flags" args={{ groupName: 'Group A', matches, link: true }} />
