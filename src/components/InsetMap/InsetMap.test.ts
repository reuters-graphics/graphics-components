import { describe, expect, it } from 'vitest';
import type {
  Feature,
  FeatureCollection,
  GeoJsonProperties,
  Geometry,
  Polygon,
} from 'geojson';
import type { Topology } from 'topojson-specification';
import { render } from 'svelte/server';
import InsetMap, {
  applyLabelOffset,
  avoidPointCollisions,
  classifyFeature,
  getAnnotationLabelOffset,
  getLargestPolygonGeometry,
  topologyToFeatures,
} from './InsetMap.svelte';

const squareTopology: Topology = {
  type: 'Topology',
  objects: {
    countries: {
      type: 'GeometryCollection',
      geometries: [{ type: 'Polygon', arcs: [[0]] }],
    },
  },
  arcs: [
    [
      [-10, -10],
      [-10, 10],
      [10, 10],
      [10, -10],
      [-10, -10],
    ],
  ],
};

const polygonFeature = (coordinates: Polygon['coordinates']) =>
  ({
    type: 'Feature',
    properties: {},
    geometry: { type: 'Polygon', coordinates },
  }) as Feature<Geometry, GeoJsonProperties>;

describe('InsetMap helpers', () => {
  it('converts a topology geometry collection into features', () => {
    const [feature] = topologyToFeatures(squareTopology);

    if (feature.geometry.type !== 'Polygon') {
      throw new Error('Expected the topology to contain a polygon.');
    }
    expect(feature.geometry.coordinates).toHaveLength(1);
  });

  it('classifies filled shapes and disputed border lines', () => {
    expect(
      classifyFeature(
        polygonFeature([
          [
            [-1, -1],
            [-1, 1],
            [1, 1],
            [1, -1],
            [-1, -1],
          ],
        ])
      )
    ).toBe('shape');

    const lineFeature = (disputed: boolean) =>
      ({
        type: 'Feature',
        properties: { disputed },
        geometry: {
          type: 'LineString',
          coordinates: [
            [0, 0],
            [1, 1],
          ],
        },
      }) as Feature<Geometry, GeoJsonProperties>;

    expect(classifyFeature(lineFeature(true))).toBe('border');
    expect(classifyFeature(lineFeature(false))).toBe('context-border');
  });

  it('finds the largest land shape across a feature collection', () => {
    const smallRing: Polygon['coordinates'] = [
      [
        [-1, -1],
        [-1, 1],
        [1, 1],
        [1, -1],
        [-1, -1],
      ],
    ];
    const largeRing: Polygon['coordinates'] = [
      [
        [-20, -20],
        [-20, 20],
        [20, 20],
        [20, -20],
        [-20, -20],
      ],
    ];
    const collection: FeatureCollection<Geometry, GeoJsonProperties> = {
      type: 'FeatureCollection',
      features: [polygonFeature(smallRing), polygonFeature(largeRing)],
    };

    expect(getLargestPolygonGeometry(collection)).toEqual({
      type: 'Polygon',
      coordinates: largeRing,
    });
  });

  it('moves a crowded label to the first clear position and keeps a fallback', () => {
    expect(avoidPointCollisions([0, 0], [{ x: 0, y: 0 }], 5)).toEqual([0, -5]);

    const crowdedPositions = [
      [0, 0],
      [0, -5],
      [0, 5],
      [-5, 0],
      [5, 0],
      [-5, -5],
      [5, -5],
      [-5, 5],
      [5, 5],
    ].map(([x, y]) => ({ x, y }));
    expect(avoidPointCollisions([0, 0], crowdedPositions, 5)).toEqual([0, 0]);
  });

  it('applies label offsets and aligns annotation labels by position', () => {
    expect(applyLabelOffset([10, 20], [1, 2, 3, 4])).toEqual([8, 22]);
    expect(getAnnotationLabelOffset('top-left', 4)).toEqual({
      dx: -4,
      dy: -4,
      anchor: 'end',
      baseline: 'auto',
    });
  });
});

describe('InsetMap component', () => {
  it('renders a sized locator shape, location label and annotations', () => {
    const { body } = render(InsetMap, {
      props: {
        geometry: squareTopology,
        locationLabel: 'Test country',
        annotations: [
          {
            name: 'Capital',
            lngLat: [0, 0],
            labelPosition: 'left',
            shape: 'square',
          },
        ],
        size: 80,
        corner: 'top-left',
        class: 'reader-inset',
      },
    });

    expect(body).toContain('inset-map corner-top-left reader-inset');
    expect(body).toContain('width: 80px; height: 80px;');
    expect(body).toContain('viewBox="0 0 80 80"');
    expect(body).toMatch(
      /<path d="[^"]+" class="inset-shape(?: svelte-[^"]+)?"/
    );
    expect(body).toContain('<rect');
    expect(body).toContain('Capital');
    expect(body).toContain('Test country');
  });

  it('renders an empty frame when no shape is provided', () => {
    const { body } = render(InsetMap, { props: { size: 64 } });

    expect(body).toContain('viewBox="0 0 64 64"');
    expect(body).not.toContain('<path');
    expect(body).not.toContain('<text');
  });
});
