/**
 * Coercion helpers for the Geocoder's request-throttling props.
 *
 * These props can arrive as strings when set via markup (e.g.
 * `minLength="two"`), so a non-numeric value must not be trusted directly: a
 * `NaN` would disable the length gate or the debounce and bill a Mapbox request
 * on every keystroke. Both helpers fall back to the documented defaults and
 * clamp to sane floors.
 */

/**
 * Coerce a consumer-supplied `minLength` to a safe integer of at least 1.
 * Invalid or sub-1 values fall back to `fallback` (default 2).
 */
export function normalizeMinLength(value: unknown, fallback = 2): number {
  const n = Number(value);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : fallback;
}

/**
 * Coerce a consumer-supplied `debounceMs` to a finite, non-negative number.
 * Invalid or negative values fall back to `fallback` (default 300).
 */
export function normalizeDebounceMs(value: unknown, fallback = 300): number {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}
