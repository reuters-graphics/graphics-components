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
    await expect(getComputedStyle(message).clip).toBe(
      'rect(0px, 0px, 0px, 0px)'
    );
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
<Story name="Dark background" parameters={{ theme: 'dark' }} />

<Story
  name="Boxed logo and text"
  args={{
    message: 'Loading data',
    inline: true,
    showMessage: true,
  }}
>
  {#snippet template(args)}
    <div class="loading-scene">
      <div class="loading-box">
        <LoadingLogo {...args} />
      </div>
    </div>
  {/snippet}
</Story>

<style>
  .loading-scene {
    position: relative;
    min-height: 200px;
    background: var(--neutral-100, #f5f5f5);
  }

  .loading-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    max-width: calc(100% - 2rem);
    padding: 0.4rem 0.75rem;
    background: color-mix(
      in srgb,
      var(--theme-colour-background, #fff) 85%,
      transparent
    );
    text-align: center;
    pointer-events: none;
  }

  @media (max-width: 767px) {
    .loading-box {
      padding: 0.3rem 0.75rem;
    }
  }
</style>
