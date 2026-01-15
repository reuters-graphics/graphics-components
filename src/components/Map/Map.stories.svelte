<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Map from './Map.svelte';
  import MapLayer from './MapLayer.svelte';
  import type { Map as MaplibreMap } from 'maplibre-gl';

  // Custom style function for the custom styled map story
  function customStyleHandler(map: MaplibreMap) {
    // Customize water color
    map.setPaintProperty('water_polygon', 'fill-color', '#0080ff');
  }

  // Example GeoJSON data - a simple polygon around Central Park
  const centralParkData = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-73.9812, 40.7681],
          [-73.9581, 40.7681],
          [-73.9581, 40.8006],
          [-73.9812, 40.8006],
          [-73.9812, 40.7681],
        ],
      ],
    },
    properties: {
      name: 'Central Park Area',
    },
  };

  // Example point data
  const landmarkData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-73.9654, 40.7829],
        },
        properties: {
          name: 'Bethesda Fountain',
        },
      },
    ],
  };

  const { Story } = defineMeta({
    title: 'Components/Graphics/Map',
    component: Map,
    tags: ['autodocs'],
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      interactive: {
        control: 'boolean',
      },
    },
  });
</script>

<Story
  name="Demo"
  args={{
    id: 'demo-map',
    center: [0, 20],
    zoom: 2,
    interactive: true,
    height: '500px',
  }}
/>

<Story
  name="With chatter"
  tags={['!autodocs']}
  args={{
    id: 'example-map',
    center: [-74.006, 40.7128],
    zoom: 10,
    interactive: true,
    title: 'New York City Map',
    description: 'An interactive map centered on New York City.',
    notes: 'Source: OpenStreetMap contributors via Protomaps',
    height: '600px',
  }}
/>

<Story
  name="Non-interactive"
  tags={['!autodocs']}
  args={{
    id: 'static-map',
    center: [2.3522, 48.8566],
    zoom: 12,
    interactive: false,
    title: 'Paris',
    description: 'A static map of Paris, France.',
    height: '400px',
  }}
/>

<Story name="Custom styled map" tags={['!autodocs']}>
  <Map
    id="custom-styled-map"
    center={[-73.935242, 40.73061]}
    zoom={11}
    interactive={true}
    title="Custom Styled Map"
    description="A map with customized colors for water, land, roads, and labels."
    notes="Style customizations applied using the onMapReady callback."
    height="600px"
    onMapReady={customStyleHandler}
  />
</Story>

<Story name="With GeoJSON layers" tags={['!autodocs']}>
  <Map
    id="geojson-map"
    center={[-73.9712, 40.7831]}
    zoom={13}
    interactive={true}
    title="Map with GeoJSON Layers"
    description="Example showing multiple GeoJSON layers on a map."
    height="600px"
  >
    <MapLayer
      id="park-area"
      data={centralParkData}
      type="fill"
      paint={{
        'fill-color': '#90ee90',
        'fill-opacity': 0.5,
      }}
    />
    <MapLayer
      id="park-outline"
      data={centralParkData}
      type="line"
      paint={{
        'line-color': '#228b22',
        'line-width': 2,
      }}
    />
    <MapLayer
      id="landmarks"
      data={landmarkData}
      type="circle"
      paint={{
        'circle-radius': 8,
        'circle-color': '#ff0000',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      }}
    />
  </Map>
</Story>
