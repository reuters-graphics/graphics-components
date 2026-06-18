<!-- @component `DataCard` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-datacard--docs)

The shell of a data card. Compose the card grammar primitives
(`DataCardTopline`, `DataCardBigNumber`, `DataCardLabel`, `DataCardColumns`,
`DataCardColumn`, `DataCardChartWrap`, `DataCardFootnote`) inside it to build
consistent cards for dashboards, strips and map overlays.

Each card is its own CSS size container, so its type scales to the card's own
rendered width regardless of where it sits. Pass `href` to render the whole card
as a link.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { DataCardWidth } from './types.js';

  interface Props {
    /**
     * Named card width. Sets the card's `max-width`; because the card is a CSS
     * size container, its type also scales to match.
     * - `"single"` — one-number cards (~115px).
     * - `"double"` — two-column cards and charts (~230px).
     *
     * Override either explicitly with the `--dc-card-max-width` CSS variable.
     */
    width?: DataCardWidth;
    /**
     * Optional URL. When set, the whole card becomes a hyperlink with a hover
     * effect instead of a plain container.
     */
    href?: string;
    /** Link target (only used when `href` is set). Defaults to `_blank`. */
    target?: string;
    /** Extra classes to add to the card element. */
    class?: string;
    /**
     * Inline styles on the card element. Handy for one-off width overrides via
     * the `--dc-card-max-width` custom property.
     */
    style?: string;
    /** The card grammar primitives composed inside the shell. */
    children: Snippet;
  }

  let {
    width = 'single',
    href,
    target = '_blank',
    class: cls = '',
    style,
    children,
  }: Props = $props();
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  class="data-card-base width-{width} {cls}"
  class:is-link={!!href}
  href={href || undefined}
  target={href ? target : undefined}
  rel={href && target === '_blank' ? 'noopener' : undefined}
  {style}
>
  <div class="data-card-content">
    {@render children()}
  </div>
</svelte:element>

<style lang="scss">
  /* ─── Shell ──────────────────────────────────────────────────────────────── */
  .data-card-base {
    font-family: var(
      --theme-font-family-sans-serif,
      Knowledge,
      Knowledge2017,
      system-ui,
      -apple-system,
      sans-serif
    );
    background: #fff;
    border: 1px solid var(--theme-colour-brand-rules, #e0e0e0);
    padding: var(--dc-card-padding, 12px);
    flex: 1 1 0;
    min-width: var(--dc-card-min-width, 0);
    /* Named widths set --dc-card-width; --dc-card-max-width is the explicit
       per-instance override and always wins. */
    max-width: var(--dc-card-max-width, var(--dc-card-width, 115px));
    display: flex;
    flex-direction: column;
    user-select: none;
    color: var(--theme-colour-text-primary, #333);
    line-height: var(--dc-line-height, 1.4);
  }

  /* ─── Named widths ──────────────────────────────────────────────────────────
     Two sizes: `single` for one-number cards, `double` for two-column cards and
     charts. Each sets --dc-card-width, which feeds the max-width above;
     --dc-card-max-width still overrides. */
  .data-card-base.width-single {
    --dc-card-width: 115px;
  }
  .data-card-base.width-double {
    --dc-card-width: 230px;
  }

  /* Force every descendant — including the grammar primitives, which are
     separate components and so escape this component's scoped element styles —
     to inherit the card's sans-serif (Knowledge) font. Without this, global
     element styles (e.g. a serif body font on `h4`/`p`) win over inheritance
     and leak serif text into the card. */
  .data-card-base :global(*) {
    font-family: inherit;
  }

  /* ─── Fluid content scale ──────────────────────────────────────────────────
     Each card is its own size container, so its contents scale to the card's
     own rendered width — regardless of the context it sits in (page overlay,
     embed overlay, standalone column, or a resized Pym iframe). This is the
     single source of truth for responsive sizing and replaces viewport
     media-query breakpoints, which break whenever the card's actual width
     doesn't track the viewport. */
  .data-card-base {
    container: datacard / inline-size;
  }

  .data-card-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: 0;

    /* The big number scales with the card's own width using container-query
       units, capped at the default size so a `single` (115px) and a `double`
       (230px) card both start at the same large number and shrink with the
       same curve only when a card gets narrower than the single default
       (e.g. a card in a carousel). cqi is 1% of the card's content-box width;
       ~47cqi reaches the 42px cap at the single card's ~91px content box. */
    --dc-big-number-size: clamp(24px, 47cqi, 42px);
    --dc-big-number-unit-size: clamp(11px, 16cqi, 14px);
  }

  /* ─── Link variant ─────────────────────────────────────────────────────────
     When an `href` is supplied the card renders as an <a>; reset anchor
     defaults and add an interactive hover/focus affordance. */
  a.data-card-base {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      transform 0.15s ease;
  }

  a.data-card-base:hover,
  a.data-card-base:focus-visible {
    border-color: var(--theme-colour-text-primary, #333);
    box-shadow: var(--shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.15));
    transform: translateY(-1px);
  }

  a.data-card-base:focus-visible {
    outline: 2px solid var(--theme-colour-text-primary, #333);
    outline-offset: 2px;
  }
</style>
