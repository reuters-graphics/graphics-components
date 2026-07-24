<!--
@component
NoIndex

Adds `<meta name="robots" content="noindex, nofollow">` (and the googlebot
equivalent) to the current page's `<head>`. Mount from any route that should
never be crawled or indexed — share-card prerender pages, embed previewers,
`/embeds/*` widgets, dev/tooling routes.

Page-level `<svelte:head>` writes win over layout-level ones in SvelteKit, so
a layout that omits the tag won't accidentally re-expose the page.
-->

<script lang="ts">
  // Marker component — no props.
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
  <meta name="googlebot" content="noindex, nofollow" />
</svelte:head>
