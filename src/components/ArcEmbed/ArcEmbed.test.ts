import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { render } from 'svelte/server';
import { createRawSnippet } from 'svelte';
import ArcEmbed from './ArcEmbed.svelte';
import ArcHeader from './ArcHeader.svelte';
import ArcKicker from './ArcKicker.svelte';
import ArcFonts from './ArcFonts.svelte';

function snippet(html: string) {
  return createRawSnippet(() => ({ render: () => html }));
}

describe('ArcEmbed', () => {
  it('sets a fixed stage height and CSS variable for pre-hydration layout', () => {
    const { body } = render(ArcEmbed, {
      props: {
        stageHeight: 360,
        header: snippet('<h1>Header</h1>'),
        stage: snippet(
          '<svg viewBox="0 0 640 360"><rect width="640" height="360" /></svg>'
        ),
      },
    });

    expect(body).toMatch(/class="[^"]*arc-embed-stage-wrapper/);
    expect(body).toContain(
      'style="height: 360px; --arc-embed-stage-height: 360px;"'
    );
    expect(body).toContain('viewBox="0 0 640 360"');
  });

  it('sizes direct child staged SVGs without explicit dimensions to prevent layout flashes', () => {
    const source = readFileSync(
      new URL('./ArcEmbed.svelte', import.meta.url),
      'utf8'
    );

    // Svelte's server render output does not include component-scoped SCSS, so
    // assert this specific selector contract in source to catch regressions.
    expect(source).toContain('> :global(svg:not([width]))');
    expect(source).toContain('width: 100%;');
    expect(source).toContain('> :global(svg:not([height]))');
    expect(source).toContain('height: 100%;');
  });

  it('does not disable viewport zooming', () => {
    const { head } = render(ArcEmbed, {
      props: {
        header: snippet('<h1>Header</h1>'),
        stage: snippet('<div>Stage</div>'),
      },
    });

    expect(head).toContain('width=device-width, initial-scale=1.0');
    expect(head).not.toContain('maximum-scale=1');
    expect(head).not.toContain('user-scalable=no');
  });

  it('renders optional footer content', () => {
    const { body } = render(ArcEmbed, {
      props: {
        header: snippet('<h1>Header</h1>'),
        stage: snippet('<div>Stage</div>'),
        footer: snippet('<p>Caption and source</p>'),
      },
    });

    expect(body).toMatch(/class="[^"]*arc-embed-footer/);
    expect(body).toContain('Caption and source');
  });

  it('loads the ArcKnowledge font automatically so consumers do not add ArcFonts themselves', () => {
    const { head } = render(ArcEmbed, {
      props: {
        header: snippet('<h1>Header</h1>'),
        stage: snippet('<div>Stage</div>'),
      },
    });

    expect(head).toContain("font-family: 'ArcKnowledge';");
    expect(head).toContain(
      'https://graphics.thomsonreuters.com/arc-assets/fonts/knowledge-arc/knowledge-regular.woff2'
    );
  });
});

describe('ArcHeader and ArcKicker', () => {
  it('renders a linked kicker through the focused ArcKicker subcomponent', () => {
    const { body } = render(ArcHeader, {
      props: {
        kicker: 'Climate',
        kickerUrl: 'https://www.reuters.com/sustainability/',
        headline: 'A fully configured embed',
        headlineUrl: 'https://www.reuters.com/graphics/example/',
        dek: 'A dek explains what readers can do in the embed.',
        children: snippet('<button type="button">Search places</button>'),
      },
    });

    expect(body).toMatch(/class="[^"]*arc-kicker/);
    expect(body).toContain('href="https://www.reuters.com/sustainability/"');
    expect(body).toContain('target="_blank"');
    expect(body).toContain('rel="noopener noreferrer"');
    expect(body).toContain('A fully configured embed');
    expect(body).toContain('A dek explains what readers can do in the embed.');
    expect(body).toContain('Search places');
  });

  it('renders an unlinked kicker as text', () => {
    const { body } = render(ArcKicker, {
      props: { kicker: 'Graphics' },
    });

    expect(body).toMatch(/<span class="[^"]*arc-kicker[^"]*">Graphics<\/span>/);
    expect(body).not.toContain('<a class="arc-kicker');
  });

  it('gives the linked kicker chevron intrinsic SVG dimensions', () => {
    const { body } = render(ArcKicker, {
      props: { kicker: 'Graphics', href: 'https://www.reuters.com/graphics/' },
    });

    expect(body).toMatch(/class="[^"]*chevron/);
    expect(body).toContain('width="15"');
    expect(body).toContain('height="9"');
    expect(body).toContain('viewBox="0 0 15 9"');
  });

  it('renders a plain headline with no anchor when headlineUrl is omitted', () => {
    const { body } = render(ArcHeader, {
      props: { headline: 'An unlinked headline' },
    });

    expect(body).toMatch(
      /<h2 class="[^"]*arc-headline[^"]*">An unlinked headline<\/h2>/
    );
    expect(body).not.toContain('<a');
  });

  it('omits the kicker entirely when no kicker is provided', () => {
    const { body } = render(ArcHeader, {
      props: { headline: 'Headline only' },
    });

    expect(body).not.toContain('arc-kicker');
  });
});

describe('ArcFonts', () => {
  it('injects the ArcKnowledge @font-face at all three weights from the graphics CDN', () => {
    const { head } = render(ArcFonts);

    expect(head).toContain("font-family: 'ArcKnowledge';");
    expect(head).toContain(
      'https://graphics.thomsonreuters.com/arc-assets/fonts/knowledge-arc/knowledge-regular.woff2'
    );
    expect(head).toContain(
      'https://graphics.thomsonreuters.com/arc-assets/fonts/knowledge-arc/knowledge-medium.woff2'
    );
    expect(head).toContain(
      'https://graphics.thomsonreuters.com/arc-assets/fonts/knowledge-arc/knowledge-bold.woff2'
    );
    expect(head).toContain('font-weight: 400;');
    expect(head).toContain('font-weight: 500;');
    expect(head).toContain('font-weight: 700;');
  });
});
