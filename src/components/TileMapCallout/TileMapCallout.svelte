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
  }

  let {
    lngLat,
    children,
    placement = 'above',
    flip = false,
    class: cls = '',
    id = '',
  }: Props = $props();

  const mapStore = getContext<Writable<MaplibreMap | null>>('map');

  if (!mapStore) {
    throw new Error('TileMapCallout must be used inside a TileMap component');
  }

  const lineWidth = 32;
  const lineHeight = 28;
  const dotRadius = 4;
  const svgHeight = lineHeight + dotRadius * 2;
  const dotCx = dotRadius;
  const dotCxFlipped = lineWidth - dotRadius;
  const dotCyAbove = svgHeight - dotRadius;
  const dotCyBelow = dotRadius;

  let markerElement: HTMLDivElement;
  let marker: Marker | null = null;

  let safeLngLat = $derived(normalizeTileMapCalloutCoordinates(lngLat));
  let safeFlip = $derived(normalizeTileMapCalloutFlip(flip));
  let safePlacement = $derived(normalizeTileMapCalloutPlacement(placement));
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
  <div class={calloutClasses}>
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
    --tile-map-callout-dot-radius: 4px;
    --tile-map-callout-leader-width: 32px;
    --tile-map-callout-surface-max-width: min(14rem, calc(100vw - 2rem));
    --tile-map-callout-surface-background: var(--theme-colour-background, #fff);
    --tile-map-callout-colour: var(--theme-colour-text-primary, #404040);
    --tile-map-callout-border-colour: var(--theme-colour-text-primary, #404040);
    --tile-map-callout-shadow: 0 0.125rem 0.5rem
      var(--theme-colour-brand-shadow, rgb(64 64 64 / 8%));

    color: var(--tile-map-callout-colour);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    max-width: var(--tile-map-callout-surface-max-width);
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
    max-width: var(--tile-map-callout-surface-max-width);
    box-sizing: border-box;
    background: var(--tile-map-callout-surface-background);
    border: 1px solid var(--tile-map-callout-border-colour);
    box-shadow: var(--tile-map-callout-shadow);
    padding: 0.375rem 0.625rem;
    font-family: var(--theme-font-family-note, Knowledge, sans-serif);
    font-size: var(--theme-font-size-xs, 0.875rem);
    font-weight: 700;
    line-height: 1.25;
    overflow-wrap: anywhere;
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
