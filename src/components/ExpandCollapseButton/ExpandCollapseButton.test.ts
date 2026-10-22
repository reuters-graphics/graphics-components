import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import ExpandCollapseButton from './ExpandCollapseButton.svelte';

describe('ExpandCollapseButton', () => {
  it('renders the expand label and collapsed state with defaults', () => {
    const { body } = render(ExpandCollapseButton, {
      props: {
        expanded: false,
        controls: 'about-copy',
        ontoggle: () => {},
      },
    });

    expect(body).toContain('aria-expanded="false"');
    expect(body).toContain('aria-controls="about-copy"');
    expect(body).toContain('>Read more</button>');
  });

  it('renders the collapse label and expanded state', () => {
    const { body } = render(ExpandCollapseButton, {
      props: {
        expanded: true,
        controls: 'about-copy',
        expandLabel: 'Show details',
        collapseLabel: 'Hide details',
        ontoggle: () => {},
      },
    });

    expect(body).toContain('aria-expanded="true"');
    expect(body).toContain('>Hide details</button>');
    expect(body).not.toContain('>Show details</button>');
  });
});
