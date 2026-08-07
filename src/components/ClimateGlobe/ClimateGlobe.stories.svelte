<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ClimateGlobe from './ClimateGlobe.svelte';
  import { formatDateString } from './constants';

  const { Story } = defineMeta({
    title: 'Components/Graphics/ClimateGlobe',
    component: ClimateGlobe,
    tags: ['autodocs'],
    parameters: {
      // Renders live map tiles (and, in some stories, a live GeoJSON fetch
      // or an embedded Geocoder) — never pixel-stable, so skip Chromatic.
      chromatic: { disable: true },
      docs: {
        description: {
          component:
            'A globe-projected MapLibre map that loads and renders one Reuters climate-monitor CDN dataset — anomaly, WBGT, UTCI, or one of the debug-only monitoring layers — for a given date.\n\n' +
            '**Caution:** every dataset except `anomaly` defaults to the `era5` source, which publishes ~5-7 days behind real time. Requesting a recent date (including today) with `era5` 403s — the CDN returns 403, not 404, for objects that simply have not been published yet, which can look like a broken source. Either pass a date at least 7 days old, or pass `source="hres"` for same-day data.',
        },
      },
    },
  });

  const TODAY = formatDateString(new Date());
  // era5 (the default source for every dataset below except `anomaly`, which
  // uses hres) is a reanalysis product with ~5-7 days of publish latency, so
  // today's date 404s for it. Back off far enough that the demo actually has
  // something to show.
  const ERA5_SAFE_DATE = formatDateString(
    new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
  );

  // Sample monthly baseline-vs-observed series for the `DataCardRow` demo —
  // no live data source for this exists yet, so the story supplies it.
  const SAMPLE_BASELINE_DATA = [
    { month: 0, baseline: 2, observed: 3.5 },
    { month: 1, baseline: 3, observed: 4.1 },
    { month: 2, baseline: 7, observed: 8.6 },
    { month: 3, baseline: 12, observed: 11.2 },
    { month: 4, baseline: 17, observed: 18.9 },
    { month: 5, baseline: 22, observed: 23.4 },
    { month: 6, baseline: 25, observed: 27.1 },
    { month: 7, baseline: 24, observed: 26.3 },
    { month: 8, baseline: 20, observed: 21.5 },
    { month: 9, baseline: 14, observed: null },
    { month: 10, baseline: 8, observed: null },
    { month: 11, baseline: 3, observed: null },
  ];
</script>

<script lang="ts">
</script>

<Story
  name="With data card row"
  args={{
    date: TODAY,
    dataset: 'anomaly',
    showLegend: true,
    showDataCardRow: true,
    todayForecast: 16,
    baselineData: SAMPLE_BASELINE_DATA,
  }}
  parameters={{
    docs: {
      description: {
        story:
          "Same anomaly map, with an additional `DataCardRow` overlapping the bottom edge of the globe — today's reading, a forecast value, and a 12-month baseline comparison chart for `CENTER`. Sample forecast/baseline data only; the real values are supplied by the consuming app.",
      },
    },
  }}
/>

<Story
  name="Anomaly"
  args={{
    date: TODAY,
    dataset: 'anomaly',
    showLegend: true,
  }}
  parameters={{
    docs: {
      description: {
        story:
          "How much warmer or colder today's max/min temperature is versus the 1991-2020 normal for that location and date. The public-facing dataset — same one shown on the live climate monitor map.",
      },
    },
  }}
/>

<Story
  name="WBGT"
  args={{
    date: ERA5_SAFE_DATE,
    dataset: 'wbgt',
    showLegend: true,
  }}
  parameters={{
    docs: {
      description: {
        story:
          'Outdoor heat-stress index combining air temperature with humidity, wind, and solar radiation to estimate how dangerous the heat feels to the body — the same metric used to set sports/work safety thresholds. Shown as risk bands, not raw degrees.',
      },
    },
  }}
/>

<Story
  name="WBGT (hres)"
  args={{
    date: TODAY,
    dataset: 'wbgt',
    showLegend: true,
    source: 'hres',
  }}
  parameters={{
    docs: {
      description: {
        story:
          'Same WBGT dataset, but sourced from the same-day hres forecast instead of the default era5 reanalysis — pass `source="hres"` to see today\'s data without waiting on era5\'s publish lag.',
      },
    },
  }}
/>

<Story
  name="UTCI"
  args={{
    date: ERA5_SAFE_DATE,
    dataset: 'utci',
    showLegend: true,
  }}
  parameters={{
    docs: {
      description: {
        story:
          "A different 'feels-like' heat-stress index than WBGT — same idea, different physiological model. Factors in wind chill and radiant heat to estimate the equivalent still-air temperature the body actually experiences.",
      },
    },
  }}
/>

<Story
  name="Weighted anomaly"
  args={{
    date: ERA5_SAFE_DATE,
    dataset: 'weighted-anomaly',
    showLegend: true,
  }}
  parameters={{
    docs: {
      description: {
        story:
          "Debug-only: scores how statistically unusual today's anomaly is for each grid cell relative to that cell's own historical p10/p90 range, instead of a fixed °C/°F cutoff — surfaces anomalies that are extreme for their location even when the raw delta looks modest elsewhere.",
      },
    },
  }}
/>

<Story
  name="Anomaly streaks"
  args={{
    date: ERA5_SAFE_DATE,
    dataset: 'anomaly-streaks',
    showLegend: true,
  }}
  parameters={{
    docs: {
      description: {
        story:
          "Debug-only: counts how many consecutive days each grid cell has stayed in extreme-anomaly territory — catches prolonged heat/cold events that a single day's snapshot would understate.",
      },
    },
  }}
/>
