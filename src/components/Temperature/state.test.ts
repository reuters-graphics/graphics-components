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
