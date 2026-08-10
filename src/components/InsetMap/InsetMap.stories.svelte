<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { feature } from 'topojson-client';
  import type { Topology, GeometryCollection } from 'topojson-specification';
  import type {
    Feature,
    GeoJsonProperties,
    Geometry,
    LineString,
    Polygon,
  } from 'geojson';
  import topology110m from 'world-atlas/countries-110m.json';
  import topology50m from 'world-atlas/countries-50m.json';
  import topology10m from 'world-atlas/countries-10m.json';
  import Block from '../Block/Block.svelte';
  import TileMap from '../TileMap/TileMap.svelte';
  import TileMapLayer from '../TileMap/TileMapLayer.svelte';
  import InsetMap, { findCountryFeature } from './InsetMap.svelte';
  import Video from '../Video/Video.svelte';
  import BridgeVideo from '../Video/demo/silent-video.mp4';

  const RESOLUTIONS = {
    '110m': topology110m,
    '50m': topology50m,
    '10m': topology10m,
  } as const;

  type Resolution = keyof typeof RESOLUTIONS;

  const countriesByResolution: Record<
    Resolution,
    Feature<Geometry, GeoJsonProperties>[]
  > = Object.fromEntries(
    Object.entries(RESOLUTIONS).map(([key, topology]) => [
      key,
      (
        feature(
          topology as unknown as Topology,
          (topology as unknown as Topology).objects
            .countries as GeometryCollection
        ) as unknown as { features: Feature<Geometry, GeoJsonProperties>[] }
      ).features,
    ])
  ) as Record<Resolution, Feature<Geometry, GeoJsonProperties>[]>;

  let resolution: Resolution = $state('110m');

  let screenWidth: number = $state(0);
  const responsiveSize = $derived(
    screenWidth < 510 ? 160
    : screenWidth < 930 ? 180
    : 240
  );

  const texasShape: Polygon = {
    type: 'Polygon',
    coordinates: [
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
      country: {
        control: 'text',
        description:
          'Country name or ISO 3166-1 numeric code, looked up in the built-in world-atlas dataset. Ignored if `geojson` is set.',
      },
      geojson: {
        control: 'object',
        description:
          'Custom shape overriding the built-in country lookup, e.g. for a region smaller than a country.',
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
      countryLabel: {
        control: 'text',
        description: 'Label rendered at the center of the largest shape.',
      },
      countryLabelOffset: {
        control: 'object',
        description:
          'Fine-tune the country label position as `[top, right, bottom, left]` px. Defaults to `[0, 0, 0, 0]`.',
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
    country: 'Japan',
    countryLabel: 'Japan',
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
    geojson: texasShape,
    countryLabel: 'Texas',
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
      id="inset-map-geojson-demo"
      center={[-96.79539236004823, 32.775606715068946]}
      zoom={8}
      interactive={false}
      title="Texas grid operator warns of strain as summer demand hits record"
      description="ERCOT says power use between Dallas and Houston is on pace to top last year's peak, reviving questions about the grid's ability to handle extreme heat."
      height="500px"
    >
      <InsetMap {...args} />
    </TileMap>
  {/snippet}
</Story>

<Story
  name="Country resolution"
  tags={['!autodocs']}
  args={{
    countryLabel: 'Croatia',
    countryLabelOffset: [18, 20, 0, 0],
    annotations: [
      {
        name: 'Zagreb',
        lngLat: [15.9819, 45.815],
        labelPosition: 'right',
        shape: 'square',
      },
    ],
    corner: 'top-right',
    size: 220,
  }}
>
  {#snippet template(args)}
    <div class="resolution-demo">
      <Block width="normal">
        <div
          class="resolution-tabs"
          role="tablist"
          aria-label="world-atlas country resolution"
        >
          {#each Object.keys(RESOLUTIONS) as key (key)}
            <button
              type="button"
              role="tab"
              aria-selected={resolution === key}
              class="resolution-tab {resolution === key ? 'active' : ''}"
              onclick={() => (resolution = key as Resolution)}
            >
              {key}
            </button>
          {/each}
        </div>
      </Block>
      <TileMap
        id="inset-map-resolution-demo"
        center={[15.97885620895, 45.789934344]}
        zoom={12}
        interactive={false}
        title="Croatia moves to limit new coastal construction along the Adriatic"
        description="Zagreb says a surge in tourism-driven development is straining protected shoreline, and plans stricter permits before next summer's season."
        height="500px"
      >
        <InsetMap
          {...args}
          geojson={findCountryFeature(
            countriesByResolution[resolution],
            'Croatia'
          ) ?? undefined}
        />
      </TileMap>
    </div>
  {/snippet}
</Story>

<Story
  name="Custom styling"
  args={{
    country: 'Brazil',
    countryLabel: 'Brazil',
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
    country: 'Kenya',
    countryLabel: 'Kenya',
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
    country: 'Japan',
    countryLabel: 'Japan',
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

<style>
  .resolution-tabs {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .resolution-tab {
    padding: 0.35rem 0.9rem;
    border: 1px solid #d6dde8;
    border-radius: 999px;
    background: #f8fbff;
    color: #425466;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
  }

  .resolution-tab.active {
    background: #315aa9;
    border-color: #315aa9;
    color: #fff;
  }

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
  :global(.dark-inset .inset-country-label) {
    fill: #fff;
    text-shadow: 0 0 2px #000;
  }

  :global(.inset-map-standalone-demo) {
    transform: translate(0, 80%);
  }
</style>
