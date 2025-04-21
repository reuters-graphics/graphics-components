<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ReutersLogo from './ReutersLogo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Logos/ReutersLogo',
    component: ReutersLogo,
    argTypes: {
      logoColour: { control: 'color' },
      textColour: { control: 'color' },
    },
  });
</script>

<Story name="Demo" />
