import { get } from 'svelte/store';
import { describe, expect, it } from 'vitest';
import type { Map as MaplibreMap } from 'maplibre-gl';
import { createTileMapContextState } from './context';

describe('TileMap context state', () => {
  it('publishes the map before it becomes ready', () => {
    const state = createTileMapContextState();
    const map = {} as MaplibreMap;

    state.setMap(map);

    expect(get(state.context.map)).toBe(map);
    expect(get(state.context.ready)).toBe(false);

    state.setReady(true);

    expect(get(state.context.ready)).toBe(true);
  });

  it('resets both stores during teardown', () => {
    const state = createTileMapContextState();
    state.setMap({} as MaplibreMap);
    state.setReady(true);

    state.reset();

    expect(get(state.context.map)).toBeNull();
    expect(get(state.context.ready)).toBe(false);
  });
});
