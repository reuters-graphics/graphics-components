import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import TileMapCallout, {
  normalizeTileMapCalloutCoordinates,
  normalizeTileMapCalloutFlip,
  normalizeTileMapCalloutPlacement,
} from './TileMapCallout.svelte';

describe('TileMapCallout helpers', () => {
  it('normalizes placement values', () => {
    expect(normalizeTileMapCalloutPlacement('below')).toBe('below');
    expect(normalizeTileMapCalloutPlacement(' ABOVE ')).toBe('above');
    expect(normalizeTileMapCalloutPlacement('sideways')).toBe('above');
    expect(normalizeTileMapCalloutPlacement(null)).toBe('above');
  });

  it('normalizes flip values', () => {
    expect(normalizeTileMapCalloutFlip(true)).toBe(true);
    expect(normalizeTileMapCalloutFlip(false)).toBe(false);
    expect(normalizeTileMapCalloutFlip('true')).toBe(false);
  });

  it('accepts common longitude/latitude shapes', () => {
    expect(normalizeTileMapCalloutCoordinates([-73.9868, 40.7567])).toEqual([
      -73.9868, 40.7567,
    ]);
    expect(
      normalizeTileMapCalloutCoordinates({ lng: -73.9868, lat: 40.7567 })
    ).toEqual([-73.9868, 40.7567]);
    expect(
      normalizeTileMapCalloutCoordinates({ lon: -73.9868, lat: 40.7567 })
    ).toEqual([-73.9868, 40.7567]);
    expect(
      normalizeTileMapCalloutCoordinates({
        longitude: -73.9868,
        latitude: 40.7567,
      })
    ).toEqual([-73.9868, 40.7567]);
  });

  it('rejects missing or non-finite coordinates', () => {
    expect(normalizeTileMapCalloutCoordinates([Number.NaN, 40])).toBeNull();
    expect(normalizeTileMapCalloutCoordinates({ lng: -73.9 })).toBeNull();
    expect(normalizeTileMapCalloutCoordinates('Times Square')).toBeNull();
  });
});

describe('TileMapCallout component', () => {
  it('requires TileMap context', () => {
    expect(() => {
      const result = render(TileMapCallout, {
        props: { lngLat: [-73.9868, 40.7567] },
      });
      expect(result.body).toBeDefined();
    }).toThrow('TileMapCallout must be used inside a TileMap component');
  });
});
