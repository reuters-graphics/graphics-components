import type { Map as MaplibreMap } from 'maplibre-gl';

/**
 * Find the first symbol (label) layer in the map's current style, or undefined.
 * Symbol layers are the basemap's place names, road labels, etc. Inserting a
 * data layer *before* this id keeps every label above the data.
 *
 * @see https://docs.mapbox.com/mapbox-gl-js/example/geojson-layer-in-stack/
 */
export function findFirstSymbolLayerId(map: MaplibreMap): string | undefined {
  const layers = map.getStyle()?.layers;
  if (!layers) return undefined;
  for (const layer of layers) {
    if (layer.type === 'symbol') return layer.id;
  }
  return undefined;
}

/** Options for {@link emphasizePlaceLabels}. */
export interface EmphasizeLabelsOptions {
  /** Text color for place labels. Default `#1a1a1a` (near-black). */
  textColor?: string;
  /** Halo color. Default solid white. */
  haloColor?: string;
  /** Halo width, in px. Default `1.6`. */
  haloWidth?: number;
}

/**
 * Darken the basemap's populated-place labels (cities, towns, capitals, …) and
 * give them a strong white halo so they stay legible on top of colored data
 * overlays.
 *
 * Targets the `place` source-layer symbol layers of the default Reuters
 * protomaps style. On a style that doesn't have them it's a **no-op** (the
 * per-layer checks and `try/catch` make it degrade gracefully), so it's safe to
 * call regardless of `styleUrl`.
 */
export function emphasizePlaceLabels(
  map: MaplibreMap,
  opts: EmphasizeLabelsOptions = {}
): void {
  const {
    textColor = '#1a1a1a',
    haloColor = 'rgba(255, 255, 255, 1)',
    haloWidth = 1.6,
  } = opts;
  const layers = map.getStyle()?.layers;
  if (!layers) return;
  for (const layer of layers) {
    if (layer.type !== 'symbol') continue;
    const sourceLayer = (layer as { 'source-layer'?: string })['source-layer'];
    if (sourceLayer !== 'place') continue;
    try {
      map.setPaintProperty(layer.id, 'text-color', textColor);
      map.setPaintProperty(layer.id, 'text-halo-color', haloColor);
      map.setPaintProperty(layer.id, 'text-halo-width', haloWidth);
      map.setPaintProperty(layer.id, 'text-halo-blur', 0);
    } catch {
      /* layer isn't paintable in this style; skip it */
    }
  }
}
