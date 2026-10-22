<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, waitFor, within } from 'storybook/test';
  import MapWithLegend from './MapWithLegend.svelte';

  const { Story } = defineMeta({
    title: 'Compositions/Map with a legend',
    parameters: {
      controls: { disable: true },
      // The map uses live basemap tiles, so its pixels are not stable.
      chromatic: { disable: true },
    },
  });

  async function verifyDataLoading({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }) {
    const canvas = within(canvasElement);
    const loadingMessage = 'Loading wildfire data…';

    await expect(await canvas.findByText(loadingMessage)).toBeVisible();
    await waitFor(
      () => expect(canvas.queryByText(loadingMessage)).not.toBeInTheDocument(),
      { timeout: 5000 }
    );
    await expect(canvas.getByText('Burned area')).toBeInTheDocument();
    await expect(
      canvas.getByText('Active fire detections')
    ).toBeInTheDocument();
  }
</script>

<Story
  asChild
  name="Wildfire map"
  exportName="WildfireMap"
  play={verifyDataLoading}
>
  <MapWithLegend />
</Story>
