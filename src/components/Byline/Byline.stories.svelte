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
        options: ['auto', 'center'],
      },
    },
  });
</script>

<Story
  name="Demo"
  args={{
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

<Story name="Customised" tags={['!autodocs', '!dev']}>
  <Byline publishTime="2021-09-12T00:00:00Z" updateTime="2021-09-12T13:57:00Z">
    {#snippet byline()}
      <strong>BY REUTERS GRAPHICS</strong>
    {/snippet}
    {#snippet published()}
      PUBLISHED on some custom date and time
    {/snippet}
    {#snippet updated()}
      <em>Updated every 5 minutes</em>
    {/snippet}
  </Byline>
</Story>

<Story
  name="Custom author page"
  exportName="CustomAuthorPage"
  tags={['!autodocs', '!dev']}
  args={{
    authors: [
      'Dea Bankova',
      'Prasanta Kumar Dutta',
      'Anurag Rao',
      'Mariano Zafra',
    ],
    publishTime: '2021-09-12T00:00:00Z',
    updateTime: '2021-09-12T13:57:00Z',
    getAuthorPage: (author: string) => {
      return `mailto:${author.replace(' ', '')}@example.com`;
    },
  }}
/>
