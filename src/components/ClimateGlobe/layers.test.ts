import { describe, it, expect } from 'vitest';
import type { Map as MaplibreMap } from 'maplibre-gl';
import { ClimateLayerManager, type UnitPairedDatasetConfig } from './layers';

/** Minimal fake MapLibre map for exercising ClimateLayerManager. */
function fakeMap(): {
  map: MaplibreMap;
  layers: Map<string, { visibility?: string; sourceLayer: string }>;
} {
  const layers = new Map<string, { visibility?: string; sourceLayer: string }>();
  const map = {
    addSource: () => {},
    addLayer: (spec: {
      id: string;
      'source-layer': string;
      layout?: { visibility?: string };
    }) => {
      layers.set(spec.id, {
        visibility: spec.layout?.visibility,
        sourceLayer: spec['source-layer'],
      });
    },
    getLayer: (id: string) => layers.get(id),
    setLayoutProperty: (id: string, prop: string, val: string) => {
      if (prop === 'visibility') {
        const layer = layers.get(id);
        if (layer) layer.visibility = val;
      }
    },
    setPaintProperty: () => {},
    getStyle: () => ({ layers: [] }),
  };
  return { map: map as unknown as MaplibreMap, layers };
}

const config: UnitPairedDatasetConfig = {
  buildUrl: () => 'https://example.com/data.pmtiles',
  sourceLayerCelsius: 'wbgt_max',
  sourceLayerFahrenheit: 'wbgt_max_fahrenheit',
  paintCelsius: { 'fill-opacity': 0.4 },
  paintFahrenheit: { 'fill-opacity': 0.6 },
};

describe('ClimateLayerManager', () => {
  it('setUnit swaps which source-layer (i.e. which unit\'s data) is visible', () => {
    const { map, layers } = fakeMap();
    const manager = new ClimateLayerManager();
    manager.add(map, '2026-01-01', config);

    manager.setUnit(map, 'celsius');
    expect(layers.get('climate-data-layer-celsius')?.visibility).toBe(
      'visible'
    );
    expect(layers.get('climate-data-layer-fahrenheit')?.visibility).toBe(
      'none'
    );

    manager.setUnit(map, 'fahrenheit');
    expect(layers.get('climate-data-layer-celsius')?.visibility).toBe('none');
    expect(layers.get('climate-data-layer-fahrenheit')?.visibility).toBe(
      'visible'
    );
  });
});
