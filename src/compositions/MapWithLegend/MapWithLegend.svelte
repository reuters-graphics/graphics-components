<script lang="ts">
  import { onMount } from 'svelte';
  import type { FeatureCollection, Point } from 'geojson';
  import type { Topology } from 'topojson-specification';
  import {
    InsetMap,
    Legend,
    MapStatusOverlay,
    TileMap,
    TileMapLayer,
  } from '@reuters-graphics/graphics-components';
  import spainTopology from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/ES.json';
  import burntAreaUrl from '../../components/TileMap/demo/navaluenga-burnt-area.geojson?url';
  import fireSpotsUrl from '../../components/TileMap/demo/fire-spots.geojson?url';
  import wildfireStyleUrl from '../../components/TileMap/demo/wildfire-style.json?url';
  import { loadWildfireMapData } from './loadWildfireMapData';

  type MapDataStatus = 'loading' | 'ready' | 'error';

  const legendItems = [
    { label: 'Burned area', color: '#8a6a48' },
    { label: 'Active fire detections', color: '#ff5a1f' },
  ];

  let status: MapDataStatus = $state('loading');
  let burntArea: FeatureCollection | null = $state(null);
  let fireSpots: FeatureCollection<Point> | null = $state(null);

  // Add a short pause before these local requests so the loading message is
  // easy to see in the example. Use your own request directly in a real map.
  const fetchDemoData: typeof fetch = async (input, init) => {
    await new Promise<void>((resolve) => setTimeout(resolve, 700));
    return fetch(input, init);
  };

  onMount(() => {
    let mounted = true;

    const loadData = async () => {
      try {
        const data = await loadWildfireMapData(
          { burntArea: burntAreaUrl, fireSpots: fireSpotsUrl },
          fetchDemoData
        );

        if (!mounted) return;

        burntArea = data.burntArea;
        fireSpots = data.fireSpots;
        status = 'ready';
      } catch {
        if (mounted) status = 'error';
      }
    };

    void loadData();

    return () => {
      mounted = false;
    };
  });
</script>

<TileMap
  id="map-with-legend-wildfire"
  title="A wildfire in central Spain"
  description="The July 2026 event took place near Navaluenga in Ávila province."
  notes="Example data from Copernicus EMS/EFFIS and NASA FIRMS. These are fixed demo files, not live feeds."
  center={[-4.1, 40.4126]}
  zoom={8}
  height="500px"
  styleUrl={wildfireStyleUrl}
>
  {#snippet legend()}
    <Legend mode="categorical" items={legendItems} />
  {/snippet}

  {#if status === 'ready' && burntArea && fireSpots}
    <TileMapLayer
      id="map-with-legend-burnt-area"
      data={burntArea}
      type="fill"
      beneathLabels
      paint={{ 'fill-color': '#8a6a48', 'fill-opacity': 0.4 }}
    />

    <TileMapLayer
      id="map-with-legend-active-fires"
      data={fireSpots}
      type="circle"
      paint={{ 'circle-radius': 3, 'circle-color': '#ff5a1f' }}
    />
  {/if}

  <InsetMap
    corner="top-right"
    geometry={spainTopology as unknown as Topology}
    locationLabel="Spain"
    annotations={[
      { name: 'Madrid', lngLat: [-3.7038, 40.4168], shape: 'square' },
      { name: 'Seville', lngLat: [-5.9835, 37.4009] },
    ]}
    class="thematic-map-inset"
  />

  {#if status === 'loading'}
    <MapStatusOverlay status="loading" message="Loading wildfire data…" />
  {:else if status === 'error'}
    <MapStatusOverlay
      status="error"
      message="Map data unavailable. Please refresh."
    />
  {/if}
</TileMap>

<style>
  :global(.thematic-map-inset) {
    filter: drop-shadow(0 3px 5px rgb(0 0 0 / 20%));
  }
</style>
