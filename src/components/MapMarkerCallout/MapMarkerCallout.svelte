<!-- @component `MapMarkerCallout` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-mapmarkercallout--docs)

A presentational map callout: a framed surface connected to an anchor dot by a
leader line. It is intentionally narrow and does not know about map libraries,
coordinates, event handling, or data models.
-->
<script lang="ts" module>
  export type MapMarkerCalloutPlacement = 'above' | 'below';

  const VALID_PLACEMENTS = new Set<MapMarkerCalloutPlacement>([
    'above',
    'below',
  ]);

  const normalizePlacement = (
    value: unknown,
    fallback: MapMarkerCalloutPlacement = 'above'
  ): MapMarkerCalloutPlacement => {
    if (typeof value !== 'string') return fallback;

    const normalized = value.trim().toLowerCase();
    if (VALID_PLACEMENTS.has(normalized as MapMarkerCalloutPlacement)) {
      return normalized as MapMarkerCalloutPlacement;
    }

    return fallback;
  };

  const normalizeBoolean = (value: unknown, fallback = false) => {
    if (typeof value === 'boolean') return value;
    return fallback;
  };
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** Generic callout content. Keep it short so it fits on small map viewports. */
    children?: Snippet;
    /** Place the callout surface above or below the anchor dot. */
    placement?: MapMarkerCalloutPlacement;
    /** Flip the callout surface to the left of the anchor dot. */
    flip?: boolean;
    /** Add custom classes to the callout root. */
    class?: string;
    /** Add an id to the callout root. */
    id?: string;
  }

  let {
    children,
    placement = 'above',
    flip = false,
    class: cls = '',
    id = '',
  }: Props = $props();

  const lineWidth = 32;
  const lineHeight = 28;
  const dotRadius = 4;
  const svgHeight = lineHeight + dotRadius * 2;
  const dotCx = dotRadius;
  const dotCxFlipped = lineWidth - dotRadius;
  const dotCyAbove = svgHeight - dotRadius;
  const dotCyBelow = dotRadius;

  let safeFlip = $derived(normalizeBoolean(flip));
  let safePlacement = $derived(normalizePlacement(placement));
  let isBelow = $derived(safePlacement === 'below');
  let rootClasses = $derived(
    [
      'map-marker-callout',
      `placement-${safePlacement}`,
      safeFlip && 'flip',
      cls,
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<div
  {id}
  class={rootClasses}
  data-placement={safePlacement}
  data-flip={safeFlip ? 'true' : 'false'}
>
  <div class="callout-surface">
    {#if children}
      {@render children()}
    {/if}
  </div>
  <div class="leader-line" aria-hidden="true">
    <svg
      width={lineWidth}
      height={svgHeight}
      viewBox="0 0 {lineWidth} {svgHeight}"
      focusable="false"
    >
      {#if isBelow}
        <line
          x1={safeFlip ? dotCxFlipped : dotCx}
          y1={dotCyBelow}
          x2={safeFlip ? 0 : lineWidth}
          y2={svgHeight}
          stroke="currentColor"
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
        <circle
          cx={safeFlip ? dotCxFlipped : dotCx}
          cy={dotCyBelow}
          r={dotRadius}
          fill="currentColor"
        />
      {:else}
        <line
          x1={safeFlip ? dotCxFlipped : dotCx}
          y1={dotCyAbove}
          x2={safeFlip ? 0 : lineWidth}
          y2={0}
          stroke="currentColor"
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
        <circle
          cx={safeFlip ? dotCxFlipped : dotCx}
          cy={dotCyAbove}
          r={dotRadius}
          fill="currentColor"
        />
      {/if}
    </svg>
  </div>
</div>

<style lang="scss">
  .map-marker-callout {
    --map-marker-callout-surface-max-width: min(14rem, calc(100vw - 2rem));
    --map-marker-callout-surface-background: var(
      --theme-colour-background,
      #fff
    );
    --map-marker-callout-colour: var(--theme-colour-text-primary, #404040);
    --map-marker-callout-border-colour: var(
      --theme-colour-text-primary,
      #404040
    );
    --map-marker-callout-shadow: 0 0.125rem 0.5rem
      var(--theme-colour-brand-shadow, rgb(64 64 64 / 8%));

    color: var(--map-marker-callout-colour);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none;
    max-width: var(--map-marker-callout-surface-max-width);
    box-sizing: border-box;
  }

  .map-marker-callout.flip {
    align-items: flex-end;
  }

.callout-surface {
    order: 0;
    margin-block-end: -1px;
    margin-inline-start: var(--map-marker-callout-leader-width, 32px);
    max-width: var(--map-marker-callout-surface-max-width);
    box-sizing: border-box;
    background: var(--map-marker-callout-surface-background);
    border: 1px solid var(--map-marker-callout-border-colour);
    box-shadow: var(--map-marker-callout-shadow);
    padding: 0.375rem 0.625rem;
    font-family: var(--theme-font-family-note, Knowledge, sans-serif);
    font-size: var(--theme-font-size-xs, 0.875rem);
    font-weight: 700;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }

  .map-marker-callout.flip .callout-surface {
    margin-inline-start: 0;
    margin-inline-end: var(--map-marker-callout-leader-width, 32px);
  }

  .leader-line {
    order: 1;
    color: currentColor;
    line-height: 0;
  }

  .placement-below .leader-line {
    order: 0;
  }

  .placement-below .callout-surface {
    order: 1;
    margin-block-start: -1px;
    margin-block-end: 0;
  }

  .callout-surface :global(:first-child) {
    margin-block-start: 0;
  }

  .callout-surface :global(:last-child) {
    margin-block-end: 0;
  }

  @media (max-width: 767px) {
    .map-marker-callout {
      --map-marker-callout-surface-max-width: min(10rem, calc(100vw - 1rem));
    }

    .callout-surface {
      padding-inline: 0.5rem;
    }
  }
</style>
