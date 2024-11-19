<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import darkThemeDocs from './stories/docs/darkTheme.md?raw';
  // @ts-ignore raw
  import removeReferralsDocs from './stories/docs/removeReferrals.md?raw';

  import SiteFooter from './SiteFooter.svelte';
  import Theme from '../Theme/Theme.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Components/SiteFooter"
  component="{SiteFooter}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div>
    <SiteFooter {...args} />
  </div>
</Template>

<Story name="Default" />

<Story name="Customised theme" {...withStoryDocs(darkThemeDocs)}>
  <div>
    <Theme base="dark">
      <SiteFooter />
    </Theme>
  </div>
</Story>

<Story
  name="Remove referrals"
  args="{{ includeReferrals: false }}"
  {...withStoryDocs(removeReferralsDocs)}
/>

<style>
  div {
    width: calc(100% + 30px);
    margin-left: -15px;
  }
</style>
