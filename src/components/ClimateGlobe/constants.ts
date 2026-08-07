/**
 * Shared constants and utilities used across the map and data services.
 *
 * Centralizes values that were previously duplicated in multiple files:
 * grid dimensions, date formatting, PMTiles URL construction, and the
 * TemperatureUnit type. Imported by both the map and data services.
 */

/** Display unit for temperature anomalies. */
export type TemperatureUnit = 'celsius' | 'fahrenheit';

/**
 * Fallback temperature unit for SSR/prerender and the no-JS case.
 *
 * The real first-load default is chosen at runtime by the inline bootstrap in
 * `template.html`: an explicit stored preference wins, otherwise a locale-aware
 * default (Celsius for the world, Fahrenheit for the few countries that use
 * it). This constant is only the floor used before that script has run or when
 * `window.getTemperatureUnit` is unavailable.
 */
export const DEFAULT_UNIT: TemperatureUnit = 'fahrenheit';

/** Callout marker geometry constants (shared by Callout, HotspotOverlay, Map). */
export const CALLOUT_LINE_H = 14;
export const CALLOUT_LINE_OFFSET = 14;
export const CALLOUT_DOT_R = 3;

/**
 * Convert an absolute temperature from Celsius to Fahrenheit.
 *
 * @param celsius - Temperature in degrees Celsius
 * @returns Temperature in degrees Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

/**
 * Convert a temperature delta (anomaly) from Celsius to Fahrenheit.
 *
 * Unlike absolute temperature conversion, deltas are scaled only — no +32 offset.
 *
 * @param celsius - Delta in degrees Celsius
 * @returns Delta in degrees Fahrenheit
 */
export function deltaToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5;
}

/**
 * Return the degree symbol and unit abbreviation for the given temperature unit.
 *
 * @param unit - 'celsius' or 'fahrenheit'
 * @returns '°C' or '°F'
 */
export function temperatureUnitSuffix(unit: TemperatureUnit): string {
  return unit === 'fahrenheit' ? '°F' : '°C';
}

/**
 * Format an absolute temperature for UI display in the selected unit.
 *
 * Celsius values are rounded to 0 decimals; Fahrenheit values are converted
 * and rounded to the nearest whole degree.
 */
export function formatDisplayTemperature(
  celsius: number,
  unit: TemperatureUnit
): string {
  if (unit === 'fahrenheit')
    return Math.round(celsiusToFahrenheit(celsius)).toString();
  return celsius.toFixed(0);
}

/** Return '+', '-', or '' for a temperature delta value. */
export function deltaSign(delta: number): string {
  if (delta > 0) return '+';
  if (delta < 0) return '-';
  return '';
}

/** Return 'Above', 'Below', or 'At' for a temperature delta value. */
export function deltaLabel(delta: number): string {
  if (delta > 0) return 'Above';
  if (delta < 0) return 'Below';
  return 'At';
}

/**
 * Format a temperature delta magnitude for UI display in the selected unit.
 */
export function formatDisplayDeltaMagnitude(
  celsiusDelta: number,
  unit: TemperatureUnit
): string {
  const value =
    unit === 'fahrenheit' ? deltaToFahrenheit(celsiusDelta) : celsiusDelta;
  return Math.abs(value).toFixed(1);
}

/**
 * Format a signed temperature delta for UI display in the selected unit.
 */
export function formatDisplayDeltaSigned(
  celsiusDelta: number,
  unit: TemperatureUnit
): string {
  return `${deltaSign(celsiusDelta)}${formatDisplayDeltaMagnitude(celsiusDelta, unit)}`;
}

/**
 * Format a signed temperature delta with its unit suffix for UI display
 * (e.g. "+3.6°C" or "-5.4°F"). Use this wherever a delta label needs to be
 * unambiguous when shown without surrounding context (chart annotations,
 * summary prose, embeds).
 */
export function formatDisplayDeltaLabeled(
  celsiusDelta: number,
  unit: TemperatureUnit
): string {
  return `${formatDisplayDeltaSigned(celsiusDelta, unit)}${temperatureUnitSuffix(unit)}`;
}

/** AP-style abbreviated month names. */
export const AP_MONTHS = [
  'Jan.',
  'Feb.',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.',
];

/** Width/height of a single climate data grid cell in degrees. */
export const GRID_SIZE = 0.25;

/** Half grid size — used to convert between centroids and cell corners. */
export const HALF_GRID = GRID_SIZE / 2;

/** Root URL for daily PMTiles climate anomaly files hosted on Thomson Reuters CDN. */
const PMTILES_BASE_URL =
  'https://graphics.thomsonreuters.com/newsapps_reuters-climate-monitor/daily-anomalies-map/hres';

/**
 * Format a Date object as a YYYY-MM-DD string.
 *
 * @param date - The Date to format
 * @returns ISO date string (e.g. '2026-04-01')
 */
export function formatDateString(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Build the URL for the contours-only PMTiles file (map rendering).
 *
 * @param date - Date string in YYYY-MM-DD format (defaults to today)
 * @param field - Product contour field: `t2m_max_delta` (daily highs, the
 *   default) or `t2m_min_delta` (daily lows). Both are published side by side
 *   in the same per-date directory.
 * @returns Absolute URL to the contours PMTiles file on the CDN
 */
export function buildContourPMTilesUrl(
  date: string = formatDateString(new Date()),
  field: 't2m_max_delta' | 't2m_min_delta' = 't2m_max_delta'
): string {
  return `${PMTILES_BASE_URL}/${date}/${field}_contours.pmtiles`;
}

export function buildDataPMTilesUrl(
  date: string = formatDateString(new Date())
): string {
  return `${PMTILES_BASE_URL}/${date}/t2m_max_delta_data.pmtiles`;
}

/**
 * Data source for the heat-index (WBGT) maps.
 *
 * `era5` is the observed ERA5 reanalysis record; `hres` is the ECMWF HRES
 * forecast. The two are published side by side under separate CDN path
 * segments and never overwrite each other.
 */
export type HeatIndexSource = 'era5' | 'hres';

/** Default heat-index source when none is specified (observed reanalysis). */
export const DEFAULT_HEAT_INDEX_SOURCE: HeatIndexSource = 'era5';

/**
 * Root URL for daily heat-index (WBGT) PMTiles files hosted on the Thomson
 * Reuters CDN, keyed by data source. Each source — `era5` (reanalysis) and
 * `hres` (forecast) — is published under its own path segment as per-field
 * contour files plus one shared data file across the whole family.
 *
 * @param source - Heat-index data source ('era5' or 'hres')
 * @returns Root CDN URL for that source's heat-index maps
 */
function heatIndicesBaseUrl(source: HeatIndexSource): string {
  return `https://graphics.thomsonreuters.com/newsapps_reuters-climate-monitor/daily-heat-indices-map/${source}`;
}

/**
 * Build the URL for the WBGT contours PMTiles file (map rendering).
 *
 * One builder per rendered heat index. Source-layers in this file are
 * `wbgt_max` (°C) and `wbgt_max_fahrenheit` (°F).
 *
 * @param date - Date string in YYYY-MM-DD format (defaults to today)
 * @param source - Heat-index data source ('era5' or 'hres')
 * @returns Absolute URL to the WBGT contours PMTiles file on the CDN
 */
export function buildWbgtContourPMTilesUrl(
  date: string = formatDateString(new Date()),
  source: HeatIndexSource = DEFAULT_HEAT_INDEX_SOURCE
): string {
  return `${heatIndicesBaseUrl(source)}/${date}/wbgt_max_contours.pmtiles`;
}

/**
 * Build the URL for the UTCI contours PMTiles file (map rendering).
 *
 * One builder per rendered heat index. Source-layers in this file are
 * `utci_max` (°C) and `utci_max_fahrenheit` (°F).
 *
 * @param date - Date string in YYYY-MM-DD format (defaults to today)
 * @param source - Heat-index data source ('era5' or 'hres')
 * @returns Absolute URL to the UTCI contours PMTiles file on the CDN
 */
export function buildUtciContourPMTilesUrl(
  date: string = formatDateString(new Date()),
  source: HeatIndexSource = DEFAULT_HEAT_INDEX_SOURCE
): string {
  return `${heatIndicesBaseUrl(source)}/${date}/utci_max_contours.pmtiles`;
}

/**
 * Build the URL for the shared heat-indices data PMTiles file (click queries).
 *
 * A single data file carries every heat-index field (source-layer `data`), so
 * this one builder is reused by every index's query.
 *
 * @param date - Date string in YYYY-MM-DD format (defaults to today)
 * @param source - Heat-index data source ('era5' or 'hres')
 * @returns Absolute URL to the shared heat-indices data PMTiles file on the CDN
 */
export function buildHeatIndicesDataPMTilesUrl(
  date: string = formatDateString(new Date()),
  source: HeatIndexSource = DEFAULT_HEAT_INDEX_SOURCE
): string {
  return `${heatIndicesBaseUrl(source)}/${date}/heat_indices_data.pmtiles`;
}

/**
 * Anomaly monitoring-map statistics ported from the internal review site.
 *
 * Each family is published per date to the same Thomson Reuters CDN as the
 * public maps; only the `?debug=true` embed references them. Anomaly families
 * (daily, weighted) carry contour + `data` point layers; streak/storm families
 * are contour-only.
 */
export type AnomalyStatistic =
  | 'daily-anomalies-map'
  | 'weighted-anomalies-map'
  | 'anomaly-streaks-map';

/** Data source for the anomaly monitoring maps (ERA5 reanalysis or HRES forecast). */
export type ClimateDataSource = 'era5' | 'hres';

/** Default source for the anomaly monitoring maps (observed reanalysis). */
export const DEFAULT_ANOMALY_SOURCE: ClimateDataSource = 'era5';

/** Root URL shared by every anomaly monitoring-map family. */
const ANOMALY_MAPS_BASE_URL =
  'https://graphics.thomsonreuters.com/newsapps_reuters-climate-monitor';

/**
 * Build the URL for an anomaly PMTiles file (daily or weighted).
 *
 * A single file carries both the contour source-layers — `{variable}` (°C) and,
 * for `_delta` variables, `{variable}_fahrenheit` (°F) — and a `data` point
 * layer at grid centroids (queried at zoom 8 by httpQuery.ts).
 *
 * @param statistic - 'daily-anomalies-map' or 'weighted-anomalies-map'
 * @param variable - e.g. 't2m_max_delta', 't2m_max_p90_score'
 * @param date - YYYY-MM-DD (defaults to today)
 * @param source - 'era5' (default) or 'hres'
 */
export function buildAnomalyPMTilesUrl(
  statistic: 'daily-anomalies-map' | 'weighted-anomalies-map',
  variable: string,
  date: string = formatDateString(new Date()),
  source: ClimateDataSource = DEFAULT_ANOMALY_SOURCE
): string {
  return `${ANOMALY_MAPS_BASE_URL}/${statistic}/${source}/${date}/${variable}.pmtiles`;
}

/**
 * Build the URL for a streak-map PMTiles file.
 *
 * Path shape `{statistic}/{source}/{field}/{direction}/{date}.pmtiles`, and
 * carries polygon geometry only (source-layer `{field}`) — no `data` point
 * layer.
 *
 * @param statistic - 'anomaly-streaks-map'
 * @param field - e.g. 't2m_max'
 * @param direction - 'positive' or 'negative'
 * @param date - YYYY-MM-DD (defaults to today)
 * @param source - 'era5' (default) or 'hres'
 */
export function buildFieldDirectionPMTilesUrl(
  statistic: 'anomaly-streaks-map',
  field: string,
  direction: 'positive' | 'negative',
  date: string = formatDateString(new Date()),
  source: ClimateDataSource = DEFAULT_ANOMALY_SOURCE
): string {
  return `${ANOMALY_MAPS_BASE_URL}/${statistic}/${source}/${field}/${direction}/${date}.pmtiles`;
}
