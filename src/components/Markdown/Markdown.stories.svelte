<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import Markdown from './Markdown.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  import Block from '../Block/Block.svelte';

  const metaProps = {
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta title="Components/Markdown" component="{Markdown}" {...metaProps} />

<Template let:args>
  <Block>
    <Markdown {...args} />
  </Block>
</Template>

<Story
  name="Default"
  args="{{
    source: 'This is *some* text in **markdown**.',
  }}"
/>
