<!-- @component `Map` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-map--docs) -->
<script lang="ts">
  import { onMount, onDestroy, setContext, type Snippet } from 'svelte';
  import { writable } from 'svelte/store';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import type { ContainerWidth } from '../@types/global';
  import maplibregl from 'maplibre-gl';
  import 'maplibre-gl/dist/maplibre-gl.css';
  import { Protocol } from 'pmtiles';

  interface Props {
    /** Title of the map as a string or a custom snippet. */
    title?: string | Snippet;
    /** Description of the map, passed in as a markdown string. */
    description?: string;
    /**
     * Notes to the map, passed in as a markdown string or a custom snippet.
     */
    notes?: string | Snippet;
    /**
     * Map container id
     */
    id?: string;
    /**
     * Map center coordinates [longitude, latitude]
     */
    center?: [number, number];
    /**
     * Initial zoom level
     */
    zoom?: number;
    /**
     * Minimum zoom level
     */
    minZoom?: number;
    /**
     * Maximum zoom level
     */
    maxZoom?: number;
    /**
     * Map projection. Use 'globe' for 3D globe view
     */
    projection?: 'mercator' | 'globe' | string;
    /**
     * Enable interactive controls (zoom, pan, etc.)
     */
    interactive?: boolean;
    /**
     * Map style URL
     */
    styleUrl?: string;
    /**
     * Map height in pixels
     */
    height?: string;
    /** Width of the map within the text well. */
    width?: ContainerWidth;
    /**
     * Set a different width for the text within the text well, for example,
     * "normal" to keep the title, description and notes inline with the rest
     * of the text well. Can't ever be wider than `width`.
     */
    textWidth?: ContainerWidth;
    /** Callback function that receives the map instance when ready */
    onMapReady?: (map: maplibregl.Map) => void;
    /** Child components (e.g., MapLayer) */
    children?: Snippet;
  }

  let {
    title,
    description,
    notes,
    id = 'map',
    center = [0, 0],
    zoom = 2,
    minZoom = 0,
    maxZoom = 22,
    projection,
    interactive = true,
    styleUrl = 'https://graphics.thomsonreuters.com/reuters-protomaps/style.json',
    height = '100%',
    width = 'normal',
    textWidth = 'normal',
    onMapReady,
    children,
  }: Props = $props();

  let mapContainer: HTMLDivElement;
  let map: maplibregl.Map | null = null;

  // Create a writable store for the map instance
  const mapStore = writable<maplibregl.Map | null>(null);

  // Set context with the store immediately (not in onMount)
  setContext('map', mapStore);

  onMount(() => {
    if (typeof window !== 'undefined' && mapContainer) {
      // Set up PMTiles protocol
      const protocol = new Protocol();
      maplibregl.addProtocol('pmtiles', protocol.tile);

      // Set the map options
      const mapOptions: maplibregl.MapOptions = {
        container: mapContainer,
        style: styleUrl,
        center,
        zoom,
        minZoom,
        maxZoom,
        attributionControl: false,
        scrollZoom: interactive ? false : false, // Always disable scroll zoom for consistency
        doubleClickZoom: interactive ? true : false,
        dragPan:
          interactive ?
            typeof window !== 'undefined' && !('ontouchstart' in window) ?
              true
            : false
          : false,
        touchPitch: interactive ? false : false,
        touchZoomRotate: interactive ? true : false,
        boxZoom: interactive ? true : false,
        keyboard: interactive ? true : false,
      };

      const mapInstance = new maplibregl.Map(mapOptions);

      map = mapInstance;

      // Update the store with the map instance
      mapStore.set(mapInstance);

      // Initialize controls only if interactive
      if (interactive) {
        map.addControl(
          new maplibregl.NavigationControl({ showCompass: false })
        );
      }

      // Call the callback when map is ready
      map.on('load', () => {
        if (!map) return;

        // Set projection after map loads if specified
        if (projection) {
          map.setProjection({ type: projection });
        }

        if (onMapReady) {
          onMapReady(map);
        }
      });
    }
  });

  onDestroy(() => {
    if (map) {
      map.remove();
      map = null;
      mapStore.set(null);
    }
  });
</script>

<GraphicBlock {width} {textWidth} {title} {description} {notes}>
  <div class="map" {id}>
    <div
      bind:this={mapContainer}
      class="map-container"
      style="height: {height}"
    ></div>
    {#if children}
      {@render children()}
    {/if}
  </div>
</GraphicBlock>

<style>
  .map {
    width: 100%;
    position: relative;
  }

  .map-container {
    width: 100%;
    position: relative;
  }

  :global(.maplibregl-canvas) {
    width: 100% !important;
    height: 100% !important;
  }
</style>
