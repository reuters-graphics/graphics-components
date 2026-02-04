<!-- @component `MapLayer` - Add GeoJSON layers to a Map component -->
<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import type { Map as MaplibreMap, GeoJSONSource } from 'maplibre-gl';
  import type { Writable } from 'svelte/store';

  interface Props {
    /**
     * Unique ID for this layer
     */
    id: string;
    /**
     * GeoJSON data to display (FeatureCollection, Feature, Geometry, or URL string)
     */
    data: object | string;
    /**
     * Layer type: 'fill', 'line', 'circle', 'symbol', etc.
     */
    type?:
      | 'fill'
      | 'line'
      | 'circle'
      | 'symbol'
      | 'fill-extrusion'
      | 'raster'
      | 'background'
      | 'heatmap'
      | 'hillshade';
    /**
     * Paint properties for the layer
     */
    paint?: Record<string, unknown>;
    /**
     * Layout properties for the layer
     */
    layout?: Record<string, unknown>;
    /**
     * Layer to insert before (for layer ordering)
     */
    beforeId?: string;
    /**
     * Minimum zoom level to display layer
     */
    minZoom?: number;
    /**
     * Maximum zoom level to display layer
     */
    maxZoom?: number;
    /**
     * Filter expression for the layer
     */
    filter?: unknown[];
  }

  let {
    id,
    data,
    type = 'fill',
    paint = {},
    layout = {},
    beforeId,
    minZoom,
    maxZoom,
    filter,
  }: Props = $props();

  const mapStore = getContext<Writable<MaplibreMap | null>>('map');

  if (!mapStore) {
    throw new Error('MapLayer must be used inside a Map component');
  }

  const sourceId = `${id}-source`;
  let isInitialized = false;

  // Subscribe to map store and initialize when map is available
  $effect(() => {
    const map = $mapStore;

    if (!map || isInitialized) return;

    const initializeLayer = () => {
      if (isInitialized) return;

      // Add source
      if (!map.getSource(sourceId)) {
        map.addSource(sourceId, {
          type: 'geojson',
          data: typeof data === 'string' ? data : (data as never),
        });
      }

      // Add layer
      if (!map.getLayer(id)) {
        const layerConfig: Record<string, unknown> = {
          id,
          type,
          source: sourceId,
          paint,
          layout,
        };

        if (minZoom !== undefined) layerConfig.minzoom = minZoom;
        if (maxZoom !== undefined) layerConfig.maxzoom = maxZoom;
        if (filter) layerConfig.filter = filter;

        map.addLayer(layerConfig as never, beforeId);
      }

      isInitialized = true;
    };

    // Wait for map to be loaded
    if (!map.loaded()) {
      map.once('load', initializeLayer);
    } else {
      initializeLayer();
    }
  });

  // Update data reactively
  $effect(() => {
    const map = $mapStore;
    if (!map || !isInitialized) return;

    const source = map.getSource(sourceId);
    if (source && (source as GeoJSONSource).setData) {
      (source as GeoJSONSource).setData(
        typeof data === 'string' ? data : (data as never)
      );
    }
  });

  // Update paint properties reactively
  $effect(() => {
    const map = $mapStore;
    if (!map || !isInitialized || !paint) return;

    Object.entries(paint).forEach(([property, value]) => {
      map.setPaintProperty(id, property, value);
    });
  });

  // Update layout properties reactively
  $effect(() => {
    const map = $mapStore;
    if (!map || !isInitialized || !layout) return;

    Object.entries(layout).forEach(([property, value]) => {
      map.setLayoutProperty(id, property, value);
    });
  });

  // Cleanup
  onMount(() => {
    return () => {
      const map = $mapStore;
      if (map && isInitialized) {
        if (map.getLayer(id)) {
          map.removeLayer(id);
        }
        if (map.getSource(sourceId)) {
          map.removeSource(sourceId);
        }
      }
    };
  });
</script>
