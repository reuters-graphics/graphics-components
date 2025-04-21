<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Spinner from './Spinner.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/Spinner',
    component: Spinner,
    argTypes: {
      colour: { control: 'color' },
      ringWidth: { control: { type: 'range', min: 2, max: 20, step: 1 } },
      width: { control: { type: 'range', min: 5, max: 100, step: 5 } },
      speed: { control: { type: 'range', min: 0.2, max: 1.0, step: 0.1 } },
      containerPadding: {
        control: { type: 'range', min: 5, max: 100, step: 5 },
      },
    },
  });
</script>

<Story name="Demo" />
