<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SiteHeadline from './SiteHeadline.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/SiteHeadline',
    component: SiteHeadline,
    argTypes: {
      hedSize: {
        control: 'select',
        options: ['small', 'normal', 'big'],
      },
    },
  });
</script>

<script>
  const content = {
    section: 'Global News',
    hed: 'A beautiful page',
    authors: 'Samuel Granados, Dea Bankova',
    published: '2022-09-12T08:30:00.000Z',
    updated: '',
  };
</script>

<Story
  name="Demo"
  args={{
    hed: 'Ukraine makes surprising gains in counteroffensive',
    authors: [
      'Dea Bankova',
      'Michael Ovaska',
      'Samuel Granados',
      'Prasanta Kumar Dutta',
    ],
    publishTime: new Date('2021-09-12').toISOString(),
    updateTime: new Date('2021-09-12T13:57:00').toISOString(),
  }}
/>

<Story name="ArchieML" tags={['!autodocs', '!dev']}>
  <SiteHeadline
    hed={content.hed}
    section={content.section}
    authors={content.authors.split(',')}
    publishTime={content.published}
  />
</Story>
