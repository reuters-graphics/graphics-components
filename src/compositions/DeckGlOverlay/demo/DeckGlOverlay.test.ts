import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import { writable } from 'svelte/store';
import DeckGlOverlay from './DeckGlOverlay.svelte';
import { tileMapContextKey } from '../../../components/TileMap/context';

describe('DeckGlOverlay composition', () => {
  it('requires TileMap context', () => {
    expect(() => {
      const result = render(DeckGlOverlay, { props: { layers: [] } });
      expect(result.body).toBeDefined();
    }).toThrow('DeckGlOverlay must be used inside a TileMap component');
  });

  it('can initialize before its parent map is ready', () => {
    const result = render(DeckGlOverlay, {
      props: { layers: [] },
      context: new Map([
        [tileMapContextKey, { map: writable(null), ready: writable(false) }],
      ]),
    });

    expect(result.body).toBe('<!--[--><!--]-->');
  });
});
