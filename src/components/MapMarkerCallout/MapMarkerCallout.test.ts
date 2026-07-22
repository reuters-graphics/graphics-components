import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import { createRawSnippet } from 'svelte';
import MapMarkerCallout from './MapMarkerCallout.svelte';

function snippet(html: string) {
  return createRawSnippet(() => ({ render: () => html }));
}

describe('MapMarkerCallout', () => {
  it('renders above the anchor by default', () => {
    const { body } = render(MapMarkerCallout, {
      props: { children: snippet('New York') },
    });

    expect(body).toContain('New York');
    expect(body).toContain('map-marker-callout');
    expect(body).toContain('placement-above');
    expect(body).toContain('data-placement="above"');
    expect(body).toContain('data-flip="false"');
  });

  it('renders generic snippet content', () => {
    const { body } = render(MapMarkerCallout, {
      props: {
        children: snippet('<strong>Jakarta</strong><span>Population</span>'),
      },
    });

    expect(body).toContain('<strong>Jakarta</strong><span>Population</span>');
  });

  it('supports below placement', () => {
    const { body } = render(MapMarkerCallout, {
      props: { placement: 'below', children: snippet('Below') },
    });

    expect(body).toContain('placement-below');
    expect(body).toContain('data-placement="below"');
  });

  it('supports horizontal flip', () => {
    const { body } = render(MapMarkerCallout, {
      props: { flip: true, children: snippet('Flipped') },
    });

    expect(body).toContain('map-marker-callout placement-above flip');
    expect(body).toContain('data-flip="true"');
  });

  it('hardens unexpected placement and flip inputs to defaults', () => {
    const { body } = render(MapMarkerCallout, {
      props: {
        placement: 'sideways' as never,
        flip: 'yes' as never,
        children: snippet('Safe'),
      },
    });

    expect(body).toContain('data-placement="above"');
    expect(body).toContain('data-flip="false"');
    expect(body).not.toContain('placement-sideways');
  });
});
