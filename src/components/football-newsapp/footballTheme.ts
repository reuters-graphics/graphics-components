/**
 * Football-newsapp theme tokens.
 *
 * The football components consume `--theme-colour-*` / `--theme-style-*`
 * custom properties. The base library's default `<Theme>` only ships the
 * corporate Reuters brand tokens, so the football-specific palette + semantic
 * tokens live here and are applied through the **base `<Theme>` component**:
 *
 * ```svelte
 * <script>
 *   import { Theme } from '@reuters-graphics/graphics-components';
 *   import { footballTheme } from '@reuters-graphics/graphics-components/football-newsapp';
 *   let windowWidth = $state(1000);
 * </script>
 * <svelte:window bind:innerWidth={windowWidth} />
 * <Theme theme={footballTheme(windowWidth)}>
 *   <!-- football widgets here -->
 * </Theme>
 * ```
 *
 * Two-tier design (mirrors the World Cup app): Tier 1 primitives named by
 * appearance (`muted-grey`, `live-red`), Tier 2 semantic tokens named by
 * intent (`card-background-colour`, `status-live-colour`). Override the
 * primitives to rebrand the whole palette for the next tournament.
 */

const BORDER_RADIUS_BREAKPOINT_PX = 475;

const font = {
  family: {
    hed: 'Outfit, var(--theme-font-family-sans-serif), sans-serif',
  },
} as const;

/** Tier 1 — primitives (`--theme-colour-*`). */
const colour = {
  // Neutrals
  white: '#fff',
  'muted-grey': '#f3f4f6',
  'tan-grey': '#e5e5e5',
  'mid-grey': '#ccc',
  'dark-grey': '#aaa',

  // Text
  'text-primary': '#212223',
  'text-secondary': '#595959',

  // Project brand
  logo: '#004f9f',

  // Status palette
  'win-green': '#e1f4cd',
  'loss-red': '#efb399',
  'live-red': '#d64000',
  'pitch-green': '#6aa86a',
  'trophy-gold': '#DDBA60',
} as Record<string, string>;

/** Tier 2 — semantic tokens (`--theme-style-*`), responsive to width. */
const getStyle = (windowWidth: number) => ({
  // Shape
  'border-radius':
    windowWidth > BORDER_RADIUS_BREAKPOINT_PX ? '0.75rem' : '0.5rem',
  'border-radius-pill': '5rem',

  // Cards & surfaces
  'card-background-colour': 'var(--theme-colour-muted-grey)',
  'card-border-colour': 'var(--theme-colour-tan-grey)',
  'card-flag-placeholder-colour': 'var(--theme-colour-tan-grey)',
  'card-outline-colour': 'var(--theme-colour-white)',

  // Pitch (lineup view)
  'pitch-surface-colour': 'var(--theme-colour-pitch-green)',
  'pitch-line-colour': 'rgba(255, 255, 255, 0.75)',

  // Borders / dividers
  'commentary-border-colour': 'var(--theme-colour-tan-grey)',
  'border-subtle-colour': 'var(--theme-colour-brand-rules)',

  // Status
  'status-live-colour': 'var(--theme-colour-live-red)',
  'status-win-colour': 'var(--theme-colour-win-green)',
  'status-loss-colour': 'var(--theme-colour-loss-red)',

  // Decorative / illustrations
  'trophy-fill-colour': 'var(--theme-colour-trophy-gold)',
  'trophy-shadow-colour': 'var(--theme-colour-mid-grey)',
  'trophy-runner-up-colour': 'var(--theme-colour-muted-grey)',

  // Overlays & alpha tints
  'soft-shadow-colour': 'rgba(0, 0, 0, 0.15)',
  'overlay-dark-colour': 'rgba(0, 0, 0, 0.5)',
  'pitch-line-faint-colour': 'rgba(255, 255, 255, 0.5)',
});

/**
 * Build the `theme` object for the base `<Theme>` component.
 *
 * @param windowWidth Current viewport width (drives the responsive
 *   `--theme-style-border-radius`). Typically bound via
 *   `<svelte:window bind:innerWidth={windowWidth} />`.
 */
export const footballTheme = (windowWidth = 1000) =>
  ({
    font,
    colour,
    style: getStyle(windowWidth),
  }) as const;

export type FootballTheme = ReturnType<typeof footballTheme>;
