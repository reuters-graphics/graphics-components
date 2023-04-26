<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import Framer from './Framer.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Utilities/Framer"
  component="{Framer}"
  {...withComponentDocs(componentDocs)}
/>

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
