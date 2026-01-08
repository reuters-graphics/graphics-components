<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Map from './Map.svelte';

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
