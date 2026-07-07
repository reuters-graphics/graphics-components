/**
 * Pre-paint bootstrap script.
 *
 * On a statically-rendered site there is no request-time server to read a
 * preference, so the only way to render the correct unit with no flash is a
 * blocking `<script>` in the document head that runs before first paint. This
 * module builds that script as a self-contained string a host can drop into its
 * app template (SvelteKit `app.html`, an Astro layout `<head>`, plain HTML, …).
 *
 * The script, in order: resolves the unit (localStorage → locale/zone →
 * fallback), sets the `<html>` attribute components render against, exposes a
 * tiny `window.getTemperatureUnit()/setTemperatureUnit()` bridge for non-Svelte
 * or cross-bundle code, and listens for the change event to persist + re-sync.
 *
 * The locale logic here mirrors {@link ./detect.ts}; the two are kept in sync by
 * `bootstrap.test.ts`, which executes this exact string in a sandbox and asserts
 * it matches `resolveDefaultUnit`.
 */
import { resolveConfig, type UnitConfig } from './config';
import { FAHRENHEIT_REGIONS } from './detect';

/** Options for {@link buildBootstrapScript}. */
export type BootstrapOptions = Partial<UnitConfig> & {
  /**
   * Regions (ISO 3166-1 alpha-2) that default to Fahrenheit, embedded into the
   * script. Defaults to the toolkit's {@link FAHRENHEIT_REGIONS} so the country
   * list has a single source of truth shared with `resolveDefaultUnit`.
   */
  fahrenheitRegions?: Iterable<string>;
};

/**
 * Build the pre-paint bootstrap `<script>` body (no `<script>` tags) for the
 * given configuration.
 */
export function buildBootstrapScript(overrides: BootstrapOptions = {}): string {
  const { fahrenheitRegions, ...configOverrides } = overrides;
  const c: UnitConfig = resolveConfig(configOverrides);
  const s = (value: string) => JSON.stringify(value);
  // Single source of truth: the country list comes from FAHRENHEIT_REGIONS
  // (shared with resolveDefaultUnit) unless the caller overrides it.
  const regions = [...(fahrenheitRegions ?? FAHRENHEIT_REGIONS)];
  const fahrenheitObject = `{ ${regions.map((r) => `${s(r)}: 1`).join(', ')} }`;

  return `(function () {
  var STORAGE_KEY = ${s(c.storageKey)};
  var ATTR = ${s(c.attribute)};
  var EVENT = ${s(c.eventName)};
  var FALLBACK = ${s(c.fallback)};
  var FAHRENHEIT = ${fahrenheitObject};
  function valid(u) { return u === 'celsius' || u === 'fahrenheit'; }
  function regionOf(loc) {
    if (!loc) return '';
    try { var r = new Intl.Locale(loc).region; if (r) return r.toUpperCase(); } catch (e) {}
    var m = /[-_]([A-Za-z]{2})(?:[-_]|$)/.exec(loc);
    return m ? m[1].toUpperCase() : '';
  }
  function usesFahrenheitByZone() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      return /^America\\/(New_York|Detroit|Kentucky|Indiana|Chicago|Menominee|North_Dakota|Denver|Boise|Phoenix|Los_Angeles|Anchorage|Juneau|Sitka|Nome|Yakutat|Metlakatla|Adak)/.test(tz) || tz === 'Pacific/Honolulu';
    } catch (e) { return false; }
  }
  function localeDefault() {
    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : (navigator.language ? [navigator.language] : []);
    for (var i = 0; i < langs.length; i++) {
      var rg = regionOf(langs[i]);
      if (rg) return FAHRENHEIT[rg] ? 'fahrenheit' : 'celsius';
    }
    return usesFahrenheitByZone() ? 'fahrenheit' : 'celsius';
  }
  function fromStorage() { try { var v = localStorage.getItem(STORAGE_KEY); return valid(v) ? v : null; } catch (e) { return null; } }
  function persist(u) {
    try { localStorage.setItem(STORAGE_KEY, u); } catch (e) {}
  }
  var unit = fromStorage() || localeDefault() || FALLBACK;
  try { document.documentElement.setAttribute(ATTR, unit); } catch (e) {}
  window.__temperatureUnit = unit;
  if (!window.getTemperatureUnit) {
    window.getTemperatureUnit = function () { return window.__temperatureUnit; };
  }
  if (!window.setTemperatureUnit) {
    window.setTemperatureUnit = function (u) {
      if (!valid(u)) return;
      window.dispatchEvent(new CustomEvent(EVENT, { detail: { unit: u } }));
    };
  }
  window.addEventListener(EVENT, function (e) {
    var u = e && e.detail && e.detail.unit;
    if (!valid(u)) return;
    window.__temperatureUnit = u;
    try { document.documentElement.setAttribute(ATTR, u); } catch (e2) {}
    persist(u);
  });
})();`;
}

/** The default bootstrap script (product-neutral config). */
export const TEMPERATURE_UNIT_BOOTSTRAP = buildBootstrapScript();
