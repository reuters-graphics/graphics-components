<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TileMap from './TileMap.svelte';
  import TileMapLayer from './TileMapLayer.svelte';
  import TileMapCallout from '../TileMapCallout/TileMapCallout.svelte';
  import Geocoder from '../Geocoder/Geocoder.svelte';
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

  // Simplified outline of the state of Iowa, for the "labels above data" demo.
  const iowaData: FeatureCollection<Polygon> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-91.3684, 43.5014],
              [-91.2151, 43.5014],
              [-91.2041, 43.3535],
              [-91.0562, 43.2549],
              [-91.1767, 43.1344],
              [-91.1439, 42.9099],
              [-91.0672, 42.7511],
              [-90.7112, 42.636],
              [-90.64, 42.5101],
              [-90.4209, 42.3293],
              [-90.3935, 42.2253],
              [-90.169, 42.1267],
              [-90.1416, 42.0007],
              [-90.1799, 41.809],
              [-90.3114, 41.7433],
              [-90.3442, 41.5899],
              [-90.6564, 41.464],
              [-91.0453, 41.4147],
              [-91.111, 41.2394],
              [-90.9467, 41.097],
              [-90.9631, 40.9218],
              [-91.0946, 40.8232],
              [-91.122, 40.6698],
              [-91.4013, 40.5603],
              [-91.4177, 40.3795],
              [-91.5272, 40.4124],
              [-91.7299, 40.615],
              [-91.834, 40.6096],
              [-93.258, 40.5822],
              [-94.6327, 40.5712],
              [-95.7664, 40.5877],
              [-95.8814, 40.7191],
              [-95.8266, 40.9765],
              [-95.9252, 41.2011],
              [-95.9198, 41.453],
              [-96.095, 41.5406],
              [-96.1224, 41.6776],
              [-96.0622, 41.7981],
              [-96.1279, 41.9733],
              [-96.2648, 42.039],
              [-96.4455, 42.4882],
              [-96.6318, 42.7072],
              [-96.5441, 42.8551],
              [-96.5113, 43.0523],
              [-96.4346, 43.1235],
              [-96.5606, 43.2221],
              [-96.5277, 43.3973],
              [-96.5825, 43.4795],
              [-96.451, 43.5014],
              [-91.3684, 43.5014],
            ],
          ],
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
    title: 'Components/Graphics/TileMap',
    component: TileMap,
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

<script lang="ts">
  import type { Map as MapType } from 'maplibre-gl';
  const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN ?? '';
  let geocoderMapRef: MapType;
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

<Story asChild name="With GeoJSON layers" tags={['!autodocs']}>
  <TileMap
    id="geojson-map"
    center={[-73.9712, 40.7831]}
    zoom={11}
    interactive={true}
    title="Map with GeoJSON Layers"
    description="Example showing multiple GeoJSON layers including local data and data fetched from a URL."
    notes="Demonstrates polygon fills, line overlays, point markers, and text labels."
    height="600px"
  >
    <TileMapLayer
      id="park-area"
      data={centralParkData}
      type="fill"
      paint={{
        'fill-color': '#179639',
        'fill-opacity': 0.7,
      }}
    />
    <TileMapLayer
      id="park-outline"
      data={centralParkData}
      type="line"
      paint={{
        'line-color': '#228b22',
        'line-width': 2,
      }}
    />
    <TileMapLayer
      id="route-line"
      data="https://raw.githubusercontent.com/datanews/ny-marathon/refs/heads/master/route.geojson"
      type="line"
      paint={{
        'line-color': '#4287f5',
        'line-width': 2,
      }}
    />
    <TileMapLayer
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
    <TileMapLayer
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
    <TileMapLayer
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
  </TileMap>
</Story>

<Story asChild name="Labels above data" tags={['!autodocs']}>
  <TileMap
    id="labels-map"
    center={[-93.5, 42]}
    zoom={6}
    interactive={true}
    emphasizeLabels
    title="Keeping labels readable over data"
    description="`emphasizeLabels` (on the map) darkens the basemap's place labels and adds a white halo; `beneathLabels` (on the fill layer) inserts the data below the labels, so city names across Iowa stay on top of the colored overlay."
    height="500px"
  >
    <TileMapLayer
      id="iowa-fill"
      data={iowaData}
      type="fill"
      beneathLabels
      paint={{
        'fill-color': '#d64000',
        'fill-opacity': 0.75,
      }}
    />
  </TileMap>
</Story>

<Story asChild name="With callouts" tags={['!autodocs']}>
  <TileMap
    id="callout-map"
    center={[-73.9868, 40.7567]}
    zoom={13}
    interactive={true}
    title="Map with coordinate callouts"
    description="TileMapCallout can be rendered directly inside TileMap and manages the MapLibre marker lifecycle for the coordinate."
    notes="The examples show above, below and flipped placement so labels can avoid important map features or viewport edges."
    height="500px"
  >
    <TileMapCallout lngLat={[-73.9868, 40.7567]}>Times Square</TileMapCallout>
    <TileMapCallout lngLat={[-73.9776, 40.7527]} placement="above" flip>
      Grand Central
    </TileMapCallout>
    <TileMapCallout lngLat={[-73.9942, 40.7505]} placement="below">
      Penn Station
    </TileMapCallout>
  </TileMap>
</Story>

<Story asChild name="With Geocoder" tags={['!autodocs']}>
  <TileMap
    id="geocoder-map"
    center={[-98, 39]}
    zoom={3}
    interactive={true}
    title="Map with Geocoder"
    description="Search for a location to fly the map there."
    height="500px"
    onMapReady={(map) => {
      geocoderMapRef = map;
    }}
  >
    <div
      style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); z-index: 1000; width: min(500px, calc(100% - 20px));"
    >
      <Geocoder
        accessToken={mapboxAccessToken}
        onselect={(loc) => {
          geocoderMapRef?.flyTo({ center: [loc.lng, loc.lat], zoom: 10 });
        }}
      />
    </div>
  </TileMap>
</Story>
