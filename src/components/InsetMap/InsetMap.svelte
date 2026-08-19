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
  import { geoArea } from 'd3-geo';
  import type {
    Feature,
    FeatureCollection,
    GeoJSON as GeoJSONType,
    GeoJsonProperties,
    Geometry,
    Position,
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

  /**
   * Converts a locally-imported topology into features, without assuming a
   * fixed object key — an `@reuters-graphics/graphics-atlas-client` topojson
   * import keys its single object as `countries` or `lines` depending on
   * which dataset it came from, so we just take whichever key is there.
   */
  export const topologyToFeatures = (
    topology: Topology
  ): Feature<Geometry, GeoJsonProperties>[] => {
    const key = Object.keys(topology.objects)[0];
    const converted = feature(
      topology,
      topology.objects[key] as GeometryCollection
    ) as unknown as
      | FeatureCollection<Geometry, GeoJsonProperties>
      | Feature<Geometry, GeoJsonProperties>;
    return converted.type === 'FeatureCollection' ?
        converted.features
      : [converted];
  };

  export type InsetMapFeatureKind = 'shape' | 'border' | 'context-border';

  /**
   * Classifies a single feature as a filled shape or a stroked border line,
   * purely from its geometry type — polygons fill, lines stroke. Runs
   * per-feature (not per child) so a child registering a mixed bag of
   * geometry — or the pooled features of several children — splits
   * correctly instead of being judged as one all-or-nothing block. A
   * border-lines dataset from the atlas client carries every segment
   * (contested or not) with a `disputed` flag: disputed segments classify as
   * `border`, everything else as `context-border` (rendered transparent by
   * default — see `.inset-context-border-line` — so a caller bringing their
   * own border topojson can opt into styling it instead of it just vanishing).
   */
  export const classifyFeature = (
    feature: Feature<Geometry, GeoJsonProperties>
  ): InsetMapFeatureKind => {
    const isLine =
      feature.geometry?.type === 'LineString' ||
      feature.geometry?.type === 'MultiLineString';
    if (!isLine) return 'shape';
    return feature.properties?.disputed ? 'border' : 'context-border';
  };

  export interface InsetMapChildFeature {
    features: Feature<Geometry, GeoJsonProperties>[];
    label?: string;
    labelOffset?: InsetMapLabelOffset;
  }

  /** Context handed to `InsetMapFeature` children via `getContext('inset-map')`. */
  export interface InsetMapContext {
    unregisterChild(id: string): void;
    setChildFeature(id: string, entry: InsetMapChildFeature): void;
  }

  const collectPolygonRings = (input: GeoJSONType): Position[][][] => {
    if (input.type === 'FeatureCollection') {
      return input.features.flatMap(collectPolygonRings);
    }
    const geometry = input.type === 'Feature' ? input.geometry : input;
    if (geometry?.type === 'Polygon') return [geometry.coordinates];
    if (geometry?.type === 'MultiPolygon') return geometry.coordinates;
    return [];
  };

  /**
   * A country with islands or exclaves (e.g. France, the US) is a
   * MultiPolygon whose overall centroid can land in open water between
   * landmasses; a region or subregion is a FeatureCollection of several
   * countries. Either way, pick out the largest ring by spherical area
   * across all of it, so the label centers on the single biggest landmass
   * instead of drifting toward water or a multi-country midpoint.
   */
  export const getLargestPolygonGeometry = (
    input: GeoJSONType
  ): GeoJSONType => {
    const rings = collectPolygonRings(input);
    if (rings.length === 0) return input;

    let largest = rings[0];
    let largestArea = -Infinity;

    for (const coordinates of rings) {
      const area = geoArea({ type: 'Polygon', coordinates });
      if (area > largestArea) {
        largestArea = area;
        largest = coordinates;
      }
    }

    return { type: 'Polygon', coordinates: largest };
  };

  /**
   * Nudges a point away from nearby annotation markers so the location label
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

  /** Offset for the location label as `[top, right, bottom, left]` px, CSS-style. */
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
  import { getContext, setContext, type Snippet } from 'svelte';
  import { SvelteMap } from 'svelte/reactivity';
  import type { Writable } from 'svelte/store';
  import type { Map as MaplibreMap } from 'maplibre-gl';
  import {
    geoCentroid,
    geoMercator,
    geoPath,
    type GeoProjection,
  } from 'd3-geo';
  import type { Polygon } from 'geojson';

  interface Props {
    /** Corner of the parent element to anchor the inset to. */
    corner?: InsetMapCorner;
    /** A locally-imported TopoJSON topology, e.g. from `@reuters-graphics/graphics-atlas-client/topojson/...`. Composed with any `InsetMapFeature` children if present. */
    geometry?: Topology;
    /** A d3-geo projection factory. Defaults to `geoMercator`, the simplest choice at country scale. */
    projection?: () => GeoProjection;
    /** Labelled markers, positioned with the same projection as the shape so they always land in the right place. */
    annotations?: InsetMapAnnotation[];
    /** Label rendered at the center of the largest shape (e.g. the country, region, or subregion name). */
    locationLabel?: string;
    /** Constrains the view to `[west, south, east, north]`, instead of auto-fitting to the rendered shape(s). Useful when `InsetMapFeature` children (e.g. border lines) extend beyond the region you want visible. */
    bounds?: [west: number, south: number, east: number, north: number];
    /** Padding to add around `bounds` before fitting, as a fraction of its width/height (e.g. `0.1` pads it 10% larger on each side). Only applies when `bounds` is set. Defaults to 0. */
    padding?: number;
    /** Render a thick crimson outline of the parent `TileMap`'s current viewport, so readers can see what portion of the shape the interactive map is showing. Only draws when `InsetMap` is nested inside a `TileMap` and its map has loaded. Defaults to false. */
    showBounds?: boolean;
    /** Inset width and height in px (it's square). */
    size?: number;
    /** Add custom classes to the inset wrapper. */
    class?: string;
    /** `InsetMapFeature` children, for composing several places into one inset. Composed with `geometry` if both are present. */
    children?: Snippet;
  }

  let {
    corner = 'bottom-right',
    geometry,
    projection,
    annotations = [],
    locationLabel,
    bounds,
    padding = 0,
    showBounds = false,
    size = 160,
    class: cls = '',
    children,
  }: Props = $props();

  const childFeatures = new SvelteMap<string, InsetMapChildFeature>();

  const mapStore = getContext<Writable<MaplibreMap | null> | undefined>('map');

  /** The parent `TileMap`'s current viewport, kept in sync with its pan/zoom. Only set when nested inside a `TileMap` and `showBounds` is on. */
  let viewportBounds = $state<[number, number, number, number] | null>(null);

  $effect(() => {
    if (!showBounds || !mapStore) return;

    const syncFromMap = (map: MaplibreMap) => {
      const b = map.getBounds();
      viewportBounds = [b.getWest(), b.getSouth(), b.getEast(), b.getNorth()];
    };

    let currentMap: MaplibreMap | null = null;
    const unsubscribe = mapStore.subscribe((map) => {
      currentMap?.off('move', onMove);
      currentMap = map;
      if (map) {
        map.on('move', onMove);
        syncFromMap(map);
      } else {
        viewportBounds = null;
      }
    });

    function onMove() {
      if (currentMap) syncFromMap(currentMap);
    }

    return () => {
      currentMap?.off('move', onMove);
      unsubscribe();
    };
  });

  setContext<InsetMapContext>('inset-map', {
    unregisterChild: (id) => childFeatures.delete(id),
    setChildFeature: (id, entry) => childFeatures.set(id, entry),
  });

  let ownFeatures = $derived(geometry ? topologyToFeatures(geometry) : []);

  let pooledFeatures = $derived([
    ...ownFeatures,
    ...Array.from(childFeatures.values()).flatMap((entry) => entry.features),
  ]);

  let shapeFeatures = $derived(
    pooledFeatures.filter((f) => classifyFeature(f) === 'shape')
  );

  let childBorderFeatures = $derived(
    pooledFeatures.filter((f) => classifyFeature(f) === 'border')
  );

  let childContextBorderFeatures = $derived(
    pooledFeatures.filter((f) => classifyFeature(f) === 'context-border')
  );

  /** Each child's own shape features (borders don't get a label), keyed by id. */
  let childLabelEntries = $derived(
    Array.from(childFeatures.entries())
      .map(([id, entry]) => ({
        id,
        label: entry.label,
        labelOffset: entry.labelOffset ?? [0, 0, 0, 0],
        features: entry.features.filter((f) => classifyFeature(f) === 'shape'),
      }))
      .filter((entry) => entry.label && entry.features.length)
  );

  let resolvedFeature = $derived(
    shapeFeatures.length === 0 ?
      null
    : ({
        type: 'FeatureCollection',
        features: shapeFeatures,
      } as FeatureCollection<Geometry, GeoJsonProperties>)
  );

  /** `bounds` padded by `padding` — a fraction of its own width/height added to each side. */
  let paddedBounds = $derived(
    bounds ?
      (([west, south, east, north]): [number, number, number, number] => {
        const lonPad = (east - west) * padding;
        const latPad = (north - south) * padding;
        return [west - lonPad, south - latPad, east + lonPad, north + latPad];
      })(bounds)
    : null
  );

  let boundsPolygon = $derived(
    paddedBounds ?
      ({
        type: 'Polygon',
        // d3-geo's spherical algorithms (geoCentroid, which fitSize relies
        // on) treat a ring's winding as significant: this order goes
        // west,south -> west,north -> east,north -> east,south, which is
        // clockwise in plain (lon,lat) terms but is what d3-geo needs to
        // read the box itself as the (small) interior, rather than
        // everything else on the globe.
        coordinates: [
          [
            [paddedBounds[0], paddedBounds[1]],
            [paddedBounds[0], paddedBounds[3]],
            [paddedBounds[2], paddedBounds[3]],
            [paddedBounds[2], paddedBounds[1]],
            [paddedBounds[0], paddedBounds[1]],
          ],
        ],
      } as Polygon)
    : null
  );

  /** What the projection fits to — `bounds`, when given, otherwise the rendered shape(s). */
  let fitFeature = $derived(boundsPolygon ?? resolvedFeature);

  /**
   * A location whose territory straddles ±180° longitude (New Zealand's
   * Chatham Islands, Fiji, Russia...) gets its far side projected on the
   * wrong side of the map under the default, zero-centered Mercator —
   * `fitSize` then scales down to fit that artificially huge span. Rotating
   * to center on the shape's own centroid first keeps everything on one
   * side of the seam. Skipped when the caller supplies their own
   * `projection`, since they may have already set a deliberate rotation.
   *
   * Clipping to the rendered viewport (rather than relying on the SVG's own
   * overflow behavior) also means every stream-based computation on this
   * projection — not just the rendered path, but also `.centroid()` for
   * label placement below — only sees the visible portion of a shape. That's
   * what keeps a child's label centered on the sliver of its country that's
   * actually on screen instead of that country's real, possibly off-screen,
   * overall centroid.
   */
  let activeProjection = $derived(
    fitFeature ?
      (projection ?
        projection().fitSize([size, size], fitFeature)
      : geoMercator()
          .rotate([-geoCentroid(fitFeature)[0], 0])
          .fitSize([size, size], fitFeature)
      ).clipExtent([
        [0, 0],
        [size, size],
      ])
    : null
  );

  let shapePath = $derived(
    activeProjection && resolvedFeature ?
      geoPath(activeProjection)(resolvedFeature)
    : null
  );

  let borderPath = $derived(
    activeProjection && childBorderFeatures.length ?
      geoPath(activeProjection)({
        type: 'FeatureCollection',
        features: childBorderFeatures,
      } as FeatureCollection<Geometry, GeoJsonProperties>)
    : null
  );

  let contextBorderPath = $derived(
    activeProjection && childContextBorderFeatures.length ?
      geoPath(activeProjection)({
        type: 'FeatureCollection',
        features: childContextBorderFeatures,
      } as FeatureCollection<Geometry, GeoJsonProperties>)
    : null
  );

  let viewportPolygon = $derived(
    viewportBounds ?
      ({
        type: 'Polygon',
        // Same winding order as boundsPolygon above, for the same reason.
        coordinates: [
          [
            [viewportBounds[0], viewportBounds[1]],
            [viewportBounds[0], viewportBounds[3]],
            [viewportBounds[2], viewportBounds[3]],
            [viewportBounds[2], viewportBounds[1]],
            [viewportBounds[0], viewportBounds[1]],
          ],
        ],
      } as Polygon)
    : null
  );

  let viewportPath = $derived(
    activeProjection && viewportPolygon ?
      geoPath(activeProjection)(viewportPolygon)
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

  let locationLabelPosition = $derived(
    activeProjection && resolvedFeature ?
      avoidPointCollisions(
        geoPath(activeProjection).centroid(
          getLargestPolygonGeometry(resolvedFeature)
        ),
        annotationPoints,
        ANNOTATION_LABEL_CLEARANCE
      )
    : null
  );

  /** One label per `InsetMapFeature` child that set a `label`, each centered on its own largest shape. */
  let childLabelPositions = $derived(
    activeProjection ?
      childLabelEntries
        .map(({ id, label, labelOffset, features }) => {
          const position = applyLabelOffset(
            avoidPointCollisions(
              geoPath(activeProjection!).centroid(
                getLargestPolygonGeometry({
                  type: 'FeatureCollection',
                  features,
                })
              ),
              annotationPoints,
              ANNOTATION_LABEL_CLEARANCE
            ),
            labelOffset
          );
          return { id, label: label!, position };
        })
        .filter((entry) => entry.position.every(Number.isFinite))
    : []
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
    {#if contextBorderPath}
      <path d={contextBorderPath} class="inset-context-border-line" />
    {/if}
    {#if borderPath}
      <path d={borderPath} class="inset-border-line" />
    {/if}
    {#each childLabelPositions as entry (entry.id)}
      <text
        x={entry.position[0]}
        y={entry.position[1]}
        text-anchor="middle"
        dominant-baseline="central"
        class="inset-location-label"
      >
        {entry.label}
      </text>
    {/each}
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
    {#if locationLabel && locationLabelPosition && locationLabelPosition.every(Number.isFinite)}
      <text
        x={locationLabelPosition[0]}
        y={locationLabelPosition[1]}
        text-anchor="middle"
        dominant-baseline="central"
        class="inset-location-label"
      >
        {locationLabel}
      </text>
    {/if}
    {#if showBounds && viewportPath}
      <path d={viewportPath} class="inset-bounds-box" />
    {/if}
  </svg>
  {#if children}
    {@render children()}
  {/if}
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

  .inset-border-line {
    fill: none;
    stroke: crimson;
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  .inset-bounds-box {
    fill: none;
    stroke: crimson;
    stroke-width: 3;
  }

  /**
   * Non-disputed segments of a border-lines dataset render transparent by
   * default rather than not at all, so a caller using a custom border
   * topojson can target this class to style them explicitly instead of the
   * line just disappearing.
   */
  .inset-context-border-line {
    fill: none;
    stroke: transparent;
    stroke-width: 1;
  }

  .inset-annotation-dot {
    fill: var(--theme-colour-accent, #ff5a1f);
  }

  .inset-annotation-label,
  .inset-location-label {
    fill: var(--theme-colour-text-primary, #404040);
    font-family: var(--theme-font-family-note, Knowledge, sans-serif);
  }

  .inset-annotation-label {
    font-size: var(--theme-font-size-xxs, 0.875rem);
    font-weight: 600;
  }

  .inset-location-label {
    font-size: var(--theme-font-size-xxs, 0.875rem);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    fill: #888;
  }
</style>
