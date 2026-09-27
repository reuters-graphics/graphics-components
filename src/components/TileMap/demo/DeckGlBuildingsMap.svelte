<script lang="ts">
  import { onDestroy } from 'svelte';
  import type { PickingInfo } from '@deck.gl/core';
  import type { MapLibreOverlay } from '@deck.gl/maplibre';
  import type { Feature, FeatureCollection, Polygon } from 'geojson';
  import type { Map as MaplibreMap } from 'maplibre-gl';
  import TileMap from '../TileMap.svelte';
  import buildingsData from './madison-square-buildings.geojson?raw';

  interface BuildingProperties {
    bin: string;
    name: string | null;
    heightMeters: number;
    constructionYear: number | null;
  }

  type BuildingFeature = Feature<Polygon, BuildingProperties>;
  type LoadStatus = 'loading' | 'ready' | 'error';

  const buildings = JSON.parse(buildingsData) as FeatureCollection<
    Polygon,
    BuildingProperties
  >;

  let overlay: MapLibreOverlay | null = null;
  let loadStatus = $state<LoadStatus>('loading');
  let errorMessage = $state('');
  let loadId = 0;

  function getTooltip({ object }: PickingInfo<BuildingFeature>) {
    if (!object) return null;

    const { bin, name, heightMeters } = object.properties;
    return {
      text: `${name ?? `Building ${bin}`}\n${Math.round(heightMeters)} m roof height`,
    };
  }

  function removeOverlay() {
    loadId += 1;
    overlay?.finalize();
    overlay = null;
  }

  async function handleMapReady(map: MaplibreMap) {
    removeOverlay();
    const currentLoadId = loadId;
    loadStatus = 'loading';
    errorMessage = '';

    try {
      const [{ GeoJsonLayer }, { MapLibreOverlay }] = await Promise.all([
        import('@deck.gl/layers'),
        import('@deck.gl/maplibre'),
      ]);

      if (currentLoadId !== loadId) return;

      const nextOverlay = new MapLibreOverlay({
        interleaved: true,
        layers: [
          new GeoJsonLayer<BuildingProperties>({
            id: 'madison-square-buildings',
            data: buildings,
            extruded: true,
            filled: true,
            stroked: true,
            wireframe: false,
            opacity: 0.85,
            getElevation: (feature) => feature.properties.heightMeters,
            getFillColor: [201, 61, 46, 220],
            getLineColor: [255, 255, 255, 170],
            lineWidthMinPixels: 1,
            pickable: true,
          }),
        ],
        getTooltip,
      });

      map.addControl(nextOverlay);

      if (currentLoadId !== loadId) {
        nextOverlay.finalize();
        return;
      }

      overlay = nextOverlay;
      loadStatus = 'ready';
    } catch (error) {
      if (currentLoadId !== loadId) return;
      loadStatus = 'error';
      errorMessage =
        error instanceof Error ?
          error.message
        : 'The deck.gl layer failed to load.';
    }
  }

  onDestroy(removeOverlay);
</script>

<TileMap
  id="deck-gl-buildings-map"
  center={[-73.9885, 40.7422]}
  zoom={15.8}
  pitch={50}
  interactive
  title="Buildings around Madison Square"
  description="A small deck.gl GeoJsonLayer renders building footprints and roof heights inside the Reuters MapLibre basemap. Hover over a building for details."
  notes="Building footprints and roof heights: New York City Office of Technology and Innovation, [Building Footprints](https://data.cityofnewyork.us/d/5zhs-2jue), published under the [NYC Open Data Terms of Use](https://opendata.cityofnewyork.us/overview/#termsofuse). Subset selected near Madison Square, heights converted to metres and coordinate precision reduced by Reuters Graphics."
  height="500px"
  onMapReady={handleMapReady}
>
  {#if loadStatus === 'loading'}
    <p class="map-status" aria-live="polite">Loading the deck.gl layer…</p>
  {:else if loadStatus === 'error'}
    <p class="map-status map-status--error" role="alert">
      Could not display the building layer. {errorMessage}
    </p>
  {/if}
</TileMap>

<style>
  .map-status {
    position: absolute;
    z-index: 2;
    top: 0.75rem;
    left: 0.75rem;
    max-width: calc(100% - 1.5rem);
    margin: 0;
    padding: 0.35rem 0.5rem;
    border-radius: 0.125rem;
    background: rgb(255 255 255 / 90%);
    color: #1a1a1a;
    font-size: 0.875rem;
  }

  .map-status--error {
    color: #9c2b1f;
  }
</style>
