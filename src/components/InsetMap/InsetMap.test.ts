import { describe, expect, it } from 'vitest';
import type { ComponentProps } from 'svelte';
import { render } from 'svelte/server';
import type { Feature, Geometry, GeoJsonProperties, Polygon } from 'geojson';
import InsetMap, {
  findCountryFeature,
  getLargestPolygonGeometry,
  avoidPointCollisions,
  getAnnotationLabelOffset,
  applyLabelOffset,
} from './InsetMap.svelte';

const spain: Feature<Geometry, GeoJsonProperties> = {
  type: 'Feature',
  id: '724',
  properties: { name: 'Spain' },
  geometry: { type: 'Point', coordinates: [-3.7, 40.4] },
};

const france: Feature<Geometry, GeoJsonProperties> = {
  type: 'Feature',
  id: '250',
  properties: { name: 'France' },
  geometry: { type: 'Point', coordinates: [2.2, 46.2] },
};

const countries = [spain, france];

describe('findCountryFeature', () => {
  it('matches by name, case-insensitively and trimmed', () => {
    expect(findCountryFeature(countries, 'Spain')).toBe(spain);
    expect(findCountryFeature(countries, ' spain ')).toBe(spain);
    expect(findCountryFeature(countries, 'SPAIN')).toBe(spain);
  });

  it('matches by ISO 3166-1 numeric id', () => {
    expect(findCountryFeature(countries, '250')).toBe(france);
  });

  it('returns null for an unknown country or missing input', () => {
    expect(findCountryFeature(countries, 'Atlantis')).toBeNull();
    expect(findCountryFeature(countries, undefined)).toBeNull();
    expect(findCountryFeature(countries, '')).toBeNull();
  });
});

describe('getLargestPolygonGeometry', () => {
  // Rings follow the GeoJSON right-hand rule (exterior rings wind clockwise
  // when plotted lng=x/lat=y) so d3-geo's geoArea reads their true area
  // instead of the sphere's complement.
  const smallIsland = [
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
  ];
  const mainland = [
    [
      [10, 10],
      [10, 20],
      [20, 20],
      [20, 10],
      [10, 10],
    ],
  ];

  it('picks the larger ring out of a MultiPolygon', () => {
    const result = getLargestPolygonGeometry({
      type: 'MultiPolygon',
      coordinates: [smallIsland, mainland],
    });

    expect(result).toEqual({ type: 'Polygon', coordinates: mainland });
  });

  it('unwraps a Feature<MultiPolygon> the same way', () => {
    const result = getLargestPolygonGeometry({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'MultiPolygon',
        coordinates: [smallIsland, mainland],
      },
    });

    expect(result).toEqual({ type: 'Polygon', coordinates: mainland });
  });

  it('passes non-MultiPolygon input through unchanged', () => {
    const polygon: Polygon = {
      type: 'Polygon',
      coordinates: [
        [
          [0, 0],
          [0, 1],
          [1, 1],
          [0, 0],
        ],
      ],
    };
    expect(getLargestPolygonGeometry(polygon)).toBe(polygon);
  });
});

describe('avoidPointCollisions', () => {
  it('leaves the position alone when nothing is nearby', () => {
    expect(avoidPointCollisions([50, 50], [{ x: 0, y: 0 }], 10)).toEqual([
      50, 50,
    ]);
  });

  it('nudges away from a colliding obstacle to a clear spot', () => {
    const result = avoidPointCollisions([50, 50], [{ x: 50, y: 50 }], 10);
    expect(result).not.toEqual([50, 50]);
    expect(Math.hypot(result[0] - 50, result[1] - 50)).toBeCloseTo(10);
  });

  it('falls back to the original position when boxed in on all sides', () => {
    const clearance = 10;
    const ring = [
      [0, -clearance],
      [0, clearance],
      [-clearance, 0],
      [clearance, 0],
      [-clearance, -clearance],
      [clearance, -clearance],
      [-clearance, clearance],
      [clearance, clearance],
    ].map(([dx, dy]) => ({ x: 50 + dx, y: 50 + dy }));
    const obstacles = [{ x: 50, y: 50 }, ...ring];

    expect(avoidPointCollisions([50, 50], obstacles, clearance)).toEqual([
      50, 50,
    ]);
  });
});

describe('getAnnotationLabelOffset', () => {
  it('defaults to top-right, matching the previous fixed offset', () => {
    expect(getAnnotationLabelOffset('top-right', 4)).toEqual({
      dx: 4,
      dy: -4,
      anchor: 'start',
      baseline: 'auto',
    });
  });

  it('scales the offset by padding for every direction', () => {
    expect(getAnnotationLabelOffset('left', 10)).toEqual({
      dx: -10,
      dy: 0,
      anchor: 'end',
      baseline: 'central',
    });
    expect(getAnnotationLabelOffset('bottom', 10)).toEqual({
      dx: 0,
      dy: 10,
      anchor: 'middle',
      baseline: 'hanging',
    });
  });
});

describe('applyLabelOffset', () => {
  it('is a no-op with a zero offset', () => {
    expect(applyLabelOffset([50, 50], [0, 0, 0, 0])).toEqual([50, 50]);
  });

  it('shifts right/left along x and top/bottom along y', () => {
    expect(applyLabelOffset([50, 50], [5, 10, 0, 0])).toEqual([60, 45]);
    expect(applyLabelOffset([50, 50], [0, 0, 8, 3])).toEqual([47, 58]);
  });
});

describe('InsetMap component', () => {
  const renderInset = (props: ComponentProps<typeof InsetMap>) =>
    render(InsetMap, { props });

  it('renders the built-in Spain shape and applies the corner class', () => {
    const { body } = renderInset({ country: 'Spain', corner: 'top-left' });
    expect(body).toContain('corner-top-left');
    expect(body).toContain('inset-shape');
  });

  it('renders a dot and label for each annotation', () => {
    const { body } = renderInset({
      country: 'Spain',
      annotations: [
        { name: 'Madrid', lngLat: [-3.7038, 40.4168] },
        { name: 'Ávila', lngLat: [-4.6976, 40.6567] },
      ],
    });
    expect(body).toContain('inset-annotation-dot');
    expect(body).toContain('Madrid');
    expect(body).toContain('Ávila');
  });

  it('honors a per-annotation labelPosition and padding', () => {
    const { body } = renderInset({
      country: 'Spain',
      annotations: [
        {
          name: 'Madrid',
          lngLat: [-3.7038, 40.4168],
          labelPosition: 'bottom',
          padding: 12,
        },
      ],
    });
    expect(body).toMatch(
      /text-anchor="middle"[^>]*dominant-baseline="hanging"/
    );
  });

  it('renders a square marker when shape is "square"', () => {
    const { body } = renderInset({
      country: 'Spain',
      annotations: [
        { name: 'Madrid', lngLat: [-3.7038, 40.4168], shape: 'square' },
      ],
    });
    expect(body).toContain('<rect');
    expect(body).toContain('inset-annotation-dot');
  });

  it('renders the country label when provided', () => {
    const { body } = renderInset({
      country: 'Spain',
      countryLabel: 'Spain',
    });
    expect(body).toContain('inset-country-label');
    expect(body).toContain('Spain');
  });

  it('shifts the country label by countryLabelOffset', () => {
    const base = renderInset({ country: 'Spain', countryLabel: 'Spain' }).body;
    const shifted = renderInset({
      country: 'Spain',
      countryLabel: 'Spain',
      countryLabelOffset: [0, 20, 0, 0],
    }).body;

    const baseX = Number(
      base.match(/<text x="([\d.-]+)"[^>]*class="[^"]*inset-country-label/)![1]
    );
    const shiftedX = Number(
      shifted.match(
        /<text x="([\d.-]+)"[^>]*class="[^"]*inset-country-label/
      )![1]
    );
    expect(shiftedX).toBeCloseTo(baseX + 20);
  });

  it('falls back gracefully when the country cannot be resolved and no geojson is given', () => {
    const { body } = renderInset({ country: 'Atlantis' });
    expect(body).not.toContain('inset-shape');
  });

  it('centers the country label on the largest ring, not the bounding box of a MultiPolygon', () => {
    // A tiny island far to the west and a much larger "mainland" to the east.
    // The bounding-box midpoint would fall in the empty water between them;
    // the largest-ring centroid should land inside the mainland instead.
    const { body } = renderInset({
      geojson: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-10, 0],
              [-10, 1],
              [-9, 1],
              [-9, 0],
              [-10, 0],
            ],
          ],
          [
            [
              [0, 0],
              [0, 10],
              [10, 10],
              [10, 0],
              [0, 0],
            ],
          ],
        ],
      },
      countryLabel: 'Testland',
      size: 100,
    });

    const labelMatch = body.match(
      /<text x="([\d.]+)"[^>]*class="[^"]*inset-country-label/
    );
    expect(labelMatch).not.toBeNull();
    const labelX = Number(labelMatch![1]);
    // Bounding-box midpoint would be far to the left (near the island); the
    // mainland's centroid should be past the middle of the 100px inset.
    expect(labelX).toBeGreaterThan(50);
  });

  it('accepts a custom geojson shape overriding the built-in lookup', () => {
    const { body } = renderInset({
      geojson: {
        type: 'Polygon',
        coordinates: [
          [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 0],
          ],
        ],
      },
    });
    expect(body).toContain('inset-shape');
  });
});
