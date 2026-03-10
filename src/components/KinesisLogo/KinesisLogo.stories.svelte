<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import KinesisLogo from './KinesisLogo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Logos/KinesisLogo',
    component: KinesisLogo,
    argTypes: {
      colour: { control: 'color' },
    },
  });
</script>

<Story name="Demo" />
