<!-- @component `TileMapCallout` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-tilemapcallout--docs)

A MapLibre-aware callout for `TileMap`. Render it as a child of any
`TileMap`, pass a longitude/latitude pair, and the component manages marker
placement and lifecycle through the map context.
-->
<script lang="ts" module>
  export type TileMapCalloutPlacement = 'above' | 'below';
  export type TileMapCalloutCoordinates =
    | [number, number]
    | { lng: number; lat: number }
    | { lon: number; lat: number }
    | { longitude: number; latitude: number };

  const VALID_PLACEMENTS = new Set<TileMapCalloutPlacement>(['above', 'below']);

  export const normalizeTileMapCalloutPlacement = (
    value: unknown,
    fallback: TileMapCalloutPlacement = 'above'
  ): TileMapCalloutPlacement => {
    if (typeof value !== 'string') return fallback;

    const normalized = value.trim().toLowerCase();
    if (VALID_PLACEMENTS.has(normalized as TileMapCalloutPlacement)) {
      return normalized as TileMapCalloutPlacement;
    }

    return fallback;
  };

  export const normalizeTileMapCalloutFlip = (
    value: unknown,
    fallback = false
  ) => {
    if (typeof value === 'boolean') return value;
    return fallback;
  };

  export type TileMapCalloutSurface = 'filled' | 'bare';

  const VALID_SURFACES = new Set<TileMapCalloutSurface>(['filled', 'bare']);

  export const normalizeTileMapCalloutSurface = (
    value: unknown,
    fallback: TileMapCalloutSurface = 'filled'
  ): TileMapCalloutSurface => {
    if (typeof value !== 'string') return fallback;

    const normalized = value.trim().toLowerCase();
    if (VALID_SURFACES.has(normalized as TileMapCalloutSurface)) {
      return normalized as TileMapCalloutSurface;
    }

    return fallback;
  };

  const isFiniteNumber = (value: unknown): value is number =>
    typeof value === 'number' && Number.isFinite(value);

  export const normalizeTileMapCalloutCoordinates = (
    value: unknown
  ): [number, number] | null => {
    if (Array.isArray(value) && value.length >= 2) {
      const [lng, lat] = value;
      return isFiniteNumber(lng) && isFiniteNumber(lat) ? [lng, lat] : null;
    }

    if (!value || typeof value !== 'object') return null;

    const candidate = value as Record<string, unknown>;
    const lng = candidate.lng ?? candidate.lon ?? candidate.longitude;
    const lat = candidate.lat ?? candidate.latitude;

    return isFiniteNumber(lng) && isFiniteNumber(lat) ? [lng, lat] : null;
  };

  /** Default leader-line width in px: horizontal distance from the marker dot to the callout surface. */
  export const DEFAULT_TILE_MAP_CALLOUT_LEADER_WIDTH = 14;
  /** Default leader-line height in px: vertical distance the diagonal rises or drops. */
  export const DEFAULT_TILE_MAP_CALLOUT_LEADER_HEIGHT = 14;
  /** Default marker dot radius in px. */
  export const DEFAULT_TILE_MAP_CALLOUT_DOT_RADIUS = 3;

  /**
   * Coerce a geometry prop (leader width/height, dot radius) to a non-negative,
   * finite number, falling back to the supplied default when the value is
   * missing, non-numeric, negative or non-finite.
   */
  export const normalizeTileMapCalloutDimension = (
    value: unknown,
    fallback: number
  ): number => (isFiniteNumber(value) && value >= 0 ? value : fallback);

  export interface TileMapCalloutGeometry {
    /** SVG canvas width and the surface's inline offset from the dot (px). */
    leaderWidth: number;
    /** SVG canvas height (px). */
    svgHeight: number;
    /** Dot centre x for the default (non-flipped) side. */
    dotCx: number;
    /** Dot centre x when flipped to the right of the surface. */
    dotCxFlipped: number;
    /** Dot centre y for `placement="above"`. */
    dotCyAbove: number;
    /** Dot centre y for `placement="below"`. */
    dotCyBelow: number;
  }

  /**
   * Resolve the leader-line SVG geometry from normalized dimensions. The canvas
   * span is clamped to a positive size (at least the dot diameter, and at least
   * `1`) so a zero-ish `leaderWidth`/`leaderHeight` can't collapse the SVG
   * `width`/`viewBox` to an invalid `0`. The clamped `leaderWidth` is the single
   * value used for the SVG width, the line endpoint AND the surface offset, so
   * the line and label stay aligned — including when flipped.
   */
  export const resolveTileMapCalloutGeometry = (
    leaderWidth: number,
    leaderHeight: number,
    dotRadius: number
  ): TileMapCalloutGeometry => {
    const clampedLeaderWidth = Math.max(leaderWidth, dotRadius * 2, 1);
    const svgHeight = Math.max(leaderHeight + dotRadius * 2, 1);
    return {
      leaderWidth: clampedLeaderWidth,
      svgHeight,
      dotCx: dotRadius,
      dotCxFlipped: clampedLeaderWidth - dotRadius,
      dotCyAbove: svgHeight - dotRadius,
      dotCyBelow: dotRadius,
    };
  };
</script>

<script lang="ts">
  import maplibregl from 'maplibre-gl';
  import { getContext, onDestroy, type Snippet } from 'svelte';
  import type { Map as MaplibreMap, Marker } from 'maplibre-gl';
  import type { Writable } from 'svelte/store';

  interface Props {
    /** Longitude/latitude to attach the callout to. Accepts [lng, lat] or an object with lng/lat, lon/lat or longitude/latitude. */
    lngLat: TileMapCalloutCoordinates;
    /** Generic callout content. Keep it short so it fits on small map viewports. */
    children?: Snippet;
    /** Place the callout surface above or below the map coordinate. */
    placement?: TileMapCalloutPlacement;
    /** Flip the callout surface to the left of the map coordinate. */
    flip?: boolean;
    /** Add custom classes to the callout surface. */
    class?: string;
    /** Add an id to the MapLibre marker wrapper. */
    id?: string;
    /**
     * Leader-line width in px — the horizontal distance from the marker dot to
     * the callout surface. Also sets the surface's offset from the dot so the
     * line and surface always line up. Clamped to at least the dot diameter
     * (and at least `1px`) so a `0`-ish value can't collapse the SVG. Defaults
     * to `14`.
     */
    leaderWidth?: number;
    /**
     * Leader-line height in px — the vertical distance the diagonal rises
     * (`placement="above"`) or drops (`placement="below"`). Defaults to `14`.
     */
    leaderHeight?: number;
    /** Marker dot radius in px. Defaults to `3`. */
    dotRadius?: number;
    /**
     * Surface chrome. `"filled"` (default) draws the themed box (background,
     * border and shadow). `"bare"` removes that chrome so you can render your
     * own container inside the callout — the marker, leader line and
     * positioning still apply. Useful when wrapping a pre-styled card.
     */
    surface?: TileMapCalloutSurface;
  }

  let {
    lngLat,
    children,
    placement = 'above',
    flip = false,
    class: cls = '',
    id = '',
    leaderWidth = DEFAULT_TILE_MAP_CALLOUT_LEADER_WIDTH,
    leaderHeight = DEFAULT_TILE_MAP_CALLOUT_LEADER_HEIGHT,
    dotRadius = DEFAULT_TILE_MAP_CALLOUT_DOT_RADIUS,
    surface = 'filled',
  }: Props = $props();

  const mapStore = getContext<Writable<MaplibreMap | null>>('map');

  if (!mapStore) {
    throw new Error('TileMapCallout must be used inside a TileMap component');
  }

  // Leader geometry is derived from props so the SVG dimensions and the CSS
  // custom properties below share a single source of truth (previously these
  // were duplicated hardcoded constants that could — and did — drift apart).
  let safeLeaderWidth = $derived(
    normalizeTileMapCalloutDimension(
      leaderWidth,
      DEFAULT_TILE_MAP_CALLOUT_LEADER_WIDTH
    )
  );
  let safeLeaderHeight = $derived(
    normalizeTileMapCalloutDimension(
      leaderHeight,
      DEFAULT_TILE_MAP_CALLOUT_LEADER_HEIGHT
    )
  );
  let safeDotRadius = $derived(
    normalizeTileMapCalloutDimension(
      dotRadius,
      DEFAULT_TILE_MAP_CALLOUT_DOT_RADIUS
    )
  );
  let geometry = $derived(
    resolveTileMapCalloutGeometry(
      safeLeaderWidth,
      safeLeaderHeight,
      safeDotRadius
    )
  );
  // Feed the same values to the CSS via custom properties on the callout root:
  // `--tile-map-callout-leader-width` sets the surface's inline offset and
  // `--tile-map-callout-dot-radius` anchors the transform onto the dot. The
  // offset uses the clamped `geometry.leaderWidth` so it matches the SVG.
  let calloutStyle = $derived(
    `--tile-map-callout-leader-width: ${geometry.leaderWidth}px; ` +
      `--tile-map-callout-dot-radius: ${safeDotRadius}px;`
  );

  let markerElement: HTMLDivElement;
  let marker: Marker | null = null;

  let safeLngLat = $derived(normalizeTileMapCalloutCoordinates(lngLat));
  let safeFlip = $derived(normalizeTileMapCalloutFlip(flip));
  let safePlacement = $derived(normalizeTileMapCalloutPlacement(placement));
  let safeSurface = $derived(normalizeTileMapCalloutSurface(surface));
  let isBelow = $derived(safePlacement === 'below');
  let calloutClasses = $derived(
    ['tile-map-callout', `placement-${safePlacement}`, safeFlip && 'flip', cls]
      .filter(Boolean)
      .join(' ')
  );

  $effect(() => {
    const map = $mapStore;
    const coordinates = safeLngLat;

    if (!map || !markerElement || !coordinates) {
      if (marker) {
        marker.remove();
        marker = null;
      }
      return;
    }

    if (!marker) {
      marker = new maplibregl.Marker({
        element: markerElement,
        anchor: 'center',
      })
        .setLngLat(coordinates)
        .addTo(map);
      return;
    }

    marker.setLngLat(coordinates);
  });

  onDestroy(() => {
    if (marker) {
      marker.remove();
      marker = null;
    }
  });
</script>

<div
  {id}
  bind:this={markerElement}
  class="tile-map-callout-marker"
  data-placement={safePlacement}
  data-flip={safeFlip ? 'true' : 'false'}
  data-has-coordinates={safeLngLat ? 'true' : 'false'}
>
  <div class={calloutClasses} style={calloutStyle}>
    <div class="callout-surface" class:surface-bare={safeSurface === 'bare'}>
      {#if children}
        {@render children()}
      {/if}
    </div>
    <div class="leader-line" aria-hidden="true">
      <svg
        width={geometry.leaderWidth}
        height={geometry.svgHeight}
        viewBox="0 0 {geometry.leaderWidth} {geometry.svgHeight}"
        focusable="false"
      >
        {#if isBelow}
          <line
            x1={safeFlip ? geometry.dotCxFlipped : geometry.dotCx}
            y1={geometry.dotCyBelow}
            x2={safeFlip ? 0 : geometry.leaderWidth}
            y2={geometry.svgHeight}
            stroke="currentColor"
            stroke-width="1"
            vector-effect="non-scaling-stroke"
          />
          <circle
            cx={safeFlip ? geometry.dotCxFlipped : geometry.dotCx}
            cy={geometry.dotCyBelow}
            r={safeDotRadius}
            fill="currentColor"
          />
        {:else}
          <line
            x1={safeFlip ? geometry.dotCxFlipped : geometry.dotCx}
            y1={geometry.dotCyAbove}
            x2={safeFlip ? 0 : geometry.leaderWidth}
            y2={0}
            stroke="currentColor"
            stroke-width="1"
            vector-effect="non-scaling-stroke"
          />
          <circle
            cx={safeFlip ? geometry.dotCxFlipped : geometry.dotCx}
            cy={geometry.dotCyAbove}
            r={safeDotRadius}
            fill="currentColor"
          />
        {/if}
      </svg>
    </div>
  </div>
</div>

<style lang="scss">
  .tile-map-callout-marker {
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  .tile-map-callout-marker:not(.maplibregl-marker),
  .tile-map-callout-marker[data-has-coordinates='false'] {
    display: none;
  }

  .tile-map-callout {
    /* Geometry vars (`--tile-map-callout-leader-width` /
       `--tile-map-callout-dot-radius`) are set inline from the
       leaderWidth/dotRadius props (see the script) so the drawn line and the
       surface offset share one source of truth; the values here are the
       matching fallbacks — don't override them via CSS, use the props.

       The theming vars (surface background/border/shadow/colour/max-width) are
       deliberately NOT declared on the element: they're consumed below with
       inline fallbacks. That lets a consumer set any of them on their OWN
       wrapper class and have it cascade in — no specificity fight, and no need
       to target the internal `.callout-surface` (which downstream CSS purging
       can strip). Prefer `surface="bare"` when you just want to drop the box. */
    --tile-map-callout-dot-radius: 3px;
    --tile-map-callout-leader-width: 14px;

    color: var(
      --tile-map-callout-colour,
      var(--theme-colour-text-primary, #404040)
    );
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    max-width: var(
      --tile-map-callout-surface-max-width,
      min(14rem, calc(100vw - 2rem))
    );
    box-sizing: border-box;
    transform: translate(
      calc(-1 * var(--tile-map-callout-dot-radius)),
      calc(-100% + var(--tile-map-callout-dot-radius))
    );
    will-change: transform;
  }

  .tile-map-callout.flip {
    align-items: flex-end;
    transform: translate(
      calc(-100% + var(--tile-map-callout-dot-radius)),
      calc(-100% + var(--tile-map-callout-dot-radius))
    );
  }

  .tile-map-callout.placement-below {
    transform: translate(
      calc(-1 * var(--tile-map-callout-dot-radius)),
      calc(-1 * var(--tile-map-callout-dot-radius))
    );
  }

  .tile-map-callout.placement-below.flip {
    transform: translate(
      calc(-100% + var(--tile-map-callout-dot-radius)),
      calc(-1 * var(--tile-map-callout-dot-radius))
    );
  }

  .callout-surface {
    order: 0;
    margin-block-end: -1px;
    margin-inline-start: var(--tile-map-callout-leader-width);
    width: max-content;
    max-width: var(
      --tile-map-callout-surface-max-width,
      min(14rem, calc(100vw - 2rem))
    );
    box-sizing: border-box;
    background: var(
      --tile-map-callout-surface-background,
      var(--theme-colour-background, #fff)
    );
    border: 1px solid
      var(
        --tile-map-callout-border-colour,
        var(--theme-colour-text-primary, #404040)
      );
    box-shadow: var(
      --tile-map-callout-shadow,
      0 0.125rem 0.5rem var(--theme-colour-brand-shadow, rgb(64 64 64 / 8%))
    );
    padding: 0.375rem 0.625rem;
    font-family: var(--theme-font-family-note, Knowledge, sans-serif);
    font-size: var(--theme-font-size-xs, 0.875rem);
    font-weight: 700;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }

  /* `surface="bare"`: strip the box so a consumer can render their own
     container inside the callout. Authored here (in the library) so it ships in
     the component's own CSS and isn't a consumer-side override that purging
     could remove. */
  .callout-surface.surface-bare {
    background: none;
    border: 0;
    box-shadow: none;
    padding: 0;
  }

  .tile-map-callout.flip .callout-surface {
    margin-inline-start: 0;
    margin-inline-end: var(--tile-map-callout-leader-width);
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
    .tile-map-callout {
      --tile-map-callout-surface-max-width: min(10rem, calc(100vw - 1rem));
    }

    .callout-surface {
      padding-inline: 0.5rem;
    }
  }
</style>
