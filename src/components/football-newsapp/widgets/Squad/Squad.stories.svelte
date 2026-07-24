<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Squad from './Squad.svelte';

  const fullSquad = [
    { firstName: 'Thomas', lastName: 'Tuchel', role: 'coach' },
    { firstName: 'Anthony', lastName: 'Barry', role: 'assistant coach' },
    // Goalkeepers
    { matchName: 'Pickford', position: 'Goalkeeper', shirtNumber: 1 },
    { matchName: 'Ramsdale', position: 'Goalkeeper', shirtNumber: 13 },
    { matchName: 'Henderson', position: 'Goalkeeper', shirtNumber: 23 },
    // Defenders
    { matchName: 'Walker', position: 'Defender', shirtNumber: 2 },
    { matchName: 'Stones', position: 'Defender', shirtNumber: 5 },
    { matchName: 'Guéhi', position: 'Defender', shirtNumber: 6 },
    { matchName: 'Trippier', position: 'Defender', shirtNumber: 12 },
    { matchName: 'Konsa', position: 'Defender', shirtNumber: 14 },
    // Midfielders
    { matchName: 'Rice', position: 'Midfielder', shirtNumber: 4 },
    { matchName: 'Bellingham', position: 'Midfielder', shirtNumber: 10 },
    { matchName: 'Mainoo', position: 'Midfielder', shirtNumber: 26 },
    { matchName: 'Gordon', position: 'Midfielder', shirtNumber: 15 },
    // Attackers
    { matchName: 'Kane', position: 'Attacker', shirtNumber: 9 },
    { matchName: 'Foden', position: 'Attacker', shirtNumber: 11 },
    { matchName: 'Saka', position: 'Attacker', shirtNumber: 7 },
    { matchName: 'Watkins', position: 'Attacker', shirtNumber: 18 },
  ];

  const smallSquad = [
    { firstName: 'Jane', lastName: 'Coach', role: 'coach' },
    { matchName: 'Keeper', position: 'Goalkeeper', shirtNumber: 1 },
    { matchName: 'Back', position: 'Defender', shirtNumber: 4 },
    { matchName: 'Mid', position: 'Midfielder', shirtNumber: 8 },
    { matchName: 'Striker', position: 'Attacker', shirtNumber: 9 },
  ];

  const { Story } = defineMeta({
    title: 'Components/Football/Squad',
    component: Squad,
    tags: ['autodocs'],
    argTypes: {
      squad: {
        control: 'object',
        description: 'Array of squad members (coaches + players).',
      },
    },
  });
</script>

<Story name="Full squad" args={{ squad: fullSquad }} />

<Story name="Small squad" args={{ squad: smallSquad }} />

<Story name="Empty (renders nothing)" args={{ squad: [] }} />
