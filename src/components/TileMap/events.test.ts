import { describe, expect, it, vi } from 'vitest';
import type { Map as MaplibreMap } from 'maplibre-gl';
import { connectTileMapEvents } from './events';

type EventName = 'load' | 'styledata';
type Listener = () => void;

function createFakeMap() {
  const listeners = new Map<EventName, Set<Listener>>([
    ['load', new Set()],
    ['styledata', new Set()],
  ]);
  let layers: unknown[] | undefined;

  const map = {
    on: vi.fn((event: EventName, listener: Listener) => {
      listeners.get(event)?.add(listener);
      return map;
    }),
    off: vi.fn((event: EventName, listener: Listener) => {
      listeners.get(event)?.delete(listener);
      return map;
    }),
    getStyle: vi.fn(() => (layers ? { layers } : undefined)),
    setPaintProperty: vi.fn(),
  };

  return {
    map: map as unknown as MaplibreMap,
    emit(event: EventName) {
      for (const listener of [...(listeners.get(event) ?? [])]) listener();
    },
    setLayers(value: unknown[] | undefined) {
      layers = value;
    },
    listenerCount(event: EventName) {
      return listeners.get(event)?.size ?? 0;
    },
  };
}

describe('connectTileMapEvents', () => {
  it('publishes readiness before notifying the map-ready callback', () => {
    const fake = createFakeMap();
    const calls: string[] = [];
    const onMapReady = vi.fn(() => calls.push('callback'));
    const disconnect = connectTileMapEvents({
      map: fake.map,
      terrain: false,
      emphasizeLabels: false,
      setReady: (ready) => calls.push(`ready:${ready}`),
      onMapReady,
    });

    expect(fake.listenerCount('load')).toBe(1);
    expect(fake.listenerCount('styledata')).toBe(0);

    fake.emit('load');

    expect(calls).toEqual(['ready:true', 'callback']);
    expect(onMapReady).toHaveBeenCalledWith(fake.map);

    disconnect();
    expect(fake.listenerCount('load')).toBe(0);
  });

  it('waits for place labels, emphasizes them once, then stops listening', () => {
    const fake = createFakeMap();
    const disconnect = connectTileMapEvents({
      map: fake.map,
      terrain: false,
      emphasizeLabels: true,
      setReady: vi.fn(),
    });

    expect(fake.listenerCount('styledata')).toBe(1);
    fake.emit('styledata');
    expect(fake.map.setPaintProperty).not.toHaveBeenCalled();
    expect(fake.listenerCount('styledata')).toBe(1);

    fake.setLayers([{ id: 'cities', type: 'symbol', 'source-layer': 'place' }]);
    fake.emit('styledata');

    expect(fake.map.setPaintProperty).toHaveBeenCalledWith(
      'cities',
      'text-color',
      '#1a1a1a'
    );
    expect(fake.map.setPaintProperty).toHaveBeenCalledWith(
      'cities',
      'text-opacity',
      1
    );
    expect(fake.listenerCount('styledata')).toBe(0);

    disconnect();
    expect(fake.listenerCount('styledata')).toBe(0);
  });

  it('removes active listeners when disconnected and can disconnect only once', () => {
    const fake = createFakeMap();
    const disconnect = connectTileMapEvents({
      map: fake.map,
      terrain: false,
      emphasizeLabels: true,
      setReady: vi.fn(),
    });

    disconnect();
    disconnect();

    expect(fake.listenerCount('load')).toBe(0);
    expect(fake.listenerCount('styledata')).toBe(0);
    expect(fake.map.off).toHaveBeenCalledTimes(2);
  });
});
