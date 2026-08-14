import { describe, expect, it } from 'vitest';
import { resolveTimeZoneLabel } from './labels';

describe('resolveTimeZoneLabel', () => {
  it('returns the GMT sentinel label without consulting Intl', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(resolveTimeZoneLabel(date, 'GMT')).toEqual({
      short: 'GMT',
      long: 'Greenwich Mean Time',
      timeZone: 'GMT',
      offset: 'GMT',
      isWhitelisted: true,
    });
  });

  it('returns the full curated label for a whitelisted zone', () => {
    const date = new Date('2024-07-15T12:00:00Z');
    expect(resolveTimeZoneLabel(date, 'Europe/London')).toEqual({
      short: 'BST',
      long: 'British Summer Time',
      timeZone: 'Europe/London',
      offset: 'GMT+1',
      isWhitelisted: true,
    });
  });

  it('falls back to a matching short/long/offset for a non-whitelisted zone', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(resolveTimeZoneLabel(date, 'Pacific/Chatham')).toEqual({
      short: 'GMT+13:45',
      long: 'GMT+13:45',
      timeZone: 'Pacific/Chatham',
      offset: 'GMT+13:45',
      isWhitelisted: false,
    });
  });

  it('covers newly-whitelisted zones outside North America and Europe', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(resolveTimeZoneLabel(date, 'Asia/Singapore').short).toBe('SGT');
    expect(resolveTimeZoneLabel(date, 'Asia/Dubai').short).toBe('GST');
  });
});
