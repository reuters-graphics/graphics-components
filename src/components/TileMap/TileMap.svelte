<!-- @component `Map` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-map--docs) -->
<script lang="ts" module>
  import { Protocol } from 'pmtiles';
  import maplibregl from 'maplibre-gl';

  // Track if PMTiles protocol has been registered (only do this once per page)
  let pmtilesProtocolRegistered = false;

  function ensurePMTilesProtocol() {
    if (!pmtilesProtocolRegistered) {
      const protocol = new Protocol();
      maplibregl.addProtocol('pmtiles', protocol.tile);
      pmtilesProtocolRegistered = true;
    }
  }
</script>

<script lang="ts">
  import { onMount, onDestroy, setContext, type Snippet } from 'svelte';
  import { writable } from 'svelte/store';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import type { ContainerWidth } from '../@types/global';
  import type { ProjectionSpecification } from 'maplibre-gl';
  import { emphasizePlaceLabels } from './labels';
  import 'maplibre-gl/dist/maplibre-gl.css';

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
     * Map projection. Use 'globe' for 3D globe view.
     * See https://maplibre.org/maplibre-style-spec/types/#projectiondefinition
     */
    projection?: ProjectionSpecification;
    /**
     * Enable interactive controls (zoom, pan, etc.)
     */
    interactive?: boolean;
    /**
     * Map style URL
     */
    styleUrl?: string;
    /**
     * Darken the basemap's place labels and give them a strong white halo, so
     * city/region names stay readable over colored data layers. Applied once on
     * map load; a no-op on styles without `place` labels (e.g. non-default
     * `styleUrl`s), so it degrades gracefully.
     */
    emphasizeLabels?: boolean;
    /**
     * Map height (default: '500px')
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
    /**
     * Optional content rendered inside the map's `GraphicBlock`, directly above
     * the map. Use it to share a single block — with one title and the standard
     * spacing — between the map and an accompanying element such as a `Legend`.
     */
    legend?: Snippet;
    /** Child components (e.g., TileMapLayer) */
    children?: Snippet;
  }

  let {
    title,
    description,
    notes,
    id = `map-${Math.random().toString(36).substring(2, 9)}`,
    center = [0, 0],
    zoom = 2,
    minZoom = 0,
    maxZoom = 22,
    projection,
    interactive = true,
    styleUrl = 'https://graphics.thomsonreuters.com/reuters-protomaps/style.json',
    emphasizeLabels = false,
    height = '500px',
    width = 'normal',
    textWidth = 'normal',
    onMapReady,
    legend,
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
      // Set up PMTiles protocol (only once per page)
      ensurePMTilesProtocol();

      // Set the map options
      const mapOptions: maplibregl.MapOptions = {
        container: mapContainer,
        style: styleUrl,
        center,
        zoom,
        minZoom,
        maxZoom,
        attributionControl: false,
        scrollZoom: false, // Always disabled for consistency
        doubleClickZoom: interactive,
        dragPan: interactive,
        touchPitch: false, // Disabled to prevent unwanted tilting
        touchZoomRotate: interactive,
        boxZoom: interactive,
        keyboard: interactive,
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
          map.setProjection(projection);
        }

        // Darken the basemap's place labels so they read over data layers.
        // Apply now, then re-assert once the map settles — some styles finish
        // applying their own label paint just after `load`, which would
        // otherwise win and leave the labels their default (lighter) color.
        if (emphasizeLabels) {
          emphasizePlaceLabels(map);
          map.once('idle', () => {
            if (map) emphasizePlaceLabels(map);
          });
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
  {#if legend}
    <div class="map-legend">
      {@render legend()}
    </div>
  {/if}
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

  /* Sit the legend snug above the map, sharing the block's spacing. */
  .map-legend {
    margin-bottom: 0.5rem;
  }
</style>
