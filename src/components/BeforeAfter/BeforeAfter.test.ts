import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import BeforeAfter from './BeforeAfter.svelte';

describe('BeforeAfter', () => {
  it('renders during SSR without throwing on the DOMRect-initialized offset state', () => {
    // `imgOffset` used to initialize with `new DOMRect()`, which doesn't exist
    // in Node and threw on any SSR render of this component.
    const { body } = render(BeforeAfter, {
      props: {
        beforeSrc: '/before.jpg',
        beforeAlt: 'Before',
        afterSrc: '/after.jpg',
        afterAlt: 'After',
      },
    });

    expect(body).toContain('before-after-container');
  });
});
