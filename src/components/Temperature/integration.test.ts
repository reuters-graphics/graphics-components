/**
 * End-to-end integration tests proving the pre-paint bootstrap script, the
 * reactive `TemperatureUnitState`, and the DOM/localStorage they share all
 * agree — the same guarantee the toolkit's docs promise host apps.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { buildBootstrapScript } from './bootstrap';
import { TemperatureUnitState } from './state.svelte';

/** Minimal `window`/`document`/`localStorage`/`navigator`/`Intl` stand-ins. */
function stubBrowser({
  languages = ['en-US'],
  timeZone = 'America/New_York',
}: { languages?: string[]; timeZone?: string } = {}) {
  const attrs: Record<string, string> = {};
  const store: Record<string, string> = {};

  vi.stubGlobal('document', {
    documentElement: {
      getAttribute: (k: string) =>
        Object.prototype.hasOwnProperty.call(attrs, k) ? attrs[k] : null,
      setAttribute: (k: string, v: string) => {
        attrs[k] = v;
      },
    },
  });
  // A real EventTarget so the bootstrap's listener and the state's listener
  // share one event bus, exactly like a real `window` would provide.
  vi.stubGlobal('window', new EventTarget());
  vi.stubGlobal('localStorage', {
    getItem: (k: string) =>
      Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null,
    setItem: (k: string, v: string) => {
      store[k] = String(v);
    },
    removeItem: (k: string) => {
      delete store[k];
    },
  });
  vi.stubGlobal('navigator', { languages, language: languages[0] });
  vi.stubGlobal('Intl', {
    Locale: Intl.Locale,
    DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone }) }),
  });

  return { attrs, store };
}

/** Execute the real generated bootstrap script against the stubbed globals. */
function runBootstrapInGlobalScope() {
  // `Function` bodies run in the global scope, so the script's free `window` /
  // `document` / `localStorage` / `navigator` / `Intl` references resolve to
  // whatever `vi.stubGlobal` installed — the same mechanism a real `<head>`
  // `<script>` uses against the page's real globals.
  new Function(buildBootstrapScript())();
}

afterEach(() => vi.unstubAllGlobals());

describe('bootstrap -> state -> DOM integration', () => {
  it('state hydrates from the attribute + storage the bootstrap script set', () => {
    const { attrs, store } = stubBrowser({
      languages: ['en-US'],
      timeZone: 'America/New_York',
    });

    runBootstrapInGlobalScope();
    expect(attrs['data-temp-unit']).toBe('fahrenheit');

    // The state must pick up the bootstrap's resolved unit on construction —
    // this is what makes the very first client render flash-free.
    const state = new TemperatureUnitState();
    expect(state.current).toBe('fahrenheit');

    // Toggling through the state must, in turn, keep the attribute + storage
    // (and thus anything else reading them) in sync.
    state.toggle();
    expect(state.current).toBe('celsius');
    expect(attrs['data-temp-unit']).toBe('celsius');
    expect(store['temperature-unit']).toBe('celsius');

    state.destroy();
  });

  it('state hydrates from a stored preference the bootstrap already honoured', () => {
    const { attrs, store } = stubBrowser({ languages: ['en-GB'] });
    store['temperature-unit'] = 'fahrenheit'; // explicit override of the GB default

    runBootstrapInGlobalScope();
    expect(attrs['data-temp-unit']).toBe('fahrenheit');

    const state = new TemperatureUnitState();
    expect(state.current).toBe('fahrenheit');

    state.destroy();
  });

  it('a post-hydration window.setTemperatureUnit() call stays in sync with the state', () => {
    const { attrs, store } = stubBrowser({ languages: ['fr-FR'] });

    runBootstrapInGlobalScope();
    expect(attrs['data-temp-unit']).toBe('celsius');

    const state = new TemperatureUnitState();
    expect(state.current).toBe('celsius');

    // Host/cross-bundle code calling the bootstrap's exposed bridge function
    // after hydration must still reach the live state, the attribute and
    // storage together.
    (
      window as unknown as { setTemperatureUnit: (u: string) => void }
    ).setTemperatureUnit('fahrenheit');

    expect(state.current).toBe('fahrenheit');
    expect(attrs['data-temp-unit']).toBe('fahrenheit');
    expect(store['temperature-unit']).toBe('fahrenheit');

    state.destroy();
  });
});
