/**
 * Compile-time list & union type of available icon names.
 *
 * The list mirrors the co-located `.png` files in `./assets/`. Because Vite's
 * `import.meta.glob` types its keys as plain `string`, a literal-union type
 * cannot be inferred from it directly. We declare the list as a `const` tuple
 * here and use a dev-time assertion (below) to catch drift between this tuple
 * and the actual folder.
 *
 * To add or remove an icon:
 *   1. Add/remove its `.png` in `./assets/`.
 *   2. Add/remove its name in `ICON_NAMES` below.
 * Forgetting step 2 logs a loud error in development.
 */
export const ICON_NAMES = [
  'bracket-group',
  'bracket-knockout',
  'cup-icon-euro',
  'cup-icon-wc',
  'football',
  'highlight',
  'red-card',
  'second-yellow-card',
  'stadium',
  'stats',
  'substitution',
  'summary',
  'var',
  'whistle',
  'yellow-card',
] as const;

/** Union of valid icon names (e.g. 'football' | 'red-card' | …). */
export type IconName = (typeof ICON_NAMES)[number];

/** Type guard for narrowing arbitrary strings to a valid `IconName`. */
export const isIconName = (value: string): value is IconName =>
  (ICON_NAMES as readonly string[]).includes(value);

/**
 * Resolved URL map for every bundled icon, keyed by name.
 *
 * `import.meta.glob(..., { eager: true, query: '?url', import: 'default' })`
 * hands Vite the co-located PNGs so they are hashed + emitted into the built
 * bundle — no `getPath`/static-dir coupling. Works both in this library's
 * Storybook and once published (paths resolve relative to this module).
 */
const iconModules = import.meta.glob<string>('./assets/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

/** Map of `IconName` → emitted asset URL. */
export const ICON_URLS: Record<string, string> = Object.fromEntries(
  Object.entries(iconModules).map(([path, url]) => [
    path
      .split('/')
      .pop()!
      .replace(/\.png$/, ''),
    url,
  ])
);

// ---------------------------------------------------------------------------
// Dev-time drift check: logs a loud error if ICON_NAMES gets out of sync with
// the co-located ./assets folder. Stripped from production builds.
// ---------------------------------------------------------------------------
if (import.meta.env?.DEV) {
  const onDisk = Object.keys(ICON_URLS).sort();
  const declared = [...ICON_NAMES].sort();
  const missing = onDisk.filter((n) => !declared.includes(n as IconName));
  const extra = declared.filter((n) => !onDisk.includes(n));

  if (missing.length || extra.length) {
    // eslint-disable-next-line no-console
    console.error(
      '[football-newsapp/Icons] ICON_NAMES is out of sync with ./assets/.\n' +
        (missing.length ?
          `  Missing from ICON_NAMES: ${missing.join(', ')}\n`
        : '') +
        (extra.length ? `  Listed but not on disk:  ${extra.join(', ')}\n` : '')
    );
  }
}
