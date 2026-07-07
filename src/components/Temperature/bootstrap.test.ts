import { runInNewContext } from 'node:vm';
import { describe, expect, it } from 'vitest';
import { buildBootstrapScript } from './bootstrap';
import { resolveDefaultUnit } from './detect';

/** Signals to seed the fake browser environment with. */
interface RunOpts {
  languages?: string[];
  timeZone?: string;
  storage?: Record<string, string>;
  cookie?: string;
}

/** The observable results after running a unit bootstrap script. */
interface RunResult {
  attr: () => string;
  unit: () => string;
  store: Record<string, string>;
  cookie: () => string;
  dispatch: (unit: string) => void;
}

/**
 * Execute a temperature-unit bootstrap `<script>` body in a sandboxed context
 * with a minimal fake DOM, and expose what it did. Used to test the generated
 * `buildBootstrapScript()` output.
 */
function runUnitBootstrap(script: string, opts: RunOpts = {}): RunResult {
  const { languages = [], timeZone = 'UTC', storage = {}, cookie = '' } = opts;
  const attrs: Record<string, string> = {};
  const listeners: Record<string, Array<(e: unknown) => void>> = {};
  const store: Record<string, string> = { ...storage };
  const cookieState = { value: cookie };

  const localStorageMock = {
    getItem: (k: string) => (k in store ? store[k] : null),
    setItem: (k: string, v: string) => {
      store[k] = v;
    },
  };
  const documentMock = {
    documentElement: {
      setAttribute: (k: string, v: string) => {
        attrs[k] = v;
      },
      getAttribute: (k: string) => (k in attrs ? attrs[k] : null),
    },
    get cookie() {
      return cookieState.value;
    },
    set cookie(v: string) {
      cookieState.value = v.split(';')[0];
    },
  };
  class CustomEventMock {
    type: string;
    detail: unknown;
    constructor(type: string, init?: { detail?: unknown }) {
      this.type = type;
      this.detail = init?.detail;
    }
  }
  const windowMock: {
    addEventListener: (type: string, cb: (e: unknown) => void) => void;
    dispatchEvent: (evt: { type: string }) => boolean;
    CustomEvent: typeof CustomEventMock;
    [key: string]: unknown;
  } = {
    addEventListener: (type: string, cb: (e: unknown) => void) => {
      listeners[type] ??= [];
      listeners[type].push(cb);
    },
    dispatchEvent: (evt: { type: string }) => {
      for (const cb of listeners[evt.type] ?? []) cb(evt);
      return true;
    },
    CustomEvent: CustomEventMock,
  };

  const sandbox = {
    window: windowMock,
    document: documentMock,
    localStorage: localStorageMock,
    navigator: { languages, language: languages[0] },
    Intl: {
      Locale: Intl.Locale,
      DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone }) }),
    },
    decodeURIComponent,
    RegExp,
    CustomEvent: CustomEventMock,
  };

  runInNewContext(script, sandbox);

  return {
    attr: () => attrs['data-temp-unit'],
    unit: () => (windowMock.getTemperatureUnit as () => string)(),
    store,
    cookie: () => cookieState.value,
    dispatch: (unit: string) =>
      windowMock.dispatchEvent(
        new CustomEventMock('temperature-unit-changed', { detail: { unit } })
      ),
  };
}

/** Run the generated bootstrap script under the given browser signals. */
const runBootstrap = (opts: RunOpts = {}) =>
  runUnitBootstrap(buildBootstrapScript(), opts);

describe('buildBootstrapScript (executed)', () => {
  it('sets the html attribute + window API to the resolved default', () => {
    const cases: RunOpts[] = [
      { languages: ['en-US'] },
      { languages: ['en-GB'] },
      { languages: ['fr-FR'] },
      { languages: ['en'], timeZone: 'America/New_York' },
      { languages: ['en'], timeZone: 'Europe/London' },
      { languages: [], timeZone: 'Pacific/Honolulu' },
    ];
    for (const c of cases) {
      const b = runBootstrap(c);
      const expected = resolveDefaultUnit({
        languages: c.languages,
        timeZone: c.timeZone,
      });
      expect(b.attr(), JSON.stringify(c)).toBe(expected);
      expect(b.unit()).toBe(expected);
    }
  });

  it('prefers a stored preference over the locale default', () => {
    const b = runBootstrap({
      languages: ['en-US'], // would be fahrenheit
      storage: { 'temperature-unit': 'celsius' },
    });
    expect(b.attr()).toBe('celsius');
    expect(b.unit()).toBe('celsius');
  });

  it('falls back to the cookie mirror when localStorage is empty', () => {
    const b = runBootstrap({
      languages: ['fr-FR'], // would be celsius
      cookie: 'temperature-unit=fahrenheit',
    });
    expect(b.attr()).toBe('fahrenheit');
  });

  it('persists + re-syncs on the change event', () => {
    const b = runBootstrap({ languages: ['en-US'] });
    expect(b.unit()).toBe('fahrenheit');

    b.dispatch('celsius');

    expect(b.unit()).toBe('celsius');
    expect(b.attr()).toBe('celsius');
    expect(b.store['temperature-unit']).toBe('celsius');
    expect(b.cookie()).toContain('temperature-unit=celsius');
  });

  it('ignores invalid units on the change event', () => {
    const b = runBootstrap({ languages: ['en-US'] });
    b.dispatch('kelvin');
    expect(b.unit()).toBe('fahrenheit');
  });
});

describe('buildBootstrapScript fahrenheitRegions override', () => {
  it('embeds a custom country list into the script', () => {
    const script = buildBootstrapScript({ fahrenheitRegions: new Set(['GB']) });
    // GB now defaults to Fahrenheit...
    expect(runUnitBootstrap(script, { languages: ['en-GB'] }).attr()).toBe(
      'fahrenheit'
    );
    // ...and the US, no longer in the set, defaults to Celsius.
    expect(runUnitBootstrap(script, { languages: ['en-US'] }).attr()).toBe(
      'celsius'
    );
  });
});

describe('buildBootstrapScript cookie parsing', () => {
  it('reads a configured cookie name with regex metacharacters', () => {
    const script = buildBootstrapScript({ cookieName: 'temp.unit' });
    expect(
      runUnitBootstrap(script, {
        languages: ['en-US'], // would be fahrenheit
        cookie: 'temp.unit=celsius',
      }).attr()
    ).toBe('celsius');
  });
});
