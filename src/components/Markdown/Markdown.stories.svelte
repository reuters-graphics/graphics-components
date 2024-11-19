<script context="module" lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import Markdown from './Markdown.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Text elements/Markdown',
    component: Markdown,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  import Block from '../Block/Block.svelte';
</script>

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
