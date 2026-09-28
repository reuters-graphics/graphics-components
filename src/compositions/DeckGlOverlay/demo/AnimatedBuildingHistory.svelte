<script lang="ts">
  import { GeoJsonLayer } from '@deck.gl/layers';
  import type { Feature, FeatureCollection, Polygon } from 'geojson';
  import { onMount } from 'svelte';
  import TileMap from '../../../components/TileMap/TileMap.svelte';
  import DeckGlOverlay from './DeckGlOverlay.svelte';
  import { FramePlaybackController } from './FramePlaybackController';
  import buildingsData from './madison-square-buildings.geojson?raw';

  interface Props {
    /** Start looping when the example enters the viewport. */
    autoplay?: boolean;
    /** Time between construction-year frames. */
    intervalMs?: number;
  }

  interface BuildingProperties {
    bin: string;
    name: string | null;
    heightMeters: number;
    constructionYear: number | null;
  }

  let { autoplay = false, intervalMs = 650 }: Props = $props();

  const buildings = JSON.parse(buildingsData) as FeatureCollection<
    Polygon,
    BuildingProperties
  >;
  const datedBuildings = {
    ...buildings,
    features: buildings.features.filter(
      (
        feature
      ): feature is Feature<
        Polygon,
        BuildingProperties & { constructionYear: number }
      > => Number.isInteger(feature.properties.constructionYear)
    ),
  };
  const years = [
    ...new Set(
      datedBuildings.features.map(
        (feature) => feature.properties.constructionYear
      )
    ),
  ].sort((a, b) => a - b);

  let root: HTMLDivElement;
  let playback: FramePlaybackController | null = null;
  let activeIndex = $state(0);
  let running = $state(false);
  let reducedMotion = $state(false);
  let layers = $state.raw(createLayers(years[0], false));
  let overlayStatus = $state('Waiting for TileMap');
  let overlayAttachments = $state(0);
  let overlayUpdates = $state(0);

  const activeYear = $derived(years[activeIndex]);
  const visibleBuildingCount = $derived(
    datedBuildings.features.filter(
      (feature) => feature.properties.constructionYear <= activeYear
    ).length
  );

  function createLayers(year: number, prefersReducedMotion: boolean) {
    return [
      new GeoJsonLayer<BuildingProperties>({
        id: 'madison-square-building-history',
        data: datedBuildings,
        extruded: true,
        filled: true,
        stroked: false,
        opacity: 0.9,
        getElevation: (feature) =>
          (
            feature.properties.constructionYear !== null &&
            feature.properties.constructionYear <= year
          ) ?
            feature.properties.heightMeters
          : 0,
        getFillColor: (feature) => {
          const constructionYear = feature.properties.constructionYear;

          if (constructionYear === null || constructionYear > year) {
            return [0, 0, 0, 0];
          }

          return constructionYear === year ?
              [244, 176, 41, 255]
            : [23, 95, 176, 220];
        },
        updateTriggers: {
          getElevation: year,
          getFillColor: year,
        },
        transitions: {
          getElevation: prefersReducedMotion ? 0 : 300,
          getFillColor: prefersReducedMotion ? 0 : 300,
        },
      }),
    ];
  }

  function updateFrame(index: number, isRunning: boolean) {
    activeIndex = index;
    running = isRunning;
    layers = createLayers(years[index], reducedMotion);
  }

  onMount(() => {
    reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    layers = createLayers(activeYear, reducedMotion);
    playback = new FramePlaybackController(
      years.length,
      (state) => updateFrame(state.index, state.running),
      intervalMs,
      reducedMotion
    );

    let observer: IntersectionObserver | null = null;

    if (typeof IntersectionObserver === 'undefined') {
      if (autoplay) playback.startAutoplay();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (autoplay) playback?.startAutoplay();
          } else {
            playback?.pauseForVisibility();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(root);
    }

    return () => {
      observer?.disconnect();
      playback?.destroy();
      playback = null;
    };
  });
</script>

<div class="building-history" bind:this={root}>
  <TileMap
    id="deck-gl-building-history"
    center={[-73.9885, 40.7422]}
    zoom={16.2}
    pitch={50}
    interactive
    title="How Madison Square grew"
    description="Play through the construction years in this small building dataset. The MapLibre map and deck.gl overlay stay mounted while a layer with the same ID updates for each frame."
    notes="Building footprints, roof heights and construction years: New York City Office of Technology and Innovation, [Building Footprints](https://data.cityofnewyork.us/d/5zhs-2jue), published under the [NYC Open Data Terms of Use](https://opendata.cityofnewyork.us/overview/#termsofuse). Subset and coordinate precision reduced by Reuters Graphics."
    height="500px"
  >
    {#snippet legend()}
      <div class="animation-controls">
        <div class="button-row">
          <button type="button" onclick={() => playback?.toggleManual()}>
            {running ? 'Pause' : 'Play'}
          </button>
          <button type="button" onclick={() => playback?.restart()}>
            Restart
          </button>
          <strong data-testid="animation-year" aria-live="polite">
            {activeYear}
          </strong>
          <span>{visibleBuildingCount} buildings</span>
        </div>
        <label>
          <span class="visually-hidden">Construction year</span>
          <input
            aria-label="Construction year"
            type="range"
            min="0"
            max={years.length - 1}
            value={activeIndex}
            aria-valuetext={String(activeYear)}
            oninput={(event) =>
              playback?.setIndex(event.currentTarget.valueAsNumber)}
          />
        </label>
        <span
          class="visually-hidden"
          data-testid="animation-status"
          data-overlay-attachments={overlayAttachments}
          data-overlay-updates={overlayUpdates}
        >
          {overlayStatus}
        </span>
      </div>
    {/snippet}

    <DeckGlOverlay
      {layers}
      onOverlayReady={() => {
        overlayAttachments += 1;
        overlayStatus = 'Overlay attached';
      }}
      onOverlayUpdated={() => {
        overlayUpdates += 1;
        overlayStatus = 'Overlay updated';
      }}
      onOverlayError={(error) => {
        overlayStatus =
          error instanceof Error ?
            `Overlay error: ${error.message}`
          : 'Overlay error';
      }}
    />
  </TileMap>
</div>

<style>
  .animation-controls {
    display: grid;
    gap: 0.6rem;
  }

  .button-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.6rem;
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

  strong {
    min-width: 2.75rem;
    margin-left: 0.25rem;
    font-variant-numeric: tabular-nums;
  }

  label,
  input {
    width: 100%;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
