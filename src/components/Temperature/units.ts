/**
 * Temperature units + pure conversion/formatting helpers.
 *
 * Framework-agnostic and product-agnostic — nothing here knows about any
 * particular story, Reuters, or Svelte. This is the foundation the rest of the
 * toolkit (detection, storage, the reactive state and the components) builds on.
 */

/** A temperature display unit. */
export type TemperatureUnit = 'celsius' | 'fahrenheit';

/** The known units, in a stable order (Celsius first). */
export const TEMPERATURE_UNITS = ['celsius', 'fahrenheit'] as const;

/** Narrowing type guard for untrusted input (events, storage, attributes). */
export function isTemperatureUnit(value: unknown): value is TemperatureUnit {
  return value === 'celsius' || value === 'fahrenheit';
}

/** The "other" unit — handy for toggles. */
export function otherUnit(unit: TemperatureUnit): TemperatureUnit {
  return unit === 'celsius' ? 'fahrenheit' : 'celsius';
}

/**
 * Convert an absolute temperature in Celsius to the target unit.
 *
 * @param celsius - Temperature in degrees Celsius.
 * @param unit - Target display unit.
 */
export function convertTemperature(
  celsius: number,
  unit: TemperatureUnit
): number {
  return unit === 'fahrenheit' ? (celsius * 9) / 5 + 32 : celsius;
}

/**
 * Convert a temperature *delta* (a difference/anomaly) in Celsius to the target
 * unit. Deltas scale by 9/5 only — no +32 offset.
 */
export function convertDelta(celsius: number, unit: TemperatureUnit): number {
  return unit === 'fahrenheit' ? (celsius * 9) / 5 : celsius;
}

/** Options for the string formatters. */
export interface FormatOptions {
  /** Decimal places (default 0). */
  digits?: number;
  /** Append the degree suffix (default true). */
  suffix?: boolean;
  /** Include the degree ring in the suffix (default true → `°F`, else `F`). */
  degree?: boolean;
}

/** The degree suffix for a unit, e.g. `°F` (or `F` with `degree: false`). */
export function unitSuffix(
  unit: TemperatureUnit,
  { degree = true }: Pick<FormatOptions, 'degree'> = {}
): string {
  const letter = unit === 'fahrenheit' ? 'F' : 'C';
  return degree ? `°${letter}` : letter;
}

/** Format an absolute temperature: convert, round, and (optionally) suffix. */
export function formatTemperature(
  celsius: number,
  unit: TemperatureUnit,
  { digits = 0, suffix = true, degree = true }: FormatOptions = {}
): string {
  const value = convertTemperature(celsius, unit).toFixed(digits);
  return suffix ? `${value}${unitSuffix(unit, { degree })}` : value;
}

/**
 * Format a temperature delta with an explicit sign (e.g. `+3°F`, `−2°C`). Uses a
 * true minus sign (U+2212) for typographic parity with the plus.
 */
export function formatDelta(
  celsius: number,
  unit: TemperatureUnit,
  { digits = 0, suffix = true, degree = true }: FormatOptions = {}
): string {
  const converted = convertDelta(celsius, unit);
  const rounded = Number(converted.toFixed(digits));
  const sign =
    rounded > 0 ? '+'
    : rounded < 0 ? '\u2212'
    : '';
  const magnitude = Math.abs(rounded).toFixed(digits);
  const body = `${sign}${magnitude}`;
  return suffix ? `${body}${unitSuffix(unit, { degree })}` : body;
}
