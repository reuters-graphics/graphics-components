<script lang="ts">
  import type { PickingInfo } from '@deck.gl/core';
  import { GeoJsonLayer } from '@deck.gl/layers';
  import type { MapLibreOverlayProps } from '@deck.gl/maplibre';
  import type { Feature, FeatureCollection, Polygon } from 'geojson';
  import TileMap from '../../../components/TileMap/TileMap.svelte';
  import DeckGlOverlay from './DeckGlOverlay.svelte';
  import buildingsData from './madison-square-buildings.geojson?raw';
  import {
    getBuildingFillColor,
    selectBuilding as getBuildingSelection,
  } from './helpers';

  interface BuildingProperties {
    bin: string;
    name: string | null;
    heightMeters: number;
    constructionYear: number | null;
  }

  type BuildingFeature = Feature<Polygon, BuildingProperties>;

  const buildings = JSON.parse(buildingsData) as FeatureCollection<
    Polygon,
    BuildingProperties
  >;

  function createLayers(useBlue: boolean, selectedBin: string | null) {
    return [
      new GeoJsonLayer<BuildingProperties>({
        id: 'madison-square-buildings-composition',
        data: buildings,
        extruded: true,
        filled: true,
        stroked: true,
        opacity: 0.85,
        getElevation: (feature) => feature.properties.heightMeters,
        getFillColor: (feature) =>
          getBuildingFillColor(feature.properties.bin, selectedBin, useBlue),
        getLineColor: [255, 255, 255, 170],
        lineWidthMinPixels: 1,
        pickable: true,
      }),
    ];
  }

  let showBuildings = $state(true);
  let useBlue = $state(false);
  let selectionEnabled = $state(true);
  let selectedBin = $state<string | null>(null);
  let layers = $state.raw(createLayers(false, null));
  let overlayStatus = $state('Waiting for TileMap');
  let overlayAttachments = $state(0);
  let overlayUpdates = $state(0);
  let overlayRemovals = $state(0);

  function getTooltip({ object }: PickingInfo<BuildingFeature>) {
    if (!object) return null;

    const { bin, name, heightMeters } = object.properties;
    return {
      text: `${name ?? `Building ${bin}`}\n${Math.round(heightMeters)} m roof height`,
    };
  }

  function selectBuilding({ object }: PickingInfo<BuildingFeature>) {
    if (!object) return;

    const selection = getBuildingSelection(selectedBin, object.properties);
    selectedBin = selection.selectedBin;
    layers = createLayers(useBlue, selectedBin);
    overlayStatus = selection.status;
  }

  const deckProps = $derived({
    getTooltip,
    onClick: selectionEnabled ? selectBuilding : undefined,
    getCursor: ({ isHovering }) =>
      selectionEnabled && isHovering ? 'pointer' : 'grab',
  } satisfies Omit<MapLibreOverlayProps, 'interleaved' | 'layers'>);

  function toggleBuildings() {
    if (showBuildings) {
      showBuildings = false;
      overlayStatus = 'Overlay removed';
      return;
    }

    // A finalized deck.gl layer cannot be reused when the child is mounted again.
    layers = createLayers(useBlue, selectedBin);
    showBuildings = true;
    overlayStatus = 'Attaching overlay';
  }

  function changeColour() {
    useBlue = !useBlue;
    layers = createLayers(useBlue, selectedBin);
    overlayStatus = 'Overlay updated';
  }

  function toggleSelection() {
    selectionEnabled = !selectionEnabled;

    if (!selectionEnabled && selectedBin) {
      selectedBin = null;
      layers = createLayers(useBlue, null);
    }

    overlayStatus =
      selectionEnabled ?
        'Building selection enabled'
      : 'Building selection disabled';
  }
</script>

<TileMap
  id="deck-gl-overlay-composition"
  center={[-73.9885, 40.7422]}
  zoom={16.2}
  pitch={50}
  interactive
  title="A reusable deck.gl child component"
  description="Click a building to select it, or remove and add the buildings after TileMap has loaded. The child reads persistent map state and forwards standard deck.gl interactions without trying to catch MapLibre's one-time load event."
  notes="Building footprints and roof heights: New York City Office of Technology and Innovation, [Building Footprints](https://data.cityofnewyork.us/d/5zhs-2jue), published under the [NYC Open Data Terms of Use](https://opendata.cityofnewyork.us/overview/#termsofuse). Subset and coordinate precision reduced by Reuters Graphics."
  height="500px"
>
  {#snippet legend()}
    <div class="overlay-controls">
      <button type="button" onclick={toggleBuildings}>
        {showBuildings ? 'Remove buildings' : 'Add buildings'}
      </button>
      <button type="button" onclick={changeColour} disabled={!showBuildings}>
        Change colour
      </button>
      <button type="button" onclick={toggleSelection} disabled={!showBuildings}>
        {selectionEnabled ? 'Disable selection' : 'Enable selection'}
      </button>
      <span
        data-testid="overlay-status"
        data-overlay-attachments={overlayAttachments}
        data-overlay-updates={overlayUpdates}
        data-overlay-removals={overlayRemovals}
        aria-live="polite"
      >
        {overlayStatus}
      </span>
    </div>
  {/snippet}

  {#if showBuildings}
    <DeckGlOverlay
      {layers}
      {deckProps}
      onOverlayReady={() => {
        overlayAttachments += 1;
        overlayStatus = 'Overlay attached';
      }}
      onOverlayUpdated={() => {
        overlayUpdates += 1;
      }}
      onOverlayRemoved={() => {
        overlayRemovals += 1;
      }}
      onOverlayError={(error) => {
        overlayStatus =
          error instanceof Error ?
            `Overlay error: ${error.message}`
          : 'Overlay error';
      }}
    />
  {/if}
</TileMap>

<style>
  .overlay-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  button {
    border: 1px solid #666;
    border-radius: 0.2rem;
    padding: 0.35rem 0.65rem;
    background: #fff;
    color: #1a1a1a;
    font: inherit;
    cursor: pointer;
  }

  button:hover {
    background: #f2f2f2;
  }

  [data-testid='overlay-status'] {
    color: #555;
    font-size: 0.875rem;
  }
</style>
