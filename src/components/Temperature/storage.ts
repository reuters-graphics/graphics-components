/**
 * Persistence for the explicit unit choice.
 *
 * The preference is stored in localStorage only — a first-party, functional
 * value ('celsius'/'fahrenheit') written solely when the reader toggles the
 * unit. No cookie is set.
 *
 * All functions are SSR-safe and swallow storage exceptions (Safari private
 * mode, disabled storage, etc.) so a persistence failure can never break render.
 */
import { DEFAULT_CONFIG } from './config';
import { isTemperatureUnit, type TemperatureUnit } from './units';

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

/** Persist an explicit choice to localStorage. */
export function writeStoredUnit(
  unit: TemperatureUnit,
  { storageKey = DEFAULT_CONFIG.storageKey }: { storageKey?: string } = {}
): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(storageKey, unit);
  } catch {
    // Ignore — persistence is best-effort.
  }
}
