import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import Toggle from './Toggle.svelte';

describe('Toggle', () => {
  const options = [
    { value: 'summary', label: 'Summary' },
    { value: 'detail', label: 'Detail' },
  ];

  it('renders a native radio group with the selected value checked', () => {
    const { body } = render(Toggle, {
      props: {
        options,
        value: 'detail',
        legend: 'Choose table view',
        onselect: () => {},
        name: 'table-view',
      },
    });

    expect(body).toMatch(/<fieldset class="[^"]*toggle/);
    expect(body).toMatch(
      /<legend class="[^"]*visually-hidden[^"]*">Choose table view<\/legend>/
    );
    expect(body).toContain('type="radio"');
    expect(body).toContain('name="table-view"');
    expect(body).toContain('value="summary"');
    const detailInput = body.match(/<input[^>]*\bvalue="detail"[^>]*>/)?.[0];
    expect(detailInput).toContain('checked');
  });

  it('uses slash dividers that are hidden from assistive technology', () => {
    const { body } = render(Toggle, {
      props: {
        options,
        value: 'summary',
        legend: 'Choose table view',
        onselect: () => {},
      },
    });

    expect(body).toMatch(
      /<span class="[^"]*toggle__divider[^"]*" aria-hidden="true">\/<\/span>/
    );
  });
});
