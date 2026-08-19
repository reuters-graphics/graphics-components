<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { Feature, LineString } from 'geojson';
  import type { Topology } from 'topojson-specification';
  import Block from '../Block/Block.svelte';
  import TileMap from '../TileMap/TileMap.svelte';
  import TileMapLayer from '../TileMap/TileMapLayer.svelte';
  import InsetMap from './InsetMap.svelte';
  import InsetMapFeature from './InsetMapFeature.svelte';
  import Video from '../Video/Video.svelte';
  import BridgeVideo from '../Video/demo/silent-video.mp4';
  import brTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/BR.json';
  import keTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/KE.json';
  import jpTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/JP.json';
  import inTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/IN.json';
  import pkTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/PK.json';
  import cnTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/CN.json';
  import africaTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/africa.json';
  import asiaLinesTopojson from '@reuters-graphics/graphics-atlas-client/topojson/lines/medium/asia-and-the-middle-east.json';
  import geTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/GE.json';
  import ruTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/RU.json';
  import amTopojson from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/AM.json';

  let screenWidth: number = $state(0);
  const responsiveSize = $derived(
    screenWidth < 510 ? 160
    : screenWidth < 930 ? 180
    : 240
  );

  const texasTopology: Topology = {
    type: 'Topology',
    objects: {
      texas: {
        type: 'GeometryCollection',
        geometries: [{ type: 'Polygon', arcs: [[0]] }],
      },
    },
    arcs: [
      [
        [-103.05, 36.5],
        [-100.0, 36.5],
        [-100.0, 34.56],
        [-99.0, 34.2],
        [-97.0, 33.85],
        [-94.5, 33.6],
        [-94.04, 33.02],
        [-93.9, 32.0],
        [-93.75, 30.1],
        [-95.0, 29.0],
        [-96.8, 28.1],
        [-97.4, 27.3],
        [-97.14, 25.96],
        [-99.5, 26.4],
        [-100.5, 28.6],
        [-102.3, 29.8],
        [-104.4, 29.6],
        [-104.8, 30.6],
        [-106.5, 31.78],
        [-106.5, 32.0],
        [-103.05, 32.0],
        [-103.05, 36.5],
      ],
    ],
  };

  const bulletTrainRoute: Feature<LineString> = {
    type: 'Feature',
    properties: { name: 'Tokaido Shinkansen' },
    geometry: {
      type: 'LineString',
      coordinates: [
        [136.8816, 35.1709], // Nagoya
        [136.6885, 35.3168], // Gifu-Hashima
        [136.2895, 35.3167], // Maibara
        [135.7681, 34.9858], // Kyoto
        [135.5, 34.7338], // Shin-Osaka
      ],
    },
  };

  const { Story } = defineMeta({
    title: 'Compositions/InsetMap',
    component: InsetMap,
    tags: ['autodocs'],
    argTypes: {
      corner: {
        control: 'select',
        options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        description: 'Corner of the parent element to anchor the inset to.',
      },
      geometry: {
        control: false,
        description:
          "A locally-imported TopoJSON topology, e.g. `import nz from '@reuters-graphics/graphics-atlas-client/topojson/polygons/medium/NZ.json'`.",
      },
      projection: {
        control: false,
        description:
          'A d3-geo projection factory. Defaults to `geoMercator`, the simplest choice at country scale.',
      },
      annotations: {
        control: 'object',
        description:
          'Labelled markers, positioned with the same projection as the shape so they always land in the right place.',
      },
      locationLabel: {
        control: 'text',
        description: 'Label rendered at the center of the largest shape.',
      },
      size: {
        control: { type: 'number', min: 40 },
        description: 'Inset width and height in px (it’s square).',
      },
      class: {
        control: 'text',
        description: 'Add custom classes to the inset wrapper.',
      },
    },
    parameters: {
      // Every story nests a live TileMap (live tile fetches) — skip Chromatic.
      chromatic: { disable: true },
    },
  });
</script>

<svelte:window bind:innerWidth={screenWidth} />

<Story
  name="Locating a region"
  args={{
    geometry: jpTopojson as unknown as Topology,
    locationLabel: 'Japan',
    annotations: [
      {
        name: 'Tokyo',
        lngLat: [139.6503, 35.6762],
        labelPosition: 'right',
        shape: 'square',
      },
      { name: 'Osaka', lngLat: [135.5023, 34.6937], labelPosition: 'right' },
    ],
    corner: 'top-right',
    size: 200,
  }}
>
  {#snippet template(args)}
    <TileMap
      id="inset-map-locate-demo"
      center={[136.24464429825332, 34.94325188351801]}
      zoom={7.5}
      interactive={false}
      title="Japan approves bullet train link between Nagoya and Osaka"
      description="The high-speed rail project would cut travel time between the two cities by half, part of a broader push to boost economic ties across central Japan."
      height="500px"
    >
      <TileMapLayer
        id="bullet-train-route"
        data={bulletTrainRoute}
        type="line"
        paint={{ 'line-color': '#e01e37', 'line-width': 3 }}
      />

      <InsetMap {...args} />
    </TileMap>
  {/snippet}
</Story>

<Story
  name="Custom shape"
  tags={['!autodocs']}
  args={{
    annotations: [
      { name: 'Dallas', lngLat: [-96.7969, 32.7767], labelPosition: 'left' },
      {
        name: 'Houston',
        lngLat: [-95.3698, 29.7604],
        labelPosition: 'left',
      },
    ],
    size: 140,
  }}
>
  {#snippet template(args)}
    <TileMap
      id="inset-map-topojson-demo"
      center={[-96.79539236004823, 32.775606715068946]}
      zoom={8}
      interactive={false}
      title="Texas grid operator warns of strain as summer demand hits record"
      description="ERCOT says power use between Dallas and Houston is on pace to top last year's peak, reviving questions about the grid's ability to handle extreme heat."
      height="500px"
    >
      <InsetMap {...args}>
        <InsetMapFeature geometry={texasTopology} label="Texas" />
      </InsetMap>
    </TileMap>
  {/snippet}
</Story>

<Story
  name="Custom styling"
  args={{
    geometry: brTopojson as unknown as Topology,
    locationLabel: 'Brazil',
    annotations: [
      {
        name: 'Rio de Janeiro',
        lngLat: [-43.1729, -22.9068],
        labelPosition: 'left',
      },
      {
        name: 'Brasília',
        lngLat: [-47.8825, -15.7942],
        labelPosition: 'left',
        shape: 'square',
      },
    ],
    corner: 'top-right',
    class: 'dark-inset',
    size: 200,
  }}
>
  {#snippet template(args)}
    <TileMap
      id="inset-map-custom-style-demo"
      center={[-51.9, -14.2]}
      zoom={4}
      interactive={false}
      title="Blackout leaves millions without power across southeastern Brazil"
      description="Grid operators are still tracing the outage that knocked out electricity in Rio de Janeiro and reached the capital, Brasília, before dawn."
      height="500px"
    >
      <InsetMap {...args} />
    </TileMap>
  {/snippet}
</Story>

<Story
  name="Standalone, without TileMap"
  args={{
    geometry: keTopojson as unknown as Topology,
    locationLabel: 'Kenya',
    class: 'inset-map-standalone-demo',
    annotations: [
      {
        name: 'Nairobi',
        lngLat: [36.8219, -1.2921],
        labelPosition: 'right',
        shape: 'square',
      },
      { name: 'Mombasa', lngLat: [39.6682, -4.0435], labelPosition: 'left' },
    ],
    corner: 'top-right',
    size: 160,
  }}
>
  {#snippet template(args)}
    <Block width="wide" class="plain-wrapper">
      <Video
        width="widest"
        src={BridgeVideo}
        class="plain-wrapper-video"
        ariaDescription="Silent aerial footage of a highway bridge under construction."
        title="Kenya opens new highway bridge linking Nairobi to the Mombasa trade route"
        description="The bypass is meant to ease congestion on one of East Africa's busiest freight corridors, cutting hours off truck travel to the coast."
      />
      <InsetMap {...args} />
    </Block>
  {/snippet}
</Story>

<Story
  name="Responsive size"
  tags={['!autodocs']}
  args={{
    geometry: jpTopojson as unknown as Topology,
    locationLabel: 'Japan',
    annotations: [
      {
        name: 'Tokyo',
        lngLat: [139.6503, 35.6762],
        labelPosition: 'right',
        shape: 'square',
      },
      { name: 'Osaka', lngLat: [135.5023, 34.6937], labelPosition: 'right' },
    ],
    corner: 'top-right',
  }}
>
  {#snippet template(args)}
    <TileMap
      id="inset-map-responsive-demo"
      center={[136.24464429825332, 34.94325188351801]}
      zoom={7.5}
      interactive={false}
      title="Japan approves bullet train link between Nagoya and Osaka"
      description="The high-speed rail project would cut travel time between the two cities by half, part of a broader push to boost economic ties across central Japan."
      height="500px"
    >
      <InsetMap {...args} size={responsiveSize} />
    </TileMap>
  {/snippet}
</Story>

<Story
  name="Combining countries"
  tags={['!autodocs']}
  args={{
    corner: 'top-right',
    size: 200,
    // Focus the inset's projection on the India-Pakistan-China tripoint
    // near the Karakoram Pass, rather than fitting to all three countries.
    bounds: [70.015869, 31.770208, 79.508057, 36.315125],
    padding: 0.15,
    showBounds: true,
  }}
>
  {#snippet template(args)}
    <TileMap
      id="inset-map-combined-demo"
      center={[74.7972544424758, 34.09018471470494]}
      zoom={8}
      interactive={false}
      title="Border tensions simmer along the Line of Actual Control"
      description="Troop buildups on both sides of the disputed India-China frontier have raised concerns of a renewed standoff, with Pakistan watching closely from the west."
      height="500px"
    >
      <InsetMap {...args}>
        <InsetMapFeature
          geometry={inTopojson as unknown as Topology}
          label="India"
          labelOffset={[0, 0, 20, 0]}
        />
        <InsetMapFeature
          geometry={pkTopojson as unknown as Topology}
          label="Pakistan"
          labelOffset={[0, 0, 12, 7]}
        />
        <InsetMapFeature
          geometry={cnTopojson as unknown as Topology}
          label="China"
          labelOffset={[20, 0, 0, 0]}
        />
        <InsetMapFeature geometry={asiaLinesTopojson as unknown as Topology} />
      </InsetMap>
    </TileMap>
  {/snippet}
</Story>

<Story
  name="Styling non-disputed borders"
  tags={['!autodocs']}
  args={{
    corner: 'top-right',
    size: 200,
    class: 'caucasus-border-demo',
    // Focus on Georgia, its disputed frontier with Russia, and Armenia to
    // the south, rather than fitting to all of Russia's territory.
    bounds: [40.613708, 41.488006, 45.359802, 43.510713],
  }}
>
  {#snippet template(args)}
    <TileMap
      id="inset-map-caucasus-border-demo"
      center={[44, 41.5]}
      zoom={6}
      interactive={false}
      title="Tbilisi accuses Moscow of creeping annexation along disputed frontier"
      description="Russian-backed forces continue shifting fence lines deeper into Georgian territory near the breakaway regions of South Ossetia and Abkhazia, as Armenia watches an increasingly tense Caucasus."
      height="500px"
    >
      <InsetMap {...args}>
        <InsetMapFeature
          geometry={geTopojson as unknown as Topology}
          label="Georgia"
          labelOffset={[0, 20, 20, 0]}
        />
        <InsetMapFeature
          geometry={ruTopojson as unknown as Topology}
          label="Russia"
        />
        <InsetMapFeature geometry={amTopojson as unknown as Topology} />
        <InsetMapFeature geometry={asiaLinesTopojson as unknown as Topology} />
      </InsetMap>
    </TileMap>
  {/snippet}
</Story>

<Story
  name="Region"
  tags={['!autodocs']}
  args={{
    geometry: africaTopojson as unknown as Topology,
    locationLabel: 'Africa',
    class: 'inset-map-region',
    corner: 'top-right',
    annotations: [
      {
        name: 'Lagos',
        lngLat: [3.347909128583438, 6.606408776144873],
        labelPosition: 'right',
      },
    ],
    size: 200,
  }}
>
  {#snippet template(args)}
    <TileMap
      id="inset-map-region-demo"
      center={[3.378036882192505, 6.464825841755208]}
      zoom={12}
      interactive={false}
      title="African Union calls for coordinated response to Sahel food crisis"
      description="Leaders across the region are weighing a joint relief effort as drought conditions push millions toward acute food insecurity."
      height="500px"
    >
      <InsetMap {...args} />
    </TileMap>
  {/snippet}
</Story>

<style>
  :global(.plain-wrapper) {
    position: relative;
    margin-top: 1rem;
  }

  :global(.plain-wrapper-video) {
    padding: 0;
    margin: 0;
  }

  :global(.dark-inset) {
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.4));
    transform: translate(0, -20%);
  }

  :global(.dark-inset .inset-shape) {
    fill: #1c1c1c;
    stroke: #555;
  }

  :global(.dark-inset .inset-annotation-dot) {
    fill: #ffd23f;
  }

  :global(.dark-inset .inset-annotation-label),
  :global(.dark-inset .inset-location-label) {
    fill: #fff;
    text-shadow: 0 0 2px #000;
  }

  :global(.inset-map-standalone-demo) {
    transform: translate(0, 80%);
  }

  :global(.inset-map-region .inset-shape) {
    fill: #fff;
    stroke: #ccc;
    stroke-width: 0.5px;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
  }

  /* Georgia's border with Russia is flagged disputed in the atlas client's
     lines dataset, so it already renders crimson and dotted with no extra
     styling. This rule only covers the non-disputed segments pooled into
     the same inset — Georgia's settled border with Armenia — so the two
     borders read as visibly different without needing per-child styling. */
  :global(.caucasus-border-demo .inset-context-border-line) {
    stroke: #555;
    stroke-width: 2;
  }
</style>
