import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import MapStatusOverlay from './MapStatusOverlay.svelte';

describe('MapStatusOverlay', () => {
  it('shows a visible, announced loading message with the logo', () => {
    const { body } = render(MapStatusOverlay, {
      props: { tone: 'loading', message: 'Loading map data…' },
    });

    expect(body).toContain('map-status--loading');
    expect(body.match(/role="status"/g)).toHaveLength(1);
    expect(body).toContain('Loading map data…');
    expect(body).toContain('loading-logo__mark');
    expect(body).not.toContain('role="alert"');
  });

  it('announces an error as an alert without a loading status', () => {
    const { body } = render(MapStatusOverlay, {
      props: {
        tone: 'error',
        message: 'This map is unavailable. Try refreshing the page.',
      },
    });

    expect(body).toContain('map-status--error');
    expect(body.match(/role="alert"/g)).toHaveLength(1);
    expect(body).toContain('This map is unavailable. Try refreshing the page.');
    expect(body).not.toContain('role="status"');
  });
});
