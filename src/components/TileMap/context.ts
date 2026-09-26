import { getContext, setContext } from 'svelte';
import { readonly, writable, type Readable } from 'svelte/store';
import type { Map as MaplibreMap } from 'maplibre-gl';

/** Read-only state shared by a parent `TileMap` with its child components. */
export interface TileMapContext {
  /** The MapLibre instance, available as soon as it has been constructed. */
  readonly map: Readable<MaplibreMap | null>;
  /** Whether the map's initial style, projection and terrain setup is complete. */
  readonly ready: Readable<boolean>;
}

/** @internal Context key shared by TileMap components and their tests. */
export const tileMapContextKey = Symbol('tile-map');

/**
 * Get the nearest parent `TileMap` context.
 *
 * Call this while a child component is being initialized. It returns
 * `undefined` when the component is not nested inside a `TileMap`.
 */
export function getTileMapContext(): TileMapContext | undefined {
  return getContext<TileMapContext | undefined>(tileMapContextKey);
}

/** @internal Provide TileMap context to child components. */
export function setTileMapContext(context: TileMapContext): void {
  setContext(tileMapContextKey, context);
}

/** @internal Create TileMap context with private writable state. */
export function createTileMapContextState() {
  const map = writable<MaplibreMap | null>(null);
  const ready = writable(false);

  const context: TileMapContext = {
    map: readonly(map),
    ready: readonly(ready),
  };

  return {
    context,
    setMap: (value: MaplibreMap | null) => map.set(value),
    setReady: (value: boolean) => ready.set(value),
    reset: () => {
      ready.set(false);
      map.set(null);
    },
  };
}
