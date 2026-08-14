import { afterEach, describe, expect, it, vi } from 'vitest';
import { detectLocalTimeZone } from './detect';

describe('detectLocalTimeZone', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns undefined off the client (no window)', () => {
    vi.stubGlobal('window', undefined);
    expect(detectLocalTimeZone()).toBeUndefined();
  });

  it('passes through the resolved Intl timezone on the client', () => {
    vi.stubGlobal('window', {});
    const spy = vi.spyOn(Intl, 'DateTimeFormat').mockImplementation(
      () =>
        ({
          resolvedOptions: () => ({ timeZone: 'Europe/Paris' }),
        }) as unknown as Intl.DateTimeFormat
    );

    expect(detectLocalTimeZone()).toBe('Europe/Paris');
    spy.mockRestore();
  });

  it('returns undefined when Intl throws', () => {
    vi.stubGlobal('window', {});
    const spy = vi.spyOn(Intl, 'DateTimeFormat').mockImplementation(() => {
      throw new Error('unsupported');
    });

    expect(detectLocalTimeZone()).toBeUndefined();
    spy.mockRestore();
  });
});
