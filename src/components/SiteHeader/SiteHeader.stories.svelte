<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import darkThemeDocs from './stories/docs/darkTheme.md?raw';

  import SiteHeader from './SiteHeader.svelte';
  import Theme from '../Theme/Theme.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argsTypes: {
      themes: { control: { disable: true } },
    },
  };
</script>

<Meta title="Components/SiteHeader" component="{SiteHeader}" {...metaProps} />

<Template let:args>
  <div>
    <SiteHeader {...args} />
  </div>
</Template>

<Story name="Default" />

<Story name="Customised theme" {...withStoryDocs(darkThemeDocs)}>
  <div>
    <Theme base="dark">
      <SiteHeader />
    </Theme>
  </div>
</Story>

<style lang="scss">
  div {
    min-height: 625px;
    width: calc(100% + 30px);
    margin-left: -15px;
  }
</style>
