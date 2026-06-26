<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ShareBar from './ShareBar.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page furniture/ShareBar',
    component: ShareBar,
    tags: ['autodocs'],
    args: {
      url: 'https://www.reuters.com/graphics/example-story/',
      headline: 'An example Reuters graphic',
    },
  });
</script>

<Story
  name="Demo"
  args={{
    url: 'https://www.reuters.com/graphics/example-story/',
    headline: 'An example Reuters graphic',
  }}
/>

<Story
  name="Without licensing button"
  exportName="WithoutLicensing"
  args={{
    url: 'https://www.reuters.com/graphics/example-story/',
    headline: 'An example Reuters graphic',
    showLicensing: false,
  }}
/>

<Story
  name="Custom licensing URL"
  exportName="CustomLicensing"
  tags={['!autodocs', '!dev']}
  args={{
    url: 'https://www.reuters.com/graphics/example-story/',
    headline: 'An example Reuters graphic',
    licensingUrl: 'https://www.reutersagency.com/en/licensereuterscontent/',
  }}
/>
