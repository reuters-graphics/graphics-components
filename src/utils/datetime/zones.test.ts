import { describe, expect, it } from 'vitest';
import { TIME_ZONE_WHITELIST } from './zones';
import { resolveTimeZoneLabel } from './labels';

/**
 * Invariants on the editorial whitelist itself. These are cheap, and they are
 * what stop a future entry from silently reintroducing the abbreviation
 * collisions the `"<zone>|<long name>"` keying scheme exists to prevent.
 */
describe('TIME_ZONE_WHITELIST', () => {
  const keys = Object.keys(TIME_ZONE_WHITELIST);

  it('keys every entry as exactly "<IANA zone>|<Intl long name>"', () => {
    expect(keys.length).toBeGreaterThan(0);
    for (const key of keys) {
      expect(key.split('|')).toHaveLength(2);
      const [zone, long] = key.split('|');
      expect(zone.trim()).toBe(zone);
      expect(long.trim()).toBe(long);
      expect(long).not.toBe('');
    }
  });

  it('matches the live Intl long name for every entry', () => {
    // Catches a typo in a new entry, which would otherwise never match and
    // silently fall back to a GMT offset. This is how the original
    // `Africa/Lagos|West Africa Standard Time` typo was caught.
    const january = new Date('2024-01-15T12:00:00Z');
    const july = new Date('2024-07-15T12:00:00Z');
    const unmatched: string[] = [];

    for (const key of keys) {
      const [zone] = key.split('|');
      if (zone === 'UTC') continue; // sentinel-adjacent, no DST to probe
      const matched = [january, july].some(
        (d) => resolveTimeZoneLabel(d, zone).isWhitelisted
      );
      if (!matched) unmatched.push(key);
    }

    expect(unmatched).toEqual([]);
  });

  it('never maps two different zones to the same abbreviation', () => {
    // No two zones currently share a `short` — `UTC` resolves to "UTC" and only
    // Europe/London claims "GMT". Any new entry that breaks this is the
    // IST/CST/BST class of collision and needs a human decision, not a silent
    // merge, so this asserts an empty list rather than an allowlist.
    const byShort = new Map<string, string[]>();
    for (const [key, { short }] of Object.entries(TIME_ZONE_WHITELIST)) {
      const zone = key.split('|')[0];
      const zones = byShort.get(short) ?? [];
      if (!zones.includes(zone)) zones.push(zone);
      byShort.set(short, zones);
    }

    const collisions = [...byShort.entries()]
      .filter(([, zones]) => zones.length > 1)
      .map(([short, zones]) => `${short}: ${zones.join(', ')}`);

    expect(collisions).toEqual([]);
  });

  it('gives every entry a non-empty short and long form', () => {
    for (const [key, entry] of Object.entries(TIME_ZONE_WHITELIST)) {
      expect(entry.short, key).toBeTruthy();
      expect(entry.long, key).toBeTruthy();
    }
  });
});
