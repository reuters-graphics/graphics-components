<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, userEvent, waitFor, within } from 'storybook/test';
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

    await waitFor(() => expect(status).toHaveTextContent('Overlay attached'), {
      timeout: 5000,
    });

    await userEvent.click(
      canvas.getByRole('button', { name: 'Change colour' })
    );
    await expect(status).toHaveTextContent('Overlay updated');

    await userEvent.click(
      canvas.getByRole('button', { name: 'Remove buildings' })
    );
    await expect(status).toHaveTextContent('Overlay removed');

    await userEvent.click(
      canvas.getByRole('button', { name: 'Add buildings' })
    );
    await waitFor(() => expect(status).toHaveTextContent('Overlay attached'), {
      timeout: 5000,
    });
  }
</script>

<Story
  asChild
  name="Late-mounted buildings"
  exportName="LateMountedBuildings"
  play={verifyLateMount}
>
  <DeckGlOverlayMap />
</Story>
