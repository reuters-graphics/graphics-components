import { readFileSync, readdirSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import * as palettes from './index';

const dir = new URL('../scss/colours/', import.meta.url);
const read = (file: string) =>
  [
    ...readFileSync(new URL(`_${file}.scss`, dir), 'utf8').matchAll(
      /(--gfx-[\w-]+):\s*([^;]+);/g
    ),
  ].map((m) => [m[1], m[2]]);

const kebab = (s: string) => s.replace(/([A-Z])/g, '-$1').toLowerCase();
const steps = (prefix: string, ramp: readonly string[], first = 1) =>
  ramp.map((hex, i) => [`${prefix}-${(i + first) * 100}`, hex]);

const luminance = (hex: string) =>
  [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    .reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);

const {
  categorical,
  greys,
  mappingDw,
  usPolitics,
  patterns,
  patternInks,
  patternTile,
  patternDefs,
  ...ramps
} = palettes;
const sequential = Object.entries(ramps).filter(([n]) =>
  n.startsWith('sequential')
);
const diverging = Object.entries(ramps).filter(([n]) =>
  n.startsWith('diverging')
);

const expected: Record<string, string[][]> = {
  default: [
    ...['rust', 'blue', 'teal', 'plum', 'green', 'yellow'].map((name, i) => [
      `--gfx-${name}`,
      categorical[i],
    ]),
    ['--gfx-white', greys[0]],
    ...steps('--gfx-grey', greys.slice(1, -1)),
    ['--gfx-black', greys[6]],
  ],
  ...Object.fromEntries(
    sequential.map(([name, ramp]) => [
      kebab(name),
      steps(`--gfx-${kebab(name).replace('sequential-', '')}`, ramp),
    ])
  ),
  ...Object.fromEntries(
    diverging.map(([name, ramp]) => [
      kebab(name),
      steps(`--gfx-div-${kebab(name).replace('diverging-', '')}`, ramp, -4),
    ])
  ),
  maps: Object.entries(mappingDw).map(([k, v]) => [`--gfx-map-${kebab(k)}`, v]),
  'us-politics': Object.entries(usPolitics).map(([k, v]) => [
    `--gfx-us-${kebab(k)}`,
    v,
  ]),
  patterns: patterns.map((p) => [
    `--${p.id}`,
    `url("data:image/svg+xml,${patternTile(p).replace(/#/g, '%23').replace(/</g, '%3C').replace(/>/g, '%3E')}")`,
  ]),
};

describe('Reuters Graphics palettes', () => {
  it('pairs every JS export with a CSS file of the same name', () => {
    expect(Object.keys(ramps).length).toBe(
      sequential.length + diverging.length
    );
    const files = readdirSync(dir)
      .filter((f) => f.endsWith('.scss'))
      .filter((f) => readFileSync(new URL(f, dir), 'utf8').includes('--gfx-'))
      .map((f) => f.replace(/^_|\.scss$/g, ''));
    expect(files.sort()).toEqual(Object.keys(expected).sort());
  });

  for (const [file, tokens] of Object.entries(expected)) {
    it(`keeps _${file}.scss in step with the JS export`, () => {
      expect(read(file)).toEqual(tokens);
    });
  }

  it('darkens every sequential ramp from 100 to 900', () => {
    for (const [name, ramp] of sequential) {
      const l = ramp.map(luminance);
      l.slice(1).forEach((v, i) =>
        expect(v, `${name} step ${i + 2}`).toBeLessThan(l[i])
      );
    }
  });

  it('darkens both arms of every diverging scale away from the midpoint', () => {
    for (const [name, ramp] of diverging) {
      const l = ramp.map(luminance);
      for (let i = 0; i < 4; i++) {
        expect(l[i], name).toBeLessThan(l[i + 1]);
        expect(l[8 - i], name).toBeLessThan(l[7 - i]);
      }
    }
  });

  it('defines every pattern for SVG fills under its CSS name', () => {
    const ids = [...patternDefs.matchAll(/<pattern id='([\w-]+)'/g)].map(
      (m) => m[1]
    );
    expect(ids).toEqual(patterns.map((p) => p.id));
  });

  it('gives every pattern an ink with 3:1 contrast on any palette colour', () => {
    // The reason each pattern carries both inks: whichever the fill, one of
    // them stands out from it, so one pattern works over light and dark.
    const contrast = (a: string, b: string) => {
      const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
      return (hi + 0.05) / (lo + 0.05);
    };
    const fills = [
      ...categorical,
      ...greys,
      ...Object.values(ramps).flat(),
      ...Object.values(mappingDw),
      ...Object.values(usPolitics),
    ];
    for (const fill of fills) {
      const best = Math.max(
        contrast(fill, patternInks.dark),
        contrast(fill, patternInks.light)
      );
      expect(best, fill).toBeGreaterThanOrEqual(3);
    }
  });
});
