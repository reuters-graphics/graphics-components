<script context="module" lang="ts">
  import Byline from './Byline.svelte';
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Byline',
    component: Byline,
    ...withComponentDocs(componentDocs),
    argTypes: {
      align: {
        control: 'select',
        options: ['left', 'center'],
      },
    },
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Byline {...args} />
</Template>

<Story
  name="Default"
  args="{{
    align: 'left',
    authors: [
      'Dea Bankova',
      'Aditi Bhandari',
      'Prasanta Kumar Dutta',
      'Anurag Rao',
      'Mariano Zafra',
    ],
    publishTime: new Date('2021-09-12').toISOString(),
    updateTime: new Date('2021-09-12T13:57:00').toISOString(),
  }}"
/>
