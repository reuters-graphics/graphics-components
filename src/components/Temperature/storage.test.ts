import { afterEach, describe, expect, it, vi } from 'vitest';
import { readStoredUnit, writeStoredUnit } from './storage';

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
  it('writes the unit to localStorage', () => {
    const store = stubLocalStorage();
    writeStoredUnit('fahrenheit');
    expect(store['temperature-unit']).toBe('fahrenheit');
  });

  it('respects a custom storage key', () => {
    const store = stubLocalStorage();
    writeStoredUnit('celsius', { storageKey: 'k' });
    expect(store.k).toBe('celsius');
  });

  it('does not throw when storage is unavailable', () => {
    expect(() => writeStoredUnit('celsius')).not.toThrow();
  });
});
