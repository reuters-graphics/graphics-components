import { describe, expect, it } from 'vitest';
import { apdate } from 'journalize';
import {
  formatAccessibleDate,
  formatAccessibleDateTime,
  formatAccessibleTime,
  formatApDate,
  formatApDateTime,
  formatApTime,
  formatRelativeTime,
} from './format';
import { resolveTimeZoneLabel } from './labels';

describe('formatApTime', () => {
  it('defaults to GMT', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(formatApTime(date)).toBe('12:00 p.m. GMT');
  });

  it('handles the GMT sentinel explicitly', () => {
    const date = new Date('2024-01-15T00:00:00Z');
    expect(formatApTime(date, { timeZone: 'GMT' })).toBe('12:00 a.m. GMT');
  });

  it('uses the real AP abbreviation across a US DST boundary', () => {
    const july = new Date('2024-07-15T12:00:00Z'); // EDT (UTC-4)
    const january = new Date('2024-01-15T12:00:00Z'); // EST (UTC-5)
    expect(formatApTime(july, { timeZone: 'America/New_York' })).toBe(
      '8:00 a.m. EDT'
    );
    expect(formatApTime(january, { timeZone: 'America/New_York' })).toBe(
      '7:00 a.m. EST'
    );
  });

  it('uses a native abbreviation outside the 4 AP-sanctioned US zones when Intl provides one', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(formatApTime(date, { timeZone: 'Pacific/Honolulu' })).toBe(
      '2:00 a.m. HST'
    );
  });

  it('falls back to a GMT offset for zones with no unambiguous abbreviation', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(formatApTime(date, { timeZone: 'Pacific/Chatham' })).toBe(
      '1:45 a.m. GMT+13:45'
    );
  });

  it('resolves JST for Japan, which has no DST', () => {
    const july = new Date('2024-07-15T12:00:00Z');
    const january = new Date('2024-01-15T12:00:00Z');
    expect(formatApTime(july, { timeZone: 'Asia/Tokyo' })).toBe(
      '9:00 p.m. JST'
    );
    expect(formatApTime(january, { timeZone: 'Asia/Tokyo' })).toBe(
      '9:00 p.m. JST'
    );
  });

  it('resolves IST for India', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(formatApTime(date, { timeZone: 'Asia/Kolkata' })).toBe(
      '5:30 p.m. IST'
    );
  });

  it('resolves the Australian zone abbreviations across their daylight-saving boundary', () => {
    const januaryAuSummer = new Date('2024-01-15T12:00:00Z');
    const julyAuWinter = new Date('2024-07-15T12:00:00Z');

    expect(
      formatApTime(januaryAuSummer, { timeZone: 'Australia/Sydney' })
    ).toBe('11:00 p.m. AEDT');
    expect(formatApTime(julyAuWinter, { timeZone: 'Australia/Sydney' })).toBe(
      '10:00 p.m. AEST'
    );

    expect(
      formatApTime(januaryAuSummer, { timeZone: 'Australia/Adelaide' })
    ).toBe('10:30 p.m. ACDT');
    expect(formatApTime(julyAuWinter, { timeZone: 'Australia/Adelaide' })).toBe(
      '9:30 p.m. ACST'
    );

    // Perth doesn't observe daylight saving, so it stays AWST year-round.
    expect(formatApTime(januaryAuSummer, { timeZone: 'Australia/Perth' })).toBe(
      '8:00 p.m. AWST'
    );
    expect(formatApTime(julyAuWinter, { timeZone: 'Australia/Perth' })).toBe(
      '8:00 p.m. AWST'
    );
  });

  it('resolves BST for London in summer, where Intl only offers a GMT offset', () => {
    const july = new Date('2024-07-15T12:00:00Z');
    const january = new Date('2024-01-15T12:00:00Z');
    expect(formatApTime(july, { timeZone: 'Europe/London' })).toBe(
      '1:00 p.m. BST'
    );
    expect(formatApTime(january, { timeZone: 'Europe/London' })).toBe(
      '12:00 p.m. GMT'
    );
  });

  it('resolves the other curated European summer/standard abbreviations', () => {
    const july = new Date('2024-07-15T12:00:00Z');
    const january = new Date('2024-01-15T12:00:00Z');
    expect(formatApTime(july, { timeZone: 'Europe/Paris' })).toBe(
      '2:00 p.m. CEST'
    );
    expect(formatApTime(january, { timeZone: 'Europe/Paris' })).toBe(
      '1:00 p.m. CET'
    );
  });

  it('does not misattribute a US zone abbreviation via initials collision', () => {
    // The whitelist key includes the IANA zone, so "Europe/Moscow|Moscow
    // Standard Time" resolving to "MSK" can never be confused with
    // "America/Denver|Mountain Standard Time" resolving to "MST" — unlike a
    // naive initials-of-the-long-name approach, which would collide.
    const date = new Date('2024-07-15T12:00:00Z');
    expect(formatApTime(date, { timeZone: 'Europe/Moscow' })).toBe(
      '3:00 p.m. MSK'
    );
  });

  it('shows hours and minutes only by default', () => {
    const date = new Date('2024-01-15T12:00:45.678Z');
    expect(formatApTime(date, { timeZone: 'GMT' })).toBe('12:00 p.m. GMT');
  });

  it('adds seconds at "second" precision', () => {
    const date = new Date('2024-01-15T12:00:45.678Z');
    expect(formatApTime(date, { timeZone: 'GMT', precision: 'second' })).toBe(
      '12:00:45 p.m. GMT'
    );
  });

  it('adds milliseconds at "millisecond" precision', () => {
    const date = new Date('2024-01-15T12:00:45.678Z');
    expect(
      formatApTime(date, { timeZone: 'GMT', precision: 'millisecond' })
    ).toBe('12:00:45.678 p.m. GMT');
  });

  it('omits the timezone abbreviation when showTimeZone is false', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    expect(
      formatApTime(date, { timeZone: 'America/New_York', showTimeZone: false })
    ).toBe('7:00 a.m.');
  });

  it('defaults the date argument to now', () => {
    expect(formatApTime()).toMatch(/^\d{1,2}:\d{2} [ap]\.m\. GMT$/);
  });

  it('prints a zero offset as a bare GMT, consistently across runtimes', () => {
    // `Intl`'s shortOffset says "GMT+0" in Node and "GMT" in Chromium, which
    // would render one string during SSR and another after hydration.
    const january = new Date('2024-01-15T12:00:00Z');
    const july = new Date('2024-07-15T12:00:00Z');
    expect(formatApTime(january, { timeZone: 'Europe/Dublin' })).toBe(
      '12:00 p.m. GMT'
    );
    expect(resolveTimeZoneLabel(january, 'Europe/Dublin').offset).toBe('GMT');
    // A non-zero offset is still spelled out.
    expect(formatApTime(july, { timeZone: 'Europe/Dublin' })).toBe(
      '1:00 p.m. GMT+1'
    );
  });

  it('degrades to GMT for an unrecognized zone instead of throwing', () => {
    // `Intl` throws a RangeError on these. A bad zone — a typo, or a stray CMS
    // value — should not be able to take down a render.
    const date = new Date('2024-01-15T12:00:00Z');
    expect(formatApTime(date, { timeZone: 'Not/AZone' })).toBe(
      '12:00 p.m. GMT'
    );
    expect(formatApTime(date, { timeZone: '' })).toBe('12:00 p.m. GMT');
    expect(formatAccessibleTime(date, { timeZone: 'Not/AZone' })).toBe(
      'January 15, 2024 at 12:00 p.m., Greenwich Mean Time, GMT'
    );
  });
});

describe('formatAccessibleTime', () => {
  const date = new Date('2024-01-15T12:00:00Z');

  it('spells out the date and zone, defaulting to GMT', () => {
    expect(formatAccessibleTime(date)).toBe(
      'January 15, 2024 at 12:00 p.m., Greenwich Mean Time, GMT'
    );
  });

  it('expands a whitelisted abbreviation into its long name', () => {
    expect(formatAccessibleTime(date, { timeZone: 'America/New_York' })).toBe(
      'January 15, 2024 at 7:00 a.m., North American Eastern Standard Time, GMT-5'
    );
    expect(
      formatAccessibleTime(new Date('2024-07-15T12:00:00Z'), {
        timeZone: 'Europe/London',
      })
    ).toBe('July 15, 2024 at 1:00 p.m., British Summer Time, GMT+1');
  });

  it('says the offset once for a zone with no curated name', () => {
    // Chatham's long name *is* its offset, so naming both would stutter.
    expect(formatAccessibleTime(date, { timeZone: 'Pacific/Chatham' })).toBe(
      'January 16, 2024 at 1:45 a.m., GMT+13:45'
    );
  });

  it('dates the instant in the target zone, not UTC', () => {
    // +13:45 rolls forward past midnight, -8 rolls back — neither is Jan 15.
    expect(
      formatAccessibleTime(date, { timeZone: 'Pacific/Chatham' })
    ).toContain('January 16, 2024');
    expect(
      formatAccessibleTime(new Date('2024-01-15T02:00:00Z'), {
        timeZone: 'America/Los_Angeles',
      })
    ).toBe(
      'January 14, 2024 at 6:00 p.m., North American Pacific Standard Time, GMT-8'
    );
  });

  it('honors precision and showTimeZone, like formatApTime', () => {
    expect(
      formatAccessibleTime(new Date('2024-01-15T12:00:45.678Z'), {
        precision: 'second',
      })
    ).toBe('January 15, 2024 at 12:00:45 p.m., Greenwich Mean Time, GMT');
    expect(
      formatAccessibleTime(date, {
        timeZone: 'America/New_York',
        showTimeZone: false,
      })
    ).toBe('January 15, 2024 at 7:00 a.m.');
  });
});

describe('formatRelativeTime', () => {
  const now = new Date('2024-06-15T12:00:00Z');

  it('describes a moment just now', () => {
    expect(formatRelativeTime(now, now)).toBe('now');
  });

  it('describes seconds', () => {
    const date = new Date(now.getTime() - 30 * 1000);
    expect(formatRelativeTime(date, now)).toBe('30 seconds ago');
  });

  it('describes minutes, past and future', () => {
    const past = new Date(now.getTime() - 5 * 60 * 1000);
    const future = new Date(now.getTime() + 5 * 60 * 1000);
    expect(formatRelativeTime(past, now)).toBe('5 minutes ago');
    expect(formatRelativeTime(future, now)).toBe('in 5 minutes');
  });

  it('describes hours', () => {
    const date = new Date(now.getTime() - 3 * 60 * 60 * 1000);
    expect(formatRelativeTime(date, now)).toBe('3 hours ago');
  });

  it('describes days, using "yesterday" where Intl offers it', () => {
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    expect(formatRelativeTime(yesterday, now)).toBe('yesterday');
    expect(formatRelativeTime(threeDaysAgo, now)).toBe('3 days ago');
  });

  it('describes months', () => {
    const date = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
    expect(formatRelativeTime(date, now)).toBe('2 months ago');
  });

  it('describes years', () => {
    const date = new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000);
    expect(formatRelativeTime(date, now)).toBe('2 years ago');
  });

  it('defaults both date and now to the current instant', () => {
    expect(formatRelativeTime()).toBe('now');
  });
});

describe('formatApDate', () => {
  const date = new Date('2024-01-15T12:00:00Z');

  it('abbreviates months AP-style, spelling out March through July', () => {
    const at = (iso: string) => formatApDate(new Date(iso));
    expect(at('2024-01-15T12:00:00Z')).toBe('Jan. 15, 2024');
    expect(at('2024-03-15T12:00:00Z')).toBe('March 15, 2024');
    expect(at('2024-07-04T12:00:00Z')).toBe('July 4, 2024');
    // Four letters, not three.
    expect(at('2024-09-15T12:00:00Z')).toBe('Sept. 15, 2024');
    expect(at('2024-12-31T12:00:00Z')).toBe('Dec. 31, 2024');
  });

  it('leaves the day unpadded', () => {
    expect(formatApDate(new Date('2024-01-05T12:00:00Z'))).toBe('Jan. 5, 2024');
  });

  it('omits the year when showYear is false', () => {
    expect(formatApDate(date, { showYear: false })).toBe('Jan. 15');
  });

  it('dates the instant in the target zone, not UTC', () => {
    // The entire reason this function exists rather than journalize's apdate.
    const late = new Date('2024-01-15T23:30:00Z');
    expect(formatApDate(late, { timeZone: 'Asia/Tokyo' })).toBe(
      'Jan. 16, 2024'
    );
    expect(formatApDate(late, { timeZone: 'America/New_York' })).toBe(
      'Jan. 15, 2024'
    );
  });

  it('degrades to GMT for an unrecognized zone instead of throwing', () => {
    expect(formatApDate(date, { timeZone: 'Not/AZone' })).toBe('Jan. 15, 2024');
  });

  it('matches journalize apdate byte-for-byte in the machine zone', () => {
    // The highest-value test here: it is the only thing that catches ICU drift
    // in this parts-based reimplementation of `apdate`. Build the Date from
    // LOCAL components and read the machine zone directly from Intl — not from
    // detectLocalTimeZone(), which returns undefined off the client by design.
    const machineZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    for (const [y, m, d] of [
      [2024, 0, 15],
      [2024, 2, 1],
      [2024, 6, 4],
      [2024, 8, 30],
      [2024, 11, 31],
    ] as const) {
      const local = new Date(y, m, d, 12, 0, 0);
      expect(formatApDate(local, { timeZone: machineZone })).toBe(
        apdate(local)
      );
    }
  });
});

describe('formatAccessibleDate', () => {
  it('spells the month out for screen readers', () => {
    expect(formatAccessibleDate(new Date('2024-09-15T12:00:00Z'))).toBe(
      'September 15, 2024'
    );
  });

  it('omits the year when showYear is false', () => {
    expect(
      formatAccessibleDate(new Date('2024-01-15T12:00:00Z'), {
        showYear: false,
      })
    ).toBe('January 15');
  });
});

describe('formatApDateTime', () => {
  const date = new Date('2024-01-15T12:00:00Z');
  const ny = { timeZone: 'America/New_York' };

  it('defaults to time only', () => {
    expect(formatApDateTime(date, ny)).toBe('7:00 a.m. EST');
  });

  it('renders each display mode, joining date and time with ", "', () => {
    expect(formatApDateTime(date, { ...ny, display: 'time' })).toBe(
      '7:00 a.m. EST'
    );
    expect(formatApDateTime(date, { ...ny, display: 'date' })).toBe(
      'Jan. 15, 2024'
    );
    expect(formatApDateTime(date, { ...ny, display: 'datetime' })).toBe(
      'Jan. 15, 2024, 7:00 a.m. EST'
    );
  });

  it('honors precision and showTimeZone where they apply', () => {
    expect(
      formatApDateTime(date, {
        ...ny,
        display: 'datetime',
        precision: 'second',
      })
    ).toBe('Jan. 15, 2024, 7:00:00 a.m. EST');
    expect(
      formatApDateTime(date, {
        ...ny,
        display: 'datetime',
        showTimeZone: false,
      })
    ).toBe('Jan. 15, 2024, 7:00 a.m.');
    expect(
      formatApDateTime(date, { ...ny, display: 'datetime', showYear: false })
    ).toBe('Jan. 15, 7:00 a.m. EST');
  });

  it('ignores precision and showTimeZone in date mode', () => {
    const bare = formatApDateTime(date, { ...ny, display: 'date' });
    expect(
      formatApDateTime(date, {
        ...ny,
        display: 'date',
        precision: 'millisecond',
        showTimeZone: true,
      })
    ).toBe(bare);
    expect(bare).not.toContain(':');
    expect(bare).not.toContain('EST');
  });
});

describe('formatAccessibleDateTime', () => {
  const date = new Date('2024-01-15T12:00:00Z');
  const ny = { timeZone: 'America/New_York' };
  const spoken =
    'January 15, 2024 at 7:00 a.m., North American Eastern Standard Time, GMT-5';

  it('gives time and datetime the same spoken string', () => {
    expect(formatAccessibleDateTime(date, { ...ny, display: 'time' })).toBe(
      spoken
    );
    expect(formatAccessibleDateTime(date, { ...ny, display: 'datetime' })).toBe(
      spoken
    );
  });

  it('names no timezone in date mode', () => {
    const said = formatAccessibleDateTime(date, { ...ny, display: 'date' });
    expect(said).toBe('January 15, 2024');
    expect(said).not.toContain('Eastern');
    expect(said).not.toContain('GMT');
  });
});

describe('showYear: auto', () => {
  // Built relative to the real current year so these stay true every January,
  // and from an absolute UTC instant so they mean the same thing on every
  // machine — `new Date(y, 4, 20, 12)` would be a different instant in each
  // timezone, which is the very bug this module exists to prevent.
  const y = new Date().getFullYear();
  const inThisYear = new Date(Date.UTC(y, 4, 20, 12));
  const inAnotherYear = new Date(Date.UTC(y - 2, 0, 15, 12));
  const ny = { timeZone: 'America/New_York' };

  it('omits the year for a date in the current year', () => {
    expect(formatApDate(inThisYear, { ...ny, showYear: 'auto' })).toBe(
      'May 20'
    );
  });

  it('prints the year for a date outside it', () => {
    expect(formatApDate(inAnotherYear, { ...ny, showYear: 'auto' })).toBe(
      `Jan. 15, ${y - 2}`
    );
  });

  it('still honors an explicit true or false', () => {
    expect(formatApDate(inThisYear, { ...ny, showYear: true })).toBe(
      `May 20, ${y}`
    );
    expect(formatApDate(inAnotherYear, { ...ny, showYear: false })).toBe(
      'Jan. 15'
    );
  });

  it('flows through formatApDateTime', () => {
    expect(
      formatApDateTime(inThisYear, {
        ...ny,
        display: 'datetime',
        showYear: 'auto',
      })
    ).toBe('May 20, 8:00 a.m. EDT');
    expect(
      formatApDateTime(inAnotherYear, {
        ...ny,
        display: 'date',
        showYear: 'auto',
      })
    ).toBe(`Jan. 15, ${y - 2}`);
  });
});

describe('formatAccessibleDateTime and showYear', () => {
  const y = new Date().getFullYear();
  const inThisYear = new Date(Date.UTC(y, 4, 20, 12));
  const ny = { timeZone: 'America/New_York' };

  it('always names the year, in every mode and for every showYear value', () => {
    // The spoken form is deliberately fully specified: omitting a year is a
    // visual economy, and speech has no context to recover it from.
    for (const display of ['date', 'time', 'datetime'] as const) {
      for (const showYear of [true, false, 'auto'] as const) {
        expect(
          formatAccessibleDateTime(inThisYear, { ...ny, display, showYear })
        ).toContain(String(y));
      }
    }
  });

  it('leaves formatAccessibleDate itself controllable for direct callers', () => {
    expect(formatAccessibleDate(inThisYear, { ...ny, showYear: false })).toBe(
      'May 20'
    );
    expect(formatAccessibleDate(inThisYear, { ...ny, showYear: 'auto' })).toBe(
      'May 20'
    );
  });
});
