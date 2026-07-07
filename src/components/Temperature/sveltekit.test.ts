import { describe, expect, it } from 'vitest';
import { createUnitBootstrapHandle } from './sveltekit';

/** Options accepted by the (stubbed) SvelteKit `resolve`. */
interface ResolveOpts {
  transformPageChunk?: (input: { html: string }) => string;
}

/**
 * Run the handle over a page of HTML with a minimal `resolve` stub that just
 * applies `transformPageChunk` — enough to observe what the handle injects.
 */
function runHandle(html: string, options = {}): string {
  const handle = createUnitBootstrapHandle(options);
  const resolve = (_event: unknown, opts?: ResolveOpts) =>
    opts?.transformPageChunk ? opts.transformPageChunk({ html }) : html;
  // The real Handle resolves to a Response; the stub returns the string so the
  // test can inspect the transformed HTML directly.
  // @ts-expect-error minimal event/resolve stubs for the test
  return handle({ event: {}, resolve }) as string;
}

describe('createUnitBootstrapHandle', () => {
  it('injects the bootstrap <script> before the first </head>', () => {
    const out = runHandle(
      '<html><head><meta charset="utf-8"></head><body></body></html>'
    );
    expect(out).toContain('getTemperatureUnit');
    expect(out.indexOf('<script>')).toBeLessThan(out.indexOf('</head>'));
    // <meta charset> stays first.
    expect(out.indexOf('charset')).toBeLessThan(out.indexOf('<script>'));
  });

  it('injects once even when the page has multiple </head>', () => {
    const out = runHandle('<head></head><head></head>');
    expect(out.match(/<script>/g)?.length).toBe(1);
  });

  it('leaves HTML without a </head> untouched', () => {
    expect(runHandle('<div>no head</div>')).toBe('<div>no head</div>');
  });

  it('embeds a custom Fahrenheit region list from options', () => {
    const out = runHandle('<head></head>', {
      fahrenheitRegions: new Set(['GB']),
    });
    expect(out).toContain('"GB": 1');
  });
});
