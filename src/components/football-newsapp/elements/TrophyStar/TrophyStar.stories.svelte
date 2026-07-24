<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TrophyStar from './TrophyStar.svelte';

  const { Story } = defineMeta({
    title: 'Components/Football/Elements/TrophyStar',
    component: TrophyStar,
    tags: ['autodocs'],
    argTypes: {
      year: { control: 'text' },
      place: { control: 'select', options: ['Winner', 'Runner-up'] },
      width: { control: 'number' },
    },
  });
</script>

<Story name="Winner" args={{ year: 2022, place: 'Winner', width: 48 }} />

<Story name="Runner-up" args={{ year: 2018, place: 'Runner-up', width: 48 }} />
