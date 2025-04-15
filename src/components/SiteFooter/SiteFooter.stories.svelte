<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import darkThemeDocs from './stories/docs/darkTheme.md?raw';
  // @ts-ignore raw
  import removeReferralsDocs from './stories/docs/removeReferrals.md?raw';

  import SiteFooter from './SiteFooter.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Page furniture/SiteFooter',
    component: SiteFooter,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';

  import Theme from '../Theme/Theme.svelte';
</script>

<Template>
  {#snippet children({ args })}
    <div>
      <SiteFooter {...args} />
    </div>
  {/snippet}
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
  args={{ includeReferrals: false }}
  {...withStoryDocs(removeReferralsDocs)}
/>

<style>
  div {
    width: calc(100% + 30px);
    margin-left: -15px;
  }
</style>
