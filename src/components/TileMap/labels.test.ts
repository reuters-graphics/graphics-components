import { describe, it, expect } from 'vitest';
import type { Map as MaplibreMap } from 'maplibre-gl';
import { findFirstSymbolLayerId, emphasizePlaceLabels } from './labels';

/** Minimal fake MapLibre map for exercising the pure label helpers. */
function fakeMap(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layers: any[] | undefined
): {
  map: MaplibreMap;
  calls: { id: string; prop: string; val: unknown }[];
} {
  const calls: { id: string; prop: string; val: unknown }[] = [];
  const map = {
    getStyle: () => (layers ? { layers } : undefined),
    setPaintProperty: (id: string, prop: string, val: unknown) =>
      calls.push({ id, prop, val }),
  };
  return { map: map as unknown as MaplibreMap, calls };
}

describe('findFirstSymbolLayerId', () => {
  it('returns the id of the first symbol layer', () => {
    const { map } = fakeMap([
      { id: 'background', type: 'background' },
      { id: 'roads', type: 'line' },
      { id: 'road_labels', type: 'symbol' },
      { id: 'place_labels', type: 'symbol' },
    ]);
    expect(findFirstSymbolLayerId(map)).toBe('road_labels');
  });

  it('returns undefined when there are no symbol layers', () => {
    const { map } = fakeMap([
      { id: 'background', type: 'background' },
      { id: 'water', type: 'fill' },
    ]);
    expect(findFirstSymbolLayerId(map)).toBeUndefined();
  });

  it('returns undefined when the style is unavailable', () => {
    const { map } = fakeMap(undefined);
    expect(findFirstSymbolLayerId(map)).toBeUndefined();
  });
});

describe('emphasizePlaceLabels', () => {
  it('restyles only the `place` source-layer symbol layers', () => {
    const { map, calls } = fakeMap([
      { id: 'roads', type: 'line', 'source-layer': 'transportation' },
      {
        id: 'road_labels',
        type: 'symbol',
        'source-layer': 'transportation_name',
      },
      { id: 'city_labels', type: 'symbol', 'source-layer': 'place' },
      { id: 'water_labels', type: 'symbol', 'source-layer': 'water_name' },
    ]);
    emphasizePlaceLabels(map);
    const touched = [...new Set(calls.map((c) => c.id))];
    expect(touched).toEqual(['city_labels']);
    // Default near-black text + solid white halo.
    expect(calls).toContainEqual({
      id: 'city_labels',
      prop: 'text-color',
      val: '#1a1a1a',
    });
    expect(calls).toContainEqual({
      id: 'city_labels',
      prop: 'text-halo-width',
      val: 1.6,
    });
    // Pins opacity to 1 so the near-black color isn't faded to gray by the
    // style's zoom-driven text-opacity ramp.
    expect(calls).toContainEqual({
      id: 'city_labels',
      prop: 'text-opacity',
      val: 1,
    });
  });

  it('respects custom options', () => {
    const { map, calls } = fakeMap([
      { id: 'city_labels', type: 'symbol', 'source-layer': 'place' },
    ]);
    emphasizePlaceLabels(map, { textColor: '#000', haloWidth: 2 });
    expect(calls).toContainEqual({
      id: 'city_labels',
      prop: 'text-color',
      val: '#000',
    });
    expect(calls).toContainEqual({
      id: 'city_labels',
      prop: 'text-halo-width',
      val: 2,
    });
  });

  it('is a no-op when there are no place labels', () => {
    const { map, calls } = fakeMap([
      {
        id: 'road_labels',
        type: 'symbol',
        'source-layer': 'transportation_name',
      },
    ]);
    emphasizePlaceLabels(map);
    expect(calls).toHaveLength(0);
  });
});
