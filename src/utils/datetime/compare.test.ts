import { describe, expect, it } from 'vitest';
import {
  DEFAULT_RELATIVE_WINDOW_HOURS,
  isCurrentYear,
  isSameDay,
  isValidDate,
  isWithinRelativeWindow,
  zonedDateKey,
} from './compare';

describe('zonedDateKey', () => {
  it('renders a sortable, zero-padded YYYY-MM-DD', () => {
    expect(zonedDateKey(new Date('2024-01-05T12:00:00Z'))).toBe('2024-01-05');
    expect(zonedDateKey(new Date('2024-11-30T12:00:00Z'))).toBe('2024-11-30');
  });

  it('places the instant in the requested zone, not UTC', () => {
    // 23:30Z is already tomorrow in Tokyo and still today in New York.
    const date = new Date('2024-01-15T23:30:00Z');
    expect(zonedDateKey(date, 'Asia/Tokyo')).toBe('2024-01-16');
    expect(zonedDateKey(date, 'America/New_York')).toBe('2024-01-15');
    expect(zonedDateKey(date, 'GMT')).toBe('2024-01-15');
  });

  it('degrades to GMT for an unrecognized zone instead of throwing', () => {
    expect(zonedDateKey(new Date('2024-01-15T12:00:00Z'), 'Not/AZone')).toBe(
      '2024-01-15'
    );
  });
});

describe('isSameDay', () => {
  it('compares in the given zone, so the answer can differ by zone', () => {
    // Both instants are Jan 15 in New York; in Tokyo they straddle midnight.
    const a = new Date('2024-01-15T12:00:00Z');
    const b = new Date('2024-01-15T23:30:00Z');
    expect(isSameDay(a, b, 'America/New_York')).toBe(true);
    expect(isSameDay(a, b, 'Asia/Tokyo')).toBe(false);
  });

  it('is true for the same instant and false across a clear day boundary', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(isSameDay(date, date)).toBe(true);
    expect(isSameDay(date, new Date('2024-01-17T12:00:00Z'))).toBe(false);
  });
});

describe('isValidDate', () => {
  it('accepts the Unix epoch — the bug in the three copies this replaces', () => {
    // `!Date.parse('1970-01-01T00:00:00Z')` is `!0`, so the superseded
    // implementations reported the epoch as invalid.
    expect(isValidDate('1970-01-01T00:00:00Z')).toBe(true);
    expect(isValidDate(0)).toBe(true);
    expect(isValidDate(new Date(0))).toBe(true);
  });

  it('accepts strings, numbers and Dates that parse', () => {
    expect(isValidDate('2024-01-15T12:00:00Z')).toBe(true);
    expect(isValidDate(1705320000000)).toBe(true);
    expect(isValidDate(new Date('2024-01-15'))).toBe(true);
  });

  it('rejects empty, nullish and unparseable values', () => {
    expect(isValidDate('')).toBe(false);
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate('not a date')).toBe(false);
    expect(isValidDate(new Date('nonsense'))).toBe(false);
    expect(isValidDate(NaN)).toBe(false);
  });
});

describe('isWithinRelativeWindow', () => {
  const now = new Date('2026-08-14T12:00:00Z');
  const hoursOut = (h: number) => new Date(now.getTime() + h * 3600_000);

  it('defaults to a 24-hour half-width', () => {
    expect(DEFAULT_RELATIVE_WINDOW_HOURS).toBe(24);
    expect(isWithinRelativeWindow(hoursOut(-23), undefined, now)).toBe(true);
    expect(isWithinRelativeWindow(hoursOut(-25), undefined, now)).toBe(false);
  });

  it('is symmetric — the window is a magnitude, not a direction', () => {
    for (const h of [23, -23]) {
      expect(isWithinRelativeWindow(hoursOut(h), 24, now)).toBe(true);
    }
    for (const h of [25, -25]) {
      expect(isWithinRelativeWindow(hoursOut(h), 24, now)).toBe(false);
    }
  });

  it('widens and narrows with the hours argument', () => {
    const threeDaysAgo = hoursOut(-72);
    expect(isWithinRelativeWindow(threeDaysAgo, 24, now)).toBe(false);
    expect(isWithinRelativeWindow(threeDaysAgo, 168, now)).toBe(true);

    const thirtyMinutesAgo = hoursOut(-0.5);
    expect(isWithinRelativeWindow(thirtyMinutesAgo, 1, now)).toBe(true);
    expect(isWithinRelativeWindow(thirtyMinutesAgo, 0.25, now)).toBe(false);
  });

  it('treats the boundary as exclusive', () => {
    expect(isWithinRelativeWindow(hoursOut(-24), 24, now)).toBe(false);
    expect(isWithinRelativeWindow(hoursOut(-23.999), 24, now)).toBe(true);
  });

  it('degrades sensibly for Infinity, zero, negative and NaN', () => {
    // No validation needed — the comparison handles each of these correctly.
    const yearsAgo = hoursOut(-24 * 800);
    expect(isWithinRelativeWindow(yearsAgo, Infinity, now)).toBe(true);
    expect(isWithinRelativeWindow(hoursOut(-0.001), 0, now)).toBe(false);
    expect(isWithinRelativeWindow(hoursOut(-1), -24, now)).toBe(false);
    expect(isWithinRelativeWindow(hoursOut(-1), NaN, now)).toBe(false);
  });

  it('defaults now to the current instant', () => {
    expect(isWithinRelativeWindow(new Date())).toBe(true);
    expect(isWithinRelativeWindow(new Date('1999-01-01T00:00:00Z'))).toBe(
      false
    );
  });
});

describe('isCurrentYear', () => {
  it('compares the year, not the instant', () => {
    const now = new Date('2024-06-01T12:00:00Z');
    expect(isCurrentYear(new Date('2024-01-01T00:00:00Z'), 'UTC', now)).toBe(
      true
    );
    expect(isCurrentYear(new Date('2024-12-31T23:00:00Z'), 'UTC', now)).toBe(
      true
    );
    expect(isCurrentYear(new Date('2023-12-31T23:00:00Z'), 'UTC', now)).toBe(
      false
    );
  });

  it('resolves the year in the given zone — the New Year edge case', () => {
    // 02:00Z on Jan 1 is still 9pm Dec 31 in New York, so the same instant is
    // "this year" in UTC and "last year" in New York.
    const newYearish = new Date('2024-01-01T02:00:00Z');
    const now = new Date('2024-06-01T12:00:00Z');
    expect(isCurrentYear(newYearish, 'UTC', now)).toBe(true);
    expect(isCurrentYear(newYearish, 'America/New_York', now)).toBe(false);
  });

  it('defaults now to the current instant', () => {
    expect(isCurrentYear(new Date())).toBe(true);
    expect(isCurrentYear(new Date('1999-06-01T00:00:00Z'))).toBe(false);
  });
});
