import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { render } from 'svelte/server';
import ArcDatawrapperColumns from './ArcDatawrapperColumns.svelte';

describe('ArcDatawrapperColumns', () => {
  it('renders the Reuters Arc two-column Datawrapper markup contract', () => {
    const { body } = render(ArcDatawrapperColumns, {
      props: {
        charts: [
          {
            frameTitle: 'Chart one',
            ariaLabel: 'Chart one',
            id: 'dw-1',
            src: 'https://datawrapper.dwcdn.net/abcde/1/',
            height: 470,
          },
          {
            frameTitle: 'Chart two',
            ariaLabel: 'Chart two',
            id: 'dw-2',
            src: 'https://datawrapper.dwcdn.net/fghij/1/',
            height: 470,
          },
        ],
      },
    });

    expect(body).toContain('class="embed--container');
    expect(body).toContain('class="embed--column');
    expect(body).toContain('class="datawrapper ');
    expect(body).toContain('data-chromatic="ignore"');
    expect(body).toContain('data-external="1"');
  });

  it('keeps the bundled datawrapper CSS and message-listener contract in source', () => {
    const source = readFileSync(
      new URL('./ArcDatawrapperColumns.svelte', import.meta.url),
      'utf8'
    );

    expect(source).toContain("'iframe.datawrapper'");
    expect(source).toContain("window.addEventListener('message', frameFiller)");
    expect(source).toContain('.datawrapper {');
    expect(source).toContain('min-width: 100% !important;');
    expect(source).toContain('@media (max-width: 768px)');
  });
});
