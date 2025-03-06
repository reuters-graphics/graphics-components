<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Byline from './Byline.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/Byline',
    component: Byline,
    tags: ['autodocs'],
    argTypes: {
      align: {
        control: 'select',
        options: ['left', 'center'],
      },
    },
  });
</script>

<Story
  name="Default"
  args={{
    align: 'left',
    authors: [
      'Dea Bankova',
      'Prasanta Kumar Dutta',
      'Anurag Rao',
      'Mariano Zafra',
    ],
    publishTime: new Date('2021-09-12').toISOString(),
    updateTime: new Date('2021-09-12T13:57:00').toISOString(),
  }}
/>

<Story name="Custom datelines">
  <Byline
    authors={['Reuters Graphics staff']}
    getAuthorPage={() => `https://www.reuters.com/graphics/`}
    publishTime="2021-09-12T00:00:00Z"
    updateTime="2021-09-12T13:57:00Z"
  >
    {#snippet customPublished()}
      PUBLISHED on some custom date and time
    {/snippet}
    {#snippet customUpdated()}
      <em>Updated every 5 minutes</em>
    {/snippet}
  </Byline>
</Story>
