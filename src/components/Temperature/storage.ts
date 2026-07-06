/**
 * Persistence for the explicit unit choice.
 *
 * Writes both a localStorage entry and a cookie. localStorage is the primary
 * store; the cookie is a same-value mirror so a server-rendered host (non-static
 * adapters) can read the preference at request time and render the right unit
 * with no flash. On a static build the cookie is harmless.
 *
 * All functions are SSR-safe and swallow storage exceptions (Safari private
 * mode, disabled cookies, etc.) so a persistence failure can never break render.
 */
import { DEFAULT_CONFIG } from './config';
import { isTemperatureUnit, type TemperatureUnit } from './units';

/** How long the cookie mirror lives (1 year). */
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Read the persisted preference from localStorage, or null if unset/invalid. */
export function readStoredUnit(
  storageKey: string = DEFAULT_CONFIG.storageKey
): TemperatureUnit | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const value = localStorage.getItem(storageKey);
    return isTemperatureUnit(value) ? value : null;
  } catch {
    return null;
  }
}

/** Read the preference from the cookie mirror, or null if unset/invalid. */
export function readCookieUnit(
  cookieName: string = DEFAULT_CONFIG.cookieName
): TemperatureUnit | null {
  if (typeof document === 'undefined') return null;
  // Split/trim rather than a RegExp built from cookieName, which is configurable
  // and could contain regex metacharacters.
  for (const pair of document.cookie.split(';')) {
    const eq = pair.indexOf('=');
    if (eq === -1) continue;
    if (pair.slice(0, eq).trim() !== cookieName) continue;
    const value = decodeURIComponent(pair.slice(eq + 1).trim());
    return isTemperatureUnit(value) ? value : null;
  }
  return null;
}

/** Persist an explicit choice to both localStorage and the cookie mirror. */
export function writeStoredUnit(
  unit: TemperatureUnit,
  {
    storageKey = DEFAULT_CONFIG.storageKey,
    cookieName = DEFAULT_CONFIG.cookieName,
  }: { storageKey?: string; cookieName?: string } = {}
): void {
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(storageKey, unit);
    } catch {
      // Ignore — persistence is best-effort.
    }
  }
  if (typeof document !== 'undefined') {
    try {
      // Intentional synchronous cookie mirror: the async CookieStore API isn't
      // universally available and this must run before first paint.
      document.cookie = `${cookieName}=${unit}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    } catch {
      // Ignore.
    }
  }
}
