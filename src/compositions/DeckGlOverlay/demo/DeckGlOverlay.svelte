<script lang="ts">
  import type { DeckProps } from '@deck.gl/core';
  import type { MapLibreOverlay } from '@deck.gl/maplibre';
  import type { Map as MaplibreMap } from 'maplibre-gl';
  import { untrack } from 'svelte';
  import { getTileMapContext } from '../../../components/TileMap/context';

  interface Props {
    /** deck.gl layers rendered by the overlay. */
    layers: NonNullable<DeckProps['layers']>;
    /** Share MapLibre's WebGL context so deck.gl participates in map rendering. */
    interleaved?: boolean;
    /** Optional deck.gl tooltip callback. */
    getTooltip?: DeckProps['getTooltip'];
    /** Called after the overlay has been added to its parent map. */
    onOverlayReady?: (overlay: MapLibreOverlay) => void;
  }

  let {
    layers,
    interleaved = true,
    getTooltip,
    onOverlayReady,
  }: Props = $props();

  const tileMap = getTileMapContext();

  if (!tileMap) {
    throw new Error('DeckGlOverlay must be used inside a TileMap component');
  }

  const { map: mapStore, ready: readyStore } = tileMap;

  let overlay = $state.raw<MapLibreOverlay | null>(null);
  let overlayMap = $state.raw<MaplibreMap | null>(null);
  let setupVersion = 0;

  function removeOverlay() {
    const currentOverlay = overlay;
    const currentMap = overlayMap;

    overlay = null;
    overlayMap = null;

    if (!currentOverlay) return;

    if (currentMap) {
      try {
        currentMap.removeControl(currentOverlay);
        return;
      } catch {
        // The parent map may already be tearing down. Finalize directly below.
      }
    }

    currentOverlay.finalize();
  }

  async function addOverlay(
    map: MaplibreMap,
    useInterleavedRendering: boolean,
    version: number
  ) {
    const { MapLibreOverlay } = await import('@deck.gl/maplibre');
    if (version !== setupVersion) return;

    const nextOverlay = new MapLibreOverlay({
      interleaved: useInterleavedRendering,
      layers,
      getTooltip,
    });

    map.addControl(nextOverlay);

    if (version !== setupVersion) {
      map.removeControl(nextOverlay);
      return;
    }

    overlayMap = map;
    overlay = nextOverlay;
    onOverlayReady?.(nextOverlay);
  }

  $effect(() => {
    const map = $mapStore;
    const ready = $readyStore;
    const useInterleavedRendering = interleaved;
    const version = ++setupVersion;

    untrack(removeOverlay);

    if (!map || !ready) return;

    void addOverlay(map, useInterleavedRendering, version);

    return () => {
      if (setupVersion === version) setupVersion += 1;
      removeOverlay();
    };
  });

  $effect(() => {
    const currentOverlay = overlay;
    const currentLayers = layers;
    const currentTooltip = getTooltip;

    currentOverlay?.setProps({
      layers: currentLayers,
      getTooltip: currentTooltip,
    });
  });
</script>
