// Reuters Graphics palettes as hex arrays, for d3 scales, canvas and Datawrapper.
// Each palette is a separate export so bundlers keep only the ones you import.
// The same values ship as CSS variables in `scss/colours`.

/** Categorical series colours, in order: rust, blue, teal, plum, green, yellow. Included in CSS by default as `--gfx-*`. */
export const categorical = [
  '#cb643c',
  '#4e75ad',
  '#499e9a',
  '#7b3f71',
  '#2a6e4d',
  '#daad3d',
] as const;

/** Greys, white to `--gfx-black`. Included in CSS by default. */
export const greys = [
  '#ffffff',
  '#d5d5d5',
  '#adadad',
  '#878787',
  '#666666',
  '#404040',
  '#212223',
] as const;

/** Rust sequential ramp, light to dark. CSS: `colours/sequential-rust`. */
export const sequentialRust = [
  '#fefaf8',
  '#f8d6ca',
  '#eeb49d',
  '#e19273',
  '#cb643c',
  '#b05735',
  '#88452b',
  '#623321',
  '#3e2318',
] as const;

/** Blue sequential ramp, light to dark. CSS: `colours/sequential-blue`. */
export const sequentialBlue = [
  '#f9fafd',
  '#d7dded',
  '#b5c1dc',
  '#93a6cb',
  '#6f8bbb',
  '#4e75ad',
  '#3b5983',
  '#2c405f',
  '#1d2a3e',
] as const;

/** Teal sequential ramp, light to dark. CSS: `colours/sequential-teal`. */
export const sequentialTeal = [
  '#f7fbfb',
  '#cbe2e0',
  '#9ec9c6',
  '#70b0ad',
  '#499e9a',
  '#367b78',
  '#29605d',
  '#1b4644',
  '#0f2e2d',
] as const;

/** Plum sequential ramp, light to dark. CSS: `colours/sequential-plum`. */
export const sequentialPlum = [
  '#fdfafc',
  '#e8d9e4',
  '#d3bacd',
  '#be9bb6',
  '#a97da0',
  '#945f8a',
  '#7b3f71',
  '#5a3253',
  '#382334',
] as const;

/** Green sequential ramp, light to dark. CSS: `colours/sequential-green`. */
export const sequentialGreen = [
  '#f7fcf9',
  '#d2e1d8',
  '#aec7b8',
  '#8aad99',
  '#67947b',
  '#437c5e',
  '#2a6e4d',
  '#1b4832',
  '#152e21',
] as const;

/** Yellow sequential ramp, light to dark. CSS: `colours/sequential-yellow`. */
export const sequentialYellow = [
  '#fcfaf7',
  '#f4daad',
  '#e4bc64',
  '#daad3d',
  '#a88631',
  '#896d28',
  '#6b5520',
  '#4e3e18',
  '#332811',
] as const;

/** Yellow–green two-hue sequential ramp, light to dark. CSS: `colours/sequential-yellow-green`. */
export const sequentialYellowGreen = [
  '#fcfaf7',
  '#e5ddbf',
  '#c8c489',
  '#a4ac5c',
  '#7c953e',
  '#567d31',
  '#35632e',
  '#1f492a',
  '#152e21',
] as const;

/** Yellow–plum two-hue sequential ramp, light to dark. CSS: `colours/sequential-yellow-plum`. */
export const sequentialYellowPlum = [
  '#fcfaf7',
  '#f0dac0',
  '#e8b590',
  '#de906f',
  '#c96d5f',
  '#ab525a',
  '#853f55',
  '#5d3048',
  '#382334',
] as const;

/** Yellow–blue two-hue sequential ramp, light to dark. CSS: `colours/sequential-yellow-blue`. */
export const sequentialYellowBlue = [
  '#fcfaf7',
  '#f2dbaa',
  '#dabe7d',
  '#b6a474',
  '#8b8c7d',
  '#617384',
  '#3e597d',
  '#284064',
  '#1d2a3e',
] as const;

/** Blue–rust diverging scale, -400 (blue) to +400 (rust). CSS: `colours/diverging-blue-rust`. */
export const divergingBlueRust = [
  '#2c405f',
  '#4b6896',
  '#6493d8',
  '#aebfe4',
  '#f5edde',
  '#e7b3a0',
  '#e0734a',
  '#9f5235',
  '#623321',
] as const;

/** Yellow–blue diverging scale, -400 (blue) to +400 (yellow). CSS: `colours/diverging-yellow-blue`. */
export const divergingYellowBlue = [
  '#2c405f',
  '#4b6896',
  '#6493d8',
  '#aebfe4',
  '#f5edde',
  '#dcbb75',
  '#ae8e45',
  '#7b6533',
  '#4e3e18',
] as const;

/** Teal–yellow diverging scale, -400 (teal) to +400 (yellow). CSS: `colours/diverging-teal-yellow`. */
export const divergingTealYellow = [
  '#1b4644',
  '#3c706d',
  '#549e9a',
  '#83cbc7',
  '#f5edde',
  '#dcbb75',
  '#ae8e45',
  '#7b6533',
  '#4e3e18',
] as const;

/** Map colours: label inks, base-map and area fills, emphasis colours and highlights. CSS: `colours/maps`. */
export const mappingDw = {
  labelPrimary: '#212223',
  labelSecondary: '#878787',
  labelWater: '#4e75ad',
  fillLand: '#ebebe8',
  fillWater: '#d7dded',
  fillGreen: '#cdd8c8',
  fillNeutral: '#d5d5d5',
  fillPrimary: '#eeb49d',
  emphasisPrimary: '#d0381e',
  emphasisSecondary: '#8914a2',
  highlightLight: '#ffca05',
  highlightDark: '#7b3f71',
} as const;

/** U.S. election colours. CSS: `colours/us-politics`. */
export const usPolitics = {
  repWin: '#d02a41',
  repFlip: '#7c000f',
  demWin: '#1c7cb3',
  demFlip: '#004c7f',
  indWin: '#60c160',
  indFlip: '#008000',
  tie: '#f7d131',
} as const;

/** The two inks in every pattern: the grey ramp's `#404040` and white. */
export const patternInks = { dark: greys[5], light: greys[0] } as const;

export interface PatternDef {
  /** Pattern id, and the name of its CSS variable. */
  id: string;
  label: string;
  /** What the texture means on a map. */
  role: string;
  kind: 'stripes' | 'cross' | 'dots';
  /** Stripes and cross: distance between lines. Dots: the tile size. */
  spacing: number;
  /** Line width for each ink, or dot radius. */
  weight: number;
  /** Line angle from vertical: 45 runs like /, -45 like \. */
  angle?: number;
}

/**
 * Map textures, drawn over a fill to mark a shape's status rather than its
 * value. Each carries both inks — a `#404040` line with a white line beside
 * it, or grey dots with white dots between them — so one pattern reads over
 * light and dark fills. CSS: `colours/patterns`. SVG shapes also need the
 * definitions on the page: `PatternDefs`, or `patternDefs` below.
 */
export const patterns: readonly PatternDef[] = [
  {
    id: 'gfx-hatch-pattern',
    label: 'Hatch',
    role: 'Disputed or contested territory.',
    kind: 'stripes',
    spacing: 6 / Math.SQRT2,
    weight: 1.3,
    angle: 45,
  },
  {
    id: 'gfx-dots-pattern',
    label: 'Dots',
    role: 'Provisional or partial data.',
    kind: 'dots',
    spacing: 5,
    weight: 1.1,
  },
  {
    id: 'gfx-cross-pattern',
    label: 'Cross-hatch',
    role: 'No data, where a blank shape would read as zero.',
    kind: 'cross',
    spacing: 6 / Math.SQRT2,
    weight: 1,
    angle: 45,
  },
  {
    id: 'gfx-hatch-back-pattern',
    label: 'Reverse hatch',
    role: 'Excluded from the analysis, or not applicable.',
    kind: 'stripes',
    spacing: 6 / Math.SQRT2,
    weight: 1.3,
    angle: -45,
  },
  {
    id: 'gfx-sparse-hatch-pattern',
    label: 'Sparse hatch',
    role: 'Projected or forecast. Also the forecast tail of an area chart.',
    kind: 'stripes',
    spacing: 11 / Math.SQRT2,
    weight: 1.2,
    angle: 45,
  },
  {
    id: 'gfx-sparse-dots-pattern',
    label: 'Sparse dots',
    role: 'Estimated or modelled rather than measured.',
    kind: 'dots',
    spacing: 10,
    weight: 1.1,
  },
];

const num = (v: number) => String(Math.round(v * 1000) / 1000);

// Lines at 45° repeat every spacing × √2 along each axis, so that is the tile.
const tileSize = (p: PatternDef) =>
  p.kind === 'dots' ? p.spacing : p.spacing * Math.SQRT2;

// One tile's artwork, unrotated so the same markup works as an SVG <pattern>
// and as a CSS background image. Lines run past the tile edge so they join up
// across the seam; each dark line has its light partner beside it, and the
// light dots sit on the other diagonal from the dark ones.
const tileBody = (p: PatternDef) => {
  const { dark, light } = patternInks;
  const w = num(p.weight);
  if (p.kind === 'dots') {
    const [a, b] = [p.spacing / 4, (3 * p.spacing) / 4];
    const spots = [
      [dark, a, a],
      [dark, b, b],
      [light, b, a],
      [light, a, b],
    ] as const;
    return spots
      .map(
        ([ink, x, y]) =>
          `<circle cx='${num(x)}' cy='${num(y)}' r='${w}' fill='${ink}'/>`
      )
      .join('');
  }
  const t = tileSize(p);
  const slopes = p.kind === 'cross' ? [1, -1] : [(p.angle ?? 45) > 0 ? 1 : -1];
  const lines = (ink: string, offset: number) =>
    slopes.flatMap((slope) =>
      [-1, 0, 1, 2].map((m) => {
        const k = offset * Math.SQRT2 + m * t;
        const end = slope === 1 ? k - t - 1 : k + t + 1;
        const d = `M-1 ${num(slope === 1 ? k + 1 : k - 1)}L${num(t + 1)} ${num(end)}`;
        return `<path d='${d}' stroke='${ink}' stroke-width='${w}'/>`;
      })
    );
  return [
    ...lines(dark, p.weight / 2),
    ...lines(light, (3 * p.weight) / 2),
  ].join('');
};

/** A pattern's tile as a standalone SVG image, e.g. to draw on a canvas. */
export const patternTile = (p: PatternDef) => {
  const s = num(tileSize(p));
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${s}' height='${s}'>${tileBody(p)}</svg>`;
};

/**
 * Every pattern as SVG `<pattern>` definitions, in a hidden SVG to put on the
 * page once — through `innerHTML` in d3 or plain JS, or the `PatternDefs`
 * component in Svelte. Shapes then use `fill="url(#gfx-hatch-pattern)"`.
 * Hidden by size rather than `display: none`, which stops some browsers
 * resolving patterns inside it.
 */
export const patternDefs = `<svg width='0' height='0' aria-hidden='true' focusable='false' style='position:absolute;overflow:hidden'><defs>${patterns
  .map((p) => {
    const s = num(tileSize(p));
    return `<pattern id='${p.id}' width='${s}' height='${s}' patternUnits='userSpaceOnUse'>${tileBody(p)}</pattern>`;
  })
  .join('')}</defs></svg>`;
