<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import environmentsDocs from './stories/docs/environments.md?raw';
  // @ts-ignore raw
  import multipageDocs from './stories/docs/multipage.md?raw';

  import Analytics from './Analytics.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';
</script>

<Meta
  title="Components/Analytics"
  component="{Analytics}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Analytics {...args} />
  <div>Nothing to see here</div>
</Template>

<Story
  name="Default"
  args="{{
    authors: [{ name: 'Jane Doe' }, { name: 'John Doe' }],
  }}"
/>

<Story name="Environments" {...withStoryDocs(environmentsDocs)}>
  <Analytics />
  <div>Nothing to see here</div>
</Story>

<Story name="Multipage apps" {...withStoryDocs(multipageDocs)}>
  <Analytics />
  <div>Nothing to see here</div>
</Story>
