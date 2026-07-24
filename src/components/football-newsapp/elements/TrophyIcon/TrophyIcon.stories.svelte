<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TrophyIcon from './TrophyIcon.svelte';

  const { Story } = defineMeta({
    title: 'Components/Football/Elements/TrophyIcon',
    component: TrophyIcon,
    tags: ['autodocs'],
    argTypes: {
      size: { control: 'number' },
    },
  });
</script>

<Story name="Default" args={{ size: 48 }} />
