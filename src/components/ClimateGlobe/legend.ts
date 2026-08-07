/**
 * Maps each ClimateGlobe dataset to a `<Legend>` config, reusing the same
 * color data as the map's own paint expressions (paint.ts). Unit-paired
 * datasets (anomaly/wbgt/utci) take the active TemperatureUnit and render
 * that unit's own bin boundaries + suffix; the unitless datasets (weighted
 * anomaly, streaks) ignore it.
 *
 * Binned rather than gradient/continuous throughout, matching the main
 * frontend's own MapLegend.svelte convention.
 */
import type { LegendItem, LegendMode } from '../Legend/Legend.svelte';
import {
  deltaSign,
  temperatureUnitSuffix,
  celsiusToFahrenheit,
  deltaToFahrenheit,
  type TemperatureUnit,
} from './constants';
import {
  ANOMALY_RAMP_COLORS,
  ANOMALY_SCORE_STOPS,
  STREAK_STOPS,
  UTCI_STEPS_CELSIUS,
  UTCI_STEPS_FAHRENHEIT,
  WBGT_STEPS_CELSIUS,
  WBGT_STEPS_FAHRENHEIT,
  type HeatIndexStep,
} from './paint';

export interface LegendConfig {
  title: string;
  /** Short description shown under the title (Legend's own `subtitle` prop). */
  subtitle: string;
  /** Longer explanation shown in the legend's info tooltip. */
  info: string;
  mode: LegendMode;
  items: LegendItem[];
}

type UnitPairedDataset = 'anomaly' | 'wbgt' | 'utci';
type UnitlessDataset = 'weighted-anomaly' | 'anomaly-streaks';
export type LegendDataset = UnitPairedDataset | UnitlessDataset;

// Matches MAP_FILL_OPACITY in the main frontend's MapLegend.svelte — applied
// to the same bar-style legends (temperature/WBGT/UTCI) so the swatches read
// as translucent like the map's own fill layers, rather than solid.
const LEGEND_FILL_OPACITY = 0.6;

function withOpacity(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Convert a `floor`-keyed step list (used by the map's `step` fill-color expressions) into threshold-mode Legend items. `-Infinity` marks a genuinely open-ended band (WBGT/UTCI's coldest/hottest step); any other floor — including anomaly's clamped ±5° edge — is a real bound. */
function stepsToItems(steps: readonly HeatIndexStep[]): LegendItem[] {
  return steps.map((step, i) => ({
    color: withOpacity(step.color, LEGEND_FILL_OPACITY),
    from: step.floor === -Infinity ? undefined : step.floor,
    to: i === steps.length - 1 ? undefined : steps[i + 1].floor,
  }));
}

/** Anomaly's 11-color ramp has a dedicated white "at zero" swatch (index 5)
 * that doesn't represent a bin of its own — dropping it splits the legend
 * into 5 cool + 5 warm bins of equal width meeting exactly at 0, matching
 * the map's own gradient breaks ((i-5)*stepSize) at every edge. */
function anomalyItems(stepSize: number): LegendItem[] {
  const colors = [
    ...ANOMALY_RAMP_COLORS.slice(0, 5),
    ...ANOMALY_RAMP_COLORS.slice(6, 11),
  ];
  return colors.map((color, i) => ({
    color: withOpacity(color, LEGEND_FILL_OPACITY),
    from: (i - 5) * stepSize,
    to: (i - 4) * stepSize,
  }));
}

const WBGT_UTCI_STEPS: Record<
  'wbgt' | 'utci',
  Record<TemperatureUnit, readonly HeatIndexStep[]>
> = {
  wbgt: { celsius: WBGT_STEPS_CELSIUS, fahrenheit: WBGT_STEPS_FAHRENHEIT },
  utci: { celsius: UTCI_STEPS_CELSIUS, fahrenheit: UTCI_STEPS_FAHRENHEIT },
};

const UNIT_PAIRED_TITLES: Record<
  UnitPairedDataset,
  (suffix: string) => string
> = {
  anomaly: (suffix) => `Temperature anomaly (${suffix})`,
  wbgt: (suffix) => `Outdoor heat stress (WBGT, ${suffix})`,
  utci: (suffix) => `Thermal stress (UTCI, ${suffix})`,
};

// Short, always-visible description shown under the legend title.
const SUBTITLES: Record<LegendDataset, string> = {
  anomaly: 'Difference from the 1961-1990 historic norm',
  wbgt: 'Wet Bulb Globe Temperature max, banded by outdoor heat-stress risk',
  utci: 'Universal Thermal Climate Index max, banded by thermal-stress risk',
  'weighted-anomaly':
    'Weighted anomaly score against the p10/p90 percentile climatology',
  'anomaly-streaks':
    'Length of ongoing multi-day extreme-anomaly streaks, per cell',
};

// Same explanation for every dataset — shown in the legend's info tooltip.
const LEGEND_INFO_TEXT =
  'Based on UTC calendar days. Forecasts using local times will vary.';

const UNITLESS_CONFIGS: Record<UnitlessDataset, LegendConfig> = {
  'weighted-anomaly': {
    title: 'Percentile exceedance score',
    subtitle: SUBTITLES['weighted-anomaly'],
    info: LEGEND_INFO_TEXT,
    mode: 'categorical',
    items: ANOMALY_SCORE_STOPS.map((stop) => ({
      color: stop.color,
      label: String(stop.value),
    })),
  },
  'anomaly-streaks': {
    title: 'Streak length (days)',
    subtitle: SUBTITLES['anomaly-streaks'],
    info: LEGEND_INFO_TEXT,
    mode: 'categorical',
    items: STREAK_STOPS.map((stop) => ({
      color: stop.color,
      label: String(stop.value),
    })),
  },
};

function isUnitPaired(dataset: LegendDataset): dataset is UnitPairedDataset {
  return dataset === 'anomaly' || dataset === 'wbgt' || dataset === 'utci';
}

export function getLegendConfig(
  dataset: LegendDataset,
  unit: TemperatureUnit
): LegendConfig {
  if (!isUnitPaired(dataset)) return UNITLESS_CONFIGS[dataset];
  const items =
    dataset === 'anomaly' ?
      anomalyItems(unit === 'celsius' ? 1 : 2)
    : stepsToItems(WBGT_UTCI_STEPS[dataset][unit]);
  return {
    title: UNIT_PAIRED_TITLES[dataset](temperatureUnitSuffix(unit)),
    subtitle: SUBTITLES[dataset],
    info: LEGEND_INFO_TEXT,
    mode: 'threshold',
    items,
  };
}

/**
 * Format a rendered contour polygon's `floor` value (the value a
 * `TileMapCallout` reads via `queryRenderedFeatures`) for display, in the
 * units already baked into the active source-layer — no conversion needed.
 */
export function formatCalloutValue(
  dataset: LegendDataset,
  value: number,
  unit: TemperatureUnit
): string {
  const suffix = temperatureUnitSuffix(unit);
  switch (dataset) {
    case 'anomaly':
      return `${value === 0 ? '+' : deltaSign(value)}${Math.abs(value).toFixed(1)}${suffix}`;
    case 'wbgt':
    case 'utci':
      return `${Math.round(value)}${suffix}`;
    case 'weighted-anomaly':
      return value.toFixed(1);
    case 'anomaly-streaks':
      return `${Math.round(value)} days`;
  }
}

/**
 * Convert a raw `floor` value (see `formatCalloutValue`) from one unit's
 * source-layer to the other, so a stale reading can be shown converted while
 * the real value re-renders after a unit toggle, instead of momentarily
 * showing the old unit's number. Unitless datasets pass through unchanged.
 */
export function convertCalloutValue(
  dataset: LegendDataset,
  value: number,
  fromUnit: TemperatureUnit,
  toUnit: TemperatureUnit
): number {
  if (!isUnitPaired(dataset) || fromUnit === toUnit) return value;
  const isDelta = dataset === 'anomaly';
  const celsius =
    fromUnit === 'celsius' ? value
    : isDelta ? (value * 5) / 9
    : ((value - 32) * 5) / 9;
  return (
    toUnit === 'celsius' ? celsius
    : isDelta ? deltaToFahrenheit(celsius)
    : celsiusToFahrenheit(celsius)
  );
}
