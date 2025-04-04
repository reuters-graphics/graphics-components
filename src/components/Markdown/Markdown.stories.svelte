<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Markdown from './Markdown.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/Markdown',
    component: Markdown,
  });
</script>

<Story
  name="Demo"
  args={{
    source: 'My *awesome* text in **markdown** with "smart quotes".',
  }}
/>
