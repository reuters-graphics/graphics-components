<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, userEvent, within, waitFor } from 'storybook/test';
  import TemperatureToggle from './TemperatureToggle.svelte';
  import Temperature from './Temperature.svelte';
  import type { TemperatureUnit } from './units';

  const { Story } = defineMeta({
    title: 'Components/Controls/TemperatureToggle',
    component: TemperatureToggle,
  });
</script>

<!--
  The toggle flips the shared unit state and persists the choice. Any
  `Temperature` on the page — and any cross-bundle listener on the
  `temperature-unit-changed` window event — updates in lock-step.
-->
<Story
  asChild
  name="Demo"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch');

    // Start from a known unit so the assertions below aren't at the mercy of
    // the reader's locale/timezone-based default.
    if (toggle.getAttribute('aria-checked') !== 'false') {
      await userEvent.click(toggle);
      await waitFor(() =>
        expect(toggle).toHaveAttribute('aria-checked', 'false')
      );
    }
    await waitFor(() => expect(canvas.getByText('26.7°C')).toBeVisible());

    // Click flips celsius -> fahrenheit across every observable surface.
    await userEvent.click(toggle);

    await waitFor(() => expect(toggle).toHaveAttribute('aria-checked', 'true'));
    await waitFor(() => expect(canvas.getByText('80.1°F')).toBeVisible());
    expect(document.documentElement.getAttribute('data-temp-unit')).toBe(
      'fahrenheit'
    );
    expect(window.localStorage.getItem('temperature-unit')).toBe('fahrenheit');

    // Click again flips fahrenheit -> celsius, proving the round trip.
    await userEvent.click(toggle);

    await waitFor(() =>
      expect(toggle).toHaveAttribute('aria-checked', 'false')
    );
    await waitFor(() => expect(canvas.getByText('26.7°C')).toBeVisible());
    expect(document.documentElement.getAttribute('data-temp-unit')).toBe(
      'celsius'
    );
    expect(window.localStorage.getItem('temperature-unit')).toBe('celsius');
  }}
>
  <div style="display: flex; align-items: center; gap: 16px;">
    <TemperatureToggle />
    <span style="font-size: 20px;">
      <Temperature celsius={26.7} digits={1} />
    </span>
  </div>
</Story>

<Story
  asChild
  name="WithPreHook"
  parameters={{
    docs: {
      description: {
        story:
          'Pass `onbeforetoggle` to run your own logic **before** the unit state commits. Useful for pre-syncing external renderers such as charts or maps.',
      },
    },
  }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch');
    const log = canvas.getByTestId('hook-log');

    // Start from celsius.
    if (toggle.getAttribute('aria-checked') !== 'false') {
      await userEvent.click(toggle);
      await waitFor(() =>
        expect(toggle).toHaveAttribute('aria-checked', 'false')
      );
    }

    // Click: the pre-hook message should appear before the toggle state
    // reflects, and the final unit should match what the hook received.
    await userEvent.click(toggle);
    await waitFor(() => expect(toggle).toHaveAttribute('aria-checked', 'true'));
    expect(log.textContent).toContain('next=fahrenheit');
  }}
>
  {#snippet children()}
    {@const hookLog = { text: '' }}
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <TemperatureToggle
        onbeforetoggle={(next: TemperatureUnit) => {
          // This callback fires before state.set(next).
          // In a real app you might call:
          //   map.setLayoutProperty('temperature-layer', 'text-field', next === 'fahrenheit' ? '{temp_f}' : '{temp_c}');
          hookLog.text = `onbeforetoggle called — next=${next}`;
        }}
      />
      <p
        data-testid="hook-log"
        style="font-family: monospace; font-size: 12px; color: #555;"
      >
        {hookLog.text || '(click the toggle to see the pre-hook log)'}
      </p>
    </div>
  {/snippet}
</Story>
