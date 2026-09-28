import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import { writable } from 'svelte/store';
import DeckGlOverlay, {
  createDeckPropsSnapshot,
  createDeckPropsUpdate,
  type ForwardedDeckProps,
} from './DeckGlOverlay.svelte';
import { tileMapContextKey } from '../../../components/TileMap/context';
import { getBuildingFillColor, selectBuilding } from './helpers';

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

  it('clears deck.gl options removed from deckProps', () => {
    const onClick = () => undefined;
    const getCursor = () => 'pointer';
    const deckProps: ForwardedDeckProps = { onClick, getCursor };
    const previousDeckProps = createDeckPropsSnapshot(deckProps);

    delete deckProps.onClick;

    expect(createDeckPropsUpdate(previousDeckProps, deckProps)).toEqual({
      onClick: undefined,
      getCursor,
    });
  });

  it('selects, recolors and clears a clicked building', () => {
    const building = { bin: '101', name: 'One Madison' };

    const selected = selectBuilding(null, building);
    expect(selected).toEqual({
      selectedBin: '101',
      status: 'Selected One Madison',
    });
    expect(getBuildingFillColor('101', selected.selectedBin, false)).toEqual([
      244, 176, 41, 255,
    ]);

    const cleared = selectBuilding(selected.selectedBin, building);
    expect(cleared).toEqual({
      selectedBin: null,
      status: 'Selection cleared',
    });
    expect(getBuildingFillColor('101', cleared.selectedBin, false)).toEqual([
      201, 61, 46, 220,
    ]);
  });
});
