<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import Byline from './Byline.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      align: {
        control: 'select',
        options: ['left', 'center'],
      },
    },
  };
</script>

<Meta title="Components/Byline" component="{Byline}" {...metaProps} />

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
