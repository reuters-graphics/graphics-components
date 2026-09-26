<script lang="ts">
  import { onDestroy } from 'svelte';
  import type { PickingInfo } from '@deck.gl/core';
  import type { GeoJsonLayerProps } from '@deck.gl/layers';
  import type { MapLibreOverlay } from '@deck.gl/maplibre';
  import type { Feature, FeatureCollection, Polygon } from 'geojson';
  import type { Map as MaplibreMap } from 'maplibre-gl';
  import TileMap from '../TileMap.svelte';
  import buildingsData from './logan-circle-buildings.geojson?raw';

  interface BuildingProperties {
    description: string;
  }

  type BuildingFeature = Feature<Polygon, BuildingProperties>;
  type OverlayLayerProps = GeoJsonLayerProps<BuildingProperties> & {
    beforeId?: string;
  };
  type LoadStatus = 'loading' | 'ready' | 'error';

  const buildings = JSON.parse(buildingsData) as FeatureCollection<
    Polygon,
    BuildingProperties
  >;

  let overlay: MapLibreOverlay | null = null;
  let loadStatus = $state<LoadStatus>('loading');
  let errorMessage = $state('');
  let loadId = 0;

  function findFirstSymbolLayerId(map: MaplibreMap): string | undefined {
    return map.getStyle().layers?.find((layer) => layer.type === 'symbol')?.id;
  }

  function getTooltip({ object }: PickingInfo<BuildingFeature>) {
    if (!object) return null;

    return { text: `Building footprint ${String(object.id)}` };
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

      const layerProps: OverlayLayerProps = {
        id: 'logan-circle-buildings',
        data: buildings,
        beforeId: findFirstSymbolLayerId(map),
        extruded: true,
        filled: true,
        stroked: true,
        wireframe: false,
        opacity: 0.85,
        getElevation: 18,
        getFillColor: [201, 61, 46, 220],
        getLineColor: [255, 255, 255, 170],
        lineWidthMinPixels: 1,
        pickable: true,
      };

      const nextOverlay = new MapLibreOverlay({
        interleaved: true,
        layers: [new GeoJsonLayer<BuildingProperties>(layerProps)],
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
  center={[-77.02965, 38.91055]}
  zoom={18}
  pitch={55}
  interactive
  emphasizeLabels
  title="Extruded buildings near Logan Circle"
  description="A small deck.gl GeoJsonLayer renders extruded building footprints inside the Reuters MapLibre basemap. The extrusion height is illustrative."
  notes="Building footprints: District of Columbia Office of the Chief Technology Officer, [Building Footprints 2023](https://www.arcgis.com/home/item.html?id=65246daf2e12425bae77e12dab00336f), licensed under CC BY 4.0. Subset and coordinate precision reduced by Reuters Graphics."
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
