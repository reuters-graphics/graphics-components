<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import quickitDocs from './stories/docs/quickit.md?raw';

  import SEO from './SEO.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Utilities/SEO',
    component: SEO,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <SEO {...args} />
  <div>Nothing to see here. 😎</div>
</Template>

<Story
  name="Default"
  args={{
    url: new URL('https://graphics.reuters.com/hello-world/'),
    publishTime: new Date('2020-09-15').toISOString(),
  }}
/>

<Story
  name="🚀 QUICKIT"
  args={{
    url: new URL('https://graphics.reuters.com/hello-world/'),
    publishTime: new Date('2020-09-15').toISOString(),
  }}
  {...withStoryDocs(quickitDocs)}
/>
