<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TeamCard from './TeamCard.svelte';
  import type { TeamStats } from './types';

  const getTeam = (code: string) => ({
    slug: String(code).toLowerCase().replace(/\s+/g, '-'),
    name: String(code),
  });

  const qualifiedTeam: TeamStats = {
    name: 'Brazil',
    code: 'BRA',
    slug: 'brazil',
    shortName: 'Brazil',
    points: 7,
    results: ['W', 'W', 'D'],
    qualified: true,
  };

  const midTableTeam: TeamStats = {
    name: 'South Korea',
    code: 'KOR',
    slug: 'south-korea',
    shortName: 'S. Korea',
    points: 4,
    results: ['W', 'D', 'L'],
    qualified: false,
  };

  const { Story } = defineMeta({
    title: 'Components/Football/TeamCard',
    component: TeamCard,
    tags: ['autodocs'],
    args: {
      getTeam,
      linkBase: '',
      embed: false,
      windowWidth: 1000,
      link: false,
      loading: false,
    },
    argTypes: {
      link: { control: 'boolean' },
      loading: { control: 'boolean' },
      windowWidth: { control: { type: 'number', min: 240, max: 1400 } },
    },
  });
</script>

<Story name="Qualified team" args={{ teamStats: qualifiedTeam }} />

<Story name="Mid-table team" args={{ teamStats: midTableTeam }} />

<Story name="Linked" args={{ teamStats: qualifiedTeam, link: true }} />

<Story name="Loading" args={{ teamStats: midTableTeam, loading: true }} />
