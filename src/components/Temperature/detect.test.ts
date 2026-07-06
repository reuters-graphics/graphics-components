import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  browserDefaultUnit,
  FAHRENHEIT_REGIONS,
  resolveDefaultUnit,
} from './detect';

describe('resolveDefaultUnit', () => {
  it('defaults US readers to Fahrenheit', () => {
    expect(resolveDefaultUnit({ languages: ['en-US'] })).toBe('fahrenheit');
  });

  it('defaults the rest of the world to Celsius', () => {
    for (const loc of [
      'en-GB',
      'fr-FR',
      'es-MX',
      'de-DE',
      'pt-BR',
      'ja-JP',
      'en-CA',
      'en-AU',
      'zh-Hans-CN',
    ]) {
      expect(resolveDefaultUnit({ languages: [loc] })).toBe('celsius');
    }
  });

  it('honours the small set of Fahrenheit countries', () => {
    for (const region of FAHRENHEIT_REGIONS) {
      expect(resolveDefaultUnit({ languages: [`en-${region}`] })).toBe(
        'fahrenheit'
      );
    }
  });

  it('uses the first locale that carries a region', () => {
    expect(resolveDefaultUnit({ languages: ['en', 'en-US'] })).toBe(
      'fahrenheit'
    );
    expect(resolveDefaultUnit({ languages: ['en', 'fr-FR'] })).toBe('celsius');
  });

  it('falls back to the time zone when no locale carries a region', () => {
    expect(
      resolveDefaultUnit({ languages: ['en'], timeZone: 'America/New_York' })
    ).toBe('fahrenheit');
    expect(
      resolveDefaultUnit({ languages: ['en'], timeZone: 'Pacific/Honolulu' })
    ).toBe('fahrenheit');
    expect(
      resolveDefaultUnit({ languages: ['en'], timeZone: 'Europe/London' })
    ).toBe('celsius');
  });

  it('treats non-US America zones as Celsius', () => {
    expect(
      resolveDefaultUnit({ languages: [], timeZone: 'America/Toronto' })
    ).toBe('celsius');
    expect(
      resolveDefaultUnit({ languages: [], timeZone: 'America/Mexico_City' })
    ).toBe('celsius');
  });

  it('defaults to Celsius with no usable signal', () => {
    expect(resolveDefaultUnit()).toBe('celsius');
    expect(resolveDefaultUnit({ languages: [] })).toBe('celsius');
    expect(resolveDefaultUnit({ languages: ['xx'] })).toBe('celsius');
  });

  it('ignores UN M.49 region codes', () => {
    expect(resolveDefaultUnit({ languages: ['es-419'] })).toBe('celsius');
  });

  it('handles malformed locale tags without throwing', () => {
    expect(resolveDefaultUnit({ languages: ['', '@@@', 'en-US'] })).toBe(
      'fahrenheit'
    );
  });

  it('accepts a custom fahrenheitRegions set', () => {
    const regions = new Set(['GB']);
    expect(
      resolveDefaultUnit({ languages: ['en-GB'], fahrenheitRegions: regions })
    ).toBe('fahrenheit');
    expect(
      resolveDefaultUnit({ languages: ['en-US'], fahrenheitRegions: regions })
    ).toBe('celsius');
  });
});

describe('browserDefaultUnit', () => {
  function stubNavigator(nav: Partial<Navigator>, timeZone = 'UTC') {
    vi.stubGlobal('navigator', nav as Navigator);
    vi.stubGlobal('Intl', {
      ...Intl,
      DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone }) }),
    });
  }

  afterEach(() => vi.unstubAllGlobals());

  it('reads navigator.languages when present', () => {
    stubNavigator({ languages: ['en-US'], language: 'en-GB' });
    expect(browserDefaultUnit()).toBe('fahrenheit');
  });

  it('falls back to navigator.language when languages is an EMPTY array', () => {
    stubNavigator({ languages: [], language: 'en-US' });
    expect(browserDefaultUnit()).toBe('fahrenheit');
  });

  it('falls back to the time zone when no locale carries a region', () => {
    stubNavigator({ languages: ['en'], language: 'en' }, 'America/New_York');
    expect(browserDefaultUnit()).toBe('fahrenheit');
    stubNavigator({ languages: ['en'], language: 'en' }, 'Europe/London');
    expect(browserDefaultUnit()).toBe('celsius');
  });
});
