import type { Map as MaplibreMap } from 'maplibre-gl';

/** Elevation source published by the Reuters basemap style. */
export const TERRAIN_SOURCE_ID = 'reuters-world-terrain';

/**
 * Shaded relief drawn from the same elevation tiles. It ships hidden, because
 * detailed relief is an editorial choice rather than a default map treatment.
 */
export const TERRAIN_RELIEF_LAYER_ID = 'terrain-hillshade';

export const DEFAULT_TERRAIN_EXAGGERATION = 1.5;

/**
 * MapLibre cannot draw a terrain mesh on the globe, so opting into terrain
 * also means dropping to mercator.
 */
export const TERRAIN_PROJECTION = 'mercator';

/**
 * Switch on Reuters 3D terrain: show the shaded relief, leave the globe, and
 * attach the elevation mesh.
 *
 * Terrain is 3D geometry, so it only reads on a tilted map — pair this with a
 * pitch above 0. Does nothing on a style without the elevation source, which
 * is every style older than the one that introduced it.
 *
 * @returns whether terrain was applied
 */
export function enableTerrain(
  map: MaplibreMap,
  exaggeration: number = DEFAULT_TERRAIN_EXAGGERATION
): boolean {
  if (!map.getSource(TERRAIN_SOURCE_ID)) {
    console.warn(
      `TileMap: terrain is on but the style has no "${TERRAIN_SOURCE_ID}" source, so no terrain was applied.`
    );
    return false;
  }

  setReliefVisible(map, true);

  if (map.getProjection().type === 'globe') {
    map.setProjection({ type: TERRAIN_PROJECTION });
  }

  map.setTerrain({ source: TERRAIN_SOURCE_ID, exaggeration });
  return true;
}

/**
 * Switch off 3D terrain and its shaded relief, returning the map to the
 * default treatment. Leaves the projection alone, since the map may have been
 * on mercator to begin with.
 */
export function disableTerrain(map: MaplibreMap) {
  map.setTerrain(null);
  setReliefVisible(map, false);
}

function setReliefVisible(map: MaplibreMap, visible: boolean) {
  if (!map.getLayer(TERRAIN_RELIEF_LAYER_ID)) return;
  map.setLayoutProperty(
    TERRAIN_RELIEF_LAYER_ID,
    'visibility',
    visible ? 'visible' : 'none'
  );
}
