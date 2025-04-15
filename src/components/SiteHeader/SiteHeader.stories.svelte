<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import darkThemeDocs from './stories/docs/darkTheme.md?raw';

  import SiteHeader from './SiteHeader.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Page furniture/SiteHeader',
    component: SiteHeader,
    ...withComponentDocs(componentDocs),
    argsTypes: {
      themes: { control: { disable: true } },
    },
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  import Theme from '../Theme/Theme.svelte';
</script>

<Template>
  {#snippet children({ args })}
    <div>
      <SiteHeader {...args} />
    </div>
  {/snippet}
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
