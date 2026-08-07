import type maplibregl from 'maplibre-gl';

/**
 * The canonical daily-anomaly diverging palette — deep blue → white → deep red,
 * 11 stops. Exported so every surface derives from one sequence: the Celsius
 * and Fahrenheit anomaly fill paints below, and the card-art ramp frame
 * (`pages/related-card/`). Change the colours here and all of them follow.
 */
export const ANOMALY_RAMP_COLORS = [
  '#0078D1',
  '#1695F3',
  '#3DACFF',
  '#70C2FF',
  '#D6EEFF',
  '#f7f7f7',
  '#FFE2D6',
  '#FFBFA3',
  '#FF773D',
  '#FA6400',
  '#D64000',
] as const;

// Interpolation stops as flat [break, colour, …] pairs. Celsius steps 1°C over
// −5…+5; Fahrenheit steps 2°F over −10…+10 — same colour sequence, so both
// derive from ANOMALY_RAMP_COLORS rather than restating it.
const CELSIUS_ANOMALY_STOPS = ANOMALY_RAMP_COLORS.flatMap((color, i) => [
  i - 5,
  color,
]);
const FAHRENHEIT_ANOMALY_STOPS = ANOMALY_RAMP_COLORS.flatMap((color, i) => [
  (i - 5) * 2,
  color,
]);

// Climate data layer paint configuration - Celsius (breaks: -5 to +5 in 1°C increments)
export const CLIMATE_LAYER_PAINT_CELSIUS: maplibregl.FillLayerSpecification['paint'] =
  {
    'fill-color': [
      'case',
      ['<', ['get', 'floor'], -5],
      ANOMALY_RAMP_COLORS[0],
      ['>', ['get', 'floor'], 5],
      ANOMALY_RAMP_COLORS[ANOMALY_RAMP_COLORS.length - 1],
      ['interpolate', ['linear'], ['get', 'floor'], ...CELSIUS_ANOMALY_STOPS],
    ] as maplibregl.ExpressionSpecification,
    'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.4, 5, 0.6],
    'fill-antialias': true,
    'fill-outline-color': 'rgba(255, 255, 255, .133)',
  };

/**
 * One discrete band in a heat-index `step` fill-color expression: `floor` is
 * the band's lower bound (the value stored on each rendered contour polygon's
 * `floor` property; `-Infinity` marks the open-ended lowest band) and `color`
 * is its category color. Exported as data — rather than only baked into the
 * `step` expression below — so the contour-vs-data consistency check
 * (`contourCheck.ts`) can derive the same band boundaries the map actually
 * renders, instead of restating them and risking drift.
 */
export interface HeatIndexStep {
  floor: number;
  color: string;
}

/** Build a MapLibre `step` fill-color expression from an ascending band list. */
function stepsToFillColor(
  steps: readonly HeatIndexStep[]
): maplibregl.ExpressionSpecification {
  const [first, ...rest] = steps;
  return [
    'step',
    ['get', 'floor'],
    first.color,
    ...rest.flatMap((step) => [step.floor, step.color]),
  ] as maplibregl.ExpressionSpecification;
}

// WBGT (outdoor heat-stress) bands - Celsius. Sequential heat-stress scale on
// the official ECMWF/thermofeel WBGT categories (20/25/31 °C), with
// supplemental 15/28/35 °C breaks for visual definition.
export const WBGT_STEPS_CELSIUS: readonly HeatIndexStep[] = [
  { floor: -Infinity, color: '#f0f0f0' },
  { floor: 15, color: '#ffffcc' },
  { floor: 20, color: '#ffeda0' },
  { floor: 25, color: '#feb24c' },
  { floor: 28, color: '#fc4e2a' },
  { floor: 31, color: '#bd0026' },
  { floor: 35, color: '#800026' },
];

// WBGT bands - Fahrenheit. Same category boundaries translated exactly from
// Celsius: 15/20/25/28/31/35 °C = 59.0/68.0/77.0/82.4/87.8/95.0 °F (82.4 and
// 87.8 are intentionally kept as floats — not rounded to integers).
export const WBGT_STEPS_FAHRENHEIT: readonly HeatIndexStep[] = [
  { floor: -Infinity, color: '#f0f0f0' },
  { floor: 59, color: '#ffffcc' },
  { floor: 68, color: '#ffeda0' },
  { floor: 77, color: '#feb24c' },
  { floor: 82.4, color: '#fc4e2a' },
  { floor: 87.8, color: '#bd0026' },
  { floor: 95, color: '#800026' },
];

export const WBGT_LAYER_PAINT_CELSIUS: maplibregl.FillLayerSpecification['paint'] =
  {
    'fill-color': stepsToFillColor(WBGT_STEPS_CELSIUS),
    'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.4, 5, 0.6],
    'fill-antialias': true,
    'fill-outline-color': 'rgba(255, 255, 255, .133)',
  };

export const WBGT_LAYER_PAINT_FAHRENHEIT: maplibregl.FillLayerSpecification['paint'] =
  {
    'fill-color': stepsToFillColor(WBGT_STEPS_FAHRENHEIT),
    'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.4, 5, 0.6],
    'fill-antialias': true,
    'fill-outline-color': 'rgba(255, 255, 255, .133)',
  };

// UTCI (Universal Thermal Climate Index) bands - Celsius. Diverging
// cold-blue → neutral-white → heat-red scale on the official UTCI 10-category
// thermal-stress scale (Bröde et al. 2012). Breaks: -40/-27/-13/0/9/26/32/38/46°C.
export const UTCI_STEPS_CELSIUS: readonly HeatIndexStep[] = [
  { floor: -Infinity, color: '#2166ac' }, // extreme cold stress    (< -40)
  { floor: -40, color: '#4393c3' }, // very strong cold stress (-40 .. -27)
  { floor: -27, color: '#92c5de' }, // strong cold stress      (-27 .. -13)
  { floor: -13, color: '#d1e5f0' }, // moderate cold stress    (-13 ..   0)
  { floor: 0, color: '#e8f4f8' }, // slight cold stress        (  0 ..   9)
  { floor: 9, color: '#f7f7f7' }, // no thermal stress          (  9 ..  26)
  { floor: 26, color: '#fdae61' }, // moderate heat stress      ( 26 ..  32)
  { floor: 32, color: '#f46d43' }, // strong heat stress        ( 32 ..  38)
  { floor: 38, color: '#d73027' }, // very strong heat stress   ( 38 ..  46)
  { floor: 46, color: '#a50026' }, // extreme heat stress       (> 46)
];

// UTCI bands - Fahrenheit. Same 10-category boundaries converted from
// Celsius: -40/-27/-13/0/9/26/32/38/46 °C =
// -40/-16.6/8.6/32/48.2/78.8/89.6/100.4/114.8 °F.
export const UTCI_STEPS_FAHRENHEIT: readonly HeatIndexStep[] = [
  { floor: -Infinity, color: '#2166ac' },
  { floor: -40, color: '#4393c3' },
  { floor: -16.6, color: '#92c5de' },
  { floor: 8.6, color: '#d1e5f0' },
  { floor: 32, color: '#e8f4f8' },
  { floor: 48.2, color: '#f7f7f7' },
  { floor: 78.8, color: '#fdae61' },
  { floor: 89.6, color: '#f46d43' },
  { floor: 100.4, color: '#d73027' },
  { floor: 114.8, color: '#a50026' },
];

export const UTCI_LAYER_PAINT_CELSIUS: maplibregl.FillLayerSpecification['paint'] =
  {
    'fill-color': stepsToFillColor(UTCI_STEPS_CELSIUS),
    'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.4, 5, 0.6],
    'fill-antialias': true,
    'fill-outline-color': 'rgba(255, 255, 255, .133)',
  };

export const UTCI_LAYER_PAINT_FAHRENHEIT: maplibregl.FillLayerSpecification['paint'] =
  {
    'fill-color': stepsToFillColor(UTCI_STEPS_FAHRENHEIT),
    'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.4, 5, 0.6],
    'fill-antialias': true,
    'fill-outline-color': 'rgba(255, 255, 255, .133)',
  };

// Climate data layer paint configuration - Fahrenheit (breaks: -10 to +10 in 2°F increments)
export const CLIMATE_LAYER_PAINT_FAHRENHEIT: maplibregl.FillLayerSpecification['paint'] =
  {
    'fill-color': [
      'case',
      ['<', ['get', 'floor'], -10],
      ANOMALY_RAMP_COLORS[0],
      ['>', ['get', 'floor'], 10],
      ANOMALY_RAMP_COLORS[ANOMALY_RAMP_COLORS.length - 1],
      [
        'interpolate',
        ['linear'],
        ['get', 'floor'],
        ...FAHRENHEIT_ANOMALY_STOPS,
      ],
    ] as maplibregl.ExpressionSpecification,
    'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.4, 5, 0.6],
    'fill-antialias': true,
    'fill-outline-color': 'rgba(255, 255, 255, .133)',
  };

// ── Private monitoring-map paints (ported from the internal review site) ─────
// These render the daily/weighted anomaly score maps and the streak/storm maps
// surfaced only in the debug embed. Delta variables reuse the climate paints
// above; the rest paint on each contour band's `floor` value.

/** One color stop in an unbounded sequential `interpolate` fill-color expression. */
export interface AnomalyStop {
  value: number;
  color: string;
}

const TRANSPARENT = 'rgba(247, 247, 247, 0)';

/** Build a MapLibre `interpolate` fill-color expression from ascending stops, clamped below 0 (transparent) and above the last stop (its color). */
function stopsToFillColor(
  stops: readonly AnomalyStop[]
): maplibregl.ExpressionSpecification {
  const last = stops[stops.length - 1];
  return [
    'case',
    ['<', ['get', 'floor'], 0],
    TRANSPARENT,
    ['>', ['get', 'floor'], last.value],
    last.color,
    [
      'interpolate',
      ['linear'],
      ['get', 'floor'],
      0,
      TRANSPARENT,
      ...stops.flatMap((stop) => [stop.value, stop.color]),
    ],
  ] as maplibregl.ExpressionSpecification;
}

// Percentile score (p90/p10 deviation), unitless. A value ≥ 1 means the cell
// crossed the 90th/10th-percentile threshold; sub-1 bands fade to transparent
// so only qualifying areas are tinted. Sequential rose → dark crimson.
export const ANOMALY_SCORE_STOPS: readonly AnomalyStop[] = [
  { value: 1, color: '#fb7185' },
  { value: 2, color: '#f43f5e' },
  { value: 3, color: '#e11d48' },
  { value: 4, color: '#be123c' },
  { value: 5, color: '#4c0519' },
];

export const ANOMALY_SCORE_PAINT: maplibregl.FillLayerSpecification['paint'] = {
  'fill-color': stopsToFillColor(ANOMALY_SCORE_STOPS),
  'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.5, 5, 0.7],
  'fill-antialias': true,
  'fill-outline-color': 'rgba(255, 255, 255, .133)',
};

// Streak length in days. Sequential pale-amber → dark-brown on `floor`; the
// sub-zero band is transparent. Caps at 365 days. The short 1–4 day band gets
// its own extra-light amber so brief streaks stay visible instead of fading
// out against the transparent no-streak (floor 0) band.
export const STREAK_STOPS: readonly AnomalyStop[] = [
  { value: 1, color: '#fef3c7' },
  { value: 5, color: '#fde68a' },
  { value: 10, color: '#fcd34d' },
  { value: 15, color: '#fbbf24' },
  { value: 30, color: '#f59e0b' },
  { value: 50, color: '#d97706' },
  { value: 100, color: '#b45309' },
  { value: 200, color: '#92400e' },
  { value: 365, color: '#78350f' },
];

export const STREAK_PAINT: maplibregl.FillLayerSpecification['paint'] = {
  'fill-color': stopsToFillColor(STREAK_STOPS),
  'fill-opacity': ['interpolate', ['linear'], ['zoom'], 1, 0.5, 5, 0.7],
  'fill-antialias': true,
  'fill-outline-color': 'rgba(255, 255, 255, .133)',
};

