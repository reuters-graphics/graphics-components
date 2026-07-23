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
</style>
