---
'@reuters-graphics/graphics-components': minor
---

Adds the Reuters Graphics colour palette. Categorical colours and greys (`--gfx-*`) are included by default. Every sequential ramp, diverging scale, the map colours and the U.S. politics colours are each a separate import from `scss/colours/`, e.g. `scss/colours/sequential-rust`. The same values are exported as hex arrays from a new `colours` entry point, one named export per palette, e.g. `import { categorical, sequentialRust } from '@reuters-graphics/graphics-components/colours'`.

Also adds six map patterns — hatch, dots, cross-hatch, reverse hatch, sparse hatch and sparse dots — for marking a shape's status over its colour. Import them like a palette from `scss/colours/patterns`: each `--gfx-*-pattern` variable is a tiling image for HTML backgrounds. SVG shapes use the same names as `fill="url(#gfx-hatch-pattern)"`, after adding the definitions to the page once with the new `PatternDefs` component, or `patternDefs` from `colours` outside Svelte. Each pattern carries a grey and a white ink, so one pattern reads over light and dark fills. The Storybook docs also offer Adobe swatch downloads (`.ase`, `.aco`) of the palette, and an SVG of the patterns for Illustrator.
