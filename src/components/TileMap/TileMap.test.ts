import { describe, it, expect, vi, afterEach } from 'vitest';
import type { Map as MaplibreMap } from 'maplibre-gl';
import {
  applyTerrain,
  DEFAULT_TERRAIN_EXAGGERATION,
  TERRAIN_SOURCE_ID,
} from './TileMap.svelte';

/** Minimal fake MapLibre map that only knows which sources a style declares. */
function fakeMap(sourceIds: string[]): {
  map: MaplibreMap;
  terrainCalls: unknown[];
} {
  const terrainCalls: unknown[] = [];
  const map = {
    getSource: (id: string) => (sourceIds.includes(id) ? {} : undefined),
    setTerrain: (options: unknown) => terrainCalls.push(options),
  };
  return { map: map as unknown as MaplibreMap, terrainCalls };
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('applyTerrain', () => {
  it('uses the terrain source published by the Reuters style', () => {
    // A typo here silently renders nothing, so pin the id to the published style.
    expect(TERRAIN_SOURCE_ID).toBe('reuters-world-terrain');
  });

  it('applies a visible default exaggeration when terrain is just enabled', () => {
    const { map, terrainCalls } = fakeMap([TERRAIN_SOURCE_ID]);

    applyTerrain(map, true);

    expect(terrainCalls).toEqual([
      { source: TERRAIN_SOURCE_ID, exaggeration: DEFAULT_TERRAIN_EXAGGERATION },
    ]);
    // A zero default would build an invisible mesh, which is the failure this guards.
    expect(DEFAULT_TERRAIN_EXAGGERATION).toBeGreaterThan(0);
  });

  it('passes a numeric exaggeration through untouched', () => {
    const { map, terrainCalls } = fakeMap([TERRAIN_SOURCE_ID]);

    applyTerrain(map, 2.5);

    expect(terrainCalls).toEqual([
      { source: TERRAIN_SOURCE_ID, exaggeration: 2.5 },
    ]);
  });

  it('warns instead of failing silently when the style has no terrain source', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { map, terrainCalls } = fakeMap(['some-other-source']);

    applyTerrain(map, true);

    expect(terrainCalls).toEqual([]);
    expect(warn).toHaveBeenCalledOnce();
    expect(warn.mock.calls[0][0]).toContain(TERRAIN_SOURCE_ID);
  });
});
