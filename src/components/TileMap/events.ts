import type { Map as MaplibreMap, ProjectionSpecification } from 'maplibre-gl';
import { emphasizePlaceLabels } from './labels';
import { completeTileMapSetup } from './options';

interface ConnectTileMapEventsOptions {
  map: MaplibreMap;
  projection?: ProjectionSpecification;
  terrain: boolean | number;
  emphasizeLabels: boolean;
  setReady: (ready: boolean) => void;
  onMapReady?: (map: MaplibreMap) => void;
}

/** Register TileMap's style and load handlers and return their cleanup function. */
export function connectTileMapEvents({
  map,
  projection,
  terrain,
  emphasizeLabels,
  setReady,
  onMapReady,
}: ConnectTileMapEventsOptions): () => void {
  const onLoad = () =>
    completeTileMapSetup({ map, projection, terrain, setReady, onMapReady });

  let styleDataListenerActive = emphasizeLabels;
  const onStyleData = () => {
    const hasPlaceLabels = map
      .getStyle()
      ?.layers?.some(
        (layer) =>
          layer.type === 'symbol' &&
          (layer as { 'source-layer'?: string })['source-layer'] === 'place'
      );

    if (!hasPlaceLabels) return;

    emphasizePlaceLabels(map);
    map.off('styledata', onStyleData);
    styleDataListenerActive = false;
  };

  map.on('load', onLoad);
  if (emphasizeLabels) map.on('styledata', onStyleData);

  let connected = true;
  return () => {
    if (!connected) return;
    connected = false;

    map.off('load', onLoad);
    if (styleDataListenerActive) {
      map.off('styledata', onStyleData);
      styleDataListenerActive = false;
    }
  };
}
