<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, within } from 'storybook/test';
  import LoadingLogo from './LoadingLogo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/LoadingLogo',
    component: LoadingLogo,
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
    const message = status.querySelector('.loading-logo__message')!;
    await expect(getComputedStyle(message).clipPath).toBe('inset(50%)');
    const mark = status.querySelector('.loading-logo__mark')!;
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

<Story name="Block" play={checkBlock} />
<Story name="Inline" args={{ message: 'Loading…', inline: true }} />
<Story
  name="Dark background"
  parameters={{ theme: 'dark' }}
  args={{ showMessage: true, colour: '#b8b8b8', markColour: '#b8b8b8' }}
/>
