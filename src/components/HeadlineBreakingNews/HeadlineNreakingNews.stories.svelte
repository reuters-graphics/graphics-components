<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { apdate } from 'journalize';
  import { marked } from 'marked';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import withByline from './stories/docs/withByline.md?raw';
  // @ts-ignore
  import quickitDocs from './stories/docs/quickit.md?raw';

  import HeadlineBreakingNews from './HeadlineBreakingNews.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/HeadlineBreakingNews',
    component: HeadlineBreakingNews,
    ...withComponentDocs(componentDocs),
  };

  const content = {
    Kicker: 'Global News',
    KickerUrl: '',
    Hed: 'Reuters Graphics Interactive',
    Byline: 'Sherlock Holmes',
    Published: '2022-09-12T08:30:00.000Z',
    Updated: '',
    MarginBottom: '2rem',
  };
</script>

<Meta {...meta} />

<Template let:args>
  <HeadlineBreakingNews {...args} />
</Template>

<Story
  name="Default"
  args="{{
    hed: 'Reuters Graphics interactive',
  }}"
/>

<Story
  name="With byline, dateline, without a link to Reuters Graphics"
  {...withStoryDocs(withByline)}
>
  <HeadlineBreakingNews
    hed="{'Reuters Graphics Interactive'}"
    section="{'World News'}"
    sectionUrl=""
  >
    <!-- Use named slots to add a byline... -->
    <span slot="byline">By <strong>Peppa Pig</strong></span>
    <!-- ...and a dateline. -->
    <span slot="dateline"
      >Published <time datetime="{new Date('2020-01-01').toISOString()}"
        >Jan. 1, 2020</time
      ></span
    >
  </HeadlineBreakingNews>
</Story>

<Story name="🚀 QUICKIT" {...withStoryDocs(quickitDocs)}>
  <HeadlineBreakingNews
    hed="{content.Hed}"
    section="{content.Kicker}"
    sectionUrl="{content.KickerUrl}"
    marginBottom="{content.MarginBottom}"
  >
    <span slot="byline">By {@html marked.parseInline(content.Byline)} </span>
    <div slot="dateline">
      Published <time datetime="{content.Published}">
        {apdate(new Date(content.Published))}</time
      >
      {#if content.Updated}
        <br /> Updated
        <time datetime="{content.Updated}">
          {apdate(new Date(content.Updated))}
        </time>
      {/if}
    </div>
  </HeadlineBreakingNews>
</Story>

<style lang="scss">
</style>
