<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Legend from './Legend.svelte';
  import TileMap from '../TileMap/TileMap.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/Legend',
    component: Legend,
    tags: ['autodocs'],
    argTypes: {
      title: {
        control: 'text',
        description: 'Optional legend heading displayed above the scale.',
      },
      subtitle: {
        control: 'text',
        description: 'Optional subtitle displayed beneath the title.',
      },
      mode: {
        control: { type: 'select' },
        options: [
          'threshold',
          'continuous',
          'diverging',
          'categorical',
          'proportional-symbols',
        ],
        description: 'Legend rendering mode.',
      },
      width: {
        control: 'select',
        options: [
          'narrower',
          'narrow',
          'normal',
          'wide',
          'wider',
          'widest',
          'fluid',
        ],
        description: 'Width of the legend within the text well.',
      },
      items: {
        control: 'object',
        description:
          'Legend entries. Threshold/diverging modes use numeric bounds and colors; categorical mode uses label and color pairs; proportional-symbols mode uses numeric values and optional labels.',
      },
      stops: {
        control: 'object',
        description: 'Ordered continuous color stops with numeric values.',
      },
      ticks: {
        control: 'object',
        description: 'Optional tick values and labels for continuous mode.',
      },
      midpoint: {
        control: 'object',
        description:
          'Diverging midpoint object with a numeric value and optional label.',
      },
      noData: {
        control: 'object',
        description:
          'Optional fallback swatch for missing values as an object with label and optional color.',
      },
    },
  });
</script>

<script lang="ts">
  import type {
    Map as MaplibreMap,
    LineLayerSpecification,
    ExpressionSpecification,
  } from 'maplibre-gl';

  // Annual average fine-particulate (PM2.5) pollution, binned on the U.S. EPA
  // air-quality index breakpoints — the kind of scale Reuters has used in its
  // air-quality coverage (e.g. reporting on Delhi and global pollution).
  const pm25Items = [
    { to: 12, color: 'var(--tr-light-orange)' },
    { from: 12, to: 35, color: 'var(--tr-orange)' },
    { from: 35, to: 55, color: 'var(--tr-dark-orange)' },
    { from: 55, color: 'var(--tr-dark-red)' },
  ];

  // Sequential blue ramp using the Reuters brand blues.
  const continuousStops = [
    { value: 0, color: 'var(--tr-superlight-blue)' },
    { value: 50, color: 'var(--tr-light-blue)' },
    { value: 100, color: 'var(--tr-dark-blue)' },
  ];

  const continuousTicks = [
    { value: 0, label: '0%' },
    { value: 25, label: '25%' },
    { value: 50, label: '50%' },
    { value: 75, label: '75%' },
    { value: 100, label: '100%' },
  ];

  // Diverging ramp: Reuters blues on the negative side, oranges on the positive.
  const divergingItems = [
    { from: -10, to: -8, color: 'var(--tr-dark-blue)' },
    { from: -8, to: -6, color: 'var(--tr-light-blue)' },
    { from: -6, to: -4, color: 'var(--tr-muted-blue)' },
    { from: -4, to: -2, color: 'var(--tr-lighter-blue)' },
    { from: -2, to: 0, color: 'var(--tr-superlight-blue)' },
    { from: 0, to: 2, color: 'var(--tr-light-orange)' },
    { from: 2, to: 4, color: 'var(--tr-orange)' },
    { from: 4, to: 6, color: 'var(--tr-dark-orange)' },
    { from: 6, to: 8, color: 'var(--tr-light-red)' },
    { from: 8, to: 10, color: 'var(--tr-dark-red)' },
  ];

  const signedDegrees = (value: number) => {
    if (value === 0) {
      return '0°';
    }

    return `${value > 0 ? '+' : '−'}${Math.abs(value)}°`;
  };

  const proportionalItems = [
    { value: 1400, label: '1,400' },
    { value: 600, label: '600' },
    { value: 150, label: '150' },
    { value: 0, label: '0' },
  ];

  // Tropical cyclone tracks (IBTrACS) from palewire's "First PMTiles Map"
  // tutorial, colored by Saffir-Simpson category (the `USA_SSHS` field).
  // https://palewi.re/docs/first-pmtiles-map/
  const cyclonePmtilesUrl =
    'https://palewi.re/docs/first-pmtiles-map/ibtracs.pmtiles';

  const cycloneCategories = [
    { label: 'Category 1', color: '#8bc34a' },
    { label: 'Category 2', color: '#ffd166' },
    { label: 'Category 3', color: '#f4a261' },
    { label: 'Category 4', color: '#e76f51' },
    { label: 'Category 5', color: '#c71f37' },
  ];

  // Add the PMTiles vector source and storm-track layer once the Reuters
  // basemap is ready. `TileMap` registers the `pmtiles://` protocol for us.
  const addCycloneLayer = (map: MaplibreMap) => {
    if (map.getSource('storms')) return;

    map.addSource('storms', {
      type: 'vector',
      url: `pmtiles://${cyclonePmtilesUrl}`,
    });

    // Slot the storms beneath the basemap's labels so place names stay legible.
    const firstSymbolLayerId = map
      .getStyle()
      .layers.find((layer) => layer.type === 'symbol')?.id;

    const stormsLayer: LineLayerSpecification = {
      id: 'storms-line',
      type: 'line',
      source: 'storms',
      'source-layer': 'storms',
      // Show only hurricane-strength storms (Saffir-Simpson category 1+).
      filter: ['>=', ['coalesce', ['get', 'USA_SSHS'], -1], 1],
      paint: {
        'line-color': [
          'interpolate',
          ['linear'],
          ['coalesce', ['get', 'USA_SSHS'], 1],
          1,
          '#8bc34a',
          2,
          '#ffd166',
          3,
          '#f4a261',
          4,
          '#e76f51',
          5,
          '#c71f37',
        ] as ExpressionSpecification,
        'line-width': [
          'interpolate',
          ['linear'],
          ['coalesce', ['get', 'USA_WIND'], 0],
          0,
          0.8,
          50,
          2,
          100,
          3.5,
          150,
          5,
        ] as ExpressionSpecification,
        'line-opacity': 0.8,
      },
    };

    map.addLayer(stormsLayer, firstSymbolLayerId);

    // Frame the entire planet in the flat (Mercator) viewport.
    map.fitBounds(
      [
        [-180, -75],
        [180, 80],
      ],
      { padding: 12, duration: 0 }
    );
  };
</script>

<Story
  name="Threshold"
  args={{
    title: 'Annual average PM2.5',
    subtitle: 'Micrograms per cubic meter',
    mode: 'threshold',
    items: pm25Items,
    noData: { label: 'Data not available' },
  }}
/>

<Story
  name="Continuous Gradient"
  args={{
    title: 'Graduation rate',
    mode: 'continuous',
    stops: continuousStops,
    ticks: continuousTicks,
  }}
/>

<Story
  name="Diverging Midpoint"
  args={{
    title: "Today's difference from the normal high of 1961-1990",
    mode: 'diverging',
    items: divergingItems,
    midpoint: { value: 0, label: '±0°' },
    formatter: signedDegrees,
  }}
/>

<Story
  name="Categorical"
  args={{
    title: 'Hurricanes since 1980',
    subtitle: 'By Saffir-Simpson category',
    mode: 'categorical',
    items: cycloneCategories,
  }}
/>

<Story
  name="Proportional Symbols"
  args={{
    title: 'Population',
    subtitle: 'in millions',
    mode: 'proportional-symbols',
    items: proportionalItems,
  }}
/>

<Story asChild name="Map Layout" tags={['!autodocs']}>
  <TileMap
    id="legend-demo-map"
    center={[0, 20]}
    zoom={0}
    height="460px"
    onMapReady={addCycloneLayer}
  >
    {#snippet legend()}
      <Legend
        title="Hurricanes since 1980"
        subtitle="By Saffir-Simpson category"
        mode="categorical"
        items={cycloneCategories}
      />
    {/snippet}
  </TileMap>
</Story>
