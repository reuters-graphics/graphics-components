<!-- @component `InsetMap` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/compositions-insetmap--docs)

A static SVG locator inset: a country silhouette (from a built-in
low-resolution dataset, or your own GeoJSON) with labelled annotations,
anchored to a corner of its parent. Render it as a child of any relatively
(or absolutely) positioned container — `TileMap`, `GraphicBlock`, `Video`, or
anything else that needs to orient readers with a location.
-->
<script lang="ts" module>
  import { feature } from 'topojson-client';
  import type { Topology, GeometryCollection } from 'topojson-specification';
  import worldAtlasTopology from 'world-atlas/countries-50m.json';
  import { geoArea } from 'd3-geo';
  import type {
    Feature,
    GeoJSON as GeoJSONType,
    GeoJsonProperties,
    Geometry,
  } from 'geojson';

  export type InsetMapCorner =
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';

  export type InsetMapLabelPosition =
    | 'top'
    | 'top-right'
    | 'right'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left'
    | 'top-left';

  export type InsetMapAnnotationShape = 'circle' | 'square';

  export interface InsetMapAnnotation {
    /** Annotation label. */
    name: string;
    /** [longitude, latitude] of the annotation. */
    lngLat: [number, number];
    /** Side of the marker the label is drawn on. Defaults to 'top-right'. */
    labelPosition?: InsetMapLabelPosition;
    /** Spacing in px between the marker and the label. Defaults to 4. */
    padding?: number;
    /** Marker shape. Defaults to 'circle'. */
    shape?: InsetMapAnnotationShape;
  }

  const LABEL_OFFSETS: Record<
    InsetMapLabelPosition,
    { dx: number; dy: number; anchor: string; baseline: string }
  > = {
    top: { dx: 0, dy: -1, anchor: 'middle', baseline: 'auto' },
    'top-right': { dx: 1, dy: -1, anchor: 'start', baseline: 'auto' },
    right: { dx: 1, dy: 0, anchor: 'start', baseline: 'central' },
    'bottom-right': { dx: 1, dy: 1, anchor: 'start', baseline: 'hanging' },
    bottom: { dx: 0, dy: 1, anchor: 'middle', baseline: 'hanging' },
    'bottom-left': { dx: -1, dy: 1, anchor: 'end', baseline: 'hanging' },
    left: { dx: -1, dy: 0, anchor: 'end', baseline: 'central' },
    'top-left': { dx: -1, dy: -1, anchor: 'end', baseline: 'auto' },
  };

  /** Resolves an annotation's `labelPosition` + `padding` into an SVG text offset/alignment. */
  export const getAnnotationLabelOffset = (
    position: InsetMapLabelPosition,
    padding: number
  ): { dx: number; dy: number; anchor: string; baseline: string } => {
    const { dx, dy, anchor, baseline } = LABEL_OFFSETS[position];
    return { dx: dx * padding, dy: dy * padding, anchor, baseline };
  };

  const worldCountries = feature(
    worldAtlasTopology as unknown as Topology,
    (worldAtlasTopology as unknown as Topology).objects
      .countries as GeometryCollection
  ) as unknown as { features: Feature<Geometry, GeoJsonProperties>[] };

  /**
   * Look up a country feature from the built-in dataset by name (case
   * insensitive) or ISO 3166-1 numeric code. Returns `null` when nothing
   * matches, so callers can fall back to their own `geojson` prop instead of
   * crashing on a typo'd country name.
   */
  export const findCountryFeature = (
    features: Feature<Geometry, GeoJsonProperties>[],
    country: string | undefined
  ): Feature<Geometry, GeoJsonProperties> | null => {
    const normalized = country?.trim().toLowerCase();
    if (!normalized) return null;

    return (
      features.find(
        (f) =>
          typeof f.properties?.name === 'string' &&
          f.properties.name.toLowerCase() === normalized
      ) ??
      features.find((f) => String(f.id).toLowerCase() === normalized) ??
      null
    );
  };

  /**
   * Countries with islands or exclaves (e.g. France, the US) are
   * MultiPolygons whose overall centroid can land in open water between
   * landmasses. Pick out the largest ring by spherical area so the country
   * label centers on the mainland instead.
   */
  export const getLargestPolygonGeometry = (
    input: GeoJSONType
  ): GeoJSONType => {
    const geometry = input.type === 'Feature' ? input.geometry : input;
    if (!geometry || geometry.type !== 'MultiPolygon') return input;

    let largest = geometry.coordinates[0];
    let largestArea = -Infinity;

    for (const coordinates of geometry.coordinates) {
      const area = geoArea({ type: 'Polygon', coordinates });
      if (area > largestArea) {
        largestArea = area;
        largest = coordinates;
      }
    }

    return { type: 'Polygon', coordinates: largest };
  };

  /**
   * Nudges a point away from nearby annotation markers so the country label
   * doesn't land on top of one. Tries the original position, then a ring of
   * offsets around it; falls back to the original position if all of them
   * are still crowded, rather than drifting arbitrarily far away.
   */
  export const avoidPointCollisions = (
    [x, y]: [number, number],
    obstacles: { x: number; y: number }[],
    clearance: number
  ): [number, number] => {
    const isClear = ([cx, cy]: [number, number]) =>
      obstacles.every((o) => Math.hypot(o.x - cx, o.y - cy) >= clearance);

    if (isClear([x, y])) return [x, y];

    const candidates: [number, number][] = [
      [x, y - clearance],
      [x, y + clearance],
      [x - clearance, y],
      [x + clearance, y],
      [x - clearance, y - clearance],
      [x + clearance, y - clearance],
      [x - clearance, y + clearance],
      [x + clearance, y + clearance],
    ];

    return candidates.find(isClear) ?? [x, y];
  };

  /** Offset for the country label as `[top, right, bottom, left]` px, CSS-style. */
  export type InsetMapLabelOffset = [
    top: number,
    right: number,
    bottom: number,
    left: number,
  ];

  export const applyLabelOffset = (
    [x, y]: [number, number],
    [top, right, bottom, left]: InsetMapLabelOffset
  ): [number, number] => [x + right - left, y + bottom - top];
</script>

<script lang="ts">
  import { geoMercator, geoPath, type GeoProjection } from 'd3-geo';

  interface Props {
    /** Corner of the parent element to anchor the inset to. */
    corner?: InsetMapCorner;
    /** Country name (e.g. "Spain") or ISO 3166-1 numeric code, looked up in the built-in world-atlas dataset. Ignored if `geojson` is set. */
    country?: string;
    /** Custom shape overriding the built-in country lookup, e.g. for a region smaller than a country. */
    geojson?: GeoJSONType;
    /** A d3-geo projection factory. Defaults to `geoMercator`, the simplest choice at country scale. */
    projection?: () => GeoProjection;
    /** Labelled markers, positioned with the same projection as the shape so they always land in the right place. */
    annotations?: InsetMapAnnotation[];
    /** Label rendered at the center of the largest shape (e.g. the country name). */
    countryLabel?: string;
    /** Fine-tune the country label position as `[top, right, bottom, left]` px. Defaults to `[0, 0, 0, 0]`. */
    countryLabelOffset?: InsetMapLabelOffset;
    /** Inset width and height in px (it's square). */
    size?: number;
    /** Add custom classes to the inset wrapper. */
    class?: string;
  }

  let {
    corner = 'bottom-right',
    country,
    geojson,
    projection,
    annotations = [],
    countryLabel,
    countryLabelOffset = [0, 0, 0, 0],
    size = 160,
    class: cls = '',
  }: Props = $props();

  let resolvedFeature = $derived(
    geojson ?? findCountryFeature(worldCountries.features, country)
  );

  let activeProjection = $derived(
    resolvedFeature ?
      (projection ?? geoMercator)().fitSize([size, size], resolvedFeature)
    : null
  );

  let shapePath = $derived(
    activeProjection && resolvedFeature ?
      geoPath(activeProjection)(resolvedFeature)
    : null
  );

  let annotationPoints = $derived(
    activeProjection ?
      annotations
        .map((annotation) => {
          const xy = activeProjection!(annotation.lngLat);
          if (!xy) return null;
          return {
            name: annotation.name,
            x: xy[0],
            y: xy[1],
            shape: annotation.shape ?? 'circle',
            offset: getAnnotationLabelOffset(
              annotation.labelPosition ?? 'top-right',
              annotation.padding ?? 4
            ),
          };
        })
        .filter((point): point is NonNullable<typeof point> => Boolean(point))
    : []
  );

  const ANNOTATION_LABEL_CLEARANCE = 18;

  let countryLabelPosition = $derived(
    activeProjection && resolvedFeature ?
      applyLabelOffset(
        avoidPointCollisions(
          geoPath(activeProjection).centroid(
            getLargestPolygonGeometry(resolvedFeature)
          ),
          annotationPoints,
          ANNOTATION_LABEL_CLEARANCE
        ),
        countryLabelOffset
      )
    : null
  );
</script>

<div
  class={['inset-map', `corner-${corner}`, cls].filter(Boolean).join(' ')}
  style="width: {size}px; height: {size}px;"
>
  <svg width={size} height={size} viewBox="0 0 {size} {size}">
    {#if shapePath}
      <path d={shapePath} class="inset-shape" />
    {/if}
    {#each annotationPoints as point (point.name)}
      {#if point.shape === 'square'}
        <rect
          x={point.x - 3}
          y={point.y - 3}
          width="6"
          height="6"
          class="inset-annotation-dot"
        />
      {:else}
        <circle cx={point.x} cy={point.y} r="3" class="inset-annotation-dot" />
      {/if}
      <text
        x={point.x + point.offset.dx}
        y={point.y + point.offset.dy}
        text-anchor={point.offset.anchor}
        dominant-baseline={point.offset.baseline}
        class="inset-annotation-label"
      >
        {point.name}
      </text>
    {/each}
    {#if countryLabel && countryLabelPosition && countryLabelPosition.every(Number.isFinite)}
      <text
        x={countryLabelPosition[0]}
        y={countryLabelPosition[1]}
        text-anchor="middle"
        dominant-baseline="central"
        class="inset-country-label"
      >
        {countryLabel}
      </text>
    {/if}
  </svg>
</div>

<style>
  .inset-map {
    position: absolute;
    pointer-events: none;
    z-index: 1;
  }

  .inset-map.corner-top-left {
    top: 0.5rem;
    left: 0.5rem;
  }

  .inset-map.corner-top-right {
    top: 0.5rem;
    right: 0.5rem;
  }

  .inset-map.corner-bottom-left {
    bottom: 0.5rem;
    left: 0.5rem;
  }

  .inset-map.corner-bottom-right {
    bottom: 0.5rem;
    right: 0.5rem;
  }

  .inset-shape {
    fill: #fff;
    stroke: #bbb;
    stroke-width: 1;
  }

  .inset-annotation-dot {
    fill: var(--theme-colour-accent, #ff5a1f);
  }

  .inset-annotation-label,
  .inset-country-label {
    fill: var(--theme-colour-text-primary, #404040);
    font-family: var(--theme-font-family-note, Knowledge, sans-serif);
  }

  .inset-annotation-label {
    font-size: var(--theme-font-size-xxs, 0.875rem);
    font-weight: 600;
  }

  .inset-country-label {
    font-size: var(--theme-font-size-xxs, 0.875rem);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    fill: #888;
  }
</style>
