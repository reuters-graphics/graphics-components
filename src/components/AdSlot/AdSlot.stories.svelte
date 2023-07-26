<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import AdScripts from './AdScripts.svelte';
  import AdSlot from './AdSlot.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Components/AdSlot',
    component: AdSlot,
    ...withComponentDocs(componentDocs),
    argTypes: {
      placementName: {
        control: 'select',
        options: [
          'reuters_desktop_leaderboard_atf',
          'reuters_desktop_native',
          'reuters_desktop_canvas',
        ],
      },
      dataFreestarAd: {
        control: 'select',
        options: ['__970x250'],
      },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <AdScripts />
  <AdSlot {...args} />
  <AdSlot placementName="reuters_desktop_canvas" dataFreestarAd="__970x250" />
</Template>

<Story
  name="Default"
  args="{{
    placementName: 'reuters_desktop_leaderboard_atf',
    dataFreestarAd: '__970x250',
  }}"
/>
