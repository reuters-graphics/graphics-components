<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Countdown from './Countdown.svelte';

  // Mock kick-off times relative to now so the countdown is always live.
  const inDaysHours = new Date(Date.now() + 2 * 86_400_000 + 5 * 3_600_000);
  const inHours = new Date(Date.now() + 3 * 3_600_000 + 42 * 60_000);
  const inMinutes = new Date(Date.now() + 90_000);

  const { Story } = defineMeta({
    title: 'Components/Football/Countdown',
    component: Countdown,
    tags: ['autodocs'],
    argTypes: {
      matchtime: {
        control: 'date',
        description: 'Target kick-off time to count down to.',
      },
    },
  });
</script>

<Story name="Days and hours out" args={{ matchtime: inDaysHours }} />

<Story name="Hours out" args={{ matchtime: inHours }} />

<Story name="Kicking off soon" args={{ matchtime: inMinutes }} />
