import { describe, it, expect } from 'vitest';
import * as maplibregl from 'maplibre-gl';

/**
 * Everything else in this folder tests our code against a *mocked* MapLibre,
 * which means it keeps passing even if MapLibre renames or drops a method we
 * depend on — the mock supplies whatever the real library no longer has.
 *
 * This is the one place we assert against the real module, so a major upgrade
 * fails here, by name, instead of silently on a live map.
 */
describe('the MapLibre API TileMap depends on', () => {
  it('still exports the worker hook', () => {
    expect(typeof maplibregl.setWorkerUrl).toBe('function');
  });

  it.each([
    // terrain.ts
    'setTerrain',
    'getProjection',
    'setProjection',
    'setLayoutProperty',
    // labels.ts and map layers
    'setPaintProperty',
    'getSource',
    'getLayer',
  ])('still has Map.prototype.%s', (method) => {
    expect(
      typeof (maplibregl.Map.prototype as unknown as Record<string, unknown>)[
        method
      ]
    ).toBe('function');
  });
});
