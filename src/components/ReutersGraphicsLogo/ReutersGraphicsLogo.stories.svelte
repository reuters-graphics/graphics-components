<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import ReutersGraphicsLogo from './ReutersGraphicsLogo.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Components/ReutersGraphicsLogo',
    component: ReutersGraphicsLogo,
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
  };
</script>

<Meta {...meta} />

<Template let:args>
  <ReutersGraphicsLogo {...args} />
</Template>

<Story name="Default" args="{{}}" />
