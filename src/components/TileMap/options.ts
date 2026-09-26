import type {
  MapOptions,
  StyleSpecification,
  Map as MaplibreMap,
} from 'maplibre-gl';
import { enableTerrain, DEFAULT_TERRAIN_EXAGGERATION } from './terrain';

/** MapLibre constructor options that are not already first-class TileMap props. */
export type TileMapMapOptions = Omit<
  MapOptions,
  | 'container'
  | 'style'
  | 'center'
  | 'zoom'
  | 'minZoom'
  | 'maxZoom'
  | 'pitch'
  | 'interactive'
>;

interface CreateTileMapOptions {
  container: HTMLElement;
  style: string | StyleSpecification;
  center: [number, number];
  zoom: number;
  minZoom: number;
  maxZoom: number;
  pitch: number;
  interactive: boolean;
  mapOptions?: TileMapMapOptions;
}

/** @internal Combine Reuters defaults, advanced options and first-class props. */
export function createTileMapOptions({
  container,
  style,
  center,
  zoom,
  minZoom,
  maxZoom,
  pitch,
  interactive,
  mapOptions,
}: CreateTileMapOptions): MapOptions {
  return {
    attributionControl: false,
    scrollZoom: false,
    doubleClickZoom: interactive,
    dragPan: interactive,
    touchPitch: false,
    touchZoomRotate: interactive,
    boxZoom: interactive,
    keyboard: interactive,
    trackResize: true,
    ...mapOptions,
    container,
    style,
    center,
    zoom,
    minZoom,
    maxZoom,
    pitch,
    interactive,
  };
}

/** Options used after MapLibre's initial style has loaded. */
interface CompleteTileMapSetupOptions {
  map: MaplibreMap;
  projection?: Parameters<MaplibreMap['setProjection']>[0];
  terrain: boolean | number;
  setReady: (ready: boolean) => void;
  onMapReady?: (map: MaplibreMap) => void;
}

/** @internal Finish initial setup and publish readiness before the callback. */
export function completeTileMapSetup({
  map,
  projection,
  terrain,
  setReady,
  onMapReady,
}: CompleteTileMapSetupOptions): void {
  if (projection) map.setProjection(projection);

  if (terrain !== false) {
    enableTerrain(
      map,
      terrain === true ? DEFAULT_TERRAIN_EXAGGERATION : terrain
    );
  }

  setReady(true);
  onMapReady?.(map);
}
