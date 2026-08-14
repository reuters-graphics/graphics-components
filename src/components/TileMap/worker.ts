import { setWorkerUrl } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

/**
 * Point MapLibre at its web worker.
 *
 * MapLibre 6 loads the worker as a separate file whose URL it builds at
 * runtime, so a bundler never sees it and never emits it — the worker then
 * 404s and every map renders blank. Vite's `?worker&url` runs the worker
 * through its own pipeline, emitting one self-contained, hashed, base-aware
 * asset we can hand back.
 *
 * Safe to call more than once. `TileMap` calls it for you; call it yourself
 * only if you construct a MapLibre map directly.
 */
export function configureMaplibreWorker() {
  setWorkerUrl(workerUrl);
}
