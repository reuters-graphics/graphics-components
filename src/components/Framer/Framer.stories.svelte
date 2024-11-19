<script context="module" lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import Framer from './Framer.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Framer',
    component: Framer,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Framer {...args} />
</Template>

<Story
  name="Default"
  args="{{
    embeds: [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/?zzz',
    ],
  }}"
/>
