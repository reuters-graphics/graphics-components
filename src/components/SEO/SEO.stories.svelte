<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import quickitDocs from './stories/docs/quickit.md?raw';

  import SEO from './SEO.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Components/SEO"
  component="{SEO}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <SEO {...args} />
  <div>Nothing to see here. 😎</div>
</Template>

<Story
  name="Default"
  args="{{
    baseUrl: 'https://graphics.reuters.com',
    pageUrl: new URL('https://graphics.reuters.com/hello-world/'),
    publishTime: new Date('2020-09-15').toISOString(),
  }}"
/>

<Story
  name="🚀 QUICKIT"
  args="{{
    baseUrl: 'https://graphics.reuters.com',
    pageUrl: new URL('https://graphics.reuters.com/hello-world/'),
    publishTime: new Date('2020-09-15').toISOString(),
  }}"
  {...withStoryDocs(quickitDocs)}
/>
