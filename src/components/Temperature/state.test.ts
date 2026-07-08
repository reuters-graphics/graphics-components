import { afterEach, describe, expect, it, vi } from 'vitest';
import { TemperatureUnitState } from './state.svelte';

function stubLocalStorage(initial: Record<string, string> = {}) {
  const store: Record<string, string> = { ...initial };
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => (k in store ? store[k] : null),
    setItem: (k: string, v: string) => {
      store[k] = String(v);
    },
    removeItem: (k: string) => {
      delete store[k];
    },
  });
  return store;
}

/** Minimal `window`/`document` stand-ins (no jsdom dependency needed). */
function stubDom() {
  const attributes: Record<string, string> = {};
  const documentElement = {
    getAttribute: (name: string) =>
      Object.prototype.hasOwnProperty.call(attributes, name) ?
        attributes[name]
      : null,
    setAttribute: (name: string, value: string) => {
      attributes[name] = value;
    },
  };
  vi.stubGlobal('document', { documentElement });
  // A real EventTarget gives us working addEventListener/dispatchEvent
  // semantics for the shared `temperature-unit-changed` window event.
  vi.stubGlobal('window', new EventTarget());
  return { attributes };
}

afterEach(() => vi.unstubAllGlobals());

describe('TemperatureUnitState external change handling', () => {
  it('mirrors an externally-dispatched event into the attribute + storage', () => {
    const store = stubLocalStorage();
    const { attributes } = stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });

    // Simulate a *different* source (e.g. a second toggle instance, or
    // cross-bundle code) dispatching the shared event directly, without going
    // through `state.set()`.
    window.dispatchEvent(
      new CustomEvent('temperature-unit-changed', {
        detail: { unit: 'fahrenheit' },
      })
    );

    expect(state.current).toBe('fahrenheit');
    expect(attributes['data-temp-unit']).toBe('fahrenheit');
    expect(store['temperature-unit']).toBe('fahrenheit');

    state.destroy();
  });

  it('ignores invalid or redundant external events', () => {
    stubLocalStorage();
    const { attributes } = stubDom();

    const state = new TemperatureUnitState({ initial: 'celsius' });

    window.dispatchEvent(
      new CustomEvent('temperature-unit-changed', {
        detail: { unit: 'kelvin' },
      })
    );
    expect(state.current).toBe('celsius');

    window.dispatchEvent(
      new CustomEvent('temperature-unit-changed', {
        detail: { unit: 'celsius' },
      })
    );
    expect(state.current).toBe('celsius');
    // No-op for the same unit: the attribute should not have been forced.
    expect(attributes['data-temp-unit']).toBeUndefined();

    state.destroy();
  });
});

describe('TemperatureUnitState multi-instance sync', () => {
  it('state.set() on one instance is reflected by every other live instance', () => {
    const store = stubLocalStorage();
    const { attributes } = stubDom();

    // Two independent instances, as if two components each provided their
    // own state via context instead of sharing the default singleton.
    const a = new TemperatureUnitState({ initial: 'celsius' });
    const b = new TemperatureUnitState({ initial: 'celsius' });

    a.set('fahrenheit');

    expect(a.current).toBe('fahrenheit');
    expect(b.current).toBe('fahrenheit');
    expect(attributes['data-temp-unit']).toBe('fahrenheit');
    expect(store['temperature-unit']).toBe('fahrenheit');

    a.destroy();
    b.destroy();
  });

  it('a window.setTemperatureUnit()-style bridge call syncs every live instance', () => {
    const store = stubLocalStorage();
    const { attributes } = stubDom();

    // Mirrors the bridge function the pre-paint bootstrap installs on
    // `window` for non-Svelte/cross-bundle callers (see bootstrap.ts).
    const bridgeWindow = window as unknown as {
      setTemperatureUnit: (unit: string) => void;
    };
    bridgeWindow.setTemperatureUnit = (unit: string) => {
      if (unit !== 'celsius' && unit !== 'fahrenheit') return;
      window.dispatchEvent(
        new CustomEvent('temperature-unit-changed', { detail: { unit } })
      );
    };

    const a = new TemperatureUnitState({ initial: 'celsius' });
    const b = new TemperatureUnitState({ initial: 'celsius' });

    bridgeWindow.setTemperatureUnit('fahrenheit');

    expect(a.current).toBe('fahrenheit');
    expect(b.current).toBe('fahrenheit');
    expect(attributes['data-temp-unit']).toBe('fahrenheit');
    expect(store['temperature-unit']).toBe('fahrenheit');

    a.destroy();
    b.destroy();
  });

  it('a raw shared event dispatch syncs every live instance', () => {
    const store = stubLocalStorage();
    const { attributes } = stubDom();

    const a = new TemperatureUnitState({ initial: 'celsius' });
    const b = new TemperatureUnitState({ initial: 'celsius' });

    // No `set()`/bridge involved at all — just the raw window event, as a
    // cross-bundle emitter with no bootstrap script installed might dispatch.
    window.dispatchEvent(
      new CustomEvent('temperature-unit-changed', {
        detail: { unit: 'fahrenheit' },
      })
    );

    expect(a.current).toBe('fahrenheit');
    expect(b.current).toBe('fahrenheit');
    expect(attributes['data-temp-unit']).toBe('fahrenheit');
    expect(store['temperature-unit']).toBe('fahrenheit');

    a.destroy();
    b.destroy();
  });
});
