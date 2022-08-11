<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import darkThemeDocs from './stories/docs/darkTheme.md?raw';

  import SiteHeader, { themes } from './SiteHeader.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/SiteHeader',
    component: SiteHeader,
    ...withComponentDocs(componentDocs),
    argsTypes: {
      themes: { control: { disable: true } },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <div>
    <SiteHeader {...args} />
  </div>
</Template>

<Story
  name="Default"
/>

<Story
  name="Customised theme"
  args={{
    theme: themes.dark,
  }}
  {...withStoryDocs(darkThemeDocs)}
/>


<style>
  div {
    min-height: 89px;
  }
</style>