<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Map from './Map.svelte';
  import type { Map as MaplibreMap } from 'maplibre-gl';

  // Custom style function for the custom styled map story
  function customStyleHandler(map: MaplibreMap) {
    // Customize water color
    map.setPaintProperty('water', 'fill-color', '#0080ff');

    // Customize land color
    map.setPaintProperty('earth', 'fill-color', '#f0e6d2');

    // Customize road colors
    map.setPaintProperty('roads', 'line-color', '#ff6b6b');
    map.setPaintProperty('roads', 'line-width', 2);

    // Customize label colors
    map.setPaintProperty('places', 'text-color', '#2c3e50');
    map.setPaintProperty('places', 'text-halo-color', '#ffffff');
    map.setPaintProperty('places', 'text-halo-width', 2);
  }

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
