<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, within } from 'storybook/test';
  import LoadingDots from './LoadingDots.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/LoadingDots',
    component: LoadingDots,
    args: { message: 'Loading forecast…', colour: '#666' },
    argTypes: { colour: { control: 'color' } },
  });

  async function checkDots({ canvasElement }: { canvasElement: HTMLElement }) {
    const status = within(canvasElement).getByRole('status');
    await expect(status).toHaveTextContent('Loading forecast…');
    await expect(status).not.toHaveAttribute('aria-busy');
    const marks = status.querySelector('.loading-dots__marks')!;
    await expect(marks).toHaveAttribute('aria-hidden', 'true');
    await expect(marks.children).toHaveLength(3);
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    for (const [index, dot] of Array.from(marks.children).entries()) {
      const style = getComputedStyle(dot);
      await expect(style.animationDuration).toBe(reduced ? '0s' : '1.8s');
      if (!reduced) await expect(style.animationDelay).toBe(`${index * 0.18}s`);
    }
  }
</script>

<Story name="Demo" play={checkDots} />
<Story name="Inherited colour" args={{ colour: undefined }} />
