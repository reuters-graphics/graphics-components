<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import quickitDocs from './stories/docs/quickit.md?raw';

  import SiteHeadline from './SiteHeadline.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/SiteHeadline',
    component: SiteHeadline,
    ...withComponentDocs(componentDocs),
  };

  const content = {
    Section: 'Global News',
    SectionUrl: '',
    Hed: 'A beautiful page',
    Authors: 'Samuel Granados, Dea Bankova',
    Published: '2022-09-12T08:30:00.000Z',
    Updated: '',
  };
</script>

<Meta {...meta} />

<Template let:args>
  <SiteHeadline {...args} />
</Template>

<Story
  name="Default"
  args="{{
    section: 'Graphics',
    sectionUrl: 'https://graphics.reuters.com',
    hed: 'Ukraine makes surprising gains in swift counteroffensive',
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

<Story name="🚀 QUICKIT" {...withStoryDocs(quickitDocs)}>
  <SiteHeadline
    hed="{content.Hed}"
    section="{content.Section}"
    sectionUrl="{content.SectionUrl}"
    authors="{content.Authors.split(',')}"
    publishTime="{content.Published}"
  />
</Story>

<style lang="scss">
</style>
