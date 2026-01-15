<!-- @component `MapLayer` - Add GeoJSON layers to a Map component -->
<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import type { Map as MaplibreMap, GeoJSONSource } from 'maplibre-gl';

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

  // Get the map instance from parent Map component context
  const getMap = getContext<() => MaplibreMap | null>('map');
  const map = getMap?.();

  onMount(() => {
    if (!map) {
      console.error('MapLayer must be used inside a Map component');
      return;
    }

    // Wait for map to be loaded
    const addLayer = () => {
      const sourceId = `${id}-source`;

      // Add source if it doesn't exist
      if (!map.getSource(sourceId)) {
        map.addSource(sourceId, {
          type: 'geojson',
          data: typeof data === 'string' ? data : (data as never),
        });
      }

      // Add layer if it doesn't exist
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
    };

    if (map.isStyleLoaded()) {
      addLayer();
    } else {
      map.once('load', addLayer);
    }

    // Cleanup: remove layer and source on unmount
    return () => {
      if (map.getLayer(id)) {
        map.removeLayer(id);
      }
      if (map.getSource(`${id}-source`)) {
        map.removeSource(`${id}-source`);
      }
    };
  });

  // Update data when it changes
  $effect(() => {
    if (map && map.getSource(`${id}-source`)) {
      const source = map.getSource(`${id}-source`) as GeoJSONSource;
      if (source && source.setData) {
        source.setData(typeof data === 'string' ? data : (data as never));
      }
    }
  });

  // Update paint properties when they change
  $effect(() => {
    if (map && map.getLayer(id)) {
      Object.entries(paint).forEach(([property, value]) => {
        map.setPaintProperty(id, property, value);
      });
    }
  });

  // Update layout properties when they change
  $effect(() => {
    if (map && map.getLayer(id)) {
      Object.entries(layout).forEach(([property, value]) => {
        map.setLayoutProperty(id, property, value);
      });
    }
  });
</script>
