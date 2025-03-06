<script module lang="ts">
  import EmbedPreviewerLink from './EmbedPreviewerLink.svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';

  const { Story } = defineMeta({
    title: 'Components/Utilities/EmbedPreviewerLink',
    component: EmbedPreviewerLink,
  });
</script>

<Story
  name="Demo"
  args={{
    dev: true,
  }}
/>
