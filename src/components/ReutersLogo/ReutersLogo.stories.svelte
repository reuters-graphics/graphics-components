<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import ReutersLogo from './ReutersLogo.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      logoColour: { control: 'color' },
      textColour: { control: 'color' },
    },
  };
</script>

<Meta title="Components/ReutersLogo" component="{ReutersLogo}" {...metaProps} />

<Template let:args>
  <ReutersLogo {...args} />
</Template>

<Story name="Default" />
