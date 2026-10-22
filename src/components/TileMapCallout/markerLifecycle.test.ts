import { describe, expect, it, vi } from 'vitest';
import type { Map as MaplibreMap, Marker } from 'maplibre-gl';
import { createCalloutMarkerLifecycle } from './markerLifecycle';

function createFakeMarker() {
  const marker = {
    setLngLat: vi.fn(function (this: unknown) {
      return this;
    }),
    addTo: vi.fn(function (this: unknown) {
      return this;
    }),
    remove: vi.fn(),
  };
  return marker as unknown as Marker & typeof marker;
}

describe('callout marker lifecycle', () => {
  it('creates and attaches a marker when the map and coordinates are ready', () => {
    const map = {} as MaplibreMap;
    const element = {} as HTMLElement;
    const marker = createFakeMarker();
    const createMarker = vi.fn(() => marker);
    const lifecycle = createCalloutMarkerLifecycle(createMarker);

    lifecycle.sync(map, element, [-73.9868, 40.7567]);

    expect(createMarker).toHaveBeenCalledWith(element);
    expect(marker.setLngLat).toHaveBeenCalledWith([-73.9868, 40.7567]);
    expect(marker.addTo).toHaveBeenCalledWith(map);
  });

  it('updates the existing marker when its coordinates change', () => {
    const map = {} as MaplibreMap;
    const marker = createFakeMarker();
    const createMarker = vi.fn(() => marker);
    const lifecycle = createCalloutMarkerLifecycle(createMarker);

    lifecycle.sync(map, {} as HTMLElement, [1, 2]);
    lifecycle.sync(map, {} as HTMLElement, [3, 4]);

    expect(createMarker).toHaveBeenCalledTimes(1);
    expect(marker.setLngLat).toHaveBeenNthCalledWith(1, [1, 2]);
    expect(marker.setLngLat).toHaveBeenNthCalledWith(2, [3, 4]);
    expect(marker.addTo).toHaveBeenCalledTimes(1);
  });

  it('removes the marker when map or coordinates are unavailable', () => {
    const map = {} as MaplibreMap;
    const marker = createFakeMarker();
    const lifecycle = createCalloutMarkerLifecycle(() => marker);

    lifecycle.sync(map, {} as HTMLElement, [1, 2]);
    lifecycle.sync(map, {} as HTMLElement, null);

    expect(marker.remove).toHaveBeenCalledTimes(1);
    lifecycle.sync(null, {} as HTMLElement, [3, 4]);
    expect(marker.remove).toHaveBeenCalledTimes(1);
  });

  it('recreates the marker when it moves to a different map', () => {
    const firstMap = {} as MaplibreMap;
    const secondMap = {} as MaplibreMap;
    const firstMarker = createFakeMarker();
    const secondMarker = createFakeMarker();
    const createMarker = vi
      .fn()
      .mockReturnValueOnce(firstMarker)
      .mockReturnValueOnce(secondMarker);
    const lifecycle = createCalloutMarkerLifecycle(createMarker);

    lifecycle.sync(firstMap, {} as HTMLElement, [1, 2]);
    lifecycle.sync(secondMap, {} as HTMLElement, [3, 4]);

    expect(firstMarker.remove).toHaveBeenCalledOnce();
    expect(secondMarker.addTo).toHaveBeenCalledWith(secondMap);
    expect(createMarker).toHaveBeenCalledTimes(2);
  });

  it('removes the marker on destroy and makes repeated cleanup safe', () => {
    const marker = createFakeMarker();
    const lifecycle = createCalloutMarkerLifecycle(() => marker);
    lifecycle.sync({} as MaplibreMap, {} as HTMLElement, [1, 2]);

    lifecycle.destroy();
    lifecycle.destroy();

    expect(marker.remove).toHaveBeenCalledOnce();
  });
});
