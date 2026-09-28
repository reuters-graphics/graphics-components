<script lang="ts">
  import type {
    MapLibreOverlay,
    MapLibreOverlayProps,
  } from '@deck.gl/maplibre';
  import type { Map as MaplibreMap } from 'maplibre-gl';
  import { untrack } from 'svelte';
  import { getTileMapContext } from '../../../components/TileMap/context';

  interface Props {
    /** deck.gl layers rendered by the overlay. */
    layers: NonNullable<MapLibreOverlayProps['layers']>;
    /** Share MapLibre's WebGL context so deck.gl participates in map rendering. */
    interleaved?: boolean;
    /** Standard deck.gl options forwarded to the overlay. */
    deckProps?: Omit<MapLibreOverlayProps, 'interleaved' | 'layers'>;
    /** Called after the overlay has been added to its parent map. */
    onOverlayReady?: (overlay: MapLibreOverlay) => void;
    /** Called after updated layers or tooltip options reach the overlay. */
    onOverlayUpdated?: (overlay: MapLibreOverlay) => void;
    /** Called after the overlay has been removed from its parent map. */
    onOverlayRemoved?: () => void;
    /** Called when the overlay cannot be created, attached or updated. */
    onOverlayError?: (error: unknown) => void;
  }

  let {
    layers,
    interleaved = true,
    deckProps = {},
    onOverlayReady,
    onOverlayUpdated,
    onOverlayRemoved,
    onOverlayError,
  }: Props = $props();

  const tileMap = getTileMapContext();

  if (!tileMap) {
    throw new Error('DeckGlOverlay must be used inside a TileMap component');
  }

  const { map: mapStore, ready: readyStore } = tileMap;

  let overlay = $state.raw<MapLibreOverlay | null>(null);
  let overlayMap = $state.raw<MaplibreMap | null>(null);
  let setupVersion = 0;

  function reportOverlayError(error: unknown) {
    if (onOverlayError) {
      try {
        onOverlayError(error);
      } catch (callbackError) {
        console.error(
          'The deck.gl overlay error callback failed.',
          callbackError
        );
      }
      return;
    }

    console.error('The deck.gl overlay encountered an error.', error);
  }

  function disposeOverlay(
    map: MaplibreMap | null,
    currentOverlay: MapLibreOverlay
  ) {
    if (map?.hasControl(currentOverlay)) {
      try {
        map.removeControl(currentOverlay);
        return;
      } catch {
        // The parent map may already be tearing down. Finalize directly below.
      }
    }

    currentOverlay.finalize();
  }

  function removeOverlay() {
    const currentOverlay = overlay;
    const currentMap = overlayMap;

    overlay = null;
    overlayMap = null;

    if (!currentOverlay) return;

    try {
      disposeOverlay(currentMap, currentOverlay);
      onOverlayRemoved?.();
    } catch (error) {
      reportOverlayError(error);
    }
  }

  async function addOverlay(
    map: MaplibreMap,
    useInterleavedRendering: boolean,
    version: number
  ) {
    let nextOverlay: MapLibreOverlay | null = null;

    try {
      const { MapLibreOverlay } = await import('@deck.gl/maplibre');
      if (version !== setupVersion) return;

      nextOverlay = new MapLibreOverlay({
        ...deckProps,
        interleaved: useInterleavedRendering,
        layers,
      });

      map.addControl(nextOverlay);

      if (version !== setupVersion) {
        disposeOverlay(map, nextOverlay);
        return;
      }

      overlayMap = map;
      overlay = nextOverlay;
      onOverlayReady?.(nextOverlay);
    } catch (error) {
      if (nextOverlay) {
        if (overlay === nextOverlay) {
          overlay = null;
          overlayMap = null;
        }

        try {
          disposeOverlay(map, nextOverlay);
        } catch {
          // Report the original mounting error below.
        }
      }

      if (version === setupVersion) reportOverlayError(error);
    }
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
    const currentDeckProps = deckProps;

    if (!currentOverlay) return;

    try {
      currentOverlay.setProps({
        ...currentDeckProps,
        layers: currentLayers,
      });
      untrack(() => onOverlayUpdated?.(currentOverlay));
    } catch (error) {
      removeOverlay();
      reportOverlayError(error);
    }
  });
</script>
