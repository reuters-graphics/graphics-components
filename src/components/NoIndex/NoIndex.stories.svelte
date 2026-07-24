<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NoIndex from './NoIndex.svelte';

  const { Story } = defineMeta({
    title: 'Components/UI/NoIndex',
    component: NoIndex,
    tags: ['autodocs'],
  });
</script>

<!--
  NoIndex renders only `<meta>` tags into `<head>` — there's nothing visual to
  show. Mount it on any page that must not be crawled (share cards, embeds).
-->
<Story name="Default" asChild>
  <NoIndex />
  <p>
    A <code>&lt;meta name="robots" content="noindex, nofollow"&gt;</code> tag has
    been added to this document's head.
  </p>
</Story>
