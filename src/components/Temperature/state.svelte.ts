/**
 * Reactive temperature-unit state (Svelte 5 runes).
 *
 * A small class store — usable as a shared singleton or provided through
 * context — that any component can read reactively. It seeds itself from the
 * `<html>` attribute the pre-paint bootstrap set (so the first client render is
 * already correct), then persists + broadcasts changes so every consumer,
 * including non-Svelte/cross-bundle code listening on the window event, stays
 * in sync.
 */
import { getContext, hasContext, setContext } from 'svelte';
import { resolveConfig, type UnitConfig } from './config';
import { browserDefaultUnit } from './detect';
import { readUnitAttribute, writeUnitAttribute } from './attribute';
import { readStoredUnit, writeStoredUnit } from './storage';
import {
  convertDelta,
  convertTemperature,
  isTemperatureUnit,
  otherUnit,
  unitSuffix,
  type TemperatureUnit,
} from './units';

/** Construction options: any {@link UnitConfig} field plus an explicit seed. */
export type UnitStateOptions = Partial<UnitConfig> & {
  /** Force the initial unit (e.g. an explicit SSR value). */
  initial?: TemperatureUnit;
};

export class TemperatureUnitState {
  /** The active unit. Reactive — reading it in markup/`$derived` auto-updates. */
  current = $state<TemperatureUnit>('celsius');
  /** Resolved configuration (names/knobs). */
  readonly config: UnitConfig;

  constructor(options: UnitStateOptions = {}) {
    const { initial, ...overrides } = options;
    this.config = resolveConfig(overrides);

    if (initial && isTemperatureUnit(initial)) {
      this.current = initial;
    } else if (typeof document !== 'undefined') {
      // Prefer the value the pre-paint bootstrap already resolved (attribute),
      // then a persisted choice, then fresh locale/zone detection.
      this.current =
        readUnitAttribute(this.config.attribute) ??
        readStoredUnit(this.config.storageKey) ??
        browserDefaultUnit();
    } else {
      this.current = this.config.fallback;
    }

    if (typeof window !== 'undefined') {
      window.addEventListener(this.config.eventName, this.#onExternalChange);
    }
  }

  // Keep the window in sync when *another* source dispatches the event (e.g. a
  // second toggle instance, or a cross-bundle script).
  #onExternalChange = (event: Event) => {
    const unit = (event as CustomEvent).detail?.unit;
    if (isTemperatureUnit(unit) && unit !== this.current) {
      this.current = unit;
    }
  };

  /** Set the unit explicitly: persist, update the attribute, notify others. */
  set(unit: TemperatureUnit): void {
    if (!isTemperatureUnit(unit) || unit === this.current) {
      if (isTemperatureUnit(unit)) this.current = unit;
      return;
    }
    this.current = unit;
    writeUnitAttribute(unit, this.config.attribute);
    writeStoredUnit(unit, { storageKey: this.config.storageKey });
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent(this.config.eventName, { detail: { unit } })
      );
    }
  }

  /** Flip to the other unit and persist. */
  toggle(): void {
    this.set(otherUnit(this.current));
  }

  /** Remove the window listener (teardown for tests/short-lived hosts). */
  destroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener(this.config.eventName, this.#onExternalChange);
    }
  }

  // --- Convenience accessors -------------------------------------------------

  /** Degree suffix for the active unit, e.g. `°F`. */
  get suffix(): string {
    return unitSuffix(this.current);
  }

  /** Convert an absolute Celsius value to the active unit. */
  toDisplay(celsius: number): number {
    return convertTemperature(celsius, this.current);
  }

  /** Convert a Celsius delta (anomaly) to the active unit. */
  toDisplayDelta(celsius: number): number {
    return convertDelta(celsius, this.current);
  }
}

const CONTEXT_KEY = Symbol('temperature-unit-state');

/** Provide a state instance to descendants via Svelte context. */
export function setUnitContext(
  state: TemperatureUnitState
): TemperatureUnitState {
  setContext(CONTEXT_KEY, state);
  return state;
}

/**
 * Read the nearest provided state, falling back to the shared default singleton
 * when no provider is present (so the components work with zero setup).
 */
export function getUnitContext(): TemperatureUnitState {
  return hasContext(CONTEXT_KEY) ?
      getContext<TemperatureUnitState>(CONTEXT_KEY)
    : defaultUnitState;
}

/** Shared, app-wide state used when no context provider is set. */
export const defaultUnitState = new TemperatureUnitState();
