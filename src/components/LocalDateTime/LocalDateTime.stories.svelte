<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, within } from 'storybook/test';
  import LocalDateTime from './LocalDateTime.svelte';

  /**
   * A deliberate mix for the `timeZone` control: zones on the abbreviation
   * whitelist, and zones that fall back to a `GMT±offset` — including the
   * collisions the whitelist exists to prevent. Every zone a story pins is
   * listed here, or its control would read as unset. Labels double as the
   * option text, so they have to stay unique.
   */
  const TIME_ZONE_LABELS = {
    // On the whitelist — a curated abbreviation.
    GMT: 'GMT — sentinel, skips detection',
    'America/New_York': 'America/New_York — EST / EDT',
    'America/Chicago': 'America/Chicago — CST / CDT',
    'America/Los_Angeles': 'America/Los_Angeles — PST / PDT',
    'Europe/London': 'Europe/London — GMT / BST',
    'Europe/Paris': 'Europe/Paris — CET / CEST',
    'Europe/Moscow': 'Europe/Moscow — MSK',
    'Asia/Kolkata': 'Asia/Kolkata — IST',
    'Asia/Tokyo': 'Asia/Tokyo — JST',
    'Australia/Sydney': 'Australia/Sydney — AEST / AEDT',
    'Africa/Nairobi': 'Africa/Nairobi — EAT',
    // Off the whitelist — offset only.
    'Europe/Dublin': 'Europe/Dublin — offset only (IST would collide)',
    'Asia/Jerusalem': 'Asia/Jerusalem — offset only (IST would collide)',
    'Asia/Shanghai': 'Asia/Shanghai — offset only (CST would collide)',
    'America/Sao_Paulo': 'America/Sao_Paulo — offset only',
    'Asia/Tehran': 'Asia/Tehran — offset only, half-hour',
    'Pacific/Chatham': 'Pacific/Chatham — offset only, three-quarter-hour',
  };

  const { Story } = defineMeta({
    title: 'Components/Text elements/LocalDateTime',
    component: LocalDateTime,
    // Shared defaults so the controls panel opens on a known state in every
    // story rather than a column of `undefined`.
    args: {
      display: 'time',
      precision: 'minute',
      showTimeZone: true,
      showYear: true,
      relative: false,
      relativeWithinHours: 24,
    },
    argTypes: {
      datetime: {
        control: 'date',
        description: 'The instant to display. Defaults to now.',
      },
      display: {
        control: 'inline-radio',
        options: ['time', 'date', 'datetime'],
        description:
          'Which parts to print. `precision` and `showTimeZone` go inert under `date`; `showYear` goes inert under `time`.',
      },
      precision: {
        control: 'select',
        options: ['minute', 'second', 'millisecond'],
      },
      showYear: {
        control: 'select',
        options: [true, false, 'auto'],
        description:
          '`true` always prints the year, `false` never, `auto` only when the datetime falls outside the current year. Visual-only — the spoken text always names it.',
      },
      timeZone: {
        options: Object.keys(TIME_ZONE_LABELS),
        control: { type: 'select', labels: TIME_ZONE_LABELS },
        description:
          'IANA zone or the literal `GMT`. Left unset — "Choose option…", the default — the reader’s own zone is detected instead. Pick that entry again to go back to detecting.',
      },
      showTimeZone: { control: 'boolean' },
      relative: { control: 'boolean' },
      relativeWithinHours: {
        control: { type: 'number', min: 0, step: 1 },
        description:
          'How far from now, in hours, a datetime still prints as a duration. Symmetric. Inert unless `relative` is on. `Infinity` is always relative, but isn’t expressible in this control — use a large number here.',
      },
    },
  });
</script>

<!--
  A fixed `datetime` + explicit `timeZone` keep this story deterministic for
  Chromatic — the same instant renders identically on every machine/CI runner.
-->
<Story
  name="Demo"
  args={{
    datetime: new Date('2024-01-15T12:00:00Z'),
    timeZone: 'America/New_York',
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('7:00 a.m. EST')).toBeVisible();
    // The abbreviation is for the eye only; screen readers get this instead.
    await expect(
      canvas.getByText(
        'January 15, 2024 at 7:00 a.m., North American Eastern Standard Time, GMT-5'
      )
    ).toBeInTheDocument();
  }}
/>

<Story
  name="DateOnly"
  args={{
    datetime: new Date('2024-01-15T12:00:00Z'),
    timeZone: 'America/New_York',
    display: 'date',
  }}
  argTypes={{ precision: { control: false }, showTimeZone: { control: false } }}
  parameters={{
    docs: {
      description: {
        story:
          '`display="date"` prints an AP-abbreviated date. `precision` and `showTimeZone` are inert here, so their controls are disabled — AP style never writes `Jan. 15, 2024 EST`. The spoken form spells the month out and names no zone.',
      },
    },
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Jan. 15, 2024')).toBeVisible();
    // Spelled out for the ear, and deliberately zone-less.
    await expect(canvas.getByText('January 15, 2024')).toBeInTheDocument();
  }}
/>

<Story
  name="DateTime"
  args={{
    datetime: new Date('2024-01-15T12:00:00Z'),
    timeZone: 'America/New_York',
    display: 'datetime',
  }}
  parameters={{
    docs: {
      description: {
        story:
          '`display="datetime"` joins the two with `", "` — this library’s documented Reuters style, the same shape `prettifyDate` produces. Every control applies in this mode.',
      },
    },
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText('Jan. 15, 2024, 7:00 a.m. EST')
    ).toBeVisible();
    await expect(
      canvas.getByText(
        'January 15, 2024 at 7:00 a.m., North American Eastern Standard Time, GMT-5'
      )
    ).toBeInTheDocument();
  }}
/>

<Story
  name="Precision"
  args={{ datetime: new Date('2024-01-15T12:00:45.678Z'), timeZone: 'GMT' }}
  argTypes={{ precision: { control: false } }}
  parameters={{
    docs: {
      description: {
        story:
          'Hours+minutes are always shown; `precision` adds seconds or milliseconds. This story hard-codes all three to compare them, so its `precision` control is disabled — the others still drive every row.',
      },
    },
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('12:00 p.m. GMT')).toBeVisible();
    await expect(canvas.getByText('12:00:45 p.m. GMT')).toBeVisible();
    await expect(canvas.getByText('12:00:45.678 p.m. GMT')).toBeVisible();
  }}
>
  {#snippet template(args)}
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li><LocalDateTime {...args} precision="minute" /></li>
      <li><LocalDateTime {...args} precision="second" /></li>
      <li><LocalDateTime {...args} precision="millisecond" /></li>
    </ul>
  {/snippet}
</Story>

<Story
  name="NonUSZone"
  args={{
    datetime: new Date('2024-01-15T12:00:00Z'),
    timeZone: 'Pacific/Chatham',
  }}
  parameters={{
    docs: {
      description: {
        story:
          'A zone that isn’t on the whitelist falls back to a `GMT±offset` string — AP style’s own convention for the rest of the world — rather than guessing an abbreviation.',
      },
    },
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('1:45 a.m. GMT+13:45')).toBeVisible();
    // The offset doubles as the zone's long name here, so it's spoken once.
    await expect(
      canvas.getByText('January 16, 2024 at 1:45 a.m., GMT+13:45')
    ).toBeInTheDocument();
  }}
/>

<Story
  name="CuratedZones"
  args={{ datetime: new Date('2024-01-15T12:00:00Z') }}
  argTypes={{ timeZone: { control: false } }}
  parameters={{
    docs: {
      description: {
        story:
          'A curated set of well-known, unambiguous zones outside North America and Europe also resolve to a real abbreviation instead of a `GMT±offset` string. Each row pins its own `timeZone`, so that control is disabled here.',
      },
    },
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('9:00 p.m. JST')).toBeVisible();
    await expect(canvas.getByText('5:30 p.m. IST')).toBeVisible();
    await expect(canvas.getByText('11:00 p.m. AEDT')).toBeVisible();
  }}
>
  {#snippet template(args)}
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li><LocalDateTime {...args} timeZone="Asia/Tokyo" /></li>
      <li><LocalDateTime {...args} timeZone="Asia/Kolkata" /></li>
      <li><LocalDateTime {...args} timeZone="Australia/Sydney" /></li>
    </ul>
  {/snippet}
</Story>

<Story
  name="Relative"
  args={{ datetime: new Date(Date.now() - 5 * 60 * 1000), relative: true }}
  parameters={{
    docs: {
      description: {
        story:
          'With `relative`, a `datetime` within `relativeWithinHours` of now prints a duration instead of a clock time. This is a one-shot computation against the render instant, not a live-updating clock — nudge the `datetime` control past the window to watch it fall back.',
      },
    },
    // The exact wording depends on the real time Storybook/Chromatic runs,
    // so this story is never visually stable — skip it, same as AutoDetected.
    chromatic: { disable: true },
  }}
/>

<Story
  name="RelativeWideWindow"
  args={{
    datetime: new Date(Date.now() - 72 * 60 * 60 * 1000),
    relative: true,
    relativeWithinHours: 168,
  }}
  parameters={{
    docs: {
      description: {
        story:
          'The 24-hour default is conservative, not a limit — durations stay readable much further out. Widening the window to a week (`relativeWithinHours={168}`) prints “3 days ago” for a datetime the default would have rendered as a clock time. Useful on a live blog.',
      },
    },
    // Wording depends on the real time it renders, like the Relative story.
    chromatic: { disable: true },
  }}
/>

<Story
  name="RelativeFallback"
  args={{
    datetime: new Date('2024-01-15T12:00:00Z'),
    timeZone: 'America/New_York',
    relative: true,
  }}
  parameters={{
    docs: {
      description: {
        story:
          'Beyond the 24-hour window, `relative` falls back to the same AP-style clock time `relative: false` would show — honoring `precision`, `showTimeZone`, and `timeZone` — rather than printing a duration like "700 days ago".',
      },
    },
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('7:00 a.m. EST')).toBeVisible();
  }}
/>

<Story
  name="AutoDetected"
  parameters={{
    docs: {
      description: {
        story:
          'With no `timeZone` prop, the server/first paint render GMT and the client swaps to the reader’s detected zone right after mount.',
      },
    },
    // The rendered zone depends on the machine running Storybook/Chromatic,
    // so this story is never visually stable — skip it, same as ClockWall.
    chromatic: { disable: true },
  }}
/>

<style lang="scss">
  ul {
    font-family: inherit;
    font-size: inherit;
  }
</style>
