<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import Byline from './Byline.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      hedSize: {
        control: 'select',
        options: ['small', 'normal', 'big'],
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
    authors: [
      'Dea Bankova',
      'Michael Ovaska',
      'Samuel Granados',
      'Prasanta Kumar Dutta',
    ],
    publishTime: new Date('2021-09-12').toISOString(),
    updateTime: new Date('2021-09-12T13:57:00').toISOString(),
  }}"
/>
