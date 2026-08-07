<!--
  @component `DataCardBase` — shared card chrome for the small data cards
  shown in `DataCardRow`, delegated to `CardSurface`. Private to
  `ClimateGlobe`, not exported from the package root.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import CardSurface from './CardSurface.svelte';

  interface Props {
    /** Optional URL. When set, the card becomes a hyperlink with hover/focus styling. */
    href?: string;
    /** Link target (only used when `href` is set). Defaults to `_blank`. */
    target?: string;
    children: Snippet;
  }

  let { href, target, children }: Props = $props();
</script>

<CardSurface {href} {target}>
  {@render children()}
</CardSurface>
