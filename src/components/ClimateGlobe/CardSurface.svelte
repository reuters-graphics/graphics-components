<!--
  @component `CardSurface` — shared card chrome (border/background/shadow)
  and optional link behaviour, ported from the climate monitor frontend's
  `data-card` surface. The `map-callout` surface variant isn't ported —
  nothing here needs it (`TileMapCallout` has its own styling). Private to
  `ClimateGlobe`, not exported from the package root.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** Optional URL. When set, the card becomes a hyperlink with hover/focus styling. */
    href?: string;
    /** Link target (only used when `href` is set). Defaults to `_blank`. */
    target?: string;
    children: Snippet;
  }

  let { href, target = '_blank', children }: Props = $props();
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  class="card-surface"
  {href}
  target={href ? target : undefined}
  rel={href && target === '_blank' ? 'noopener noreferrer' : undefined}
>
  {@render children()}
</svelte:element>

<style lang="scss">
  .card-surface {
    font-family: var(--theme-font-family-sans-serif);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 12.5rem;
    box-sizing: border-box;
    padding: 0.5rem 0.625rem;
    background: var(--theme-colour-background, #fff);
    border: 1px solid var(--theme-colour-text-primary, #404040);
    border-radius: 0.1875rem;
    box-shadow: 0 0.125rem 0.5rem
      var(--theme-colour-brand-shadow, rgb(64 64 64 / 8%));
    color: var(--theme-colour-text-primary, #404040);
  }

  a.card-surface {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      transform 0.15s ease;
  }

  a.card-surface:hover,
  a.card-surface:focus-visible {
    box-shadow: 0 0.25rem 0.75rem
      var(--theme-colour-brand-shadow, rgb(64 64 64 / 15%));
    transform: translateY(-0.0625rem);
  }

  a.card-surface:focus-visible {
    outline: 2px solid var(--theme-colour-text-primary, #404040);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    a.card-surface {
      transition: none;
    }
  }
</style>
