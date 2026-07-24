<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TrophyCabinet from './TrophyCabinet.svelte';

  const { Story } = defineMeta({
    title: 'Components/Football/TrophyCabinet',
    component: TrophyCabinet,
    tags: ['autodocs'],
    argTypes: {
      honours: {
        control: 'object',
        description: 'Array of { year, place } honours.',
      },
      starWidth: {
        control: { type: 'number', min: 12 },
        description: 'Pixel width of each star.',
      },
    },
  });
</script>

<Story
  name="Multiple honours"
  args={{
    honours: [
      { year: 2022, place: 'Winner' },
      { year: 2014, place: 'Winner' },
      { year: 2018, place: 'Runner-up' },
      { year: 2010, place: 'Runner-up' },
    ],
  }}
/>

<Story
  name="Single win"
  args={{ honours: [{ year: 1966, place: 'Winner' }] }}
/>

<Story name="No honours (renders nothing)" args={{ honours: [] }} />
