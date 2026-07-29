<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, userEvent, within } from 'storybook/test';
  import Toggle, { type ToggleOption } from './Toggle.svelte';

  const { Story } = defineMeta({
    title: 'Components/Controls/Toggle',
    component: Toggle,
    tags: ['autodocs'],
  });

  const options: ToggleOption[] = [
    { value: 'summary', label: 'Summary' },
    { value: 'detail', label: 'Detail' },
  ];

  const threeOptions: ToggleOption[] = [
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
  ];

  // The control is built on real radios, so selection state is exposed to
  // assistive tech (and to this test) without any ARIA bookkeeping.
  async function selectionPlay({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }) {
    const canvas = within(canvasElement);
    const summary = canvas.getByLabelText('Summary');
    const detail = canvas.getByLabelText('Detail');

    expect(summary).toBeChecked();
    expect(detail).not.toBeChecked();

    await userEvent.click(detail);
    expect(detail).toBeChecked();
    expect(summary).not.toBeChecked();
  }
</script>

<script lang="ts">
  // Story-local selection state: the toggle is controlled, so the story owns
  // the value the way a real page would.
  let selected = $state('summary');
  let range = $state('day');
</script>

<!--
  Compact segmented control for choosing one option from a small set. Built on
  native radio inputs, so it gets keyboard navigation and selected-state
  announcements without hand-rolled ARIA.
-->
<Story name="Default" play={selectionPlay}>
  {#snippet template()}
    <Toggle
      {options}
      value={selected}
      legend="Choose table density"
      onselect={(value) => (selected = value)}
    />
  {/snippet}
</Story>

<Story name="Three options">
  {#snippet template()}
    <Toggle
      options={threeOptions}
      value={range}
      legend="Choose time range"
      onselect={(value) => (range = value)}
    />
  {/snippet}
</Story>
