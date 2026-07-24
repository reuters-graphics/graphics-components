<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Flag from './Flag.svelte';
  import type { FootballContextTeam } from '../../context';

  // Mock ambient service — passed as a prop so the story renders standalone
  // without a surrounding setFootballContext().
  const TEAMS: Record<string, FootballContextTeam> = {
    ENG: { slug: 'england', name: 'England' },
    BRA: { slug: 'brazil', name: 'Brazil' },
    FRA: { slug: 'france', name: 'France' },
  };
  const getTeam = (code: string) => TEAMS[code];

  const { Story } = defineMeta({
    title: 'Components/Football/Elements/Flag',
    component: Flag,
    tags: ['autodocs'],
    args: { getTeam },
    argTypes: {
      country: { control: 'text', description: 'Team code/slug/name.' },
      circle: { control: 'boolean' },
      link: { control: 'boolean' },
      width: { control: 'text' },
    },
  });
</script>

<Story name="Rectangle" args={{ country: 'ENG', width: '3rem' }} />

<Story name="Circle" args={{ country: 'BRA', circle: true, width: '3rem' }} />

<Story name="Linked" args={{ country: 'FRA', link: true, width: '3rem' }} />

<Story name="Unknown (fallback)" args={{ country: 'ZZZ', width: '3rem' }} />
