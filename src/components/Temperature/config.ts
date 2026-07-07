/**
 * Shared configuration for the temperature-unit toolkit.
 *
 * Every customizable name (storage key, the `<html>` attribute and the DOM
 * event) lives here with a sensible, product-neutral default. Consuming apps
 * can override them once via {@link resolveConfig} so the pre-paint bootstrap,
 * the reactive state and the components all agree.
 */
import type { TemperatureUnit } from './units';

/** Names/knobs shared across the toolkit. */
export interface UnitConfig {
  /** localStorage key for the persisted, explicit preference. */
  storageKey: string;
  /** `<html>` attribute the pre-paint script sets, e.g. `data-temp-unit`. */
  attribute: string;
  /** Window event dispatched when the unit changes. */
  eventName: string;
  /** Unit used before detection can run (SSR/no-JS floor). */
  fallback: TemperatureUnit;
}

/** Product-neutral defaults. */
export const DEFAULT_CONFIG: UnitConfig = {
  storageKey: 'temperature-unit',
  attribute: 'data-temp-unit',
  eventName: 'temperature-unit-changed',
  fallback: 'celsius',
};

/** Merge a partial override with the defaults. */
export function resolveConfig(overrides: Partial<UnitConfig> = {}): UnitConfig {
  return { ...DEFAULT_CONFIG, ...overrides };
}
