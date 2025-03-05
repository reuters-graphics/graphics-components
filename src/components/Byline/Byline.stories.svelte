<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Byline from './Byline.svelte';
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  import type { ComponentProps } from 'svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/Byline',
    component: Byline,
    ...withComponentDocs(componentDocs),
    argTypes: {
      align: {
        control: 'select',
        options: ['left', 'center'],
      },
    },
  });
</script>

{#snippet template(args: ComponentProps<Byline>)}
  <Byline {...args} />
{/snippet}

<Story
  name="Default"
  args={{
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
  }}
  children={template}
/>
