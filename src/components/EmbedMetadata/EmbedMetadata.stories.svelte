<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import EmbedMetadata from './EmbedMetadata.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page metadata/EmbedMetadata',
    component: EmbedMetadata,
  });
</script>

<div>View page source to see the embed metadata.</div>
<Story
  name="Demo"
  args={{
    baseUrl: 'https://www.reuters.com',
    pageUrl: new URL(
      'https://www.reuters.com/graphics/world-coronavirus-tracker-and-maps/embeds/global-cases/'
    ),
    previewImgPath:
      'https://www.reuters.com/graphics/world-coronavirus-tracker-and-maps/assets/images/share.jpg',
    polling: 500,
  }}
/>
