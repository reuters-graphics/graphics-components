<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, within } from 'storybook/test';
  import LoadingStatus from './LoadingStatus.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/LoadingStatus',
    component: LoadingStatus,
    args: { message: 'Loading chart data…' },
    argTypes: {
      colour: { control: 'color' },
      markColour: { control: 'color' },
    },
  });

  async function checkBlock({ canvasElement }: { canvasElement: HTMLElement }) {
    const status = within(canvasElement).getByRole('status');
    await expect(status).toHaveTextContent('Loading chart data…');
    await expect(status).not.toHaveAttribute('aria-busy');
    const message = status.querySelector('.loading-status__message')!;
    await expect(getComputedStyle(message).clipPath).toBe('inset(50%)');
    const mark = status.querySelector('.loading-status__mark')!;
    await expect(getComputedStyle(mark).width).toBe('32px');
    await expect(getComputedStyle(mark).animationDuration).toBe(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ?
        '0s'
      : '8s'
    );
    await expect(mark.querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  }
</script>

<script lang="ts">
  import LoadingDots from '../LoadingDots/LoadingDots.svelte';
</script>

<Story name="Block" play={checkBlock} />
<Story name="Inline" args={{ message: 'Loading…', inline: true }} />
<Story
  name="With map label"
  args={{
    message: "Loading today's forecast…",
    inline: true,
    showMessage: true,
  }}
/>
<Story
  name="Dark background"
  parameters={{ theme: 'dark' }}
  args={{ showMessage: true, colour: '#b8b8b8', markColour: '#b8b8b8' }}
/>

<Story name="Loading family" asChild>
  <div class="family">
    <section>
      <h2>Chart or table</h2>
      <div class="chart-slot">
        <LoadingStatus message="Loading monthly history…" />
      </div>
    </section>
    <section>
      <h2>Map</h2>
      <div class="map-slot">
        <div class="map-label">
          <LoadingStatus
            message="Loading today's forecast…"
            inline
            showMessage
          />
        </div>
      </div>
    </section>
    <section>
      <h2>Callout</h2>
      <div class="callout" role="status" aria-atomic="true">
        <strong>New York</strong>
        <LoadingDots
          message="Loading New York forecast…"
          announce={false}
          colour="#666"
        />
      </div>
    </section>
  </div>
</Story>

<style>
  .family {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
  section {
    margin-bottom: 1.5rem;
  }
  h2 {
    margin: 0 0 0.5rem;
    font-size: 0.875rem;
  }
  .chart-slot,
  .map-slot {
    display: grid;
    place-items: center;
    min-height: 180px;
  }
  .map-slot {
    background: #edf0ed;
  }
  .map-label {
    padding: 0.75rem 1rem;
    background: rgb(255 255 255 / 85%);
  }
  .callout {
    display: grid;
    justify-items: start;
    gap: 0.25rem;
  }
</style>
