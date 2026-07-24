<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TileMap from '../TileMap/TileMap.svelte';
  import TileMapCallout from './TileMapCallout.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/TileMapCallout',
    component: TileMapCallout,
    tags: ['autodocs'],
    argTypes: {
      lngLat: {
        control: 'object',
        description:
          'Longitude/latitude coordinate: [lng, lat], { lng, lat }, { lon, lat } or { longitude, latitude }.',
      },
      placement: {
        control: 'select',
        options: ['above', 'below'],
        description: 'Place the callout surface above or below the coordinate.',
      },
      flip: {
        control: 'boolean',
        description: 'Flip the callout surface to the left of the coordinate.',
      },
      leaderWidth: {
        control: { type: 'number', min: 0 },
        description:
          'Leader-line width in px — horizontal distance from the dot to the surface.',
      },
      leaderHeight: {
        control: { type: 'number', min: 0 },
        description:
          'Leader-line height in px — vertical rise/drop of the diagonal.',
      },
      dotRadius: {
        control: { type: 'number', min: 0 },
        description: 'Marker dot radius in px.',
      },
      surface: {
        control: 'select',
        options: ['filled', 'bare'],
        description:
          'Surface chrome: "filled" draws the themed box; "bare" removes it so you can render your own container.',
      },
    },
  });
</script>

<Story asChild name="Drop-in TileMap callout">
  <TileMap
    id="tile-map-callout-demo"
    center={[-73.9868, 40.7567]}
    zoom={13}
    interactive={true}
    title="TileMap callout"
    description="Drop a callout directly inside TileMap. TileMapCallout handles the MapLibre marker lifecycle and stays attached as the map moves."
    height="500px"
  >
    <TileMapCallout lngLat={[-73.9868, 40.7567]}>Times Square</TileMapCallout>
  </TileMap>
</Story>

<Story asChild name="Placement and flip">
  <TileMap
    id="tile-map-callout-placement-demo"
    center={[-73.9868, 40.7567]}
    zoom={13}
    interactive={true}
    title="Callout placement"
    description="Use placement and flip to keep labels clear of nearby map features or viewport edges."
    height="500px"
  >
    <TileMapCallout lngLat={[-73.9868, 40.7567]} placement="above">
      Above anchor
    </TileMapCallout>
    <TileMapCallout lngLat={[-73.9776, 40.7527]} placement="above" flip>
      Above + flipped
    </TileMapCallout>
    <TileMapCallout lngLat={[-73.9942, 40.7505]} placement="below">
      Below anchor
    </TileMapCallout>
    <TileMapCallout lngLat={[-73.9819, 40.7681]} placement="below" flip>
      Below + flipped
    </TileMapCallout>
  </TileMap>
</Story>

<Story asChild name="Custom leader geometry" tags={['!autodocs', '!dev']}>
  <TileMap
    id="tile-map-callout-leader-demo"
    center={[-73.9868, 40.7567]}
    zoom={13}
    interactive={true}
    title="Custom leader geometry"
    description="Tune the leader line and dot with the leaderWidth, leaderHeight and dotRadius props. The surface offset and the SVG stay in sync."
    height="500px"
  >
    <TileMapCallout lngLat={[-73.9868, 40.7567]}>
      Default (14×14, dot 3)
    </TileMapCallout>
    <TileMapCallout
      lngLat={[-73.9776, 40.7527]}
      leaderWidth={40}
      leaderHeight={32}
      dotRadius={5}
    >
      Long leader (40×32, dot 5)
    </TileMapCallout>
    <TileMapCallout
      lngLat={[-73.9942, 40.7505]}
      leaderWidth={6}
      leaderHeight={6}
    >
      Short leader (6×6)
    </TileMapCallout>
  </TileMap>
</Story>

<Story asChild name="Rich content" tags={['!autodocs', '!dev']}>
  <TileMap
    id="tile-map-callout-rich-demo"
    center={[-73.9868, 40.7567]}
    zoom={12}
    interactive={true}
    title="Rich callout content"
    height="500px"
  >
    <TileMapCallout lngLat={{ longitude: -73.9868, latitude: 40.7567 }}>
      <div class="rich-callout">
        <strong>Reuters</strong>
        <span>Times Square newsroom</span>
      </div>
    </TileMapCallout>
  </TileMap>
</Story>

<Story asChild name="Bare surface" tags={['!autodocs', '!dev']}>
  <TileMap
    id="tile-map-callout-bare-demo"
    center={[-73.9868, 40.7567]}
    zoom={13}
    interactive={true}
    title="Bare surface"
    description="With surface='bare' the callout draws no box — render your own pre-styled container inside. The marker, leader line and positioning still apply."
    height="500px"
  >
    <TileMapCallout lngLat={[-73.9868, 40.7567]} surface="bare">
      <div class="bare-card">
        <strong>Times Square</strong>
        <span>Bring your own box</span>
      </div>
    </TileMapCallout>
  </TileMap>
</Story>

<style lang="scss">
  .rich-callout {
    display: grid;
    gap: 0.125rem;
    font-weight: 400;
  }

  .rich-callout strong {
    font-weight: 700;
  }

  .rich-callout span {
    color: var(--theme-colour-text-secondary);
    font-size: 0.85em;
  }

  .bare-card {
    display: grid;
    gap: 0.125rem;
    padding: 0.5rem 0.75rem;
    background: var(--theme-colour-brand-primary, #0078d1);
    color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 20%);
    font-weight: 400;
  }

  .bare-card strong {
    font-weight: 700;
  }

  .bare-card span {
    font-size: 0.85em;
    opacity: 0.85;
  }
</style>
