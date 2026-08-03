<script lang="ts">
  import { onDestroy } from 'svelte';
  import type { Map as MaplibreMap, MapMouseEvent } from 'maplibre-gl';
  import { reverseGeocode, type GeocodeFeature } from '../../Geocoder/geocode';
  import TileMapCallout from '../../TileMapCallout/TileMapCallout.svelte';
  import TileMap from '../TileMap.svelte';

  interface Props {
    accessToken: string;
  }

  let { accessToken }: Props = $props();

  type LookupState = 'idle' | 'loading' | 'success' | 'empty' | 'error';

  let coordinates = $state<[number, number] | null>(null);
  let lookupState = $state<LookupState>('idle');
  let placeName = $state('');

  let map: MaplibreMap | null = null;
  let mapCanvas: HTMLCanvasElement | null = null;
  let activeRequest: AbortController | null = null;
  let latestRequestId = 0;

  let hasAccessToken = $derived(accessToken.trim().length > 0);
  let calloutText = $derived(
    !hasAccessToken ? 'Mapbox token required'
    : lookupState === 'loading' ? 'Looking up location...'
    : lookupState === 'empty' ? 'No named place found'
    : lookupState === 'error' ? 'Location lookup failed'
    : placeName
  );

  function getPlaceName(feature: GeocodeFeature) {
    if (feature.properties.full_address) {
      return feature.properties.full_address;
    }

    return [
      feature.properties.name_preferred ?? feature.properties.name,
      feature.properties.place_formatted,
    ]
      .filter(Boolean)
      .join(', ');
  }

  function isAbortError(error: unknown) {
    return error instanceof DOMException && error.name === 'AbortError';
  }

  async function lookupLocation(lng: number, lat: number) {
    const requestId = ++latestRequestId;

    activeRequest?.abort();
    activeRequest = null;
    coordinates = [lng, lat];
    placeName = '';

    if (!hasAccessToken) {
      lookupState = 'error';
      return;
    }

    const controller = new AbortController();
    activeRequest = controller;
    lookupState = 'loading';

    try {
      const [feature] = await reverseGeocode(
        lng,
        lat,
        {
          accessToken,
          language: ['en'],
        },
        controller.signal
      );

      if (requestId !== latestRequestId) return;

      if (!feature) {
        lookupState = 'empty';
        return;
      }

      placeName = getPlaceName(feature);
      lookupState = 'success';
    } catch (error) {
      if (requestId !== latestRequestId || isAbortError(error)) return;
      lookupState = 'error';
    } finally {
      if (requestId === latestRequestId) activeRequest = null;
    }
  }

  function handleMapClick(event: MapMouseEvent) {
    const { lng, lat } = event.lngLat.wrap();
    void lookupLocation(lng, lat);
  }

  function handleMapKeydown(event: KeyboardEvent) {
    if (event.repeat || (event.key !== 'Enter' && event.key !== ' ') || !map) {
      return;
    }

    event.preventDefault();
    const { lng, lat } = map.getCenter().wrap();
    void lookupLocation(lng, lat);
  }

  function removeMapListeners() {
    map?.off('click', handleMapClick);
    mapCanvas?.removeEventListener('keydown', handleMapKeydown);
    mapCanvas = null;
  }

  function handleMapReady(mapInstance: MaplibreMap) {
    removeMapListeners();
    map = mapInstance;
    mapCanvas = map.getCanvas();
    mapCanvas.style.cursor = 'crosshair';
    mapCanvas.addEventListener('keydown', handleMapKeydown);
    map.on('click', handleMapClick);
  }

  onDestroy(() => {
    latestRequestId += 1;
    activeRequest?.abort();
    removeMapListeners();
    map = null;
  });
</script>

<TileMap
  id="reverse-geocode-map"
  center={[-73.9868, 40.7567]}
  zoom={11}
  interactive
  title="Identify a place from a map click"
  description="Click the map to reverse-geocode that coordinate, or focus the map and press Enter or Space to use its center."
  notes="This example uses temporary geocoding and does not cache responses."
  height="500px"
  onMapReady={handleMapReady}
>
  {#if coordinates}
    <TileMapCallout lngLat={coordinates}>{calloutText}</TileMapCallout>
  {/if}
</TileMap>
