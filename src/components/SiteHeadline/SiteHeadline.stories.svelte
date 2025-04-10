<script module>
  import SiteHeadline from './SiteHeadline.svelte';
  import { withComponentDocs } from '$lib/docs/utils/withParams.js';
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  export const meta = {
    title: 'Components/Text elements/SiteHeadline',
    component: SiteHeadline,
    ...withComponentDocs(componentDocs),
    argTypes: {
      hedSize: {
        control: 'select',
        options: ['small', 'normal', 'big'],
      },
    },
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import archieML from './stories/docs/archieML.md?raw';

  import { withStoryDocs } from '$lib/docs/utils/withParams.js';

  const content = {
    Section: 'Global News',
    SectionUrl: '',
    Hed: 'A beautiful page',
    Authors: 'Samuel Granados, Dea Bankova',
    Published: '2022-09-12T08:30:00.000Z',
    Updated: '',
  };
</script>

<Template>
  {#snippet children({ args })}
    <SiteHeadline {...args} />
  {/snippet}
</Template>

<Story
  name="Default"
  args={{
    section: 'Graphics',
    sectionUrl: 'https://graphics.reuters.com',
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

<Story name="ArchieML" {...withStoryDocs(archieML)}>
  <SiteHeadline
    hed={content.Hed}
    section={content.Section}
    sectionUrl={content.SectionUrl}
    authors={content.Authors.split(',')}
    publishTime={content.Published}
  />
</Story>
