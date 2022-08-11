<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import Framer from './Framer.svelte';

  import {
    withComponentDocs
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Utilities/Framer',
    component: Framer,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Framer {...args} />
</Template>

<Story
  name="Default"
  args={{
    embeds: [
      'https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/?zzz',
    ],
  }}
/>
