import { describe, expect, it, vi } from 'vitest';
import type {
  MapOptions,
  StyleSpecification,
  Map as MaplibreMap,
} from 'maplibre-gl';
import { completeTileMapSetup, createTileMapOptions } from './options';

const inlineStyle: StyleSpecification = {
  version: 8,
  sources: {},
  layers: [],
};

function createOptions(overrides: Partial<MapOptions> = {}) {
  return createTileMapOptions({
    container: {} as HTMLElement,
    style: inlineStyle,
    center: [-77, 39],
    zoom: 8,
    minZoom: 2,
    maxZoom: 18,
    pitch: 30,
    interactive: false,
    mapOptions: overrides,
  });
}

describe('createTileMapOptions', () => {
  it('passes inline styles and advanced MapLibre options through', () => {
    const options = createOptions({
      hash: true,
      trackResize: false,
    });

    expect(options.style).toBe(inlineStyle);
    expect(options.hash).toBe(true);
    expect(options.trackResize).toBe(false);
  });

  it('uses MapLibre resize tracking by default', () => {
    expect(createOptions().trackResize).toBe(true);
  });

  it('keeps first-class TileMap props authoritative', () => {
    const container = {} as HTMLElement;
    const options = createTileMapOptions({
      container,
      style: inlineStyle,
      center: [-77, 39],
      zoom: 8,
      minZoom: 2,
      maxZoom: 18,
      pitch: 30,
      interactive: false,
      mapOptions: {
        container: 'ignored',
        style: 'ignored',
        center: [0, 0],
        zoom: 1,
        minZoom: 1,
        maxZoom: 1,
        pitch: 1,
        interactive: true,
      } as unknown as MapOptions,
    });

    expect(options).toMatchObject({
      container,
      style: inlineStyle,
      center: [-77, 39],
      zoom: 8,
      minZoom: 2,
      maxZoom: 18,
      pitch: 30,
      interactive: false,
    });
  });
});

describe('completeTileMapSetup', () => {
  it('publishes readiness after setup and before onMapReady', () => {
    const calls: string[] = [];
    const map = {
      setProjection: vi.fn(() => calls.push('projection')),
      getSource: vi.fn(() => ({})),
      getLayer: vi.fn(() => undefined),
      getProjection: vi.fn(() => ({ type: 'mercator' })),
      setTerrain: vi.fn(() => calls.push('terrain')),
    } as unknown as MaplibreMap;

    completeTileMapSetup({
      map,
      projection: { type: 'globe' },
      terrain: 2,
      setReady: () => calls.push('ready'),
      onMapReady: () => calls.push('callback'),
    });

    expect(calls).toEqual(['projection', 'terrain', 'ready', 'callback']);
  });
});
