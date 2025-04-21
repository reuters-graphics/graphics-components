<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Framer from './Framer.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/Framer',
    component: Framer,
  });
</script>

<Story
  name="Demo"
  args={{
    embeds: [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/?zzz',
      'https://www.reuters.com/graphics/UKRAINE-CRISIS/MAP/klvymdzdrvg/embeds/en/map/',
    ],
  }}
/>
