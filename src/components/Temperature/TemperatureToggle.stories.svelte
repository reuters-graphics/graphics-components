<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, userEvent, within, waitFor } from 'storybook/test';
  import TemperatureToggle from './TemperatureToggle.svelte';
  import Temperature from './Temperature.svelte';

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
