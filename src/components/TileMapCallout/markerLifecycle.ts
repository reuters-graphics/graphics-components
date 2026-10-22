import type { Map as MaplibreMap, Marker } from 'maplibre-gl';

/** Manage the MapLibre marker used by a TileMapCallout. */
export function createCalloutMarkerLifecycle(
  createMarker: (element: HTMLElement) => Marker
) {
  let marker: Marker | null = null;
  let markerMap: MaplibreMap | null = null;

  const removeMarker = () => {
    marker?.remove();
    marker = null;
    markerMap = null;
  };

  return {
    sync(
      map: MaplibreMap | null,
      element: HTMLElement | undefined,
      coordinates: [number, number] | null
    ) {
      if (!map || !element || !coordinates) {
        removeMarker();
        return;
      }

      if (marker && markerMap !== map) removeMarker();

      if (!marker) {
        marker = createMarker(element);
        markerMap = map;
        marker.setLngLat(coordinates).addTo(map);
        return;
      }

      marker.setLngLat(coordinates);
    },
    destroy: removeMarker,
  };
}
