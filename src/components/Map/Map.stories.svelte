<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Map from './Map.svelte';
  import MapLayer from './MapLayer.svelte';
  import type { FeatureCollection, Polygon, Point } from 'geojson';

  // Example GeoJSON data - Central Park polygon
  const centralParkData: FeatureCollection<Polygon> = {
    type: 'FeatureCollection',
    features: [
      {
        id: 'f3ef5ee1562ab29699c4cef0d6dd8c5c',
        type: 'Feature',
        properties: {},
        geometry: {
          coordinates: [
            [
              [-73.95763681123009, 40.80049109333228],
              [-73.98164644416437, 40.76837409197461],
              [-73.97304299236308, 40.76488876644504],
              [-73.94923343970315, 40.796855986010655],
              [-73.95763681123009, 40.80049109333228],
            ],
          ],
          type: 'Polygon',
        },
      },
    ],
  };

  // Reuters office location
  const reutersOfficePoint: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          name: 'Reuters Office',
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.98681906441799, 40.756672373025765],
        },
      },
    ],
  };

  // Additional points of interest
  const points: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [-74.05850529670715, 40.60216238663875],
        },
      },
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [-73.97666573524475, 40.77265656734981],
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
    center: [-98, 39],
    zoom: 3,
    interactive: true,
    height: '500px',
  }}
/>

<Story
  name="Globe view"
  tags={['!autodocs']}
  args={{
    id: 'globe-map',
    center: [0, 0],
    zoom: 2,
    projection: { type: 'globe' },
    interactive: true,
    title: 'Globe View',
    description: 'A 3D globe projection of the Earth.',
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

<Story name="With GeoJSON layers" tags={['!autodocs']}>
  <Map
    id="geojson-map"
    center={[-73.9712, 40.7831]}
    zoom={11}
    interactive={true}
    title="Map with GeoJSON Layers"
    description="Example showing multiple GeoJSON layers including local data and data fetched from a URL."
    notes="Demonstrates polygon fills, line overlays, point markers, and text labels."
    height="600px"
  >
    <MapLayer
      id="park-area"
      data={centralParkData}
      type="fill"
      paint={{
        'fill-color': '#179639',
        'fill-opacity': 0.7,
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
      id="route-line"
      data="https://raw.githubusercontent.com/datanews/ny-marathon/refs/heads/master/route.geojson"
      type="line"
      paint={{
        'line-color': '#4287f5',
        'line-width': 2,
      }}
    />
    <MapLayer
      id="reuters-office-point"
      data={reutersOfficePoint}
      type="circle"
      paint={{
        'circle-radius': 4,
        'circle-color': '#ff0000',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      }}
    />
    <MapLayer
      id="reuters-office-label"
      data={reutersOfficePoint}
      type="symbol"
      layout={{
        'text-field': 'Reuters Office',
        'text-offset': [0.25, 0.5],
        'text-anchor': 'top-left',
        'text-size': 12,
      }}
      paint={{
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2,
      }}
    />
    <MapLayer
      id="points-layer"
      data={points}
      type="circle"
      paint={{
        'circle-radius': 4,
        'circle-color': '#9c27b0',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      }}
    />
  </Map>
</Story>
