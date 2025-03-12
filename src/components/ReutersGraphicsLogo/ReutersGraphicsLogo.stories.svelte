<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ReutersGraphicsLogo from './ReutersGraphicsLogo.svelte';
  const { Story } = defineMeta({
    title: 'Components/Logos/ReutersGraphicsLogo',
    component: ReutersGraphicsLogo,
    argTypes: {
      logoColour: { control: 'color' },
      textColour: { control: 'color' },
    },
  });
</script>

<Story name="Demo" />
