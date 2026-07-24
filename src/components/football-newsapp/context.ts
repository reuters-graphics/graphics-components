/**
 * Football-newsapp ambient-service context.
 *
 * The football components are decoupled from any app store (`appState`) or
 * project `$utils`. Two things flow into a component:
 *
 *   1. **Data** — always via explicit props (arrays, flags like
 *      `showKnockouts`, etc.). Never through context.
 *   2. **Ambient services** — small, cross-cutting lookups/config that would
 *      be tedious to thread through every level (team lookups, the link base,
 *      embed mode, viewport width). These flow via this narrow context.
 *
 * The context is deliberately minimal — it is the coupling surface. Set it
 * once near the top of an app with {@link setFootballContext}; components read
 * it with {@link getFootballContext}. Every component still resolves
 * **prop → context → default** (see {@link resolveService}) so the same
 * component works in-app (context set once) and in Storybook/embeds (services
 * passed as props).
 */
import { getContext, setContext } from 'svelte';

/** Minimal team view-model returned by the `getTeam` service. */
export interface FootballContextTeam {
  slug: string;
  name: string;
}

/**
 * The complete surface of ambient services a football component may rely on.
 * Keep this narrow — data never belongs here.
 */
export interface FootballContext {
  /** Resolve a team by code/slug/name/id to its slug + display name. */
  getTeam: (code: string) => FootballContextTeam | undefined;
  /** Resolve a team slug from an Opta contestant id. */
  getTeamSlugById?: (id: string) => string | undefined;
  /** Resolve a full match view-model by id (used by rails/embeds). */
  getMatch?: (id: string) => unknown | undefined;
  /** URL prefix all in-app links are composed against (no trailing slash). */
  linkBase: string;
  /** True when rendering inside a third-party iframe / share card. */
  embed: boolean;
  /** Current viewport width in px (drives responsive behaviour). */
  windowWidth: number;
}

/** Opaque key — users never touch this Symbol directly. */
const FOOTBALL_CONTEXT_KEY = Symbol('football-newsapp-context');

/**
 * Provide the ambient football services to every descendant component.
 * Call once, high in the tree (e.g. a layout):
 *
 * ```ts
 * setFootballContext({
 *   getTeam: (code) => appState.teams.getTeam(code),
 *   linkBase: appState.linkBase,
 *   embed: appState.embed,
 *   windowWidth: appState.windowWidth,
 * });
 * ```
 */
export function setFootballContext(services: FootballContext): FootballContext {
  setContext(FOOTBALL_CONTEXT_KEY, services);
  return services;
}

/**
 * Read the football context. Returns `undefined` when no context has been
 * set — components fall back to props via {@link resolveService}, so a bare
 * `getFootballContext()` returning `undefined` is not itself an error.
 */
export function getFootballContext(): FootballContext | undefined {
  return getContext<FootballContext | undefined>(FOOTBALL_CONTEXT_KEY);
}

/**
 * Resolve a single ambient service following **prop → context → default**.
 *
 * - If the caller passed the service as a prop, that wins (Storybook/embeds).
 * - Otherwise fall back to the ambient context (in-app, set once).
 * - Otherwise use the provided default, if any.
 * - Otherwise throw a helpful dev-time error naming the exact fix.
 *
 * @param key      Name of the service (for the error message).
 * @param propVal  The value passed as a prop, if any.
 * @param ctx      The resolved context, if any.
 * @param fallback Optional default used when neither prop nor context supply it.
 */
export function resolveService<K extends keyof FootballContext>(
  key: K,
  propVal: FootballContext[K] | undefined,
  ctx: FootballContext | undefined,
  fallback?: FootballContext[K]
): FootballContext[K] {
  if (propVal !== undefined) return propVal;
  const fromCtx = ctx?.[key];
  if (fromCtx !== undefined) return fromCtx;
  if (fallback !== undefined) return fallback;

  throw new Error(
    `[football-newsapp] Missing required service "${String(key)}". ` +
      `Either pass it as a prop to this component, or provide it via ` +
      `setFootballContext({ ${String(key)}: … }) higher in the tree.`
  );
}

/** Sensible defaults for the non-service config fields. */
export const FOOTBALL_CONTEXT_DEFAULTS = {
  linkBase: '',
  embed: false,
  windowWidth: 1000,
} satisfies Pick<FootballContext, 'linkBase' | 'embed' | 'windowWidth'>;
