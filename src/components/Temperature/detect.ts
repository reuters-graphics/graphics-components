/**
 * Locale-aware default unit detection.
 *
 * Picks a sensible first-visit unit for a reader who has not made an explicit
 * choice: Fahrenheit for the handful of countries that use it, Celsius for the
 * rest of the world. Pure and dependency-free so it can be unit-tested and
 * reused; {@link browserDefaultUnit} is the thin wrapper that reads the live
 * browser globals.
 */
import type { TemperatureUnit } from './units';

/** Countries (ISO 3166-1 alpha-2) whose readers default to Fahrenheit. */
export const FAHRENHEIT_REGIONS: ReadonlySet<string> = new Set([
  'US', // United States (and its territories)
  'LR', // Liberia
  'KY', // Cayman Islands
  'BZ', // Belize
  'PW', // Palau
  'FM', // Micronesia
  'MH', // Marshall Islands
  'BS', // Bahamas
]);

/** US IANA time zones, used only when the locale carries no region. */
const US_TIME_ZONE =
  /^America\/(New_York|Detroit|Kentucky|Indiana|Chicago|Menominee|North_Dakota|Denver|Boise|Phoenix|Los_Angeles|Anchorage|Juneau|Sitka|Nome|Yakutat|Metlakatla|Adak)/;

/** Signals used to infer a default unit (mirrors the browser globals). */
export interface DefaultUnitInput {
  /** BCP-47 locale tags, most-preferred first (e.g. `navigator.languages`). */
  languages?: readonly string[];
  /** IANA time zone (e.g. `Intl.DateTimeFormat().resolvedOptions().timeZone`). */
  timeZone?: string;
  /**
   * Regions (ISO 3166-1 alpha-2) that default to Fahrenheit. Defaults to the
   * toolkit's {@link FAHRENHEIT_REGIONS}; override to customize the list.
   */
  fahrenheitRegions?: ReadonlySet<string>;
}

/** Extract the uppercased region subtag from a BCP-47 locale tag, or ''. */
function regionOf(locale: string): string {
  try {
    const region = new Intl.Locale(locale).region;
    if (region) return region.toUpperCase();
  } catch {
    // Malformed tag — fall through to the regex.
  }
  const match = /[-_]([A-Za-z]{2})(?:[-_]|$)/.exec(locale);
  return match ? match[1].toUpperCase() : '';
}

/**
 * Choose the first-load unit for a reader with no stored preference.
 *
 * Uses the first locale that carries a region: Fahrenheit if that country is in
 * {@link FAHRENHEIT_REGIONS}, otherwise Celsius. When no locale carries a region
 * (e.g. a bare `en`), falls back to the time zone (US zones → Fahrenheit), then
 * defaults to Celsius.
 */
export function resolveDefaultUnit(
  input: DefaultUnitInput = {}
): TemperatureUnit {
  const fahrenheit = input.fahrenheitRegions ?? FAHRENHEIT_REGIONS;
  for (const locale of input.languages ?? []) {
    const region = regionOf(locale);
    if (region) {
      return fahrenheit.has(region) ? 'fahrenheit' : 'celsius';
    }
  }
  if (input.timeZone) {
    if (
      US_TIME_ZONE.test(input.timeZone) ||
      input.timeZone === 'Pacific/Honolulu'
    ) {
      return 'fahrenheit';
    }
  }
  return 'celsius';
}

/** Read the locale/time-zone signals from the browser (SSR-safe). */
export function browserDefaultUnit(): TemperatureUnit {
  if (typeof navigator === 'undefined') return 'celsius';

  let timeZone: string | undefined;
  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    timeZone = undefined;
  }

  // Some webviews report an *empty* `navigator.languages` array, so fall back to
  // `navigator.language` when it has no entries (not just when it's nullish).
  const languages =
    navigator.languages && navigator.languages.length > 0 ? navigator.languages
    : navigator.language ? [navigator.language]
    : [];

  return resolveDefaultUnit({ languages, timeZone });
}
