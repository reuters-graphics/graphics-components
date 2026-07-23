import { describe, expect, it } from 'vitest';
import { render } from 'svelte/server';
import TileMapCallout, {
  DEFAULT_TILE_MAP_CALLOUT_DOT_RADIUS,
  DEFAULT_TILE_MAP_CALLOUT_LEADER_HEIGHT,
  DEFAULT_TILE_MAP_CALLOUT_LEADER_WIDTH,
  normalizeTileMapCalloutCoordinates,
  normalizeTileMapCalloutDimension,
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

  it('defaults the leader geometry to the local-callout values', () => {
    expect(DEFAULT_TILE_MAP_CALLOUT_LEADER_WIDTH).toBe(14);
    expect(DEFAULT_TILE_MAP_CALLOUT_LEADER_HEIGHT).toBe(14);
    expect(DEFAULT_TILE_MAP_CALLOUT_DOT_RADIUS).toBe(3);
  });

  it('normalizes geometry dimensions to a non-negative finite number', () => {
    expect(normalizeTileMapCalloutDimension(20, 14)).toBe(20);
    expect(normalizeTileMapCalloutDimension(0, 14)).toBe(0);
    expect(normalizeTileMapCalloutDimension(-5, 14)).toBe(14);
    expect(normalizeTileMapCalloutDimension(Number.NaN, 14)).toBe(14);
    expect(normalizeTileMapCalloutDimension(Number.POSITIVE_INFINITY, 14)).toBe(
      14
    );
    expect(normalizeTileMapCalloutDimension('32', 14)).toBe(14);
    expect(normalizeTileMapCalloutDimension(undefined, 3)).toBe(3);
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
