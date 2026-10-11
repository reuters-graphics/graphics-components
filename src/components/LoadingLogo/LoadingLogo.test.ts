import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import LoadingLogo from './LoadingLogo.svelte';
import LoadingDots from '../LoadingDots/LoadingDots.svelte';

describe('loading announcements', () => {
  for (const [name, component] of [
    ['LoadingLogo', LoadingLogo],
    ['LoadingDots', LoadingDots],
  ] as const) {
    it(`${name} renders one status with escaped descriptive text`, () => {
      const { body } = render(component, {
        props: { message: 'Loading <forecast> & history…' },
      });
      expect(body.match(/role="status"/g)).toHaveLength(1);
      expect(body).toContain('aria-atomic="true"');
      expect(body).toContain('Loading &lt;forecast> &amp; history…');
      expect(body).toContain('aria-hidden="true"');
      expect(body).not.toContain('aria-busy');
    });

    it(`${name} defers announcements to a parent without losing the message`, () => {
      const { body } = render(component, {
        props: { message: 'Loading history…', announce: false },
      });
      expect(body).not.toContain('role="status"');
      expect(body).not.toContain('aria-atomic');
      expect(body).toContain('Loading history…');
    });
  }

  it('allows a visible inline label and separate mark and text colours', () => {
    const { body } = render(LoadingLogo, {
      props: {
        message: 'Loading forecast…',
        inline: true,
        showMessage: true,
        colour: '#eee',
        markColour: '#bbb',
      },
    });
    expect(body).not.toContain('loading-logo--block');
    expect(body).not.toContain('sr-only');
    expect(body).toContain('color: #eee');
    expect(body).toContain('--logoColour: #bbb');
  });
});
