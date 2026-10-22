<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, userEvent, within } from 'storybook/test';
  import ExpandCollapseButton from './ExpandCollapseButton.svelte';

  const { Story } = defineMeta({
    title: 'Components/Controls/ExpandCollapseButton',
    component: ExpandCollapseButton,
    tags: ['autodocs'],
  });
</script>

<script lang="ts">
  let expanded = $state(false);
</script>

<Story
  asChild
  name="Demo"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const readMore = canvas.getByRole('button', { name: 'Read more' });

    await expect(readMore).toHaveAttribute('aria-expanded', 'false');
    await expect(readMore).toHaveAttribute('aria-controls', 'example-content');
    await userEvent.click(readMore);

    const showLess = canvas.getByRole('button', { name: 'Show less' });
    await expect(showLess).toHaveAttribute('aria-expanded', 'true');
    await expect(
      canvas.getByText('Additional details are now visible.')
    ).toBeVisible();
    await userEvent.click(showLess);

    await expect(
      canvas.getByRole('button', { name: 'Read more' })
    ).toHaveAttribute('aria-expanded', 'false');
  }}
>
  <div class="demo">
    <ExpandCollapseButton
      {expanded}
      controls="example-content"
      ontoggle={() => (expanded = !expanded)}
    />
    <p id="example-content" hidden={!expanded}>
      Additional details are now visible.
    </p>
  </div>
</Story>

<style>
  .demo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    min-height: 8rem;
    padding: 1.5rem;
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }
</style>
