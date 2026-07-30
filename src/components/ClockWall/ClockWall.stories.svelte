<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ClockWall from './ClockWall.svelte';

  const { Story } = defineMeta({
    title: 'Components/Blog/ClockWall',
    component: ClockWall,
    argTypes: {
      clockSize: {
        control: 'select',
        options: ['XS', 'MD', 'LG', 'XL'],
      },
      clockWeight: {
        control: 'select',
        options: ['Light', 'Normal', 'Bold'],
      },
    },
    parameters: {
      // Renders the live wall-clock time, redrawn every 10s, with no way to
      // pin it externally — never visually stable, so skip Chromatic.
      chromatic: { disable: true },
    },
  });
</script>

<Story name="Demo" />
