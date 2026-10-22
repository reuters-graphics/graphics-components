import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import InfoBox from './InfoBox.svelte';

describe('InfoBox expandable content', () => {
  it('renders the collapsed preview and hides the remaining text', () => {
    const { body } = render(InfoBox, {
      props: {
        text: 'Preview paragraph.\n\nAdditional details.',
        collapsedText: 'Preview paragraph.',
      },
    });

    expect(body).toContain('Preview paragraph.');
    expect(body).not.toContain('Additional details.');
    expect(body).toContain('aria-expanded="false"');
    expect(body).toContain('>Read more</button>');
  });

  it('connects the expand button to the collapsed body', () => {
    const { body } = render(InfoBox, {
      props: {
        text: 'Full text.',
        collapsedText: 'Preview text.',
      },
    });
    const controlsId = body.match(/aria-controls="([^"]+)"/)?.[1];

    expect(controlsId).toBeDefined();
    expect(body).toContain(`id="${controlsId}"`);
  });

  it('does not render an expand button without a distinct preview', () => {
    const { body } = render(InfoBox, {
      props: {
        text: 'Complete text.',
        collapsedText: 'Complete text.',
      },
    });

    expect(body).toContain('Complete text.');
    expect(body).not.toContain('aria-controls=');
    expect(body).not.toContain('Read more');
  });
});
