<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ReferralBlock from './ReferralBlock.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page furniture/ReferralBlock',
    component: ReferralBlock,
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
  });
</script>

<Story
  name="Demo"
  args={{
    section: '/lifestyle/sports/',
    class: 'fmy-0',
    heading: 'More World Cup coverage',
  }}
/>

<!-- <Story
  name="By collection"
  exportName="ByCollection"
  args={{
    collection: 'x-trump',
    number: 6,
    class: 'fmy-8',
    heading: 'The latest Trump coverage',
  }}
/> -->
