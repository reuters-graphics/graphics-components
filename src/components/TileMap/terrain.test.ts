import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { Map as MaplibreMap } from 'maplibre-gl';
import {
  enableTerrain,
  disableTerrain,
  TERRAIN_SOURCE_ID,
  TERRAIN_RELIEF_LAYER_ID,
  DEFAULT_TERRAIN_EXAGGERATION,
} from './terrain';

/**
 * A map that behaves like one styled by the Reuters basemap: it has the
 * elevation source and the hidden relief layer, and it starts on the globe.
 */
function fakeMap({
  hasTerrainSource = true,
  hasReliefLayer = true,
  projection = 'globe',
} = {}) {
  return {
    getSource: vi.fn(() => (hasTerrainSource ? {} : undefined)),
    getLayer: vi.fn(() => (hasReliefLayer ? {} : undefined)),
    getProjection: vi.fn(() => ({ type: projection })),
    setProjection: vi.fn(),
    setTerrain: vi.fn(),
    setLayoutProperty: vi.fn(),
  } as unknown as MaplibreMap & {
    setTerrain: ReturnType<typeof vi.fn>;
    setProjection: ReturnType<typeof vi.fn>;
    setLayoutProperty: ReturnType<typeof vi.fn>;
  };
}

describe('enableTerrain', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('attaches the elevation mesh to the published source', () => {
    const map = fakeMap();

    expect(enableTerrain(map)).toBe(true);
    expect(map.setTerrain).toHaveBeenCalledWith({
      source: TERRAIN_SOURCE_ID,
      exaggeration: DEFAULT_TERRAIN_EXAGGERATION,
    });
  });

  it('honors a custom exaggeration', () => {
    const map = fakeMap();

    enableTerrain(map, 2.5);

    expect(map.setTerrain).toHaveBeenCalledWith({
      source: TERRAIN_SOURCE_ID,
      exaggeration: 2.5,
    });
  });

  // Terrain is a mesh MapLibre cannot drape on a sphere, so a map left on the
  // globe silently renders flat.
  it('leaves the globe so the terrain can render', () => {
    const map = fakeMap({ projection: 'globe' });

    enableTerrain(map);

    expect(map.setProjection).toHaveBeenCalledWith({ type: 'mercator' });
  });

  it('keeps a projection that is already not the globe', () => {
    const map = fakeMap({ projection: 'mercator' });

    enableTerrain(map);

    expect(map.setProjection).not.toHaveBeenCalled();
  });

  // The relief ships hidden so default maps are unchanged; opting in is what
  // reveals it.
  it('reveals the shaded relief', () => {
    const map = fakeMap();

    enableTerrain(map);

    expect(map.setLayoutProperty).toHaveBeenCalledWith(
      TERRAIN_RELIEF_LAYER_ID,
      'visibility',
      'visible'
    );
  });

  // Older styles have no elevation source. Calling setTerrain there throws, so
  // the guard is what keeps an old style from breaking outright.
  it('warns and does nothing on a style without the elevation source', () => {
    const map = fakeMap({ hasTerrainSource: false });

    expect(enableTerrain(map)).toBe(false);
    expect(map.setTerrain).not.toHaveBeenCalled();
    expect(map.setProjection).not.toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalledOnce();
  });

  it('still applies terrain on a style without the relief layer', () => {
    const map = fakeMap({ hasReliefLayer: false });

    expect(enableTerrain(map)).toBe(true);
    expect(map.setLayoutProperty).not.toHaveBeenCalled();
  });
});

describe('disableTerrain', () => {
  it('detaches the mesh and hides the relief again', () => {
    const map = fakeMap();

    disableTerrain(map);

    expect(map.setTerrain).toHaveBeenCalledWith(null);
    expect(map.setLayoutProperty).toHaveBeenCalledWith(
      TERRAIN_RELIEF_LAYER_ID,
      'visibility',
      'none'
    );
  });

  // The map may have been on mercator before terrain was ever switched on, so
  // forcing it back to the globe would be a change the caller never asked for.
  it('leaves the projection alone', () => {
    const map = fakeMap();

    disableTerrain(map);

    expect(map.setProjection).not.toHaveBeenCalled();
  });
});
