<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Referral from './Referral.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page furniture/Referral',
    component: Referral,
    argTypes: {
      linkTarget: {
        control: 'select',
        options: ['_self', '_blank', '_parent'],
      },
      compact: { control: 'boolean' },
      stacked: { control: 'boolean' },
    },
  });
</script>

<Story
  name="Demo"
  args={{
    url: 'https://www.reuters.com/world/europe/',
    kicker: 'Europe',
    title: 'A single referral card you can drop into any layout',
    imageUrl: 'https://placehold.co/240x240',
    imageAlt: 'Placeholder image',
    time: new Date(),
    stacked: true,
  }}
/>

<Story
  name="No time"
  exportName="NoTime"
  args={{
    url: 'https://www.reuters.com/business/energy/',
    kicker: 'Energy',
    title: 'A referral with no publish time shown',
    imageUrl: 'https://placehold.co/240x240',
    imageAlt: 'Placeholder image',
    compact: true,
    stacked: true,
  }}
/>
