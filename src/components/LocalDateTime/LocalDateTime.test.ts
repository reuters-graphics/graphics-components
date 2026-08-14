/**
 * SSR-string tests for LocalDateTime, matching this repo's convention (vitest
 * in the default node environment, `render` from `svelte/server` — there is no
 * jsdom or testing-library here).
 *
 * IMPORTANT: `$effect` does not run under server rendering, so every assertion
 * below describes the **pre-detection** state. Each test therefore pins
 * `timeZone` explicitly. The browser zone-detection path — the GMT-then-swap
 * behavior that is the whole point of the component — is **not covered by this
 * file** and has to be verified in a browser (see the stories' play functions).
 * A green run here does not mean detection works.
 */
import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import LocalDateTime from './LocalDateTime.svelte';

const DATE = '2024-01-15T12:00:00Z';
const NY = 'America/New_York';

/** The visible span; the spoken one is a sibling. */
const visible = (body: string) =>
  body.match(/<span aria-hidden="true"[^>]*>([\s\S]*?)<\/span>/)?.[1] ?? '';

const spoken = (body: string) =>
  body.match(
    /<span class="[^"]*visually-hidden[^"]*"[^>]*>([\s\S]*?)<\/span>/
  )?.[1] ?? '';

const renderAt = (props: Record<string, unknown> = {}) =>
  render(LocalDateTime, {
    props: { datetime: DATE, timeZone: NY, ...props },
  }).body;

describe('LocalDateTime', () => {
  it('defaults to a clock time', () => {
    expect(visible(renderAt())).toBe('7:00 a.m. EST');
  });

  it('always carries a machine-readable ISO datetime attribute', () => {
    const iso = new Date(DATE).toISOString();
    for (const display of ['time', 'date', 'datetime'] as const) {
      expect(renderAt({ display })).toContain(`datetime="${iso}"`);
    }
  });

  describe('display', () => {
    it('renders a clock time', () => {
      expect(visible(renderAt({ display: 'time' }))).toBe('7:00 a.m. EST');
    });

    it('renders an AP-abbreviated date with no clock leaking in', () => {
      const out = visible(renderAt({ display: 'date' }));
      expect(out).toBe('Jan. 15, 2024');
      expect(out).not.toContain(':');
      expect(out).not.toContain('EST');
    });

    it('renders both, comma-separated', () => {
      expect(visible(renderAt({ display: 'datetime' }))).toBe(
        'Jan. 15, 2024, 7:00 a.m. EST'
      );
    });
  });

  describe('spoken text', () => {
    const sentence =
      'January 15, 2024 at 7:00 a.m., North American Eastern Standard Time, GMT-5';

    it('spells out the date and zone for time and datetime alike', () => {
      expect(spoken(renderAt({ display: 'time' }))).toBe(sentence);
      expect(spoken(renderAt({ display: 'datetime' }))).toBe(sentence);
    });

    it('names no timezone in date mode', () => {
      const said = spoken(renderAt({ display: 'date' }));
      expect(said).toBe('January 15, 2024');
      expect(said).not.toContain('Eastern');
      expect(said).not.toContain('GMT');
    });

    it('spells out the month the visible text abbreviates', () => {
      const body = renderAt({ display: 'date' });
      expect(visible(body)).toContain('Jan.');
      expect(spoken(body)).toContain('January');
    });
  });

  describe('inert props', () => {
    it('ignores precision and showTimeZone in date mode', () => {
      const bare = renderAt({ display: 'date' });
      const fussed = renderAt({
        display: 'date',
        precision: 'millisecond',
        showTimeZone: true,
      });
      expect(visible(fussed)).toBe(visible(bare));
      expect(spoken(fussed)).toBe(spoken(bare));
    });

    it('ignores showYear in time mode', () => {
      expect(visible(renderAt({ display: 'time', showYear: false }))).toBe(
        visible(renderAt({ display: 'time' }))
      );
    });

    it('omits the year in the current year with showYear="auto"', () => {
      const y = new Date().getFullYear();
      const inThisYear = new Date(Date.UTC(y, 4, 20, 12));
      const inAnotherYear = new Date(Date.UTC(y - 2, 0, 15, 12));

      expect(
        visible(
          renderAt({ datetime: inThisYear, display: 'date', showYear: 'auto' })
        )
      ).toBe('May 20');
      expect(
        visible(
          renderAt({
            datetime: inAnotherYear,
            display: 'date',
            showYear: 'auto',
          })
        )
      ).toBe(`Jan. 15, ${y - 2}`);
    });

    it('always names the year in the spoken text, whatever showYear says', () => {
      const y = new Date().getFullYear();
      const inThisYear = new Date(Date.UTC(y, 4, 20, 12));
      for (const showYear of [true, false, 'auto'] as const) {
        for (const display of ['date', 'time', 'datetime'] as const) {
          expect(
            spoken(renderAt({ datetime: inThisYear, display, showYear }))
          ).toContain(String(y));
        }
      }
    });

    it('honors showYear in date and datetime modes', () => {
      expect(visible(renderAt({ display: 'date', showYear: false }))).toBe(
        'Jan. 15'
      );
      expect(visible(renderAt({ display: 'datetime', showYear: false }))).toBe(
        'Jan. 15, 7:00 a.m. EST'
      );
    });
  });

  describe('relative', () => {
    it('prints a duration inside the 24-hour window', () => {
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      expect(
        visible(renderAt({ datetime: fiveMinutesAgo, relative: true }))
      ).toBe('5 minutes ago');
    });

    it('takes precedence over display inside the window, in every mode', () => {
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      for (const display of ['time', 'date', 'datetime'] as const) {
        expect(
          visible(
            renderAt({ datetime: fiveMinutesAgo, relative: true, display })
          )
        ).toBe('5 minutes ago');
      }
    });

    it('falls back to the display rendering beyond the window', () => {
      // DATE is years in the past, so relative is out of the window.
      expect(visible(renderAt({ relative: true, display: 'time' }))).toBe(
        '7:00 a.m. EST'
      );
      expect(visible(renderAt({ relative: true, display: 'date' }))).toBe(
        'Jan. 15, 2024'
      );
      expect(visible(renderAt({ relative: true, display: 'datetime' }))).toBe(
        'Jan. 15, 2024, 7:00 a.m. EST'
      );
    });

    it('widens the window with relativeWithinHours', () => {
      const threeDaysAgo = new Date(Date.now() - 72 * 3600_000);
      // Outside the 24h default, so it falls back to the clock time...
      expect(
        visible(renderAt({ datetime: threeDaysAgo, relative: true }))
      ).toMatch(/a\.m\.|p\.m\./);
      // ...but a week-wide window prints the duration.
      expect(
        visible(
          renderAt({
            datetime: threeDaysAgo,
            relative: true,
            relativeWithinHours: 168,
          })
        )
      ).toBe('3 days ago');
    });

    it('narrows the window with relativeWithinHours', () => {
      const twoHoursAgo = new Date(Date.now() - 2 * 3600_000);
      expect(visible(renderAt({ datetime: twoHoursAgo, relative: true }))).toBe(
        '2 hours ago'
      );
      expect(
        visible(
          renderAt({
            datetime: twoHoursAgo,
            relative: true,
            relativeWithinHours: 1,
          })
        )
      ).toMatch(/a\.m\.|p\.m\./);
    });

    it('is always relative at Infinity', () => {
      expect(
        visible(renderAt({ relative: true, relativeWithinHours: Infinity }))
      ).toMatch(/years ago$/);
    });

    it('is never relative when relativeWithinHours is 0', () => {
      const now = new Date();
      expect(
        visible(
          renderAt({ datetime: now, relative: true, relativeWithinHours: 0 })
        )
      ).toMatch(/a\.m\.|p\.m\./);
    });

    it('ignores relativeWithinHours when relative is false', () => {
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      expect(
        visible(
          renderAt({
            datetime: fiveMinutesAgo,
            relative: false,
            relativeWithinHours: Infinity,
          })
        )
      ).toMatch(/a\.m\.|p\.m\./);
    });

    it('keeps the spoken text absolute even while showing a duration', () => {
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      const said = spoken(
        renderAt({ datetime: fiveMinutesAgo, relative: true })
      );
      expect(said).not.toContain('ago');
      expect(said).toMatch(/^[A-Z][a-z]+ \d{1,2}, \d{4} at /);
    });
  });

  describe('timezone', () => {
    it('renders GMT before detection when no timeZone is given', () => {
      // This is the SSR/first-paint state; the swap to the reader's zone
      // happens in an $effect that server rendering never runs.
      const body = render(LocalDateTime, {
        props: { datetime: DATE, display: 'datetime' },
      }).body;
      expect(visible(body)).toBe('Jan. 15, 2024, 12:00 p.m. GMT');
    });

    it('resolves the date in the given zone, not UTC', () => {
      // 23:30Z is already the 16th in Tokyo.
      const late = '2024-01-15T23:30:00Z';
      expect(
        visible(
          renderAt({ datetime: late, timeZone: 'Asia/Tokyo', display: 'date' })
        )
      ).toBe('Jan. 16, 2024');
      expect(
        visible(renderAt({ datetime: late, timeZone: NY, display: 'date' }))
      ).toBe('Jan. 15, 2024');
    });

    it('degrades to GMT for an unrecognized zone rather than throwing', () => {
      expect(
        visible(renderAt({ timeZone: 'Not/AZone', display: 'datetime' }))
      ).toBe('Jan. 15, 2024, 12:00 p.m. GMT');
    });
  });
});
