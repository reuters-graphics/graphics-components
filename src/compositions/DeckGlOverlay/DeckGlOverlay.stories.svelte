<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import {
    expect,
    fireEvent,
    userEvent,
    waitFor,
    within,
  } from 'storybook/test';
  import AnimatedBuildingHistory from './demo/AnimatedBuildingHistory.svelte';
  import DeckGlOverlayMap from './demo/DeckGlOverlayMap.svelte';

  const { Story } = defineMeta({
    title: 'Compositions/Deck.gl overlay',
    parameters: {
      controls: { disable: true },
      chromatic: { delay: 2500 },
    },
  });

  async function verifyLateMount({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }) {
    const canvas = within(canvasElement);
    const status = canvas.getByTestId('overlay-status');

    await waitFor(
      () => expect(status).toHaveAttribute('data-overlay-attachments', '1'),
      { timeout: 5000 }
    );

    const initialUpdates = Number(status.dataset.overlayUpdates);

    await userEvent.click(
      canvas.getByRole('button', { name: 'Change colour' })
    );
    await expect(status).toHaveTextContent('Overlay updated');
    await expect(status).toHaveAttribute('data-building-colour', 'blue');
    await waitFor(
      () =>
        expect(status).toHaveAttribute(
          'data-overlay-updates',
          String(initialUpdates + 1)
        ),
      { timeout: 5000 }
    );
    await expect(status).toHaveAttribute('data-overlay-attachments', '1');

    await userEvent.click(
      canvas.getByRole('button', { name: 'Disable selection' })
    );
    await expect(status).toHaveTextContent('Building selection disabled');
    await expect(status).toHaveAttribute('data-overlay-attachments', '1');

    await userEvent.click(
      canvas.getByRole('button', { name: 'Enable selection' })
    );
    await expect(status).toHaveTextContent('Building selection enabled');
    await expect(status).toHaveAttribute('data-overlay-attachments', '1');

    await userEvent.click(
      canvas.getByRole('button', { name: 'Remove buildings' })
    );
    await expect(status).toHaveTextContent('Overlay removed');
    await waitFor(
      () => expect(status).toHaveAttribute('data-overlay-removals', '1'),
      { timeout: 5000 }
    );

    await userEvent.click(
      canvas.getByRole('button', { name: 'Add buildings' })
    );
    await waitFor(() => expect(status).toHaveTextContent('Overlay attached'), {
      timeout: 5000,
    });
    await expect(status).toHaveAttribute('data-overlay-attachments', '2');
  }

  async function verifyAnimatedHistory({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }) {
    const canvas = within(canvasElement);
    const status = canvas.getByTestId('animation-status');

    await waitFor(
      () => expect(status).toHaveAttribute('data-overlay-attachments', '1'),
      { timeout: 5000 }
    );

    const initialUpdates = Number(status.dataset.overlayUpdates);
    const slider = canvas.getByRole('slider', { name: 'Construction year' });
    await fireEvent.input(slider, { target: { value: '1' } });

    await expect(canvas.getByTestId('animation-year')).toHaveTextContent(
      '1850'
    );
    await waitFor(
      () =>
        expect(Number(status.dataset.overlayUpdates)).toBeGreaterThan(
          initialUpdates
        ),
      { timeout: 5000 }
    );
    await expect(status).toHaveAttribute('data-overlay-attachments', '1');

    await userEvent.click(canvas.getByRole('button', { name: 'Play' }));
    await expect(canvas.getByRole('button', { name: 'Pause' })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Pause' }));
    await expect(canvas.getByRole('button', { name: 'Play' })).toBeVisible();

    await userEvent.click(canvas.getByRole('button', { name: 'Restart' }));
    await expect(canvas.getByTestId('animation-year')).toHaveTextContent(
      '1846'
    );
    await expect(status).toHaveAttribute('data-overlay-attachments', '1');
  }
</script>

<Story
  asChild
  name="Interactive building overlay"
  exportName="InteractiveBuildingOverlay"
  play={verifyLateMount}
>
  <DeckGlOverlayMap />
</Story>

<Story
  asChild
  name="Animated building history"
  exportName="AnimatedBuildingHistory"
  play={verifyAnimatedHistory}
>
  <AnimatedBuildingHistory />
</Story>
