<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import ReferralBlock from './ReferralBlock.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      section: {
        control: 'select',
        options: [
          '/world/',
          '/world/europe/',
          '/lifestyle/',
          '/lifestyle/sports/',
          '/legal/',
          '/business/',
          '/business/energy/',
        ],
      },
      number: {
        control: 'select',
        options: [2, 4, 6, 8],
      },
    },
  };
</script>

<Meta
  title="Components/ReferralBlock"
  component="{ReferralBlock}"
  {...metaProps}
/>

<Template let:args>
  <ReferralBlock {...args} />
</Template>

<Story
  name="Default"
  args="{{
    section: '/lifestyle/sports/',
    number: 4,
    class: 'fmy-5',
    heading: 'More World Cup coverage',
  }}"
/>
