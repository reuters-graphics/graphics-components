import { afterEach, describe, expect, it, vi } from 'vitest';
import { readCookieUnit, readStoredUnit, writeStoredUnit } from './storage';

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

function stubDocumentCookie(initial = '') {
  const state = { cookie: initial };
  vi.stubGlobal('document', {
    get cookie() {
      return state.cookie;
    },
    set cookie(v: string) {
      // Single-key mock: keep just the name=value pair.
      state.cookie = v.split(';')[0];
    },
  });
  return state;
}

afterEach(() => vi.unstubAllGlobals());

describe('readStoredUnit', () => {
  it('returns a valid stored value', () => {
    stubLocalStorage({ 'temperature-unit': 'fahrenheit' });
    expect(readStoredUnit()).toBe('fahrenheit');
  });

  it('returns null for missing or invalid values', () => {
    stubLocalStorage({ 'temperature-unit': 'kelvin' });
    expect(readStoredUnit()).toBeNull();
    stubLocalStorage({});
    expect(readStoredUnit()).toBeNull();
  });

  it('honours a custom key', () => {
    stubLocalStorage({ mykey: 'celsius' });
    expect(readStoredUnit('mykey')).toBe('celsius');
  });

  it('is SSR-safe (no localStorage)', () => {
    expect(readStoredUnit()).toBeNull();
  });
});

describe('writeStoredUnit', () => {
  it('writes both localStorage and the cookie mirror', () => {
    const store = stubLocalStorage();
    const doc = stubDocumentCookie();
    writeStoredUnit('fahrenheit');
    expect(store['temperature-unit']).toBe('fahrenheit');
    expect(doc.cookie).toContain('temperature-unit=fahrenheit');
  });

  it('respects custom key + cookie names', () => {
    const store = stubLocalStorage();
    const doc = stubDocumentCookie();
    writeStoredUnit('celsius', { storageKey: 'k', cookieName: 'c' });
    expect(store.k).toBe('celsius');
    expect(doc.cookie).toContain('c=celsius');
  });

  it('does not throw when storage is unavailable', () => {
    expect(() => writeStoredUnit('celsius')).not.toThrow();
  });
});

describe('readCookieUnit', () => {
  it('parses a valid cookie value', () => {
    stubDocumentCookie('foo=bar; temperature-unit=celsius; baz=qux');
    expect(readCookieUnit()).toBe('celsius');
  });

  it('returns null when absent or invalid', () => {
    stubDocumentCookie('temperature-unit=kelvin');
    expect(readCookieUnit()).toBeNull();
    stubDocumentCookie('other=1');
    expect(readCookieUnit()).toBeNull();
  });

  it('treats regex metacharacters in the name literally', () => {
    stubDocumentCookie('temp.unit=fahrenheit');
    expect(readCookieUnit('temp.unit')).toBe('fahrenheit');
    // A naive `.`-as-wildcard regex would wrongly match this; split/trim must not.
    stubDocumentCookie('tempXunit=fahrenheit');
    expect(readCookieUnit('temp.unit')).toBeNull();
  });

  it('is SSR-safe (no document)', () => {
    expect(readCookieUnit()).toBeNull();
  });
});
