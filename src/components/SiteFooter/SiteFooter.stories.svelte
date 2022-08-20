<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import darkThemeDocs from './stories/docs/darkTheme.md?raw';
  // @ts-ignore
  import customReferralsDocs from './stories/docs/customReferrals.md?raw';

  import SiteFooter from './SiteFooter.svelte';
  import Theme from '../Theme/Theme.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/SiteFooter',
    component: SiteFooter,
    ...withComponentDocs(componentDocs),
  };

  const customReferrals = [
    {
      url: 'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/',
      title: 'COVID-19: the latest global statistics, charts and maps',
      description: 'Tracking the global coronavirus outbreak, updated daily',
      image:
        'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/global/en/share.png',
    },
    {
      url: 'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/regions/europe',
      title: 'Coronavirus in Europe: the latest counts, charts and maps',
      description: 'Tracking the global coronavirus outbreak, updated daily',
      image:
        'https://graphics.thomsonreuters.com/cdn/2020/covid-global-tracker/share-cards/regions/en/europe.png',
    },
  ];
</script>

<Meta {...meta} />

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
  name="Customised referrals"
  args="{{
    referrals: customReferrals,
  }}"
  {...withStoryDocs(customReferralsDocs)}
/>

<style>
  div {
    width: calc(100% + 30px);
    margin-left: -15px;
  }
</style>
